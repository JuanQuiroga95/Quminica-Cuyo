"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateDrawer = CompanyCreateDrawer;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const api_1 = require("../../../hooks/api");
const company_form_1 = require("./company-form");
function CompanyCreateDrawer() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const { mutateAsync, isPending, error } = (0, api_1.useCreateCompany)();
    const handleSubmit = async (formData) => {
        await mutateAsync(formData, {
            onSuccess: () => {
                setOpen(false);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(ui_1.Drawer, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "small", children: "Create" }) }), (0, jsx_runtime_1.jsxs)(ui_1.Drawer.Content, { children: [(0, jsx_runtime_1.jsx)(ui_1.Drawer.Header, { children: (0, jsx_runtime_1.jsx)(ui_1.Drawer.Title, { children: "Create Company" }) }), (0, jsx_runtime_1.jsx)(company_form_1.CompanyForm, { handleSubmit: handleSubmit, loading: isPending, error: error })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1jcmVhdGUtZHJhd2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL3JvdXRlcy9jb21wYW5pZXMvY29tcG9uZW50cy9jb21wYW55LWNyZWF0ZS1kcmF3ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsa0RBZ0NDOztBQXRDRCxxQ0FBOEM7QUFFOUMsaUNBQWlDO0FBQ2pDLDRDQUFzRDtBQUN0RCxpREFBNkM7QUFFN0MsU0FBZ0IsbUJBQW1CO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhDLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsc0JBQWdCLEdBQUUsQ0FBQztJQUU3RCxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsUUFBNEIsRUFBRSxFQUFFO1FBQzFELE1BQU0sV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUMxQixTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLHdCQUFDLFdBQU0sSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLGFBQ3ZDLHVCQUFDLFdBQU0sQ0FBQyxPQUFPLElBQUMsT0FBTyxrQkFDckIsdUJBQUMsV0FBTSxJQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE9BQU8sdUJBRS9CLEdBQ00sRUFDakIsd0JBQUMsV0FBTSxDQUFDLE9BQU8sZUFDYix1QkFBQyxXQUFNLENBQUMsTUFBTSxjQUNaLHVCQUFDLFdBQU0sQ0FBQyxLQUFLLGlDQUE4QixHQUM3QixFQUNoQix1QkFBQywwQkFBVyxJQUNWLFlBQVksRUFBRSxZQUFZLEVBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLEtBQUssRUFBRSxLQUFLLEdBQ1osSUFDYSxJQUNWLENBQ1YsQ0FBQztBQUNKLENBQUMifQ==