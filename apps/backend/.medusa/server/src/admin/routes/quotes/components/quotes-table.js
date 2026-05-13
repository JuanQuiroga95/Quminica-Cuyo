"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../../../admin/components");
const hooks_1 = require("../../../../admin/hooks");
const api_1 = require("../../../../admin/hooks/api");
const columns_1 = require("./table/columns");
const filters_1 = require("./table/filters");
const query_1 = require("./table/query");
const PAGE_SIZE = 50;
const PREFIX = "quo";
const QuotesTable = () => {
    const { searchParams, raw } = (0, query_1.useQuotesTableQuery)({
        pageSize: PAGE_SIZE,
        prefix: PREFIX,
    });
    const { quotes = [], count, isPending, } = (0, api_1.useQuotes)({
        ...searchParams,
        fields: "+draft_order.total,+draft_order.customer.email,*draft_order.customer.employee.company",
        order: "-created_at",
    });
    const columns = (0, columns_1.useQuotesTableColumns)();
    const filters = (0, filters_1.useQuotesTableFilters)();
    const { table } = (0, hooks_1.useDataTable)({
        data: quotes,
        columns,
        enablePagination: true,
        count,
        pageSize: PAGE_SIZE,
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex size-full flex-col overflow-hidden", children: (0, jsx_runtime_1.jsx)(components_1.DataTable, { columns: columns, table: table, pagination: true, navigateTo: (row) => `/quotes/${row.original.id}`, filters: filters, count: count, search: true, isLoading: isPending, pageSize: PAGE_SIZE, orderBy: ["id", "created_at"], queryObject: raw, noRecords: {
                title: "No quotes found",
                message: "There are currently no quotes. Create one from the storefront.",
            } }) }));
};
exports.QuotesTable = QuotesTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL3JvdXRlcy9xdW90ZXMvY29tcG9uZW50cy9xdW90ZXMtdGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBeUQ7QUFDekQsbURBQXVEO0FBQ3ZELHFEQUF3RDtBQUN4RCw2Q0FBd0Q7QUFDeEQsNkNBQXdEO0FBQ3hELHlDQUFvRDtBQUVwRCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBRWQsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBQSwyQkFBbUIsRUFBQztRQUNoRCxRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsTUFBTTtLQUNmLENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixNQUFNLEdBQUcsRUFBRSxFQUNYLEtBQUssRUFDTCxTQUFTLEdBQ1YsR0FBRyxJQUFBLGVBQVMsRUFBQztRQUNaLEdBQUcsWUFBWTtRQUNmLE1BQU0sRUFDSix1RkFBdUY7UUFDekYsS0FBSyxFQUFFLGFBQWE7S0FDckIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLEdBQUcsSUFBQSwrQkFBcUIsR0FBRSxDQUFDO0lBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUEsK0JBQXFCLEdBQUUsQ0FBQztJQUV4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSxvQkFBWSxFQUFDO1FBQzdCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTztRQUNQLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsS0FBSztRQUNMLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMseUNBQXlDLFlBQ3RELHVCQUFDLHNCQUFTLElBQ1IsT0FBTyxFQUFFLE9BQU8sRUFDaEIsS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLFFBQ1YsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQ2hCLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxRQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFFBQVEsRUFBRSxTQUFTLEVBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFDN0IsV0FBVyxFQUFFLEdBQUcsRUFDaEIsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFDTCxnRUFBZ0U7YUFDbkUsR0FDRCxHQUNFLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxEVyxRQUFBLFdBQVcsZUFrRHRCIn0=