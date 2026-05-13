"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateDrawer = EmployeeCreateDrawer;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const api_1 = require("../../../../hooks/api");
const employees_create_form_1 = require("./employees-create-form");
function EmployeeCreateDrawer({ company }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    const { mutateAsync: createEmployee, isPending: createEmployeeLoading, error: createEmployeeError, } = (0, api_1.useCreateEmployee)(company.id);
    const { mutateAsync: createCustomer, isPending: createCustomerLoading, error: createCustomerError, } = (0, api_1.useAdminCreateCustomer)();
    const handleSubmit = async (formData) => {
        const { customer } = await createCustomer({
            email: formData.email,
            first_name: formData.first_name,
            last_name: formData.last_name,
            phone: formData.phone,
            company_name: company.name,
        });
        if (!customer?.id) {
            ui_1.toast.error("Failed to create customer");
            return;
        }
        const employee = await createEmployee({
            spending_limit: formData.spending_limit,
            is_admin: formData.is_admin,
            customer_id: customer.id,
        });
        if (!employee) {
            ui_1.toast.error("Failed to create employee");
            return;
        }
        setOpen(false);
        ui_1.toast.success(`Employee ${customer?.first_name} ${customer?.last_name} created successfully`);
    };
    const loading = createCustomerLoading || createEmployeeLoading;
    const error = createCustomerError || createEmployeeError;
    return ((0, jsx_runtime_1.jsxs)(ui_1.Drawer, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "small", children: "Add" }) }), (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Content, { children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Header, { children: (0, jsx_runtime_1.jsx)(ui_1.Drawer.Title, { children: "Add Company Customer" }) }), (0, jsx_runtime_1.jsx)(employees_create_form_1.EmployeesCreateForm, { handleSubmit: handleSubmit, loading: loading, error: error, company: company })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLWNyZWF0ZS1kcmF3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL2NvbXBhbmllcy9jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZXMtY3JlYXRlLWRyYXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQSxvREF1RUM7O0FBaEZELHFDQUFxRDtBQUVyRCxpQ0FBaUM7QUFDakMsK0NBRytCO0FBQy9CLG1FQUE4RDtBQUU5RCxTQUFnQixvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBNkI7SUFDekUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsTUFBTSxFQUNKLFdBQVcsRUFBRSxjQUFjLEVBQzNCLFNBQVMsRUFBRSxxQkFBcUIsRUFDaEMsS0FBSyxFQUFFLG1CQUFtQixHQUMzQixHQUFHLElBQUEsdUJBQWlCLEVBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWxDLE1BQU0sRUFDSixXQUFXLEVBQUUsY0FBYyxFQUMzQixTQUFTLEVBQUUscUJBQXFCLEVBQ2hDLEtBQUssRUFBRSxtQkFBbUIsR0FDM0IsR0FBRyxJQUFBLDRCQUFzQixHQUFFLENBQUM7SUFFN0IsTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUN4QixRQUE2RCxFQUM3RCxFQUFFO1FBQ0YsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sY0FBYyxDQUFDO1lBQ3hDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBTTtZQUN0QixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVc7WUFDaEMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFVO1lBQzlCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBTTtZQUN0QixZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQixVQUFLLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLGNBQWMsQ0FBQztZQUNwQyxjQUFjLEVBQUUsUUFBUSxDQUFDLGNBQWU7WUFDeEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFTO1lBQzVCLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRTtTQUN6QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDZCxVQUFLLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTztRQUNULENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixVQUFLLENBQUMsT0FBTyxDQUNYLFlBQVksUUFBUSxFQUFFLFVBQVUsSUFBSSxRQUFRLEVBQUUsU0FBUyx1QkFBdUIsQ0FDL0UsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE1BQU0sT0FBTyxHQUFHLHFCQUFxQixJQUFJLHFCQUFxQixDQUFDO0lBQy9ELE1BQU0sS0FBSyxHQUFHLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDO0lBRXpELE9BQU8sQ0FDTCx3QkFBQyxXQUFNLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxhQUN2Qyx1QkFBQyxXQUFNLENBQUMsT0FBTyxJQUFDLE9BQU8sa0JBQ3JCLHVCQUFDLFdBQU0sSUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxPQUFPLG9CQUUvQixHQUNNLEVBQ2pCLHdCQUFDLFdBQU0sQ0FBQyxPQUFPLGVBQ2IsdUJBQUMsV0FBTSxDQUFDLE1BQU0sY0FDWix1QkFBQyxXQUFNLENBQUMsS0FBSyx1Q0FBb0MsR0FDbkMsRUFDaEIsdUJBQUMsMkNBQW1CLElBQ2xCLFlBQVksRUFBRSxZQUFZLEVBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLE9BQU8sR0FDaEIsSUFDYSxJQUNWLENBQ1YsQ0FBQztBQUNKLENBQUMifQ==