"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuotesTableColumns = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_table_1 = require("@tanstack/react-table");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const date_cell_1 = require("../../../../components/common/table/table-cells/date-cell");
const text_cell_1 = require("../../../../components/common/table/table-cells/text-cell");
const quote_status_badge_1 = __importDefault(require("../quote-status-badge"));
const columnHelper = (0, react_table_1.createColumnHelper)();
const useQuotesTableColumns = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (0, react_1.useMemo)(() => [
        columnHelper.accessor("draft_order.display_id", {
            header: t("fields.id"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(text_cell_1.TextCell, { text: `#${getValue()}` }),
        }),
        columnHelper.accessor("status", {
            header: t("fields.status"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(quote_status_badge_1.default, { status: getValue() }),
        }),
        columnHelper.accessor("customer.email", {
            header: t("fields.email"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(text_cell_1.TextCell, { text: getValue() }),
        }),
        columnHelper.accessor("draft_order.customer.employee.company.name", {
            header: t("fields.company"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(text_cell_1.TextCell, { text: getValue() }),
        }),
        columnHelper.accessor("draft_order.total", {
            header: t("fields.total"),
            cell: ({ getValue, row }) => {
                (0, jsx_runtime_1.jsx)(text_cell_1.TextCell, { text: `${row.original.draft_order.currency_code.toUpperCase()} ${getValue()}` });
            },
        }),
        columnHelper.accessor("created_at", {
            header: t("fields.createdAt"),
            cell: ({ getValue }) => (0, jsx_runtime_1.jsx)(date_cell_1.DateCell, { date: getValue() }),
        }),
    ], [t]);
};
exports.useQuotesTableColumns = useQuotesTableColumns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvcXVvdGVzL2NvbXBvbmVudHMvdGFibGUvY29sdW1ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHVEQUEyRDtBQUMzRCxpQ0FBZ0M7QUFDaEMsaURBQStDO0FBQy9DLHlGQUFxRjtBQUNyRix5RkFBcUY7QUFDckYsK0VBQXFEO0FBRXJELE1BQU0sWUFBWSxHQUFHLElBQUEsZ0NBQWtCLEdBQU8sQ0FBQztBQUV4QyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtJQUN4QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUM7SUFFL0IsT0FBTyxJQUFBLGVBQU8sRUFDWixHQUFHLEVBQUUsQ0FBQztRQUNKLFlBQVksQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUU7WUFDOUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDdEIsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsdUJBQUMsb0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxHQUFJO1NBQzdELENBQUM7UUFDRixZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUM5QixNQUFNLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUMxQixJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyx1QkFBQyw0QkFBZ0IsSUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUk7U0FDakUsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7WUFDdEMsTUFBTSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDekIsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsdUJBQUMsb0JBQVEsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUk7U0FDdkQsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRLENBQUMsNENBQTRDLEVBQUU7WUFDbEUsTUFBTSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyx1QkFBQyxvQkFBUSxJQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBSTtTQUN2RCxDQUFDO1FBQ0YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtZQUN6QyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN6QixJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUMxQix1QkFBQyxvQkFBUSxJQUNQLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxHQUM3RSxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUM7UUFFRixZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLHVCQUFDLG9CQUFRLElBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFJO1NBQ3ZELENBQUM7S0FDSCxFQUNELENBQUMsQ0FBQyxDQUFDLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQXJDVyxRQUFBLHFCQUFxQix5QkFxQ2hDIn0=