"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataTableFilterContext = exports.DataTableFilterContext = void 0;
const react_1 = require("react");
exports.DataTableFilterContext = (0, react_1.createContext)(null);
const useDataTableFilterContext = () => {
    const ctx = (0, react_1.useContext)(exports.DataTableFilterContext);
    if (!ctx) {
        throw new Error("useDataTableFacetedFilterContext must be used within a DataTableFacetedFilter");
    }
    return ctx;
};
exports.useDataTableFilterContext = useDataTableFilterContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi90YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtZmlsdGVyL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpRDtBQU9wQyxRQUFBLHNCQUFzQixHQUNqQyxJQUFBLHFCQUFhLEVBQXFDLElBQUksQ0FBQyxDQUFBO0FBRWxELE1BQU0seUJBQXlCLEdBQUcsR0FBRyxFQUFFO0lBQzVDLE1BQU0sR0FBRyxHQUFHLElBQUEsa0JBQVUsRUFBQyw4QkFBc0IsQ0FBQyxDQUFBO0lBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULE1BQU0sSUFBSSxLQUFLLENBQ2IsK0VBQStFLENBQ2hGLENBQUE7SUFDSCxDQUFDO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDLENBQUE7QUFSWSxRQUFBLHlCQUF5Qiw2QkFRckMifQ==