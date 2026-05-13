"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageQuoteForm = exports.ManageQuoteFormSchema = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// @ts-nocheck
const zod_1 = require("@hookform/resolvers/zod");
const ui_1 = require("@medusajs/ui");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const zod_2 = require("zod");
const route_focus_modal_1 = require("../../../../components/common/modals/route-focus-modal");
const api_1 = require("../../../../hooks/api");
const utils_1 = require("../../../../utils");
const manage_items_section_1 = require("./manage-items-section");
exports.ManageQuoteFormSchema = zod_2.z.object({});
const ManageQuoteForm = ({ order }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { handleSuccess } = (0, route_focus_modal_1.useRouteModal)();
    const { order: preview } = (0, api_1.useOrderPreview)(order.id);
    /**
     * MUTATIONS
     */
    const { mutateAsync: confirmQuote, isPending: isRequesting } = (0, api_1.useConfirmQuote)(order.id);
    /**
     * FORM
     */
    const form = (0, react_hook_form_1.useForm)({
        defaultValues: () => Promise.resolve({}),
        resolver: (0, zod_1.zodResolver)(exports.ManageQuoteFormSchema),
    });
    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            await confirmQuote({});
            ui_1.toast.success("Successfully updated quote");
            handleSuccess();
        }
        catch (e) {
            ui_1.toast.error(t("general.error"), {
                description: e.message,
            });
        }
    });
    if (!preview) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    return ((0, jsx_runtime_1.jsx)(route_focus_modal_1.RouteFocusModal.Form, { form: form, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [(0, jsx_runtime_1.jsx)(route_focus_modal_1.RouteFocusModal.Header, {}), (0, jsx_runtime_1.jsx)(route_focus_modal_1.RouteFocusModal.Body, { className: "flex size-full justify-center overflow-y-auto", children: (0, jsx_runtime_1.jsxs)("div", { className: "mt-16 w-[720px] max-w-[100%] px-4 md:p-0", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h1", children: "Manage Quote" }), (0, jsx_runtime_1.jsx)(manage_items_section_1.ManageItemsSection, { preview: preview, order: order }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8 border-y border-dotted py-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("span", { className: "txt-small text-ui-fg-subtle", children: t("orders.edits.currentTotal") }), (0, jsx_runtime_1.jsx)("span", { className: "txt-small text-ui-fg-subtle", children: (0, utils_1.formatAmount)(order.total, order.currency_code) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("span", { className: "txt-small text-ui-fg-subtle", children: t("orders.edits.newTotal") }), (0, jsx_runtime_1.jsx)("span", { className: "txt-small text-ui-fg-subtle", children: (0, utils_1.formatAmount)(preview.total, order.currency_code) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "p-8" })] }) }), (0, jsx_runtime_1.jsx)(route_focus_modal_1.RouteFocusModal.Footer, { children: (0, jsx_runtime_1.jsx)("div", { className: "flex w-full items-center justify-end gap-x-4", children: (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-end gap-x-2", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { type: "submit", variant: "primary", size: "small", children: t("actions.continue") }, "submit-button") }) }) })] }) }));
};
exports.ManageQuoteForm = ManageQuoteForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLXF1b3RlLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3F1b3RlLW1hbmFnZS9tYW5hZ2UtcXVvdGUtZm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGNBQWM7QUFDZCxpREFBc0Q7QUFFdEQscUNBQXNEO0FBQ3RELHFEQUEwQztBQUMxQyxpREFBK0M7QUFDL0MsNkJBQXdCO0FBQ3hCLDhGQUdnRTtBQUNoRSwrQ0FBeUU7QUFDekUsNkNBQWlEO0FBQ2pELGlFQUE0RDtBQUUvQyxRQUFBLHFCQUFxQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFRM0MsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBeUIsRUFBRSxFQUFFO0lBQ2xFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFBLDhCQUFjLEdBQUUsQ0FBQztJQUMvQixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBQSxpQ0FBYSxHQUFFLENBQUM7SUFDMUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFBLHFCQUFlLEVBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXJEOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxHQUMxRCxJQUFBLHFCQUFlLEVBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTVCOztPQUVHO0lBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBQSx5QkFBTyxFQUE0QjtRQUM5QyxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDeEMsUUFBUSxFQUFFLElBQUEsaUJBQVcsRUFBQyw2QkFBcUIsQ0FBQztLQUM3QyxDQUFDLENBQUM7SUFFSCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNwRCxJQUFJLENBQUM7WUFDSCxNQUFNLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV2QixVQUFLLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDNUMsYUFBYSxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxVQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDOUIsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU8sa0RBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxPQUFPLENBQ0wsdUJBQUMsbUNBQWUsQ0FBQyxJQUFJLElBQUMsSUFBSSxFQUFFLElBQUksWUFDOUIsa0NBQU0sUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsc0JBQXNCLGFBQzVELHVCQUFDLG1DQUFlLENBQUMsTUFBTSxLQUFHLEVBRTFCLHVCQUFDLG1DQUFlLENBQUMsSUFBSSxJQUFDLFNBQVMsRUFBQywrQ0FBK0MsWUFDN0UsaUNBQUssU0FBUyxFQUFDLDBDQUEwQyxhQUN2RCx1QkFBQyxZQUFPLElBQUMsS0FBSyxFQUFDLElBQUksNkJBQXVCLEVBRTFDLHVCQUFDLHlDQUFrQixJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBSSxFQUd0RCxpQ0FBSyxTQUFTLEVBQUMsa0NBQWtDLGFBQy9DLGlDQUFLLFNBQVMsRUFBQyx3Q0FBd0MsYUFDckQsaUNBQU0sU0FBUyxFQUFDLDZCQUE2QixZQUMxQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsR0FDMUIsRUFFUCxpQ0FBTSxTQUFTLEVBQUMsNkJBQTZCLFlBQzFDLElBQUEsb0JBQVksRUFBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FDMUMsSUFDSCxFQUVOLGlDQUFLLFNBQVMsRUFBQyx3Q0FBd0MsYUFDckQsaUNBQU0sU0FBUyxFQUFDLDZCQUE2QixZQUMxQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsR0FDdEIsRUFFUCxpQ0FBTSxTQUFTLEVBQUMsNkJBQTZCLFlBQzFDLElBQUEsb0JBQVksRUFBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FDNUMsSUFDSCxJQUNGLEVBRU4sZ0NBQUssU0FBUyxFQUFDLEtBQUssR0FBRyxJQUNuQixHQUNlLEVBRXZCLHVCQUFDLG1DQUFlLENBQUMsTUFBTSxjQUNyQixnQ0FBSyxTQUFTLEVBQUMsOENBQThDLFlBQzNELGdDQUFLLFNBQVMsRUFBQyx1Q0FBdUMsWUFDcEQsdUJBQUMsV0FBTSxJQUVMLElBQUksRUFBQyxRQUFRLEVBQ2IsT0FBTyxFQUFDLFNBQVMsRUFDakIsSUFBSSxFQUFDLE9BQU8sWUFFWCxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFMbEIsZUFBZSxDQU1aLEdBQ0wsR0FDRixHQUNpQixJQUNwQixHQUNjLENBQ3hCLENBQUM7QUFDSixDQUFDLENBQUM7QUEzRlcsUUFBQSxlQUFlLG1CQTJGMUIifQ==