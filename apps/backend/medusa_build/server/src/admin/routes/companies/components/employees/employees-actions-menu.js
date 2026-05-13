"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesActionsMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const _1 = require(".");
const common_1 = require("../../../../components/common");
const api_1 = require("../../../../hooks/api");
const EmployeesActionsMenu = ({ company, employee, }) => {
    const [editOpen, setEditOpen] = (0, react_1.useState)(false);
    const [deleteOpen, setDeleteOpen] = (0, react_1.useState)(false);
    const { mutateAsync: mutateDelete, isPending: loadingDelete } = (0, api_1.useDeleteEmployee)(employee.company_id);
    const handleDelete = async () => {
        await mutateDelete(employee.id, {
            onSuccess: () => {
                ui_1.toast.success(`Employee deleted successfully`);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.IconButton, { variant: "transparent", children: (0, jsx_runtime_1.jsx)(icons_1.EllipsisHorizontal, {}) }) }), (0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu.Content, { children: [(0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu.Item, { className: "gap-x-2", onClick: () => setEditOpen(true), children: [(0, jsx_runtime_1.jsx)(icons_1.PencilSquare, {}), "Edit"] }), (0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Separator, {}), (0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu.Item, { className: "gap-x-2", onClick: () => setDeleteOpen(true), children: [(0, jsx_runtime_1.jsx)(icons_1.Trash, {}), "Delete"] })] })] }), (0, jsx_runtime_1.jsx)(_1.EmployeesUpdateDrawer, { company: company, employee: employee, open: editOpen, setOpen: setEditOpen, toast: ui_1.toast }), (0, jsx_runtime_1.jsx)(common_1.DeletePrompt, { handleDelete: handleDelete, loading: loadingDelete, open: deleteOpen, setOpen: setDeleteOpen })] }));
};
exports.EmployeesActionsMenu = EmployeesActionsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLWFjdGlvbnMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvY29tcGFuaWVzL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlcy1hY3Rpb25zLW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBMEU7QUFDMUUscUNBQStEO0FBQy9ELGlDQUFpQztBQUNqQyx3QkFBMEM7QUFFMUMsMERBQTZEO0FBQzdELCtDQUEwRDtBQUVuRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFDbkMsT0FBTyxFQUNQLFFBQVEsR0FJVCxFQUFFLEVBQUU7SUFDSCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxNQUFNLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEdBQzNELElBQUEsdUJBQWlCLEVBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sWUFBWSxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQzlCLE1BQU0sWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDZCxVQUFLLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDakQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCw2REFDRSx3QkFBQyxpQkFBWSxlQUNYLHVCQUFDLGlCQUFZLENBQUMsT0FBTyxJQUFDLE9BQU8sa0JBQzNCLHVCQUFDLGVBQVUsSUFBQyxPQUFPLEVBQUMsYUFBYSxZQUMvQix1QkFBQywwQkFBa0IsS0FBRyxHQUNYLEdBQ1EsRUFDdkIsd0JBQUMsaUJBQVksQ0FBQyxPQUFPLGVBQ25CLHdCQUFDLGlCQUFZLENBQUMsSUFBSSxJQUNoQixTQUFTLEVBQUMsU0FBUyxFQUNuQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUVoQyx1QkFBQyxvQkFBWSxLQUFHLFlBRUUsRUFDcEIsdUJBQUMsaUJBQVksQ0FBQyxTQUFTLEtBQUcsRUFDMUIsd0JBQUMsaUJBQVksQ0FBQyxJQUFJLElBQ2hCLFNBQVMsRUFBQyxTQUFTLEVBQ25CLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBRWxDLHVCQUFDLGFBQUssS0FBRyxjQUVTLElBQ0MsSUFDVixFQUNmLHVCQUFDLHdCQUFxQixJQUNwQixPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixJQUFJLEVBQUUsUUFBUSxFQUNkLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLEtBQUssRUFBRSxVQUFLLEdBQ1osRUFDRix1QkFBQyxxQkFBWSxJQUNYLFlBQVksRUFBRSxZQUFZLEVBQzFCLE9BQU8sRUFBRSxhQUFhLEVBQ3RCLElBQUksRUFBRSxVQUFVLEVBQ2hCLE9BQU8sRUFBRSxhQUFhLEdBQ3RCLElBQ0QsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBN0RXLFFBQUEsb0JBQW9CLHdCQTZEL0IifQ==