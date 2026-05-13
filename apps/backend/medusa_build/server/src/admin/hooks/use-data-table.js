"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataTable = void 0;
const react_table_1 = require("@tanstack/react-table");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const useDataTable = ({ data = [], columns, count = 0, pageSize: _pageSize = 20, enablePagination = true, enableRowSelection = false, enableExpandableRows = false, rowSelection: _rowSelection, getSubRows, getRowId, meta, prefix, }) => {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const offsetKey = `${prefix ? `${prefix}_` : ""}offset`;
    const offset = searchParams.get(offsetKey);
    const [{ pageIndex, pageSize }, setPagination] = (0, react_1.useState)({
        pageIndex: offset ? Math.ceil(Number(offset) / _pageSize) : 0,
        pageSize: _pageSize,
    });
    const pagination = (0, react_1.useMemo)(() => ({
        pageIndex,
        pageSize,
    }), [pageIndex, pageSize]);
    const [localRowSelection, setLocalRowSelection] = (0, react_1.useState)({});
    const rowSelection = _rowSelection?.state ?? localRowSelection;
    const setRowSelection = _rowSelection?.updater ?? setLocalRowSelection;
    (0, react_1.useEffect)(() => {
        if (!enablePagination) {
            return;
        }
        const index = offset ? Math.ceil(Number(offset) / _pageSize) : 0;
        if (index === pageIndex) {
            return;
        }
        setPagination((prev) => ({
            ...prev,
            pageIndex: index,
        }));
    }, [offset, enablePagination, _pageSize, pageIndex]);
    const onPaginationChange = (updater) => {
        const state = updater(pagination);
        const { pageIndex, pageSize } = state;
        setSearchParams((prev) => {
            if (!pageIndex) {
                prev.delete(offsetKey);
                return prev;
            }
            const newSearch = new URLSearchParams(prev);
            newSearch.set(offsetKey, String(pageIndex * pageSize));
            return newSearch;
        });
        setPagination(state);
        return state;
    };
    const table = (0, react_table_1.useReactTable)({
        data,
        columns,
        state: {
            rowSelection: rowSelection, // We always pass a selection state to the table even if it's not enabled
            pagination: enablePagination ? pagination : undefined,
        },
        pageCount: Math.ceil((count ?? 0) / pageSize),
        enableRowSelection,
        getRowId,
        getSubRows,
        onRowSelectionChange: enableRowSelection ? setRowSelection : undefined,
        onPaginationChange: enablePagination
            ? onPaginationChange
            : undefined,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getPaginationRowModel: enablePagination
            ? (0, react_table_1.getPaginationRowModel)()
            : undefined,
        getExpandedRowModel: enableExpandableRows
            ? (0, react_table_1.getExpandedRowModel)()
            : undefined,
        manualPagination: enablePagination ? true : undefined,
        meta,
    });
    return { table };
};
exports.useDataTable = useDataTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWRhdGEtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vaG9va3MvdXNlLWRhdGEtdGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQVUrQjtBQUMvQixpQ0FBcUQ7QUFDckQsdURBQW1EO0FBb0I1QyxNQUFNLFlBQVksR0FBRyxDQUFTLEVBQ25DLElBQUksR0FBRyxFQUFFLEVBQ1QsT0FBTyxFQUNQLEtBQUssR0FBRyxDQUFDLEVBQ1QsUUFBUSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQ3hCLGdCQUFnQixHQUFHLElBQUksRUFDdkIsa0JBQWtCLEdBQUcsS0FBSyxFQUMxQixvQkFBb0IsR0FBRyxLQUFLLEVBQzVCLFlBQVksRUFBRSxhQUFhLEVBQzNCLFVBQVUsRUFDVixRQUFRLEVBQ1IsSUFBSSxFQUNKLE1BQU0sR0FDbUIsRUFBRSxFQUFFO0lBQzdCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsSUFBQSxrQ0FBZSxHQUFFLENBQUM7SUFDMUQsTUFBTSxTQUFTLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO0lBQ3hELE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFM0MsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBa0I7UUFDekUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBQSxl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