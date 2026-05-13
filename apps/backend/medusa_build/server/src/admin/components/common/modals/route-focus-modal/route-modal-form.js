"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModalForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_router_dom_1 = require("react-router-dom");
const form_1 = require("../../form");
const RouteModalForm = ({ form, blockSearch = false, children, onClose, }) => {
    const { formState: { isDirty }, } = form;
    const blocker = (0, react_router_dom_1.useBlocker)(({ currentLocation, nextLocation }) => {
        const { isSubmitSuccessful } = nextLocation.state || {};
        if (isSubmitSuccessful) {
            onClose?.(true);
            return false;
        }
        const isPathChanged = currentLocation.pathname !== nextLocation.pathname;
        const isSearchChanged = currentLocation.search !== nextLocation.search;
        if (blockSearch) {
            const ret = isDirty && (isPathChanged || isSearchChanged);
            if (!ret) {
                onClose?.(isSubmitSuccessful);
            }
            return ret;
        }
        const ret = isDirty && isPathChanged;
        if (!ret) {
            onClose?.(isSubmitSuccessful);
        }
        return ret;
    });
    const handleCancel = () => {
        blocker?.reset?.();
    };
    const handleContinue = () => {
        blocker?.proceed?.();
        onClose?.(false);
    };
    return ((0, jsx_runtime_1.jsxs)(form_1.Form, { ...form, children: [children, (0, jsx_runtime_1.jsx)(ui_1.Prompt, { open: blocker.state === "blocked", variant: "confirmation", children: (0, jsx_runtime_1.jsxs)(ui_1.Prompt.Content, { children: [(0, jsx_runtime_1.jsxs)(ui_1.Prompt.Header, { children: [(0, jsx_runtime_1.jsx)(ui_1.Prompt.Title, { children: "Are you sure you want to leave this form?" }), (0, jsx_runtime_1.jsx)(ui_1.Prompt.Description, { children: "You have unsaved changes that will be lost if you exit this form." })] }), (0, jsx_runtime_1.jsxs)(ui_1.Prompt.Footer, { children: [(0, jsx_runtime_1.jsx)(ui_1.Prompt.Cancel, { onClick: handleCancel, type: "button", children: "Cancel" }), (0, jsx_runtime_1.jsx)(ui_1.Prompt.Action, { onClick: handleContinue, type: "button", children: "Continue" })] })] }) })] }));
};
exports.RouteModalForm = RouteModalForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtbW9kYWwtZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi9tb2RhbHMvcm91dGUtZm9jdXMtbW9kYWwvcm91dGUtbW9kYWwtZm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUFzQztBQUd0Qyx1REFBOEM7QUFDOUMscUNBQWtDO0FBUTNCLE1BQU0sY0FBYyxHQUFHLENBQXlDLEVBQ3JFLElBQUksRUFDSixXQUFXLEdBQUcsS0FBSyxFQUNuQixRQUFRLEVBQ1IsT0FBTyxHQUMyQixFQUFFLEVBQUU7SUFDdEMsTUFBTSxFQUNKLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUN2QixHQUFHLElBQUksQ0FBQztJQUVULE1BQU0sT0FBTyxHQUFHLElBQUEsNkJBQVUsRUFBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7UUFDL0QsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsWUFBWSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFFeEQsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxNQUFNLGVBQWUsR0FBRyxlQUFlLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFdkUsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixNQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksZUFBZSxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUVELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUVELE1BQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxhQUFhLENBQUM7UUFFckMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtRQUN4QixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUM7SUFFRixNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUU7UUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLHdCQUFDLFdBQUksT0FBSyxJQUFJLGFBQ1gsUUFBUSxFQUNULHVCQUFDLFdBQU0sSUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsT0FBTyxFQUFDLGNBQWMsWUFDL0Qsd0JBQUMsV0FBTSxDQUFDLE9BQU8sZUFDYix3QkFBQyxXQUFNLENBQUMsTUFBTSxlQUNaLHVCQUFDLFdBQU0sQ0FBQyxLQUFLLDREQUVFLEVBRWYsdUJBQUMsV0FBTSxDQUFDLFdBQVcsb0ZBRUUsSUFDUCxFQUVoQix3QkFBQyxXQUFNLENBQUMsTUFBTSxlQUNaLHVCQUFDLFdBQU0sQ0FBQyxNQUFNLElBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUMsUUFBUSx1QkFFbkMsRUFDaEIsdUJBQUMsV0FBTSxDQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxRQUFRLHlCQUVyQyxJQUNGLElBQ0QsR0FDVixJQUNKLENBQ1IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTVFVyxRQUFBLGNBQWMsa0JBNEV6QiJ9