"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesUpdateDrawer = EmployeesUpdateDrawer;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const _1 = require(".");
const api_1 = require("../../../../hooks/api");
function EmployeesUpdateDrawer({ company, employee, open, setOpen, toast, }) {
    const { mutateAsync, isPending, error } = (0, api_1.useUpdateEmployee)(employee.company_id, employee.id);
    const handleSubmit = async (formData) => {
        await mutateAsync(formData, {
            onSuccess: () => {
                setOpen(false);
                toast.success(`Employee ${employee?.customer?.email} updated successfully`);
            },
        });
    };
    return ((0, jsx_runtime_1.jsx)(ui_1.Drawer, { open: open, onOpenChange: setOpen, children: (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Content, { className: "z-50 overflow-auto", children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Header, { children: (0, jsx_runtime_1.jsx)(ui_1.Drawer.Title, { children: "Edit Employee" }) }), (0, jsx_runtime_1.jsx)(_1.EmployeesUpdateForm, { handleSubmit: handleSubmit, loading: isPending, error: error, employee: employee, company: company })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLXVwZGF0ZS1kcmF3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL2NvbXBhbmllcy9jb21wb25lbnRzL2VtcGxveWVlcy9lbXBsb3llZXMtdXBkYXRlLWRyYXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFTQSxzREE4Q0M7O0FBdkRELHFDQUEwRDtBQUMxRCx3QkFBd0M7QUFNeEMsK0NBQTBEO0FBRTFELFNBQWdCLHFCQUFxQixDQUFDLEVBQ3BDLE9BQU8sRUFDUCxRQUFRLEVBQ1IsSUFBSSxFQUNKLE9BQU8sRUFDUCxLQUFLLEdBT047SUFDQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFBLHVCQUFpQixFQUN6RCxRQUFRLENBQUMsVUFBVSxFQUNuQixRQUFRLENBQUMsRUFBRSxDQUNaLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsUUFBNkIsRUFBRSxFQUFFO1FBQzNELE1BQU0sV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUMxQixTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZixLQUFLLENBQUMsT0FBTyxDQUNYLFlBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLHVCQUF1QixDQUM3RCxDQUFDO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCx1QkFBQyxXQUFNLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxZQUN2Qyx3QkFBQyxXQUFNLENBQUMsT0FBTyxJQUFDLFNBQVMsRUFBQyxvQkFBb0IsYUFDNUMsdUJBQUMsV0FBTSxDQUFDLE1BQU0sY0FDWix1QkFBQyxXQUFNLENBQUMsS0FBSyxnQ0FBNkIsR0FDNUIsRUFFaEIsdUJBQUMsc0JBQW1CLElBQ2xCLFlBQVksRUFBRSxZQUFZLEVBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLFFBQVEsRUFDbEIsT0FBTyxFQUFFLE9BQU8sR0FDaEIsSUFDYSxHQUNWLENBQ1YsQ0FBQztBQUNKLENBQUMifQ==