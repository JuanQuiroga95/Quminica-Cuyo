"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePrompt = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const DeletePrompt = ({ handleDelete, loading, open, setOpen, }) => {
    const handleConfirmDelete = async () => {
        handleDelete();
        setOpen(false);
    };
    return ((0, jsx_runtime_1.jsx)(ui_1.Prompt, { open: open, onOpenChange: setOpen, children: (0, jsx_runtime_1.jsxs)(ui_1.Prompt.Content, { className: "p-4 pb-0 border-b shadow-ui-fg-shadow", children: [(0, jsx_runtime_1.jsx)(ui_1.Prompt.Title, { children: "Confirm Deletion" }), (0, jsx_runtime_1.jsx)(ui_1.Prompt.Description, { children: "Are you sure you want to delete this item? This action cannot be undone." }), (0, jsx_runtime_1.jsxs)(ui_1.Prompt.Footer, { children: [(0, jsx_runtime_1.jsxs)(ui_1.Button, { variant: "danger", onClick: handleConfirmDelete, isLoading: loading, children: [(0, jsx_runtime_1.jsx)(icons_1.Trash, {}), "Delete"] }), (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", onClick: () => setOpen(false), children: "Cancel" })] })] }) }));
};
exports.DeletePrompt = DeletePrompt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXByb21wdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi9kZWxldGUtcHJvbXB0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQXdDO0FBQ3hDLHFDQUE4QztBQVN2QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQzNCLFlBQVksRUFDWixPQUFPLEVBQ1AsSUFBSSxFQUNKLE9BQU8sR0FDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLElBQUksRUFBRTtRQUNyQyxZQUFZLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsdUJBQUMsV0FBTSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sWUFDdkMsd0JBQUMsV0FBTSxDQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUMsdUNBQXVDLGFBQy9ELHVCQUFDLFdBQU0sQ0FBQyxLQUFLLG1DQUFnQyxFQUM3Qyx1QkFBQyxXQUFNLENBQUMsV0FBVywyRkFHRSxFQUNyQix3QkFBQyxXQUFNLENBQUMsTUFBTSxlQUNaLHdCQUFDLFdBQU0sSUFDTCxPQUFPLEVBQUMsUUFBUSxFQUNoQixPQUFPLEVBQUUsbUJBQW1CLEVBQzVCLFNBQVMsRUFBRSxPQUFPLGFBRWxCLHVCQUFDLGFBQUssS0FBRyxjQUVGLEVBQ1QsdUJBQUMsV0FBTSxJQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBRWhELElBQ0ssSUFDRCxHQUNWLENBQ1YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQW5DVyxRQUFBLFlBQVksZ0JBbUN2QiJ9