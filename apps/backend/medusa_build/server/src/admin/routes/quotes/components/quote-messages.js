"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuoteMessageForm = void 0;
exports.QuoteMessages = QuoteMessages;
const jsx_runtime_1 = require("react/jsx-runtime");
// @ts-nocheck
const zod_1 = require("@hookform/resolvers/zod");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const zod_2 = require("zod");
const form_1 = require("../../../components/common/form");
const quotes_1 = require("../../../hooks/api/quotes");
const quote_details_1 = require("./quote-details");
exports.CreateQuoteMessageForm = zod_2.z.object({
    text: zod_2.z.string().min(1),
    item_id: zod_2.z.string().nullish(),
});
function QuoteMessages({ quote, preview, }) {
    const { quoteId } = (0, react_router_dom_1.useParams)();
    /**
     * FORM
     */
    const form = (0, react_hook_form_1.useForm)({
        defaultValues: () => Promise.resolve({
            text: "",
            item_id: null,
        }),
        resolver: (0, zod_1.zodResolver)(exports.CreateQuoteMessageForm),
    });
    const { mutateAsync: createMessage, isPending: isCreatingMessage } = (0, quotes_1.useCreateQuoteMessage)(quoteId);
    const originalItemsMap = (0, react_1.useMemo)(() => {
        return new Map(quote?.draft_order?.items?.map((item) => [item.id, item]));
    }, [quote?.draft_order]);
    const previewItemsMap = (0, react_1.useMemo)(() => {
        return new Map(preview?.items?.map((item) => [item.id, item]));
    }, [preview]);
    const handleCreateMessage = async () => {
        await createMessage({}, {
            onSuccess: () => ui_1.toast.success("Successfully sent message to customer"),
            onError: (e) => ui_1.toast.error(e.message),
        });
    };
    const handleSubmit = form.handleSubmit(async (data) => {
        await createMessage({
            text: data.text,
            item_id: data.item_id,
        }, {
            onSuccess: () => {
                form.reset();
                ui_1.toast.success("Successfully sent message to customer");
            },
            onError: (e) => ui_1.toast.error(e.message),
        });
    });
    return ((0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "divide-y divide-dashed p-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between px-6 py-4", children: (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", children: "Messages" }) }), (0, jsx_runtime_1.jsx)("div", { children: quote.messages?.map((message) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("px-6 py-4 text-sm flex flex-col gap-y-2", {
                        "!bg-ui-bg-subtle !inset-x-5 !inset-y-3": !!message.admin_id,
                    }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "font-medium font-sans txt-compact-small text-ui-fg-subtle ", children: [!!message.admin &&
                                    `${message.admin.first_name} ${message.admin.last_name}`, !!message.customer &&
                                    `${message.customer.first_name} ${message.customer.last_name}`] }), !!message.item_id && ((0, jsx_runtime_1.jsx)("div", { className: "border border-dashed border-neutral-400 my-2", children: (0, jsx_runtime_1.jsx)(quote_details_1.QuoteItem, { item: previewItemsMap.get(message.item_id), originalItem: originalItemsMap.get(message.item_id), currencyCode: quote.draft_order.currency_code }) })), (0, jsx_runtime_1.jsx)("div", { children: message.text })] }, message.id))) }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 pt-5 pb-3", children: (0, jsx_runtime_1.jsx)(form_1.Form, { ...form, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "flex flex-col gap-y-3", children: [(0, jsx_runtime_1.jsx)(form_1.Form.Field, { control: form.control, name: "item_id", render: ({ field: { onChange, ref, ...field } }) => {
                                    return ((0, jsx_runtime_1.jsxs)(form_1.Form.Item, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)(form_1.Form.Label, { children: "Pick Quote Item" }), (0, jsx_runtime_1.jsx)(form_1.Form.Hint, { children: "Select a quote item to write a message around" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1", children: (0, jsx_runtime_1.jsx)(form_1.Form.Control, { children: (0, jsx_runtime_1.jsxs)(ui_1.Select, { onValueChange: onChange, ...field, value: field.value ?? undefined, children: [(0, jsx_runtime_1.jsx)(ui_1.Select.Trigger, { className: "bg-ui-bg-base", ref: ref, children: (0, jsx_runtime_1.jsx)(ui_1.Select.Value, { placeholder: "Select Item" }) }), (0, jsx_runtime_1.jsx)(ui_1.Select.Content, { children: preview.items.map((l) => ((0, jsx_runtime_1.jsx)(ui_1.Select.Item, { value: l.id, children: l.variant_sku }, l.id))) })] }) }) })] }), (0, jsx_runtime_1.jsx)(form_1.Form.ErrorMessage, {})] }));
                                } }), (0, jsx_runtime_1.jsx)(form_1.Form.Field, { name: `text`, render: ({ field: { ref, ...field } }) => {
                                    return ((0, jsx_runtime_1.jsxs)(form_1.Form.Item, { children: [(0, jsx_runtime_1.jsx)(form_1.Form.Control, { children: (0, jsx_runtime_1.jsx)(ui_1.Textarea, { ...field }) }), (0, jsx_runtime_1.jsx)(form_1.Form.ErrorMessage, {})] }));
                                } }), (0, jsx_runtime_1.jsx)(ui_1.Button, { size: "small", type: "submit", className: "self-end", disabled: isCreatingMessage, onClick: () => handleCreateMessage, children: "Send" })] }) }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUtbWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3F1b3RlLW1lc3NhZ2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUEwQkEsc0NBc0tDOztBQWhNRCxjQUFjO0FBQ2QsaURBQXNEO0FBRXRELHFDQVFzQjtBQUN0QixpQ0FBZ0M7QUFDaEMscURBQTBDO0FBQzFDLHVEQUE2QztBQUM3Qyw2QkFBd0I7QUFFeEIsMERBQXVEO0FBQ3ZELHNEQUFrRTtBQUNsRSxtREFBNEM7QUFFL0IsUUFBQSxzQkFBc0IsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtDQUM5QixDQUFDLENBQUM7QUFFSCxTQUFnQixhQUFhLENBQUMsRUFDNUIsS0FBSyxFQUNMLE9BQU8sR0FJUjtJQUNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFBLDRCQUFTLEdBQUUsQ0FBQztJQUVoQzs7T0FFRztJQUNILE1BQU0sSUFBSSxHQUFHLElBQUEseUJBQU8sRUFBeUM7UUFDM0QsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFDSixRQUFRLEVBQUUsSUFBQSxpQkFBVyxFQUFDLDhCQUFzQixDQUFDO0tBQzlDLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxHQUNoRSxJQUFBLDhCQUFxQixFQUFDLE9BQVEsQ0FBQyxDQUFDO0lBRWxDLE1BQU0sZ0JB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