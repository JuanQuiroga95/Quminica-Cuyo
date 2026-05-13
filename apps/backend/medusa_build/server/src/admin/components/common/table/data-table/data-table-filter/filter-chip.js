"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_i18next_1 = require("react-i18next");
const Popover = __importStar(require("@radix-ui/react-popover"));
const FilterChip = ({ hadPreviousValue, label, value, readonly, hasOperator, onRemove, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const handleRemove = (e) => {
        e.stopPropagation();
        onRemove();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-ui-bg-field transition-fg shadow-borders-base text-ui-fg-subtle flex cursor-default select-none items-stretch overflow-hidden rounded-md", children: [!hadPreviousValue && ((0, jsx_runtime_1.jsx)(Popover.Anchor, {})), (0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex items-center justify-center whitespace-nowrap px-2 py-1", {
                    "border-r": !!(value || hadPreviousValue),
                }), children: (0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", weight: "plus", leading: "compact", children: label }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center overflow-hidden", children: [hasOperator && !!(value || hadPreviousValue) && ((0, jsx_runtime_1.jsx)("div", { className: "border-r p-1 px-2", children: (0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", weight: "plus", leading: "compact", className: "text-ui-fg-muted", children: t("general.is") }) })), !!(value || hadPreviousValue) && ((0, jsx_runtime_1.jsx)(Popover.Trigger, { asChild: true, className: (0, ui_1.clx)("flex-1 cursor-pointer overflow-hidden border-r p-1 px-2", {
                            "hover:bg-ui-bg-field-hover": !readonly,
                            "data-[state=open]:bg-ui-bg-field-hover": !readonly,
                        }), children: (0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", leading: "compact", weight: "plus", className: "truncate text-nowrap", children: value || "\u00A0" }) }))] }), !readonly && !!(value || hadPreviousValue) && ((0, jsx_runtime_1.jsx)("button", { onClick: handleRemove, className: (0, ui_1.clx)("text-ui-fg-muted transition-fg flex items-center justify-center p-1", "hover:bg-ui-bg-subtle-hover", "active:bg-ui-bg-subtle-pressed active:text-ui-fg-base"), children: (0, jsx_runtime_1.jsx)(icons_1.XMarkMini, {}) }))] }));
};
exports.default = FilterChip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWNoaXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWZpbHRlci9maWx0ZXItY2hpcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLHFDQUF3QztBQUN4QyxpREFBOEM7QUFFOUMsaUVBQWtEO0FBV2xELE1BQU0sVUFBVSxHQUFHLENBQUMsRUFDbEIsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxRQUFRLEdBQ1EsRUFBRSxFQUFFO0lBQ3BCLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFBLDhCQUFjLEdBQUUsQ0FBQTtJQUU5QixNQUFNLFlBQVksR0FBRyxDQUFDLENBQWdDLEVBQUUsRUFBRTtRQUN4RCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDbkIsUUFBUSxFQUFFLENBQUE7SUFDWixDQUFDLENBQUE7SUFFRCxPQUFPLENBQ0wsaUNBQ0UsU0FBUyxFQUFDLDZJQUE2SSxhQUV0SixDQUFDLGdCQUFnQixJQUFJLENBQ3BCLHVCQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUcsQ0FDbkIsRUFDRCxnQ0FDRSxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1osOERBQThELEVBQzlEO29CQUNFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUM7aUJBQzFDLENBQ0YsWUFFRCx1QkFBQyxTQUFJLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxTQUFTLFlBQy9DLEtBQUssR0FDRCxHQUNILEVBQ04saUNBQUssU0FBUyxFQUFDLDBDQUEwQyxhQUN0RCxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FDL0MsZ0NBQUssU0FBUyxFQUFDLG1CQUFtQixZQUNoQyx1QkFBQyxTQUFJLElBQ0gsSUFBSSxFQUFDLE9BQU8sRUFDWixNQUFNLEVBQUMsTUFBTSxFQUNiLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLFNBQVMsRUFBQyxrQkFBa0IsWUFFM0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUNYLEdBQ0gsQ0FDUCxFQUNBLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2hDLHVCQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUMsT0FBTyxRQUFDLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFBQyx5REFBeUQsRUFDL0Y7NEJBQ0UsNEJBQTRCLEVBQUUsQ0FBQyxRQUFROzRCQUN2Qyx3Q0FBd0MsRUFBRSxDQUFDLFFBQVE7eUJBQ3BELENBQ0YsWUFDQyx1QkFBQyxTQUFJLElBQ0gsSUFBSSxFQUFDLE9BQU8sRUFDWixPQUFPLEVBQUMsU0FBUyxFQUNqQixNQUFNLEVBQUMsTUFBTSxFQUNiLFNBQVMsRUFBQyxzQkFBc0IsWUFFL0IsS0FBSyxJQUFJLFFBQVEsR0FDYixHQUNTLENBQ25CLElBQ0csRUFDTCxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUM3QyxtQ0FDRSxPQUFPLEVBQUUsWUFBWSxFQUNyQixTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1oscUVBQXFFLEVBQ3JFLDZCQUE2QixFQUM3Qix1REFBdUQsQ0FDeEQsWUFFRCx1QkFBQyxpQkFBUyxLQUFHLEdBQ04sQ0FDVixJQUNHLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBQSJ9