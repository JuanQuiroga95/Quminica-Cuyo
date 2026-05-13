"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_slot_1 = require("@radix-ui/react-slot");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const Provider = react_hook_form_1.FormProvider;
const FormFieldContext = (0, react_1.createContext)({});
const Field = ({ ...props }) => {
    return ((0, jsx_runtime_1.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { ...props }) }));
};
const FormItemContext = (0, react_1.createContext)({});
const useFormField = () => {
    const fieldContext = (0, react_1.useContext)(FormFieldContext);
    const itemContext = (0, react_1.useContext)(FormItemContext);
    const { getFieldState } = (0, react_hook_form_1.useFormContext)();
    const formState = (0, react_hook_form_1.useFormState)({ name: fieldContext.name });
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within a FormField");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formLabelId: `${id}-form-item-label`,
        formDescriptionId: `${id}-form-item-description`,
        formErrorMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
const Item = (0, react_1.forwardRef)(({ className, ...props }, ref) => {
    const id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsx)(FormItemContext.Provider, { value: { id }, children: (0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, ui_1.clx)("flex flex-col space-y-2", className), ...props }) }));
});
Item.displayName = "Form.Item";
const Label = (0, react_1.forwardRef)(({ className, optional = false, tooltip, icon, ...props }, ref) => {
    const { formLabelId, formItemId } = useFormField();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-1", children: [(0, jsx_runtime_1.jsx)(ui_1.Label, { id: formLabelId, ref: ref, className: (0, ui_1.clx)(className), htmlFor: formItemId, size: "small", weight: "plus", ...props }), tooltip && ((0, jsx_runtime_1.jsx)(ui_1.Tooltip, { content: tooltip, children: (0, jsx_runtime_1.jsx)(icons_1.InformationCircleSolid, { className: "text-ui-fg-muted" }) })), icon, optional && ((0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: "Optional" }))] }));
});
Label.displayName = "Form.Label";
const Control = (0, react_1.forwardRef)(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formErrorMessageId, formLabelId, } = useFormField();
    return ((0, jsx_runtime_1.jsx)(react_slot_1.Slot, { ref: ref, id: formItemId, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formErrorMessageId}`, "aria-invalid": !!error, "aria-labelledby": formLabelId, ...props }));
});
Control.displayName = "Form.Control";
const Hint = (0, react_1.forwardRef)(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return ((0, jsx_runtime_1.jsx)(ui_1.Hint, { ref: ref, id: formDescriptionId, className: className, ...props }));
});
Hint.displayName = "Form.Hint";
const ErrorMessage = (0, react_1.forwardRef)(({ className, children, ...props }, ref) => {
    const { error, formErrorMessageId } = useFormField();
    const msg = error ? String(error?.message) : children;
    if (!msg || msg === "undefined") {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(ui_1.Hint, { ref: ref, id: formErrorMessageId, className: className, variant: error ? "error" : "info", ...props, children: msg }));
});
ErrorMessage.displayName = "Form.ErrorMessage";
const Form = Object.assign(Provider, {
    Item,
    Label,
    Control,
    Hint,
    ErrorMessage,
    Field,
});
exports.Form = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi9mb3JtL2Zvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQscUNBTXNCO0FBRXRCLHFEQUE0QztBQUM1QyxpQ0FNZTtBQUNmLHFEQVF5QjtBQUV6QixNQUFNLFFBQVEsR0FBRyw4QkFBWSxDQUFDO0FBUzlCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxxQkFBYSxFQUNwQyxFQUEyQixDQUM1QixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsQ0FHWixFQUNBLEdBQUcsS0FBSyxFQUM2QixFQUFFLEVBQUU7SUFDekMsT0FBTyxDQUNMLHVCQUFDLGdCQUFnQixDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUNwRCx1QkFBQyw0QkFBVSxPQUFLLEtBQUssR0FBSSxHQUNDLENBQzdCLENBQUM7QUFDSixDQUFDLENBQUM7QUFNRixNQUFNLGVBQWUsR0FBRyxJQUFBLHFCQUFhLEVBQ25DLEVBQTBCLENBQzNCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7SUFDeEIsTUFBTSxZQUFZLEdBQUcsSUFBQSxrQkFBVSxFQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBQSxrQkFBVSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFBLGdDQUFjLEdBQUUsQ0FBQztJQUUzQyxNQUFNLFNBQVMsR0FBRyxJQUFBLDhCQUFZLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUQsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7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