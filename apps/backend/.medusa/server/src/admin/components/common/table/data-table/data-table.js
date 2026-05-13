"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const __1 = require("../");
const skeleton_1 = require("../../skeleton");
const data_table_query_1 = require("./data-table-query");
const data_table_root_1 = require("./data-table-root");
// Maybe we should use the memoized version of DataTableRoot
// const MemoizedDataTableRoot = memo(DataTableRoot) as typeof DataTableRoot
const MemoizedDataTableQuery = (0, react_1.memo)(data_table_query_1.DataTableQuery);
const DataTable = ({ table, columns, pagination, navigateTo, commands, count = 0, search = false, orderBy, filters, prefix, queryObject = {}, pageSize, isLoading = false, noHeader = false, layout = "fit", noRecords: noRecordsProps = {}, }) => {
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)(skeleton_1.TableSkeleton, { layout: layout, rowCount: pageSize, search: !!search, filters: !!filters?.length, orderBy: !!orderBy?.length, pagination: !!pagination }));
    }
    const noQuery = Object.values(queryObject).filter((v) => Boolean(v)).length === 0;
    const noResults = !isLoading && count === 0 && !noQuery;
    const noRecords = !isLoading && count === 0 && noQuery;
    if (noRecords) {
        return ((0, jsx_runtime_1.jsx)(__1.NoRecords, { className: (0, ui_1.clx)({
                "flex h-full flex-col overflow-hidden": layout === "fill",
            }), ...noRecordsProps }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("divide-y", {
            "flex h-full flex-col overflow-hidden": layout === "fill",
        }), children: [(0, jsx_runtime_1.jsx)(MemoizedDataTableQuery, { search: search, orderBy: orderBy, filters: filters, prefix: prefix }), (0, jsx_runtime_1.jsx)(data_table_root_1.DataTableRoot, { table: table, count: count, columns: columns, pagination: true, navigateTo: navigateTo, commands: commands, noResults: noResults, noHeader: noHeader, layout: layout })] }));
};
exports.DataTable = DataTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi90YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBbUM7QUFDbkMsaUNBQTZCO0FBQzdCLDJCQUFnRDtBQUNoRCw2Q0FBK0M7QUFDL0MseURBQXlFO0FBQ3pFLHVEQUFzRTtBQVd0RSw0REFBNEQ7QUFDNUQsNEVBQTRFO0FBQzVFLE1BQU0sc0JBQXNCLEdBQUcsSUFBQSxZQUFJLEVBQUMsaUNBQWMsQ0FBQyxDQUFDO0FBRTdDLE1BQU0sU0FBUyxHQUFHLENBQVMsRUFDaEMsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxLQUFLLEVBQ2QsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sV0FBVyxHQUFHLEVBQUUsRUFDaEIsUUFBUSxFQUNSLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLE1BQU0sR0FBRyxLQUFLLEVBQ2QsU0FBUyxFQUFFLGNBQWMsR0FBRyxFQUFFLEdBQ1IsRUFBRSxFQUFFO0lBQzFCLElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxPQUFPLENBQ0wsdUJBQUMsd0JBQWEsSUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUNoQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQzFCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFDMUIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQ3hCLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FDWCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNwRSxNQUFNLFNBQVMsR0FBRyxDQUFDLFNBQVMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hELE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDO0lBRXZELElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxPQUFPLENBQ0wsdUJBQUMsYUFBUyxJQUNSLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFBQztnQkFDYixzQ0FBc0MsRUFBRSxNQUFNLEtBQUssTUFBTTthQUMxRCxDQUFDLEtBQ0UsY0FBYyxHQUNsQixDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxDQUNMLGlDQUNFLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFBQyxVQUFVLEVBQUU7WUFDekIsc0NBQXNDLEVBQUUsTUFBTSxLQUFLLE1BQU07U0FDMUQsQ0FBQyxhQUVGLHVCQUFDLHNCQUFzQixJQUNyQixNQUFNLEVBQUUsTUFBTSxFQUNkLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLE1BQU0sRUFBRSxNQUFNLEdBQ2QsRUFDRix1QkFBQywrQkFBYSxJQUNaLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixPQUFPLEVBQUUsT0FBTyxFQUNoQixVQUFVLFFBQ1YsVUFBVSxFQUFFLFVBQVUsRUFDdEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsU0FBUyxFQUFFLFNBQVMsRUFDcEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsTUFBTSxFQUFFLE1BQU0sR0FDZCxJQUNFLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXhFVyxRQUFBLFNBQVMsYUF3RXBCIn0=