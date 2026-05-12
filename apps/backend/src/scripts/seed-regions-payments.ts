import { ExecArgs } from "@medusajs/framework/types";
import {
  ContainerRegistrationKeys,
  Modules,
} from "@medusajs/framework/utils";
import {
  createRegionsWorkflow,
  createTaxRegionsWorkflow,
  updateRegionsWorkflow,
  updateStoresWorkflow,
} from "@medusajs/medusa/core-flows";

/**
 * Idempotente: garantiza que existan dos regiones — Argentina (ARS, por defecto)
 * y USD (para clientes que pagan en dólares). Configura los métodos de pago
 * manuales (pp_system_default) en ambas. No falla si ya existen.
 *
 * Ejecutar con:  npx medusa exec ./src/scripts/seed-regions-payments.ts
 */
export default async function seedRegionsPayments({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);

  logger.info("Configurando regiones ARS y USD...");

  // ── 1. Actualizar Store con monedas ARS + USD ──
  const { data: stores } = await query.graph({
    entity: "store",
    fields: ["id", "name", "supported_currencies.*"],
  });
  const store = stores[0];

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        supported_currencies: [
          { currency_code: "ars", is_default: true },
          { currency_code: "usd", is_default: false },
        ],
      },
    },
  });
  logger.info("Tienda configurada con ARS (default) y USD.");

  // ── 2. Obtener regiones existentes ──
  const { data: existingRegions } = await query.graph({
    entity: "region",
    fields: ["id", "name", "currency_code", "countries.iso_2"],
  });

  const arRegion = existingRegions.find(
    (r) =>
      r.currency_code === "ars" ||
      r.countries?.some((c: any) => c.iso_2 === "ar")
  );
  const usdRegion = existingRegions.find(
    (r) =>
      r.currency_code === "usd" &&
      !r.countries?.some((c: any) => c.iso_2 === "ar")
  );

  // ── 3. Crear o actualizar región Argentina (ARS) ──
  if (!arRegion) {
    logger.info("Creando región Argentina (ARS)...");
    await createRegionsWorkflow(container).run({
      input: {
        regions: [
          {
            name: "Argentina",
            currency_code: "ars",
            countries: ["ar"],
            payment_providers: ["pp_system_default"],
          },
        ],
      },
    });
  } else {
    logger.info(`Región Argentina ya existe (${arRegion.id}), actualizando proveedores de pago...`);
    await updateRegionsWorkflow(container).run({
      input: {
        selector: { id: arRegion.id },
        update: {
          name: "Argentina",
          currency_code: "ars",
          payment_providers: ["pp_system_default"],
        },
      },
    });
  }

  // ── 4. Crear o actualizar región USD (Internacional) ──
  if (!usdRegion) {
    logger.info("Creando región Internacional (USD)...");
    await createRegionsWorkflow(container).run({
      input: {
        regions: [
          {
            name: "Internacional (USD)",
            currency_code: "usd",
            countries: ["us"],
            payment_providers: ["pp_system_default"],
          },
        ],
      },
    });
  } else {
    logger.info(`Región USD ya existe (${usdRegion.id}), actualizando...`);
    await updateRegionsWorkflow(container).run({
      input: {
        selector: { id: usdRegion.id },
        update: {
          name: "Internacional (USD)",
          currency_code: "usd",
          payment_providers: ["pp_system_default"],
        },
      },
    });
  }

  // ── 5. Asegurar tax regions ──
  const { data: taxRegions } = await query.graph({
    entity: "tax_region",
    fields: ["id", "country_code"],
  });

  const ensureTaxRegion = async (country_code: string) => {
    if (taxRegions.some((t: any) => t.country_code === country_code)) {
      logger.info(`Tax region para ${country_code} ya existe.`);
      return;
    }
    await createTaxRegionsWorkflow(container).run({
      input: [
        {
          country_code,
          provider_id: "tp_system",
        },
      ],
    });
    logger.info(`Tax region creada para ${country_code}.`);
  };

  await ensureTaxRegion("ar");
  await ensureTaxRegion("us");

  logger.info("Listo. Regiones ARS y USD configuradas.");
  logger.info("Frontend: usá /ar para pesos argentinos, /us para dólares.");
}
