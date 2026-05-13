"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useManageItemsTableColumns = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_table_1 = require("@tanstack/react-table");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const components_1 = require("../../../../../components");
const columnHelper = (0, react_table_1.createColumnHelper)();
const useManageItemsTableColumns = (currencyCode) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (0, react_1.useMemo)(() => [
        columnHelper.display({
            id: "select",
            header: ({ table }) => {
                return ((0, jsx_runtime_1.jsx)(ui_1.Checkbox, { checked: table.getIsSomePageRowsSelected()
                        ? "indeterminate"
                        : table.getIsAllPageRowsSelected(), onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value) }));
            },
            cell: ({ row }) => {
                const isSelectable = row.getCanSelect();
                return ((0, jsx_runtime_1.jsx)(ui_1.Checkbox, { disabled: !isSelectable, checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!!value), onClick: (e) => {
                        e.stopPropagation();
                    } }));
            },
        }),
        columnHelper.display({
            id: "product",
            header: () => (0, jsx_runtime_1.jsx)(components_1.ProductHeader, {}),
            cell: ({ row }) => {
                return (0, jsx_runtime_1.jsx)(components_1.ProductCell, { product: row.original.product });
            },
        }),
        columnHelper.accessor("sku", {
            header: t("fields.sku"),
            cell: ({ getValue }) => {
                return getValue() || "-";
            },
        }),
        columnHelper.accessor("title", {
            header: t("fields.title"),
        }),
    ], [t, currencyCode]);
};
exports.useManageItemsTableColumns = useManageItemsTableColumns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvcXVvdGVzL2NvbXBvbmVudHMvcXVvdGUtbWFuYWdlL3RhYmxlL2NvbHVtbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBd0M7QUFDeEMsdURBQTJEO0FBQzNELGlDQUFnQztBQUNoQyxpREFBK0M7QUFDL0MsMERBQXVFO0FBRXZFLE1BQU0sWUFBWSxHQUFHLElBQUEsZ0NBQWtCLEdBQU8sQ0FBQztBQUV4QyxNQUFNLDBCQUEwQixHQUFHLENBQUMsWUFBb0IsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFBLDhCQUFjLEdBQUUsQ0FBQztJQUUvQixPQUFPLElBQUEsZUFBTyxFQUNaLEdBQUcsRUFBRSxDQUFDO1FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUNuQixFQUFFLEVBQUUsUUFBUTtZQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDcEIsT0FBTyxDQUNMLHVCQUFDLGFBQVEsSUFDUCxPQUFPLEVBQ0wsS0FBSyxDQUFDLHlCQUF5QixFQUFFO3dCQUMvQixDQUFDLENBQUMsZUFBZTt3QkFDakIsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUV0QyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN6QixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUUxQyxDQUNILENBQUM7WUFDSixDQUFDO1lBQ0QsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUNoQixNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRXhDLE9BQU8sQ0FDTCx1QkFBQyxhQUFRLElBQ1AsUUFBUSxFQUFFLENBQUMsWUFBWSxFQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUM1QixlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUN2RCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDYixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsR0FDRCxDQUNILENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztRQUNGLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDbkIsRUFBRSxFQUFFLFNBQVM7WUFDYixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsdUJBQUMsMEJBQWEsS0FBRztZQUMvQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sdUJBQUMsd0JBQVcsSUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUksQ0FBQztZQUN4RCxDQUFDO1NBQ0YsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDckIsT0FBTyxRQUFRLEVBQUUsSUFBSSxHQUFHLENBQUM7WUFDM0IsQ0FBQztTQUNGLENBQUM7UUFDRixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUM3QixNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQztTQUMxQixDQUFDO0tBQ0gsRUFDRCxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FDbEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXZEVyxRQUFBLDBCQUEwQiw4QkF1RHJDIn0=