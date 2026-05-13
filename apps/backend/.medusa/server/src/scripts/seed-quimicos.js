"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seedQuimicos;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
async function seedQuimicos({ container }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    const fulfillmentModuleService = container.resolve(utils_1.Modules.FULFILLMENT);
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
    await (0, core_flows_1.updateStoresWorkflow)(container).run({
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
    const { result: regionResult } = await (0, core_flows_1.createRegionsWorkflow)(container).run({
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
    await (0, core_flows_1.createTaxRegionsWorkflow)(container).run({
        input: [
            {
                country_code: "ar",
                provider_id: "tp_system",
            },
        ],
    });
    // ── 5. Crear Stock Location en Mendoza ──
    logger.info("Creando ubicación de stock en Mendoza...");
    const { result: stockLocationResult } = await (0, core_flows_1.createStockLocationsWorkflow)(container).run({
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
        [utils_1.Modules.STOCK_LOCATION]: {
            stock_location_id: stockLocation.id,
        },
        [utils_1.Modules.FULFILLMENT]: {
            fulfillment_provider_id: "manual_manual",
        },
    });
    // ── 6. Crear Shipping Profile y Fulfillment Set ──
    logger.info("Configurando envío para Argentina...");
    const { result: shippingProfileResult } = await (0, core_flows_1.createShippingProfilesWorkflow)(container).run({
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
        [utils_1.Modules.STOCK_LOCATION]: {
            stock_location_id: stockLocation.id,
        },
        [utils_1.Modules.FULFILLMENT]: {
            fulfillment_set_id: fulfillmentSet.id,
        },
    });
    await (0, core_flows_1.createShippingOptionsWorkflow)(container).run({
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
    await (0, core_flows_1.linkSalesChannelsToStockLocationWorkflow)(container).run({
        input: {
            id: stockLocation.id,
            add: [defaultSalesChannel.id],
        },
    });
    // ── 7. Crear Colección "Productos Destacados" ──
    logger.info("Creando colección de productos destacados...");
    const { result: [featuredCollection], } = await (0, core_flows_1.createCollectionsWorkflow)(container).run({
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
    const { result: categoryResult } = await (0, core_flows_1.createProductCategoriesWorkflow)(container).run({
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
    const materiasPrimasId = categoryResult.find((cat) => cat.name === "Materias Primas")?.id;
    const insumosLimpiezaId = categoryResult.find((cat) => cat.name === "Insumos de Limpieza")?.id;
    logger.info(`Categoría Materias Primas: ${materiasPrimasId}`);
    logger.info(`Categoría Insumos de Limpieza: ${insumosLimpiezaId}`);
    // ── 9. Crear Productos ──
    logger.info("Creando productos químicos...");
    // Producto 1: Lauril Betaína
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Lauril Betaína",
                    handle: "lauril-betaina",
                    collection_id: featuredCollection.id,
                    category_ids: [materiasPrimasId],
                    description: "Tensoactivo anfotérico de alta calidad utilizado como agente espumante y acondicionador en formulaciones de productos de limpieza y cuidado personal. Excelente compatibilidad dérmica y poder espumante. Presentación en bidón de 200 kg.",
                    weight: 200000,
                    status: utils_1.ProductStatus.PUBLISHED,
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
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Glicerina",
                    handle: "glicerina",
                    collection_id: featuredCollection.id,
                    category_ids: [materiasPrimasId],
                    description: "Glicerina vegetal de grado técnico e industrial. Utilizada como humectante, solvente y plastificante en la industria cosmética, farmacéutica y de limpieza. Alta pureza y versatilidad. Presentación en tambor de 250 kg.",
                    weight: 250000,
                    status: utils_1.ProductStatus.PUBLISHED,
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
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Soda Cáustica",
                    handle: "soda-caustica",
                    collection_id: featuredCollection.id,
                    category_ids: [materiasPrimasId],
                    description: "Hidróxido de sodio (NaOH) en escamas de alta concentración (99%). Utilizada en la fabricación de jabones, detergentes, tratamiento de aguas y procesos industriales. Manipular con precaución, producto corrosivo.",
                    weight: 25000,
                    status: utils_1.ProductStatus.PUBLISHED,
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
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Colorantes de Colores",
                    handle: "colorantes-colores",
                    category_ids: [insumosLimpiezaId],
                    description: "Línea completa de colorantes líquidos concentrados para formulación de productos de limpieza. Disponibles en múltiples colores: azul, verde, rojo, amarillo. Alta solubilidad y estabilidad en formulaciones acuosas.",
                    weight: 5000,
                    status: utils_1.ProductStatus.PUBLISHED,
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
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Esencias de Diferentes Aromas",
                    handle: "esencias-aromas",
                    category_ids: [insumosLimpiezaId],
                    description: "Fragancias concentradas para productos de limpieza y cuidado del hogar. Formuladas para alta fijación y rendimiento. Disponibles en aromas: Lavanda, Pino, Limón, Floral. Presentación en bidón de 5 litros.",
                    weight: 5000,
                    status: utils_1.ProductStatus.PUBLISHED,
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
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Pasta de Suavizante",
                    handle: "pasta-suavizante",
                    collection_id: featuredCollection.id,
                    category_ids: [insumosLimpiezaId],
                    description: "Base concentrada para la elaboración de suavizante de ropa. Fórmula de alta concentración que permite obtener hasta 10 veces su volumen en producto terminado. Excelente poder suavizante y fragancia duradera.",
                    weight: 20000,
                    status: utils_1.ProductStatus.PUBLISHED,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC1xdWltaWNvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3NlZWQtcXVpbWljb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFtQkEsK0JBaWxCQztBQW5tQkQscURBSW1DO0FBQ25DLDREQVdxQztBQUV0QixLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFZO0lBQ2hFLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkUsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELE1BQU0sd0JBQXdCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0lBRWpFLG9EQUFvRDtJQUNwRCxNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoRCxNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztJQUNILE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLG1CQUFtQixDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXRGLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pDLE1BQU0s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