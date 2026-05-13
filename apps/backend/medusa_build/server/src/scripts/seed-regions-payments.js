"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seedRegionsPayments;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
/**
 * Idempotente: garantiza que existan dos regiones — Argentina (ARS, por defecto)
 * y USD (para clientes que pagan en dólares). Configura los métodos de pago
 * manuales (pp_system_default) en ambas. No falla si ya existen.
 *
 * Ejecutar con:  npx medusa exec ./src/scripts/seed-regions-payments.ts
 */
async function seedRegionsPayments({ container }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    logger.info("Configurando regiones ARS y USD...");
    // ── 1. Actualizar Store con monedas ARS + USD ──
    const { data: stores } = await query.graph({
        entity: "store",
        fields: ["id", "name", "supported_currencies.*"],
    });
    const store = stores[0];
    await (0, core_flows_1.updateStoresWorkflow)(container).run({
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
    const arRegion = existingRegions.find((r) => r.currency_code === "ars" ||
        r.countries?.some((c) => c.iso_2 === "ar"));
    const usdRegion = existingRegions.find((r) => r.currency_code === "usd" &&
        !r.countries?.some((c) => c.iso_2 === "ar"));
    // ── 3. Crear o actualizar región Argentina (ARS) ──
    if (!arRegion) {
        logger.info("Creando región Argentina (ARS)...");
        await (0, core_flows_1.createRegionsWorkflow)(container).run({
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
    }
    else {
        logger.info(`Región Argentina ya existe (${arRegion.id}), actualizando proveedores de pago...`);
        await (0, core_flows_1.updateRegionsWorkflow)(container).run({
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
        await (0, core_flows_1.createRegionsWorkflow)(container).run({
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
    }
    else {
        logger.info(`Región USD ya existe (${usdRegion.id}), actualizando...`);
        await (0, core_flows_1.updateRegionsWorkflow)(container).run({
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
    const ensureTaxRegion = async (country_code) => {
        if (taxRegions.some((t) => t.country_code === country_code)) {
            logger.info(`Tax region para ${country_code} ya existe.`);
            return;
        }
        await (0, core_flows_1.createTaxRegionsWorkflow)(container).run({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC1yZWdpb25zLXBheW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjcmlwdHMvc2VlZC1yZWdpb25zLXBheW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBbUJBLHNDQWdJQztBQWxKRCxxREFHbUM7QUFDbkMsNERBS3FDO0FBRXJDOzs7Ozs7R0FNRztBQUNZLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxFQUFFLFNBQVMsRUFBWTtJQUN2RSxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBRWxELGtEQUFrRDtJQUNsRCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsd0JBQXdCLENBQUM7S0FDakQsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhCLE1BQU0sSUFBQSxpQ0FBb0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxFQUFFO2dCQUNOLG9CQUFvQixFQUFFO29CQUNwQixFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtvQkFDMUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7aUJB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