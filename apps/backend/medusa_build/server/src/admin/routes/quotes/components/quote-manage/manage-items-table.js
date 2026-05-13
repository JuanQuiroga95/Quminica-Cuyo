"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageItemsTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("../../../../components");
const api_1 = require("../../../../hooks/api");
const use_data_table_1 = require("../../../../hooks/use-data-table");
const columns_1 = require("./table/columns");
const filters_1 = require("./table/filters");
const query_1 = require("./table/query");
const PAGE_SIZE = 50;
const PREFIX = "rit";
const ManageItemsTable = ({ onSelectionChange, currencyCode, }) => {
    const [rowSelection, setRowSelection] = (0, react_1.useState)({});
    const updater = (fn) => {
        const newState = typeof fn === "function" ? fn(rowSelection) : fn;
        setRowSelection(newState);
        onSelectionChange(Object.keys(newState));
    };
    const { searchParams, raw } = (0, query_1.useManageItemsTableQuery)({
        pageSize: PAGE_SIZE,
        prefix: PREFIX,
    });
    const { variants = [], count } = (0, api_1.useVariants)({
        ...searchParams,
        fields: "*inventory_items.inventory.location_levels,+inventory_quantity",
    });
    const columns = (0, columns_1.useManageItemsTableColumns)(currencyCode);
    const filters = (0, filters_1.useManageItemsTableFilters)();
    const { table } = (0, use_data_table_1.useDataTable)({
        data: variants,
        columns: columns,
        count,
        enablePagination: true,
        getRowId: (row) => row.id,
        pageSize: PAGE_SIZE,
        enableRowSelection: (row) => true,
        rowSelection: {
            state: rowSelection,
            updater,
        },
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex size-full flex-col overflow-hidden", children: (0, jsx_runtime_1.jsx)(components_1.DataTable, { table: table, columns: columns, pageSize: PAGE_SIZE, count: count, filters: filters, pagination: true, layout: "fill", search: true, orderBy: ["product_id", "title", "sku"], prefix: PREFIX, queryObject: raw }) }));
};
exports.ManageItemsTable = ManageItemsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWl0ZW1zLXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL3JvdXRlcy9xdW90ZXMvY29tcG9uZW50cy9xdW90ZS1tYW5hZ2UvbWFuYWdlLWl0ZW1zLXRhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsaUNBQWlDO0FBQ2pDLHVEQUFtRDtBQUNuRCwrQ0FBb0Q7QUFDcEQscUVBQWdFO0FBQ2hFLDZDQUE2RDtBQUM3RCw2Q0FBNkQ7QUFDN0QseUNBQXlEO0FBRXpELE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFPZCxNQUFNLGdCQUFnQixHQUFHLENBQUMsRUFDL0IsaUJBQWlCLEVBQ2pCLFlBQVksR0FDVSxFQUFFLEVBQUU7SUFDMUIsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBRXhFLE1BQU0sT0FBTyxHQUFrQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ3BELE1BQU0sUUFBUSxHQUNaLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFbkQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7SUFFRixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUEsZ0NBQXdCLEVBQUM7UUFDckQsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFBLGlCQUFXLEVBQUM7UUFDM0MsR0FBRyxZQUFZO1FBQ2YsTUFBTSxFQUFFLGdFQUFnRTtLQUN6RSxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFBLG9DQUEwQixFQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELE1BQU0sT0FBTyxHQUFHLElBQUEsb0NBQTBCLEdBQUUsQ0FBQztJQUU3QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSw2QkFBWSxFQUFDO1FBQzdCLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLE9BQU87UUFDaEIsS0FBSztRQUNMLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN6QixRQUFRLEVBQUUsU0FBUztRQUNuQixrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNqQyxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPO1NBQ1I7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLENBQ0wsZ0NBQUssU0FBUyxFQUFDLHlDQUF5QyxZQUN0RCx1QkFBQyxzQkFBUyxJQUNSLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLFNBQVMsRUFDbkIsS0FBSyxFQUFFLEtBQUssRUFDWixPQUFPLEVBQUUsT0FBTyxFQUNoQixVQUFVLFFBQ1YsTUFBTSxFQUFDLE1BQU0sRUFDYixNQUFNLFFBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFDdkMsTUFBTSxFQUFFLE1BQU0sRUFDZCxXQUFXLEVBQUUsR0FBRyxHQUNoQixHQUNFLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTFEVyxRQUFBLGdCQUFnQixvQkEwRDNCIn0=