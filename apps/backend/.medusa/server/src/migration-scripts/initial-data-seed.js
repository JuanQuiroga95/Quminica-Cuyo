"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = initial_data_seed;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
async function initial_data_seed({ container, }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    const fulfillmentModuleService = container.resolve(utils_1.ModuleRegistrationName.FULFILLMENT);
    const countries = ["gb", "de", "dk", "se", "fr", "es", "it"];
    logger.info("Seeding store data...");
    const { result: [defaultSalesChannel], } = await (0, core_flows_1.createSalesChannelsWorkflow)(container).run({
        input: {
            salesChannelsData: [
                {
                    name: "Default Sales Channel",
                    description: "Created by Medusa",
                },
            ],
        },
    });
    const { result: [publishableApiKey], } = await (0, core_flows_1.createApiKeysWorkflow)(container).run({
        input: {
            api_keys: [
                {
                    title: "Default Publishable API Key",
                    type: "publishable",
                    created_by: "",
                },
            ],
        },
    });
    await (0, core_flows_1.linkSalesChannelsToApiKeyWorkflow)(container).run({
        input: {
            id: publishableApiKey.id,
            add: [defaultSalesChannel.id],
        },
    });
    const { result: [store], } = await (0, core_flows_1.createStoresWorkflow)(container).run({
        input: {
            stores: [
                {
                    name: "Default Store",
                    supported_currencies: [
                        {
                            currency_code: "eur",
                            is_default: true,
                        },
                        {
                            currency_code: "usd",
                            is_default: false,
                        },
                    ],
                    default_sales_channel_id: defaultSalesChannel.id,
                },
            ],
        },
    });
    logger.info("Seeding region data...");
    const { result: regionResult } = await (0, core_flows_1.createRegionsWorkflow)(container).run({
        input: {
            regions: [
                {
                    name: "Europe",
                    currency_code: "eur",
                    countries,
                    payment_providers: ["pp_system_default"],
                },
            ],
        },
    });
    const region = regionResult[0];
    logger.info("Finished seeding regions.");
    logger.info("Seeding tax regions...");
    await (0, core_flows_1.createTaxRegionsWorkflow)(container).run({
        input: countries.map((country_code) => ({
            country_code,
            provider_id: "tp_system",
        })),
    });
    logger.info("Finished seeding tax regions.");
    logger.info("Seeding stock location data...");
    const { result: stockLocationResult } = await (0, core_flows_1.createStockLocationsWorkflow)(container).run({
        input: {
            locations: [
                {
                    name: "European Warehouse",
                    address: {
                        city: "Copenhagen",
                        country_code: "DK",
                        address_1: "",
                    },
                },
            ],
        },
    });
    const stockLocation = stockLocationResult[0];
    await link.create({
        [utils_1.Modules.STOCK_LOCATION]: {
            stock_location_id: stockLocation.id,
        },
        [utils_1.Modules.FULFILLMENT]: {
            fulfillment_provider_id: "manual_manual",
        },
    });
    logger.info("Seeding fulfillment data...");
    const { result: shippingProfileResult } = await (0, core_flows_1.createShippingProfilesWorkflow)(container).run({
        input: {
            data: [
                {
                    name: "Default",
                    type: "default",
                },
            ],
        },
    });
    const shippingProfile = shippingProfileResult[0];
    const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
        name: "European Warehouse delivery",
        type: "shipping",
        service_zones: [
            {
                name: "Europe",
                geo_zones: [
                    {
                        country_code: "gb",
                        type: "country",
                    },
                    {
                        country_code: "de",
                        type: "country",
                    },
                    {
                        country_code: "dk",
                        type: "country",
                    },
                    {
                        country_code: "se",
                        type: "country",
                    },
                    {
                        country_code: "fr",
                        type: "country",
                    },
                    {
                        country_code: "es",
                        type: "country",
                    },
                    {
                        country_code: "it",
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
                name: "Standard Shipping",
                price_type: "flat",
                provider_id: "manual_manual",
                service_zone_id: fulfillmentSet.service_zones[0].id,
                shipping_profile_id: shippingProfile.id,
                type: {
                    label: "Standard",
                    description: "Ship in 2-3 days.",
                    code: "standard",
                },
                prices: [
                    {
                        currency_code: "usd",
                        amount: 10,
                    },
                    {
                        currency_code: "eur",
                        amount: 10,
                    },
                    {
                        region_id: region.id,
                        amount: 10,
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
                name: "Express Shipping",
                price_type: "flat",
                provider_id: "manual_manual",
                service_zone_id: fulfillmentSet.service_zones[0].id,
                shipping_profile_id: shippingProfile.id,
                type: {
                    label: "Express",
                    description: "Ship in 24 hours.",
                    code: "express",
                },
                prices: [
                    {
                        currency_code: "usd",
                        amount: 10,
                    },
                    {
                        currency_code: "eur",
                        amount: 10,
                    },
                    {
                        region_id: region.id,
                        amount: 10,
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
    logger.info("Finished seeding fulfillment data.");
    await (0, core_flows_1.linkSalesChannelsToStockLocationWorkflow)(container).run({
        input: {
            id: stockLocation.id,
            add: [defaultSalesChannel.id],
        },
    });
    logger.info("Finished seeding stock location data.");
    logger.info("Seeding product data...");
    const { result: [collection], } = await (0, core_flows_1.createCollectionsWorkflow)(container).run({
        input: {
            collections: [
                {
                    title: "Featured",
                    handle: "featured",
                },
            ],
        },
    });
    const { result: categoryResult } = await (0, core_flows_1.createProductCategoriesWorkflow)(container).run({
        input: {
            product_categories: [
                {
                    name: "Laptops",
                    is_active: true,
                },
                {
                    name: "Accessories",
                    is_active: true,
                },
                {
                    name: "Phones",
                    is_active: true,
                },
                {
                    name: "Monitors",
                    is_active: true,
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: '16" Ultra-Slim AI Laptop | 3K OLED | 1.1cm Thin | 6-Speaker Audio',
                    collection_id: collection.id,
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Laptops")?.id,
                    ],
                    description: "This ultra-thin 16-inch laptop is a sophisticated, high-performance machine for the new era of artificial intelligence. It has been completely redesigned from the inside out. The cabinet features an exquisite new ceramic-aluminum composite material in a range of nature-inspired colors. This material provides durability while completing the ultra-slim design and resisting the test of time. This innovative computer utilizes the latest AI-enhanced processor with quiet ambient cooling. It's designed to enrich your lifestyle on the go with an astonishingly thin 1.1cm chassis that houses an advanced 16-inch 3K OLED display and immersive six-speaker audio.",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/laptop-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/laptop-side.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/laptop-top.png",
                        },
                    ],
                    options: [
                        {
                            title: "Storage",
                            values: ["256 GB", "512 GB"],
                        },
                        {
                            title: "Color",
                            values: ["Blue", "Red"],
                        },
                    ],
                    variants: [
                        {
                            title: "256 GB / Blue",
                            sku: "256-BLUE",
                            options: {
                                Storage: "256 GB",
                                Color: "Blue",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 1299,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 1299,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "512 GB / Red",
                            sku: "512-RED",
                            options: {
                                Storage: "512 GB",
                                Color: "Red",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 1259,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 1259,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "1080p HD Pro Webcam | Superior Video | Privacy enabled",
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Accessories")?.id,
                    ],
                    description: "High-quality 1080p HD webcam that elevates your work environment with superior video and audio that outperforms standard laptop cameras. Achieve top-tier video collaboration at a cost-effective price point, ideal for widespread deployment across your organization.",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/camera-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/camera-side.png",
                        },
                    ],
                    options: [
                        {
                            title: "Color",
                            values: ["Black", "White"],
                        },
                    ],
                    variants: [
                        {
                            title: "Webcam Black",
                            sku: "WEBCAM-BLACK",
                            options: {
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 59,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 59,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "Webcam White",
                            sku: "WEBCAM-WHITE",
                            options: {
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 65,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 65,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: `6.5" Ultra HD Smartphone | 3x Impact-Resistant Screen`,
                    collection_id: collection.id,
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Phones")?.id,
                    ],
                    description: 'This premium smartphone is crafted from durable and lightweight aerospace-grade aluminum, featuring an expansive 6.5" Ultra-High Definition AMOLED display. It boasts exceptional durability with a cutting-edge nanocrystal glass front, offering three times the impact resistance of standard smartphone screens. The device combines sleek design with robust protection, setting a new standard for smartphone resilience and visual excellence. Copy',
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/phone-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/phone-side.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/phone-bottom.png",
                        },
                    ],
                    options: [
                        {
                            title: "Memory",
                            values: ["256 GB", "512 GB"],
                        },
                        {
                            title: "Color",
                            values: ["Purple", "Red"],
                        },
                    ],
                    variants: [
                        {
                            title: "256 GB Purple",
                            sku: "PHONE-256-PURPLE",
                            options: {
                                Memory: "256 GB",
                                Color: "Purple",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 999,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 999,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "256 GB Red",
                            sku: "PHONE-256-RED",
                            options: {
                                Memory: "256 GB",
                                Color: "Red",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 959,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 959,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: `34" QD-OLED Curved Gaming Monitor | Ultra-Wide | Infinite Contrast | 175Hz`,
                    collection_id: collection.id,
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Monitors")?.id,
                    ],
                    description: "Experience the pinnacle of display technology with this 34-inch curved monitor. By merging OLED panels and Quantum Dot technology, this QD-OLED screen delivers exceptional contrast, deep blacks, unlimited viewing angles, and vivid colors. The curved design provides an immersive experience, allowing you to enjoy the best of both worlds in one cutting-edge display. This innovative monitor represents the ultimate fusion of visual performance and immersive design.",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/screen-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/screen-side.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/screen-top.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/screen-back.png",
                        },
                    ],
                    options: [
                        {
                            title: "Color",
                            values: ["White", "Black"],
                        },
                    ],
                    variants: [
                        {
                            title: "ACME Monitor 4k White",
                            sku: "ACME-MONITOR-WHITE",
                            options: {
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 599,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 599,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "ACME Monitor 4k White",
                            sku: "ACME-MONITOR-BLACK",
                            options: {
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 599,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 599,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Hi-Fi Gaming Headset | Pro-Grade DAC | Hi-Res Certified",
                    collection_id: collection.id,
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Accessories")?.id,
                    ],
                    description: `Experience studio-quality audio with this advanced acoustic system, which pairs premium hardware with high-fidelity sound and innovative audio software for an immersive listening experience. The integrated digital-to-analog converter (DAC) enhances the audio setup with high-resolution certification and a built-in amplifier, delivering exceptional sound clarity and depth. This comprehensive audio solution brings professional-grade sound to your personal environment, whether for gaming, music production, or general entertainment.`,
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/headphone-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/headphone-side.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/headphone-top.png",
                        },
                    ],
                    options: [
                        {
                            title: "Color",
                            values: ["Black", "White"],
                        },
                    ],
                    variants: [
                        {
                            title: "Headphone Black",
                            sku: "HEADPHONE-BLACK",
                            options: {
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 149,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 149,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "Headphone White",
                            sku: "HEADPHONE-WHITE",
                            options: {
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 149,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 149,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Wireless Keyboard | Touch ID | Numeric Keypad",
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Accessories")?.id,
                    ],
                    description: `This wireless keyboard offers a comfortable typing experience with a numeric keypad and Touch ID. It features navigation buttons, full-sized arrow keys, and is ideal for spreadsheets and gaming. The rechargeable battery lasts about a month. It pairs automatically with compatible computers and includes a USB-C to Lightning cable for charging and pairing.`,
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/keyboard-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/keyboard-side.png",
                        },
                    ],
                    options: [
                        {
                            title: "Color",
                            values: ["Black", "White"],
                        },
                    ],
                    variants: [
                        {
                            title: "Keyboard Black",
                            sku: "KEYBOARD-BLACK",
                            options: {
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 99,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 99,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "Keyboard White",
                            sku: "KEYBOARD-WHITE",
                            options: {
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 99,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 99,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Wireless Rechargeable Mouse | Multi-Touch Surface",
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Accessories")?.id,
                    ],
                    description: `This wireless keyboard offers a comfortable typing experience with a numeric keypad and Touch ID. It features navigation buttons, full-sized arrow keys, and is ideal for spreadsheets and gaming. The rechargeable battery lasts about a month. It pairs automatically with compatible computers and includes a USB-C to Lightning cable for charging and pairing.`,
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/mouse-top.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/mouse-front.png",
                        },
                    ],
                    options: [
                        {
                            title: "Color",
                            values: ["Black", "White"],
                        },
                    ],
                    variants: [
                        {
                            title: "Mouse Black",
                            sku: "MOUSE-BLACK",
                            options: {
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 79,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 79,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "Mouse White",
                            sku: "MOUSE-WHITE",
                            options: {
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 79,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 79,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Conference Speaker | High-Performance | Budget-Friendly",
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Accessories")?.id,
                    ],
                    description: `This compact, powerful conference speaker offers exceptional, high-performance features at a surprisingly affordable price. Packed with advanced productivity-enhancing technology, it delivers premium functionality without the premium price tag. Experience better meetings and improved communication, regardless of where your team members are calling from.`,
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/speaker-top.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/speaker-front.png",
                        },
                    ],
                    options: [
                        {
                            title: "Color",
                            values: ["Black", "White"],
                        },
                    ],
                    variants: [
                        {
                            title: "Speaker Black",
                            sku: "SPEAKER-BLACK",
                            options: {
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 79,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 79,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "Speaker White",
                            sku: "SPEAKER-WHITE",
                            options: {
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 55,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 55,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel.id,
                        },
                    ],
                },
            ],
        },
    });
    logger.info("Finished seeding product data.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1kYXRhLXNlZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbWlncmF0aW9uLXNjcmlwdHMvaW5pdGlhbC1kYXRhLXNlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF1QkEsb0NBeTZCQztBQS83QkQscURBS21DO0FBQ25DLDREQWNxQztBQUV0QixLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFDOUMsU0FBUyxHQUdWO0lBQ0MsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELE1BQU0sd0JBQXdCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDaEQsOEJBQXNCLENBQUMsV0FBVyxDQUNuQyxDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU3RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDckMsTUFBTSxFQUNKLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLEdBQzlCLEdBQUcsTUFBTSxJQUFBLHdDQUEyQixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuRCxLQUFLLEVBQUU7WUFDTCxpQkFBaUIsRUFBRTtnQkFDakI7b0JBQ0UsSUFBSSxFQUFFLHVCQUF1QjtvQkFDN0IsV0FBVyxFQUFFLG1CQUFtQjtpQkFDakM7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQzVCLEdBQUcsTUFBTSxJQUFBLGtDQUFxQixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdB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