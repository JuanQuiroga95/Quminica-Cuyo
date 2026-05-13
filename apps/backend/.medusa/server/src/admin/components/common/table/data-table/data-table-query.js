"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableQuery = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const data_table_filter_1 = require("./data-table-filter");
const DataTableQuery = ({ search, orderBy, filters, prefix, }) => {
    return ((search || orderBy || filters || prefix) && ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start justify-between gap-x-4 px-6 py-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-[60%]", children: filters && filters.length > 0 && ((0, jsx_runtime_1.jsx)(data_table_filter_1.DataTableFilter, { filters: filters, prefix: prefix })) }), (0, jsx_runtime_1.jsx)("div", { className: "flex shrink-0 items-center gap-x-2" })] })));
};
exports.DataTableQuery = DataTableQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi90YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtcXVlcnkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyREFBOEQ7QUFTdkQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUM3QixNQUFNLEVBQ04sT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEdBQ2MsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sQ0FDTCxDQUFDLE1BQU0sSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQzFDLGlDQUFLLFNBQVMsRUFBQyxvREFBb0QsYUFDakUsZ0NBQUssU0FBUyxFQUFDLG9CQUFvQixZQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FDaEMsdUJBQUMsbUNBQWUsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUksQ0FDdEQsR0FDRyxFQUNOLGdDQUFLLFNBQVMsRUFBQyxvQ0FBb0MsR0FBTyxJQUN0RCxDQUNQLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxCVyxRQUFBLGNBQWMsa0JBa0J6QiJ9