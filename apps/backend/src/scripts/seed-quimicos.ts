import { ExecArgs } from "@medusajs/framework/types";
import {
  ContainerRegistrationKeys,
  Modules,
  ProductStatus,
} from "@medusajs/framework/utils";
import {
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  createRegionsWorkflow,
  createTaxRegionsWorkflow,
  createShippingOptionsWorkflow,
  createShippingProfilesWorkflow,
  createStockLocationsWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
  updateStoresWorkflow,
  createCollectionsWorkflow,
} from "@medusajs/medusa/core-flows";

export default async function seedQuimicos({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);
  const link = container.resolve(ContainerRegistrationKeys.LINK);
  const fulfillmentModuleService = container.resolve(Modules.FULFILLMENT);

  logger.info("🧪 Iniciando seed de Industria Química de Cuyo...");

  // ── 1. Obtener Sales Channel y Store existentes ──
  const { data: salesChannels } = await query.graph({
    entity: "sales_channel",
    fields: ["id", "name"],
  });
  const defaultSalesChannel = salesChannels[0];
  logger.info(`Sales Channel: ${defaultSalesChannel.name} (${defaultSalesChannel.id})`);

  const { data: stores } = await query.graph({
    entity: "store",
    fields: ["id", "name"],
  });
  const store = stores[0];

  // ── 2. Actualizar Store con nombre y moneda ARS ──
  logger.info("Actualizando tienda con datos de Industria Química de Cuyo...");
  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        name: "Industria Química de Cuyo",
        supported_currencies: [
          {
            currency_code: "ars",
            is_default: true,
          },
          {
            currency_code: "usd",
            is_default: false,
          },
        ],
      },
    },
  });

  // ── 3. Crear Región Argentina - Mendoza ──
  logger.info("Creando región Argentina...");
  const { result: regionResult } = await createRegionsWorkflow(container).run({
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
  const argRegion = regionResult[0];
  logger.info(`Región creada: ${argRegion.name} (${argRegion.id})`);

  // ── 4. Crear Tax Region para Argentina ──
  logger.info("Creando tax region para Argentina...");
  await createTaxRegionsWorkflow(container).run({
    input: [
      {
        country_code: "ar",
        provider_id: "tp_system",
      },
    ],
  });

  // ── 5. Crear Stock Location en Mendoza ──
  logger.info("Creando ubicación de stock en Mendoza...");
  const { result: stockLocationResult } = await createStockLocationsWorkflow(
    container
  ).run({
    input: {
      locations: [
        {
          name: "Depósito Mendoza",
          address: {
            city: "Mendoza",
            country_code: "AR",
            address_1: "Zona Industrial, Mendoza",
            province: "Mendoza",
          },
        },
      ],
    },
  });
  const stockLocation = stockLocationResult[0];

  // Link stock location to fulfillment provider
  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: "manual_manual",
    },
  });

  // ── 6. Crear Shipping Profile y Fulfillment Set ──
  logger.info("Configurando envío para Argentina...");
  const { result: shippingProfileResult } =
    await createShippingProfilesWorkflow(container).run({
      input: {
        data: [
          {
            name: "Envío Químicos",
            type: "default",
          },
        ],
      },
    });
  const shippingProfile = shippingProfileResult[0];

  const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
    name: "Envío Mendoza",
    type: "shipping",
    service_zones: [
      {
        name: "Argentina",
        geo_zones: [
          {
            country_code: "ar",
            type: "country",
          },
        ],
      },
    ],
  });

  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_set_id: fulfillmentSet.id,
    },
  });

  await createShippingOptionsWorkflow(container).run({
    input: [
      {
        name: "Envío Estándar",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Envío Estándar",
          description: "Entrega en 3-5 días hábiles.",
          code: "standard-ar",
        },
        prices: [
          {
            currency_code: "ars",
            amount: 5000,
          },
          {
            region_id: argRegion.id,
            amount: 5000,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
      {
        name: "Envío Express",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Envío Express",
          description: "Entrega en 24-48 horas.",
          code: "express-ar",
        },
        prices: [
          {
            currency_code: "ars",
            amount: 12000,
          },
          {
            region_id: argRegion.id,
            amount: 12000,
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
    ],
  });

  // Link sales channel to stock location
  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: stockLocation.id,
      add: [defaultSalesChannel.id],
    },
  });

  // ── 7. Crear Colección "Productos Destacados" ──
  logger.info("Creando colección de productos destacados...");
  const {
    result: [featuredCollection],
  } = await createCollectionsWorkflow(container).run({
    input: {
      collections: [
        {
          title: "Productos Destacados",
          handle: "productos-destacados",
        },
      ],
    },
  });

  // ── 8. Crear Categorías de Productos ──
  logger.info("Creando categorías: Materias Primas e Insumos de Limpieza...");
  const { result: categoryResult } = await createProductCategoriesWorkflow(
    container
  ).run({
    input: {
      product_categories: [
        {
          name: "Materias Primas",
          is_active: true,
        },
        {
          name: "Insumos de Limpieza",
          is_active: true,
        },
      ],
    },
  });

  const materiasPrimasId = categoryResult.find(
    (cat) => cat.name === "Materias Primas"
  )?.id!;
  const insumosLimpiezaId = categoryResult.find(
    (cat) => cat.name === "Insumos de Limpieza"
  )?.id!;

  logger.info(`Categoría Materias Primas: ${materiasPrimasId}`);
  logger.info(`Categoría Insumos de Limpieza: ${insumosLimpiezaId}`);

  // ── 9. Crear Productos ──
  logger.info("Creando productos químicos...");

  // Producto 1: Lauril Betaína
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Lauril Betaína",
          handle: "lauril-betaina",
          collection_id: featuredCollection.id,
          category_ids: [materiasPrimasId],
          description:
            "Tensoactivo anfotérico de alta calidad utilizado como agente espumante y acondicionador en formulaciones de productos de limpieza y cuidado personal. Excelente compatibilidad dérmica y poder espumante. Presentación en bidón de 200 kg.",
          weight: 200000,
          status: ProductStatus.PUBLISHED,
          options: [
            {
              title: "Presentación",
              values: ["Bidón 200 kg", "Tambor 50 kg"],
            },
          ],
          variants: [
            {
              title: "Bidón 200 kg",
              sku: "LAURIL-200",
              options: { Presentación: "Bidón 200 kg" },
              manage_inventory: false,
              prices: [
                { amount: 1500000, currency_code: "ars" },
                { amount: 450, currency_code: "usd" },
              ],
            },
            {
              title: "Tambor 50 kg",
              sku: "LAURIL-50",
              options: { Presentación: "Tambor 50 kg" },
              manage_inventory: false,
              prices: [
                { amount: 450000, currency_code: "ars" },
                { amount: 135, currency_code: "usd" },
              ],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel.id }],
        },
      ],
    },
  });

  // Producto 2: Glicerina
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Glicerina",
          handle: "glicerina",
          collection_id: featuredCollection.id,
          category_ids: [materiasPrimasId],
          description:
            "Glicerina vegetal de grado técnico e industrial. Utilizada como humectante, solvente y plastificante en la industria cosmética, farmacéutica y de limpieza. Alta pureza y versatilidad. Presentación en tambor de 250 kg.",
          weight: 250000,
          status: ProductStatus.PUBLISHED,
          options: [
            {
              title: "Presentación",
              values: ["Tambor 250 kg", "Bidón 50 kg"],
            },
          ],
          variants: [
            {
              title: "Tambor 250 kg",
              sku: "GLIC-250",
              options: { Presentación: "Tambor 250 kg" },
              manage_inventory: false,
              prices: [
                { amount: 850000, currency_code: "ars" },
                { amount: 260, currency_code: "usd" },
              ],
            },
            {
              title: "Bidón 50 kg",
              sku: "GLIC-50",
              options: { Presentación: "Bidón 50 kg" },
              manage_inventory: false,
              prices: [
                { amount: 200000, currency_code: "ars" },
                { amount: 60, currency_code: "usd" },
              ],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel.id }],
        },
      ],
    },
  });

  // Producto 3: Soda Cáustica
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Soda Cáustica",
          handle: "soda-caustica",
          collection_id: featuredCollection.id,
          category_ids: [materiasPrimasId],
          description:
            "Hidróxido de sodio (NaOH) en escamas de alta concentración (99%). Utilizada en la fabricación de jabones, detergentes, tratamiento de aguas y procesos industriales. Manipular con precaución, producto corrosivo.",
          weight: 25000,
          status: ProductStatus.PUBLISHED,
          options: [
            {
              title: "Presentación",
              values: ["Bolsa 25 kg", "Bolsa 50 kg"],
            },
          ],
          variants: [
            {
              title: "Bolsa 25 kg",
              sku: "SODA-25",
              options: { Presentación: "Bolsa 25 kg" },
              manage_inventory: false,
              prices: [
                { amount: 620000, currency_code: "ars" },
                { amount: 185, currency_code: "usd" },
              ],
            },
            {
              title: "Bolsa 50 kg",
              sku: "SODA-50",
              options: { Presentación: "Bolsa 50 kg" },
              manage_inventory: false,
              prices: [
                { amount: 1100000, currency_code: "ars" },
                { amount: 330, currency_code: "usd" },
              ],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel.id }],
        },
      ],
    },
  });

  // Producto 4: Colorantes de Colores
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Colorantes de Colores",
          handle: "colorantes-colores",
          category_ids: [insumosLimpiezaId],
          description:
            "Línea completa de colorantes líquidos concentrados para formulación de productos de limpieza. Disponibles en múltiples colores: azul, verde, rojo, amarillo. Alta solubilidad y estabilidad en formulaciones acuosas.",
          weight: 5000,
          status: ProductStatus.PUBLISHED,
          options: [
            {
              title: "Color",
              values: ["Azul", "Verde", "Rojo", "Amarillo"],
            },
          ],
          variants: [
            {
              title: "Colorante Azul",
              sku: "COLOR-AZUL",
              options: { Color: "Azul" },
              manage_inventory: false,
              prices: [
                { amount: 120000, currency_code: "ars" },
                { amount: 36, currency_code: "usd" },
              ],
            },
            {
              title: "Colorante Verde",
              sku: "COLOR-VERDE",
              options: { Color: "Verde" },
              manage_inventory: false,
              prices: [
                { amount: 120000, currency_code: "ars" },
                { amount: 36, currency_code: "usd" },
              ],
            },
            {
              title: "Colorante Rojo",
              sku: "COLOR-ROJO",
              options: { Color: "Rojo" },
              manage_inventory: false,
              prices: [
                { amount: 130000, currency_code: "ars" },
                { amount: 39, currency_code: "usd" },
              ],
            },
            {
              title: "Colorante Amarillo",
              sku: "COLOR-AMARILLO",
              options: { Color: "Amarillo" },
              manage_inventory: false,
              prices: [
                { amount: 120000, currency_code: "ars" },
                { amount: 36, currency_code: "usd" },
              ],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel.id }],
        },
      ],
    },
  });

  // Producto 5: Esencias de Diferentes Aromas
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Esencias de Diferentes Aromas",
          handle: "esencias-aromas",
          category_ids: [insumosLimpiezaId],
          description:
            "Fragancias concentradas para productos de limpieza y cuidado del hogar. Formuladas para alta fijación y rendimiento. Disponibles en aromas: Lavanda, Pino, Limón, Floral. Presentación en bidón de 5 litros.",
          weight: 5000,
          status: ProductStatus.PUBLISHED,
          options: [
            {
              title: "Aroma",
              values: ["Lavanda", "Pino", "Limón", "Floral"],
            },
          ],
          variants: [
            {
              title: "Esencia Lavanda",
              sku: "ESENCIA-LAVANDA",
              options: { Aroma: "Lavanda" },
              manage_inventory: false,
              prices: [
                { amount: 180000, currency_code: "ars" },
                { amount: 54, currency_code: "usd" },
              ],
            },
            {
              title: "Esencia Pino",
              sku: "ESENCIA-PINO",
              options: { Aroma: "Pino" },
              manage_inventory: false,
              prices: [
                { amount: 175000, currency_code: "ars" },
                { amount: 52, currency_code: "usd" },
              ],
            },
            {
              title: "Esencia Limón",
              sku: "ESENCIA-LIMON",
              options: { Aroma: "Limón" },
              manage_inventory: false,
              prices: [
                { amount: 170000, currency_code: "ars" },
                { amount: 51, currency_code: "usd" },
              ],
            },
            {
              title: "Esencia Floral",
              sku: "ESENCIA-FLORAL",
              options: { Aroma: "Floral" },
              manage_inventory: false,
              prices: [
                { amount: 185000, currency_code: "ars" },
                { amount: 55, currency_code: "usd" },
              ],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel.id }],
        },
      ],
    },
  });

  // Producto 6: Pasta de Suavizante
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Pasta de Suavizante",
          handle: "pasta-suavizante",
          collection_id: featuredCollection.id,
          category_ids: [insumosLimpiezaId],
          description:
            "Base concentrada para la elaboración de suavizante de ropa. Fórmula de alta concentración que permite obtener hasta 10 veces su volumen en producto terminado. Excelente poder suavizante y fragancia duradera.",
          weight: 20000,
          status: ProductStatus.PUBLISHED,
          options: [
            {
              title: "Presentación",
              values: ["Balde 20 kg", "Tambor 200 kg"],
            },
          ],
          variants: [
            {
              title: "Balde 20 kg",
              sku: "SUAV-20",
              options: { Presentación: "Balde 20 kg" },
              manage_inventory: false,
              prices: [
                { amount: 980000, currency_code: "ars" },
                { amount: 295, currency_code: "usd" },
              ],
            },
            {
              title: "Tambor 200 kg",
              sku: "SUAV-200",
              options: { Presentación: "Tambor 200 kg" },
              manage_inventory: false,
              prices: [
                { amount: 8500000, currency_code: "ars" },
                { amount: 2550, currency_code: "usd" },
              ],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel.id }],
        },
      ],
    },
  });

  logger.info("✅ Seed de Industria Química de Cuyo completado exitosamente!");
  logger.info("📧 Admin: nicoquiroga91@empresa.com");
  logger.info("🔑 Password: macanico24");
}
