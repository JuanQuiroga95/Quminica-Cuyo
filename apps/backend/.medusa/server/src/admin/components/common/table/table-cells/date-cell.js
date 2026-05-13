"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHeader = exports.DateCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const format_1 = require("date-fns/format");
const react_i18next_1 = require("react-i18next");
const placeholder_cell_1 = require("./placeholder-cell");
const DateCell = ({ date }) => {
    if (!date) {
        return (0, jsx_runtime_1.jsx)(placeholder_cell_1.PlaceholderCell, {});
    }
    const value = new Date(date);
    value.setMinutes(value.getMinutes() - value.getTimezoneOffset());
    const hour12 = Intl.DateTimeFormat().resolvedOptions().hour12;
    const timestampFormat = hour12 ? "dd MMM yyyy hh:MM a" : "dd MMM yyyy HH:MM";
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full items-center overflow-hidden", children: (0, jsx_runtime_1.jsx)(ui_1.Tooltip, { className: "z-10", content: (0, jsx_runtime_1.jsx)("span", { className: "text-pretty", children: `${(0, format_1.format)(value, timestampFormat)}` }), children: (0, jsx_runtime_1.jsx)("span", { className: "truncate", children: (0, format_1.format)(value, "dd MMM yyyy") }) }) }));
};
exports.DateCell = DateCell;
const DateHeader = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full items-center", children: (0, jsx_runtime_1.jsx)("span", { className: "truncate", children: t("fields.date") }) }));
};
exports.DateHeader = DateHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlL3RhYmxlLWNlbGxzL2RhdGUtY2VsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUF1QztBQUN2Qyw0Q0FBeUM7QUFDekMsaURBQStDO0FBQy9DLHlEQUFxRDtBQU05QyxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFpQixFQUFFLEVBQUU7SUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyx1QkFBQyxrQ0FBZSxLQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFFakUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM5RCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztJQUU3RSxPQUFPLENBQ0wsZ0NBQUssU0FBUyxFQUFDLGlEQUFpRCxZQUM5RCx1QkFBQyxZQUFPLElBQ04sU0FBUyxFQUFDLE1BQU0sRUFDaEIsT0FBTyxFQUNMLGlDQUFNLFNBQVMsRUFBQyxhQUFhLFlBQUUsR0FBRyxJQUFBLGVBQU0sRUFDdEMsS0FBSyxFQUNMLGVBQWUsQ0FDaEIsRUFBRSxHQUFRLFlBR2IsaUNBQU0sU0FBUyxFQUFDLFVBQVUsWUFBRSxJQUFBLGVBQU0sRUFBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEdBQVEsR0FDeEQsR0FDTixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUExQlcsUUFBQSxRQUFRLFlBMEJuQjtBQUVLLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUM3QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUM7SUFFL0IsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyxpQ0FBaUMsWUFDOUMsaUNBQU0sU0FBUyxFQUFDLFVBQVUsWUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQVEsR0FDaEQsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUlcsUUFBQSxVQUFVLGNBUXJCIn0=