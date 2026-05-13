"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateDrawer = CompanyUpdateDrawer;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const api_1 = require("../../../hooks/api");
const company_form_1 = require("./company-form");
function CompanyUpdateDrawer({ company, open, setOpen, }) {
    const { mutateAsync, isPending, error } = (0, api_1.useUpdateCompany)(company.id);
    const { created_at, updated_at, id, employees, customer_group, approval_settings, ...currentData } = company;
    const handleSubmit = async (formData) => {
        await mutateAsync(formData, {
            onSuccess: async () => {
                setOpen(false);
                ui_1.toast.success(`Company ${formData.name} updated successfully`);
            },
            onError: (error) => {
                ui_1.toast.error("Failed to update company");
            },
        });
    };
    return ((0, jsx_runtime_1.jsx)(ui_1.Drawer, { open: open, onOpenChange: setOpen, children: (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Content, { className: "z-50", children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Header, { children: (0, jsx_runtime_1.jsx)(ui_1.Drawer.Title, { children: "Edit Company" }) }), (0, jsx_runtime_1.jsx)(company_form_1.CompanyForm, { handleSubmit: handleSubmit, loading: isPending, error: error, company: currentData })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS11cGRhdGUtZHJhd2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL3JvdXRlcy9jb21wYW5pZXMvY29tcG9uZW50cy9jb21wYW55LXVwZGF0ZS1kcmF3ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0Esa0RBaURDOztBQXRERCxxQ0FBNkM7QUFFN0MsNENBQXNEO0FBQ3RELGlEQUE2QztBQUU3QyxTQUFnQixtQkFBbUIsQ0FBQyxFQUNsQyxPQUFPLEVBQ1AsSUFBSSxFQUNKLE9BQU8sR0FLUjtJQUNDLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsc0JBQWdCLEVBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sRUFDSixVQUFVLEVBQ1YsVUFBVSxFQUNWLEVBQUUsRUFDRixTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixHQUFHLFdBQVcsRUFDZixHQUFHLE9BQU8sQ0FBQztJQUVaLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxRQUE0QixFQUFFLEVBQUU7UUFDMUQsTUFBTSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzFCLFNBQVMsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNmLFVBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakIsVUFBSyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzFDLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsdUJBQUMsV0FBTSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sWUFDdkMsd0JBQUMsV0FBTSxDQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUMsTUFBTSxhQUM5Qix1QkFBQyxXQUFNLENBQUMsTUFBTSxjQUNaLHVCQUFDLFdBQU0sQ0FBQyxLQUFLLCtCQUE0QixHQUMzQixFQUVoQix1QkFBQywwQkFBVyxJQUNWLFlBQVksRUFBRSxZQUFZLEVBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLFdBQVcsR0FDcEIsSUFDYSxHQUNWLENBQ1YsQ0FBQztBQUNKLENBQUMifQ==