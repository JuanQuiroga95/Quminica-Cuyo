"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuoteStatusBadge;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const StatusTitles = {
    accepted: "Accepted",
    customer_rejected: "Customer Rejected",
    merchant_rejected: "Merchant Rejected",
    pending_merchant: "Pending Merchant",
    pending_customer: "Pending Customer",
};
const StatusColors = {
    accepted: "green",
    customer_rejected: "orange",
    merchant_rejected: "red",
    pending_merchant: "blue",
    pending_customer: "blue",
};
function QuoteStatusBadge({ status }) {
    return ((0, jsx_runtime_1.jsx)(ui_1.StatusBadge, { color: StatusColors[status], children: StatusTitles[status] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtc3RhdHVzLWJhZGdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL3JvdXRlcy9xdW90ZXMvY29tcG9uZW50cy9xdW90ZS1zdGF0dXMtYmFkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBa0JBLG1DQU1DOztBQXhCRCxxQ0FBMkM7QUFFM0MsTUFBTSxZQUFZLEdBQTJCO0lBQzNDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLGdCQUFnQixFQUFFLGtCQUFrQjtDQUNyQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQXdEO0lBQ3hFLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLGlCQUFpQixFQUFFLFFBQVE7SUFDM0IsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCLGdCQUFnQixFQUFFLE1BQU07Q0FDekIsQ0FBQztBQUVGLFNBQXdCLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFzQjtJQUNyRSxPQUFPLENBQ0wsdUJBQUMsZ0JBQVcsSUFBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUNyQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQ1QsQ0FDZixDQUFDO0FBQ0osQ0FBQyJ9