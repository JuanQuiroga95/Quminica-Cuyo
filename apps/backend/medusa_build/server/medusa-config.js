"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quote_1 = require("./src/modules/quote");
const approval_1 = require("./src/modules/approval");
const company_1 = require("./src/modules/company");
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || "development", process.cwd());
exports.default = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        redisUrl: process.env.REDIS_URL,
        http: {
            storeCors: process.env.STORE_CORS || "",
            adminCors: process.env.ADMIN_CORS || "",
            authCors: process.env.AUTH_CORS || "",
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
    },
    admin: {
        disable: false,
        backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
    modules: {
        [company_1.COMPANY_MODULE]: {
            resolve: "./src/modules/company",
        },
        [quote_1.QUOTE_MODULE]: {
            resolve: "./src/modules/quote",
        },
        [approval_1.APPROVAL_MODULE]: {
            resolve: "./src/modules/approval",
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBbUQ7QUFDbkQscURBQXlEO0FBQ3pELG1EQUF1RDtBQUN2RCxxREFBa0U7QUFFbEUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRTlELGtCQUFlLElBQUEsb0JBQVksRUFBQztJQUMxQixhQUFhLEVBQUU7UUFDYixXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ3JDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7UUFDL0IsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUU7WUFDdkMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUU7WUFDdkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7WUFDckMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLGFBQWE7WUFDbEQsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWE7U0FDekQ7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0tBQzNDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsQ0FBQyx3QkFBYyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxFQUFFLHVCQUF1QjtTQUNqQztRQUNELENBQUMsb0JBQVksQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLHFCQUFxQjtTQUMvQjtRQUNELENBQUMsMEJBQWUsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSx3QkFBd0I7U0FDbEM7S0FDRjtDQUNGLENBQUMsQ0FBQyJ9