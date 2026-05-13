"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalsTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../../../admin/components");
const hooks_1 = require("../../../../admin/hooks");
const api_1 = require("../../../../admin/hooks/api");
const columns_1 = require("./table/columns");
const filters_1 = require("./table/filters");
const query_1 = require("./table/query");
const PAGE_SIZE = 50;
const ApprovalsTable = () => {
    const { searchParams, raw } = (0, query_1.useApprovalsTableQuery)({
        pageSize: PAGE_SIZE,
    });
    const { data, isPending } = (0, api_1.useApprovals)({
        ...searchParams,
        order: "-updated_at",
    });
    const columns = (0, columns_1.useApprovalsTableColumns)();
    const filters = (0, filters_1.useApprovalsTableFilters)();
    const { table } = (0, hooks_1.useDataTable)({
        data: data?.carts_with_approvals,
        columns,
        enablePagination: true,
        count: data?.count,
        pageSize: PAGE_SIZE,
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex size-full flex-col overflow-hidden", children: (0, jsx_runtime_1.jsx)(components_1.DataTable, { columns: columns, table: table, pagination: true, filters: filters, count: data?.count, search: true, isLoading: isPending, pageSize: PAGE_SIZE, orderBy: ["id", "created_at"], queryObject: raw, noRecords: {
                title: "No approvals found",
                message: "There are currently no approvals.",
            } }) }));
};
exports.ApprovalsTable = ApprovalsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWxzLXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL3JvdXRlcy9hcHByb3ZhbHMvY29tcG9uZW50cy9hcHByb3ZhbHMtdGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBeUQ7QUFDekQsbURBQXVEO0FBQ3ZELHFEQUEyRDtBQUMzRCw2Q0FBMkQ7QUFDM0QsNkNBQTJEO0FBQzNELHlDQUF1RDtBQUV2RCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFZCxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUU7SUFDakMsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFBLDhCQUFzQixFQUFDO1FBQ25ELFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBQSxrQkFBWSxFQUFDO1FBQ3ZDLEdBQUcsWUFBWTtRQUNmLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxHQUFHLElBQUEsa0NBQXdCLEdBQUUsQ0FBQztJQUMzQyxNQUFNLE9BQU8sR0FBRyxJQUFBLGtDQUF3QixHQUFFLENBQUM7SUFFM0MsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsb0JBQVksRUFBQztRQUM3QixJQUFJLEVBQUUsSUFBSSxFQUFFLG9CQUFvQjtRQUNoQyxPQUFPO1FBQ1AsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDbEIsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyx5Q0FBeUMsWUFDdEQsdUJBQUMsc0JBQVMsSUFDUixPQUFPLEVBQUUsT0FBTyxFQUNoQixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsUUFDVixPQUFPLEVBQUUsT0FBTyxFQUNoQixLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFDbEIsTUFBTSxRQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFFBQVEsRUFBRSxTQUFTLEVBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFDN0IsV0FBVyxFQUFFLEdBQUcsRUFDaEIsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLE9BQU8sRUFBRSxtQ0FBbUM7YUFDN0MsR0FDRCxHQUNFLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXpDVyxRQUFBLGNBQWMsa0JBeUN6QiJ9