"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteDetailsHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_router_dom_1 = require("react-router-dom");
const quote_status_badge_1 = __importDefault(require("../quote-status-badge"));
const QuoteDetailsHeader = ({ quote, }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-6 py-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", children: "Quote Summary" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-x-1.5", children: (0, jsx_runtime_1.jsx)(quote_status_badge_1.default, { status: quote.status }) }), (0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.IconButton, { variant: "transparent", children: (0, jsx_runtime_1.jsx)(icons_1.EllipsisHorizontal, {}) }) }), (0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Content, { children: (0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu.Item, { className: "gap-x-2", onClick: () => navigate(`manage`), disabled: ![
                                        "pending_merchant",
                                        "customer_rejected",
                                        "merchant_rejected",
                                    ].includes(quote.status), children: [(0, jsx_runtime_1.jsx)(icons_1.PencilSquare, {}), "Manage"] }) })] })] })] }));
};
exports.QuoteDetailsHeader = QuoteDetailsHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtZGV0YWlscy1oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy1oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwyQ0FBbUU7QUFDbkUscUNBQWlFO0FBQ2pFLHVEQUErQztBQUUvQywrRUFBcUQ7QUFFOUMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQ2pDLEtBQUssR0FHTixFQUFFLEVBQUU7SUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFBLDhCQUFXLEdBQUUsQ0FBQztJQUUvQixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDZDQUE2QyxhQUMxRCx1QkFBQyxZQUFPLElBQUMsS0FBSyxFQUFDLElBQUksOEJBQXdCLEVBRTNDLGlDQUFLLFNBQVMsRUFBQywyQkFBMkIsYUFDeEMsZ0NBQUssU0FBUyxFQUFDLDZCQUE2QixZQUMxQyx1QkFBQyw0QkFBZ0IsSUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBSSxHQUN0QyxFQUVOLHdCQUFDLGlCQUFZLGVBQ1gsdUJBQUMsaUJBQVksQ0FBQyxPQUFPLElBQUMsT0FBTyxrQkFDM0IsdUJBQUMsZUFBVSxJQUFDLE9BQU8sRUFBQyxhQUFhLFlBQy9CLHVCQUFDLDBCQUFrQixLQUFHLEdBQ1gsR0FDUSxFQUN2Qix1QkFBQyxpQkFBWSxDQUFDLE9BQU8sY0FDbkIsd0JBQUMsaUJBQVksQ0FBQyxJQUFJLElBQ2hCLFNBQVMsRUFBQyxTQUFTLEVBQ25CLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQ2pDLFFBQVEsRUFDTixDQUFDO3dDQUNDLGtCQUFrQjt3Q0FDbEIsbUJBQW1CO3dDQUNuQixtQkFBbUI7cUNBQ3BCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFHMUIsdUJBQUMsb0JBQVksS0FBRyxjQUVFLEdBQ0MsSUFDVixJQUNYLElBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBMUNXLFFBQUEsa0JBQWtCLHNCQTBDN0IifQ==