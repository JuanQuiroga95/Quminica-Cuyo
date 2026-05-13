"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const admin_sdk_1 = require("@medusajs/admin-sdk");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const quotes_table_1 = require("./components/quotes-table");
const Quotes = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "flex flex-col p-0 overflow-hidden", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { className: "p-6 pb-0 font-sans font-medium h1-core", children: "Quotes" }), (0, jsx_runtime_1.jsx)(quotes_table_1.QuotesTable, {})] }), (0, jsx_runtime_1.jsx)(ui_1.Toaster, {})] }));
};
exports.config = (0, admin_sdk_1.defineRouteConfig)({
    label: "Quotes",
    icon: icons_1.DocumentText,
});
exports.default = Quotes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvcXVvdGVzL3BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBd0Q7QUFDeEQsMkNBQStDO0FBQy9DLHFDQUEyRDtBQUMzRCw0REFBd0Q7QUFFeEQsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO0lBQ2xCLE9BQU8sQ0FDTCw2REFDRSx3QkFBQyxjQUFTLElBQUMsU0FBUyxFQUFDLG1DQUFtQyxhQUN0RCx1QkFBQyxZQUFPLElBQUMsU0FBUyxFQUFDLHdDQUF3Qyx1QkFFakQsRUFFVix1QkFBQywwQkFBVyxLQUFHLElBQ0wsRUFDWix1QkFBQyxZQUFPLEtBQUcsSUFDVixDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFVyxRQUFBLE1BQU0sR0FBRyxJQUFBLDZCQUFpQixFQUFDO0lBQ3RDLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLG9CQUFZO0NBQ25CLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9