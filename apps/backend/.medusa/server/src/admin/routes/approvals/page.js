"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const admin_sdk_1 = require("@medusajs/admin-sdk");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const approvals_table_1 = require("./components/approvals-table");
const Approvals = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "flex flex-col p-0 overflow-hidden", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { className: "p-6 pb-0 font-sans font-medium h1-core", children: "Approvals" }), (0, jsx_runtime_1.jsx)(approvals_table_1.ApprovalsTable, {})] }), (0, jsx_runtime_1.jsx)(ui_1.Toaster, {})] }));
};
exports.config = (0, admin_sdk_1.defineRouteConfig)({
    label: "Approvals",
    icon: icons_1.CheckCircle,
});
exports.default = Approvals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvYXBwcm92YWxzL3BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBd0Q7QUFDeEQsMkNBQThDO0FBQzlDLHFDQUEyRDtBQUMzRCxrRUFBOEQ7QUFFOUQsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO0lBQ3JCLE9BQU8sQ0FDTCw2REFDRSx3QkFBQyxjQUFTLElBQUMsU0FBUyxFQUFDLG1DQUFtQyxhQUN0RCx1QkFBQyxZQUFPLElBQUMsU0FBUyxFQUFDLHdDQUF3QywwQkFFakQsRUFDVix1QkFBQyxnQ0FBYyxLQUFHLElBQ1IsRUFDWix1QkFBQyxZQUFPLEtBQUcsSUFDVixDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFVyxRQUFBLE1BQU0sR0FBRyxJQUFBLDZCQUFpQixFQUFDO0lBQ3RDLEtBQUssRUFBRSxXQUFXO0lBQ2xCLElBQUksRUFBRSxtQkFBVztDQUNsQixDQUFDLENBQUM7QUFFSCxrQkFBZSxTQUFTLENBQUMifQ==