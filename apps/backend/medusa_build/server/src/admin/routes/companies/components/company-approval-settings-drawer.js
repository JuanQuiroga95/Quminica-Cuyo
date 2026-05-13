"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyApprovalSettingsDrawer = CompanyApprovalSettingsDrawer;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const common_1 = require("../../../components/common");
const api_1 = require("../../../hooks/api");
function CompanyApprovalSettingsDrawer({ company, open, setOpen, }) {
    const [requiresAdminApproval, setRequiresAdminApproval] = (0, react_1.useState)(company.approval_settings?.requires_admin_approval || false);
    const [requiresSalesManagerApproval, setRequiresSalesManagerApproval] = (0, react_1.useState)(company.approval_settings?.requires_sales_manager_approval || false);
    const { mutateAsync, isPending } = (0, api_1.useUpdateApprovalSettings)(company.id);
    const { approval_settings } = company;
    const handleSubmit = async () => {
        await mutateAsync({
            id: approval_settings.id,
            requires_admin_approval: requiresAdminApproval,
            requires_sales_manager_approval: requiresSalesManagerApproval,
        }, {
            onSuccess: async () => {
                setOpen(false);
                ui_1.toast.success("Company approval settings updated successfully");
            },
            onError: (error) => {
                ui_1.toast.error("Failed to update company approval settings");
            },
        });
    };
    return ((0, jsx_runtime_1.jsx)(ui_1.Drawer, { open: open, onOpenChange: setOpen, children: (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Content, { className: "z-50", children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Header, { children: (0, jsx_runtime_1.jsx)(ui_1.Drawer.Title, { children: "Company Approval Settings" }) }), (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Body, { className: "flex flex-col gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-2", children: (0, jsx_runtime_1.jsx)(common_1.CoolSwitch, { checked: requiresAdminApproval, onChange: () => setRequiresAdminApproval(!requiresAdminApproval), fieldName: "requires_admin_approval", label: "Requires Admin Approval", description: "Require company admin approval for all orders placed by this company." }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-2", children: (0, jsx_runtime_1.jsx)(common_1.CoolSwitch, { checked: requiresSalesManagerApproval, onChange: () => setRequiresSalesManagerApproval(!requiresSalesManagerApproval), fieldName: "requires_sales_manager_approval", label: "Requires Sales Manager Approval", description: "Require sales manager approval for all orders placed by this company." }) })] }), (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Footer, { children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { onClick: handleSubmit, isLoading: isPending, children: "Save" })] })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1hcHByb3ZhbC1zZXR0aW5ncy1kcmF3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL2NvbXBhbmllcy9jb21wb25lbnRzL2NvbXBhbnktYXBwcm92YWwtc2V0dGluZ3MtZHJhd2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLHNFQWdGQzs7QUF0RkQscUNBQXFEO0FBQ3JELGlDQUFpQztBQUVqQyx1REFBd0Q7QUFDeEQsNENBQStEO0FBRS9ELFNBQWdCLDZCQUE2QixDQUFDLEVBQzVDLE9BQU8sRUFDUCxJQUFJLEVBQ0osT0FBTyxHQUtSO0lBQ0MsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUNoRSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLElBQUksS0FBSyxDQUM1RCxDQUFDO0lBQ0YsTUFBTSxDQUFDLDRCQUE0QixFQUFFLCtCQUErQixDQUFDLEdBQ25FLElBQUEsZ0JBQVEsRUFDTixPQUFPLENBQUMsaUJBQWlCLEVBQUUsK0JBQStCLElBQUksS0FBSyxDQUNwRSxDQUFDO0lBRUosTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFBLCtCQUF5QixFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV6RSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFdEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDOUIsTUFBTSxXQUFXLENBQ2Y7WUFDRSxFQUFFLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtZQUN4Qix1QkFBdUIsRUFBRSxxQkFBcUI7WUFDOUMsK0JBQStCLEVBQUUsNEJBQTRCO1NBQzlELEVBQ0Q7WUFDRSxTQUFTLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZixVQUFLLENBQUMsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixVQUFLLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCx1QkFBQyxXQUFNLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxZQUN2Qyx3QkFBQyxXQUFNLENBQUMsT0FBTyxJQUFDLFNBQVMsRUFBQyxNQUFNLGFBQzlCLHVCQUFDLFdBQU0sQ0FBQyxNQUFNLGNBQ1osdUJBQUMsV0FBTSxDQUFDLEtBQUssNENBQXlDLEdBQ3hDLEVBQ2hCLHdCQUFDLFdBQU0sQ0FBQyxJQUFJLElBQUMsU0FBUyxFQUFDLHFCQUFxQixhQUMxQyxnQ0FBSyxTQUFTLEVBQUMseUJBQXlCLFlBQ3RDLHVCQUFDLG1CQUFVLElBQ1QsT0FBTyxFQUFFLHFCQUFxQixFQUM5QixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNoRSxTQUFTLEVBQUMseUJBQXlCLEVBQ25DLEtBQUssRUFBQyx5QkFBeUIsRUFDL0IsV0FBVyxFQUFDLHVFQUF1RSxHQUNuRixHQUNFLEVBRU4sZ0NBQUssU0FBUyxFQUFDLHlCQUF5QixZQUN0Qyx1QkFBQyxtQkFBVSxJQUNULE9BQU8sRUFBRSw0QkFBNEIsRUFDckMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUNiLCtCQUErQixDQUFDLENBQUMsNEJBQTRCLENBQUMsRUFFaEUsU0FBUyxFQUFDLGlDQUFpQyxFQUMzQyxLQUFLLEVBQUMsaUNBQWlDLEVBQ3ZDLFdBQVcsRUFBQyx1RUFBdUUsR0FDbkYsR0FDRSxJQUNNLEVBQ2Qsd0JBQUMsV0FBTSxDQUFDLE1BQU0sZUFDWix1QkFBQyxXQUFNLElBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFFaEQsRUFDVCx1QkFBQyxXQUFNLElBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxxQkFFMUMsSUFDSyxJQUNELEdBQ1YsQ0FDVixDQUFDO0FBQ0osQ0FBQyJ9