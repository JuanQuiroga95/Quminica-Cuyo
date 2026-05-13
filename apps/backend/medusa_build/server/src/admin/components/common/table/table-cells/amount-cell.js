"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const utils_1 = require("../../../../utils");
const placeholder_cell_1 = require("./placeholder-cell");
const AmountCell = ({ currencyCode, amount, originalAmount, align = "left", className, }) => {
    if (typeof amount === "undefined" || amount === null) {
        return (0, jsx_runtime_1.jsx)(placeholder_cell_1.PlaceholderCell, {});
    }
    const formatted = (0, utils_1.formatAmount)(amount, currencyCode);
    const originalAmountPresent = typeof originalAmount === "number";
    const originalAmountDiffers = originalAmount !== amount;
    const shouldShowAmountDiff = originalAmountPresent && originalAmountDiffers;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex h-full w-full items-center overflow-hidden", {
            "flex-col": shouldShowAmountDiff,
            "justify-start text-left": align === "left",
            "justify-end text-right": align === "right",
        }, className), children: shouldShowAmountDiff ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: "truncate line-through text-xs", children: (0, utils_1.formatAmount)(originalAmount, currencyCode) }), (0, jsx_runtime_1.jsx)("span", { className: "truncate text-blue-400 txt-small", children: formatted })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", { className: "truncate", children: formatted }) })) }));
};
exports.AmountCell = AmountCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1vdW50LWNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vdGFibGUvdGFibGUtY2VsbHMvYW1vdW50LWNlbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBbUM7QUFDbkMsNkNBQWlEO0FBQ2pELHlEQUFxRDtBQVU5QyxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQ3pCLFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssR0FBRyxNQUFNLEVBQ2QsU0FBUyxHQUNPLEVBQUUsRUFBRTtJQUNwQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDckQsT0FBTyx1QkFBQyxrQ0FBZSxLQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sU0FBUyxHQUFHLElBQUEsb0JBQVksRUFBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckQsTUFBTSxxQkFBcUIsR0FBRyxPQUFPLGNBQWMsS0FBSyxRQUFRLENBQUM7SUFDakUsTUFBTSxxQkFBcUIsR0FBRyxjQUFjLEtBQUssTUFBTSxDQUFDO0lBQ3hELE1BQU0sb0JBQW9CLEdBQUcscUJBQXFCLElBQUkscUJBQXFCLENBQUM7SUFFNUUsT0FBTyxDQUNMLGdDQUNFLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFDWixpREFBaUQsRUFDakQ7WUFDRSxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLHlCQUF5QixFQUFFLEtBQUssS0FBSyxNQUFNO1lBQzNDLHdCQUF3QixFQUFFLEtBQUssS0FBSyxPQUFPO1NBQzVDLEVBQ0QsU0FBUyxDQUNWLFlBRUEsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQ3RCLDZEQUNFLGlDQUFNLFNBQVMsRUFBQywrQkFBK0IsWUFDNUMsSUFBQSxvQkFBWSxFQUFDLGNBQWUsRUFBRSxZQUFZLENBQUMsR0FDdkMsRUFDUCxpQ0FBTSxTQUFTLEVBQUMsa0NBQWtDLFlBQUUsU0FBUyxHQUFRLElBQ3BFLENBQ0osQ0FBQyxDQUFDLENBQUMsQ0FDRiwyREFDRSxpQ0FBTSxTQUFTLEVBQUMsVUFBVSxZQUFFLFNBQVMsR0FBUSxHQUM1QyxDQUNKLEdBQ0csQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBMUNXLFFBQUEsVUFBVSxjQTBDckIifQ==