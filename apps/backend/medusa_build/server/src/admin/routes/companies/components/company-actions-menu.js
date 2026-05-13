"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyActionsMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const common_1 = require("../../../components/common");
const delete_prompt_1 = require("../../../components/common/delete-prompt");
const api_1 = require("../../../hooks/api");
const _1 = require("./");
const CompanyActionsMenu = ({ company, customerGroups, }) => {
    const [editOpen, setEditOpen] = (0, react_1.useState)(false);
    const [customerGroupOpen, setCustomerGroupOpen] = (0, react_1.useState)(false);
    const [approvalSettingsOpen, setApprovalSettingsOpen] = (0, react_1.useState)(false);
    const [deleteOpen, setDeleteOpen] = (0, react_1.useState)(false);
    const { mutateAsync: mutateDelete, isPending: loadingDelete } = (0, api_1.useDeleteCompany)(company.id);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleDelete = () => {
        mutateDelete(company.id, {
            onSuccess: () => {
                navigate("/companies");
                ui_1.toast.success(`Company ${company.name} deleted successfully`);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(common_1.ActionMenu, { groups: [
                    {
                        actions: [
                            {
                                icon: (0, jsx_runtime_1.jsx)(icons_1.PencilSquare, {}),
                                label: "Edit details",
                                onClick: () => setEditOpen(true),
                            },
                            {
                                icon: (0, jsx_runtime_1.jsx)(icons_1.Link, {}),
                                label: "Manage customer group",
                                onClick: () => setCustomerGroupOpen(true),
                            },
                            {
                                icon: (0, jsx_runtime_1.jsx)(icons_1.LockClosedSolid, {}),
                                label: "Approval settings",
                                onClick: () => setApprovalSettingsOpen(true),
                            },
                        ],
                    },
                    {
                        actions: [
                            {
                                icon: (0, jsx_runtime_1.jsx)(icons_1.Trash, {}),
                                label: "Delete",
                                onClick: () => setDeleteOpen(true),
                            },
                        ],
                    },
                ] }), (0, jsx_runtime_1.jsx)(_1.CompanyUpdateDrawer, { company: company, open: editOpen, setOpen: setEditOpen }), (0, jsx_runtime_1.jsx)(_1.CompanyCustomerGroupDrawer, { company: company, customerGroups: customerGroups, open: customerGroupOpen, setOpen: setCustomerGroupOpen }), (0, jsx_runtime_1.jsx)(_1.CompanyApprovalSettingsDrawer, { company: company, open: approvalSettingsOpen, setOpen: setApprovalSettingsOpen }), (0, jsx_runtime_1.jsx)(delete_prompt_1.DeletePrompt, { handleDelete: handleDelete, loading: loadingDelete, open: deleteOpen, setOpen: setDeleteOpen })] }));
};
exports.CompanyActionsMenu = CompanyActionsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1hY3Rpb25zLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL2NvbXBhbmllcy9jb21wb25lbnRzL2NvbXBhbnktYWN0aW9ucy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsMkNBQTZFO0FBQzdFLHFDQUFxQztBQUVyQyxpQ0FBaUM7QUFDakMsdURBQStDO0FBQy9DLHVEQUF3RDtBQUN4RCw0RUFBd0U7QUFDeEUsNENBQXNEO0FBQ3RELHlCQUlZO0FBRUwsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQ2pDLE9BQU8sRUFDUCxjQUFjLEdBSWYsRUFBRSxFQUFFO0lBQ0gsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN4RSxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxNQUFNLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEdBQzNELElBQUEsc0JBQWdCLEVBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRS9CLE1BQU0sUUFBUSxHQUFHLElBQUEsOEJBQVcsR0FBRSxDQUFDO0lBRS9CLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtRQUN4QixZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUN2QixTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNkLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkIsVUFBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLE9BQU8sQ0FBQyxJQUFJLHVCQUF1QixDQUFDLENBQUM7WUFDaEUsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCw2REFDRSx1QkFBQyxtQkFBVSxJQUNULE1BQU0sRUFBRTtvQkFDTjt3QkFDRSxPQUFPLEVBQUU7NEJBQ1A7Z0NBQ0UsSUFBSSxFQUFFLHVCQUFDLG9CQUFZLEtBQUc7Z0NBQ3RCLEtBQUssRUFBRSxjQUFjO2dDQUNyQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzs2QkFDakM7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLHVCQUFDLFlBQUksS0FBRztnQ0FDZCxLQUFLLEVBQUUsdUJBQXVCO2dDQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDOzZCQUMxQzs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsdUJBQUMsdUJBQWUsS0FBRztnQ0FDekIsS0FBSyxFQUFFLG1CQUFtQjtnQ0FDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQzs2QkFDN0M7eUJBQ0Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFOzRCQUNQO2dDQUNFLElBQUksRUFBRSx1QkFBQyxhQUFLLEtBQUc7Z0NBQ2YsS0FBSyxFQUFFLFFBQVE7Z0NBQ2YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7NkJBQ25DO3lCQUNGO3FCQUNGO2lCQUNGLEdBQ0QsRUFFRix1QkFBQyxzQkFBbUIsSUFDbEIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsSUFBSSxFQUFFLFFBQVEsRUFDZCxPQUFPLEVBQUUsV0FBVyxHQUNwQixFQUNGLHVCQUFDLDZCQUEwQixJQUN6QixPQUFPLEVBQUUsT0FBTyxFQUNoQixjQUFjLEVBQUUsY0FBYyxFQUM5QixJQUFJLEVBQUUsaUJBQWlCLEVBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsR0FDN0IsRUFDRix1QkFBQyxnQ0FBNkIsSUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsSUFBSSxFQUFFLG9CQUFvQixFQUMxQixPQUFPLEVBQUUsdUJBQXVCLEdBQ2hDLEVBQ0YsdUJBQUMsNEJBQVksSUFDWCxZQUFZLEVBQUUsWUFBWSxFQUMxQixPQUFPLEVBQUUsYUFBYSxFQUN0QixJQUFJLEVBQUUsVUFBVSxFQUNoQixPQUFPLEVBQUUsYUFBYSxHQUN0QixJQUNELENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQXBGVyxRQUFBLGtCQUFrQixzQkFvRjdCIn0=