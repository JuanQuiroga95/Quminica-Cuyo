"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductHeader = exports.ProductCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const thumbnail_1 = require("../../thumbnail");
const ProductCell = ({ product }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex h-full w-full items-center gap-x-3 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-fit flex-shrink-0", children: (0, jsx_runtime_1.jsx)(thumbnail_1.Thumbnail, { src: product.thumbnail }) }), (0, jsx_runtime_1.jsx)("span", { className: "truncate", children: product.title })] }));
};
exports.ProductCell = ProductCell;
const ProductHeader = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full items-center", children: (0, jsx_runtime_1.jsx)("span", { children: t("fields.product") }) }));
};
exports.ProductHeader = ProductHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlL3RhYmxlLWNlbGxzL3Byb2R1Y3QtY2VsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLGlEQUErQztBQUMvQywrQ0FBNEM7QUFNckMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBb0IsRUFBRSxFQUFFO0lBQzNELE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMseURBQXlELGFBQ3RFLGdDQUFLLFNBQVMsRUFBQyxxQkFBcUIsWUFDbEMsdUJBQUMscUJBQVMsSUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBSSxHQUNqQyxFQUNOLGlDQUFNLFNBQVMsRUFBQyxVQUFVLFlBQUUsT0FBTyxDQUFDLEtBQUssR0FBUSxJQUM3QyxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFUVyxRQUFBLFdBQVcsZUFTdEI7QUFFSyxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUEsOEJBQWMsR0FBRSxDQUFDO0lBRS9CLE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMsaUNBQWlDLFlBQzlDLDJDQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFRLEdBQzlCLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEsYUFBYSxpQkFReEIifQ==