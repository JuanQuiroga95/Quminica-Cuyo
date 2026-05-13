"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApprovalsTableColumns = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_table_1 = require("@tanstack/react-table");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const text_cell_1 = require("../../../../components/common/table/table-cells/text-cell");
const ui_1 = require("@medusajs/ui");
const approval_1 = require("../../../../../types/approval");
const approvals_items_popover_1 = __importDefault(require("../approvals-items-popover"));
const date_cell_1 = require("../../../../../admin/components/common/table/table-cells/date-cell");
const approval_actions_1 = require("../approval-actions");
const columnHelper = (0, react_table_1.createColumnHelper)();
const useApprovalsTableColumns = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (0, react_1.useMemo)(() => [
        columnHelper.accessor("id", {
            header: t("fields.id"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(text_cell_1.TextCell, { text: `#${getValue().slice(-4)}` }),
        }),
        columnHelper.accessor("updated_at", {
            header: t("Updated at"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(date_cell_1.DateCell, { date: getValue() }),
        }),
        columnHelper.accessor("company.name", {
            header: t("fields.company"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(text_cell_1.TextCell, { text: getValue() }),
        }),
        columnHelper.accessor("approval_status.status", {
            header: t("fields.status"),
            cell: ({ getValue }) => {
                const status = getValue();
                return ((0, jsx_runtime_1.jsx)(ui_1.StatusBadge, { color: status === approval_1.ApprovalStatusType.APPROVED
                        ? "green"
                        : status === approval_1.ApprovalStatusType.REJECTED
                            ? "red"
                            : "purple", children: status.charAt(0).toUpperCase() + status.slice(1).toLowerCase() }));
            },
        }),
        columnHelper.accessor("items", {
            header: t("fields.items"),
            cell: ({ getValue, row }) => ((0, jsx_runtime_1.jsx)(approvals_items_popover_1.default, { items: getValue(), currencyCode: row.original.currency_code })),
        }),
        columnHelper.accessor("actions", {
            header: t("Actions"),
            cell: ({ row }) => (0, jsx_runtime_1.jsx)(approval_actions_1.ApprovalActions, { cart: row.original }),
        }),
    ], [t]);
};
exports.useApprovalsTableColumns = useApprovalsTableColumns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvYXBwcm92YWxzL2NvbXBvbmVudHMvdGFibGUvY29sdW1ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHVEQUEyRDtBQUMzRCxpQ0FBZ0M7QUFDaEMsaURBQStDO0FBQy9DLHlGQUFxRjtBQUNyRixxQ0FBMkM7QUFDM0MsNERBQW1FO0FBQ25FLHlGQUFzRDtBQUN0RCxrR0FBOEY7QUFDOUYsMERBQXNEO0FBRXRELE1BQU0sWUFBWSxHQUFHLElBQUEsZ0NBQWtCLEdBQU8sQ0FBQztBQUV4QyxNQUFNLHdCQUF3QixHQUFHLEdBQUcsRUFBRTtJQUMzQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUM7SUFFL0IsT0FBTyxJQUFBLGVBQU8sRUFDWixHQUFHLEVBQUUsQ0FBQztRQUNKLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQzFCLE1BQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLHVCQUFDLG9CQUFRLElBQUMsSUFBSSxFQUFFLElBQUksUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSTtTQUN2RSxDQUFDO1FBQ0YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDbEMsTUFBTSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDdkIsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsdUJBQUMsb0JBQVEsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUk7U0FDdkQsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7WUFDM0IsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsdUJBQUMsb0JBQVEsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUk7U0FDdkQsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUU7WUFDOUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUM7WUFDMUIsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO2dCQUNyQixNQUFNLE1BQU0sR0FBRyxRQUFRLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxDQUNMLHVCQUFDLGdCQUFXLElBQ1YsS0FBSyxFQUNILE1BQU0sS0FBSyw2QkFBa0IsQ0FBQyxRQUFRO3dCQUNwQyxDQUFDLENBQUMsT0FBTzt3QkFDVCxDQUFDLENBQUMsTUFBTSxLQUFLLDZCQUFrQixDQUFDLFFBQVE7NEJBQ3hDLENBQUMsQ0FBQyxLQUFLOzRCQUNQLENBQUMsQ0FBQyxRQUFRLFlBR2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUNuRCxDQUNmLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQzdCLE1BQU0sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3pCLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUMzQix1QkFBQyxpQ0FBWSxJQUNYLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFDakIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUN4QyxDQUNIO1NBQ0YsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQy9CLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3BCLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLHVCQUFDLGtDQUFlLElBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUk7U0FDM0QsQ0FBQztLQUNILEVBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBcERXLFFBQUEsd0JBQXdCLDRCQW9EbkMifQ==