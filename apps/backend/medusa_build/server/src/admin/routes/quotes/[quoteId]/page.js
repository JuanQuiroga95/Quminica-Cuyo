"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const json_view_section_1 = require("../../../components/common/json-view-section");
const api_1 = require("../../../hooks/api");
const quotes_1 = require("../../../hooks/api/quotes");
const utils_1 = require("../../../utils");
const quote_details_1 = require("../components/quote-details");
const quote_messages_1 = require("../components/quote-messages");
const QuoteDetails = () => {
    const { quoteId } = (0, react_router_dom_1.useParams)();
    const [showSendQuote, setShowSendQuote] = (0, react_1.useState)(false);
    const [showRejectQuote, setShowRejectQuote] = (0, react_1.useState)(false);
    const prompt = (0, ui_1.usePrompt)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { quote, isLoading } = (0, quotes_1.useQuote)(quoteId, {
        fields: "*draft_order.customer,*draft_order.customer.employee,*draft_order.customer.employee.company",
    });
    const { order: preview, isLoading: isPreviewLoading } = (0, api_1.useOrderPreview)(quote?.draft_order_id, {}, { enabled: !!quote?.draft_order_id });
    const { mutateAsync: sendQuote, isPending: isSendingQuote } = (0, quotes_1.useSendQuote)(quoteId);
    const { mutateAsync: rejectQuote, isPending: isRejectingQuote } = (0, quotes_1.useRejectQuote)(quoteId);
    (0, react_1.useEffect)(() => {
        if (["pending_merchant", "customer_rejected"].includes(quote?.status)) {
            setShowSendQuote(true);
        }
        else {
            setShowSendQuote(false);
        }
        if (["customer_rejected", "merchant_rejected", "accepted"].includes(quote?.status)) {
            setShowRejectQuote(false);
        }
        else {
            setShowRejectQuote(true);
        }
    }, [quote]);
    const handleSendQuote = async () => {
        const res = await prompt({
            title: "Send quote?",
            description: "You are about to send this quote to the customer. Do you want to continue?",
            confirmText: t("actions.continue"),
            cancelText: t("actions.cancel"),
            variant: "confirmation",
        });
        if (res) {
            await sendQuote({}, {
                onSuccess: () => ui_1.toast.success("Successfully sent quote to customer"),
                onError: (e) => ui_1.toast.error(e.message),
            });
        }
    };
    const handleRejectQuote = async () => {
        const res = await prompt({
            title: "Reject quote?",
            description: "You are about to reject this customer's quote. Do you want to continue?",
            confirmText: t("actions.continue"),
            cancelText: t("actions.cancel"),
            variant: "confirmation",
        });
        if (res) {
            await rejectQuote(void 0, {
                onSuccess: () => ui_1.toast.success("Successfully rejected customer's quote"),
                onError: (e) => ui_1.toast.error(e.message),
            });
        }
    };
    if (isLoading || !quote) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    if (isPreviewLoading) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    if (!isPreviewLoading && !preview) {
        throw "preview not found";
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-x-4 lg:flex-row xl:items-start", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-y-3", children: [quote.status === "accepted" && ((0, jsx_runtime_1.jsx)(ui_1.Container, { className: "divide-y divide-dashed p-0", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-6 py-4", children: [(0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "txt-compact-small", children: [(0, jsx_runtime_1.jsx)(icons_1.CheckCircleSolid, { className: "inline-block mr-2 text-green-500 text-lg" }), "Quote accepted by customer. Order is ready for processing."] }), (0, jsx_runtime_1.jsx)(ui_1.Button, { size: "small", onClick: () => navigate(`/orders/${quote.draft_order_id}`), children: "View Order" })] }) })), (0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "divide-y divide-dashed p-0", children: [(0, jsx_runtime_1.jsx)(quote_details_1.QuoteDetailsHeader, { quote: quote }), (0, jsx_runtime_1.jsx)(quote_details_1.QuoteItems, { order: quote.draft_order, preview: preview }), (0, jsx_runtime_1.jsx)(quote_details_1.CostBreakdown, { order: quote.draft_order }), (0, jsx_runtime_1.jsx)(quote_details_1.QuoteTotal, { order: quote.draft_order, preview: preview }), (showRejectQuote || showSendQuote) && ((0, jsx_runtime_1.jsxs)("div", { className: "bg-ui-bg-subtle flex items-center justify-end gap-x-2 rounded-b-xl px-4 py-4", children: [showRejectQuote && ((0, jsx_runtime_1.jsx)(ui_1.Button, { size: "small", variant: "secondary", onClick: () => handleRejectQuote(), disabled: isSendingQuote, children: "Reject Quote" })), showSendQuote && ((0, jsx_runtime_1.jsx)(ui_1.Button, { size: "small", variant: "secondary", onClick: () => handleSendQuote(), disabled: isSendingQuote, children: "Send Quote" }))] }))] }), (0, jsx_runtime_1.jsx)(quote_messages_1.QuoteMessages, { quote: quote, preview: preview }), (0, jsx_runtime_1.jsx)(json_view_section_1.JsonViewSection, { data: quote })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]", children: [(0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "divide-y p-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between px-6 py-4", children: (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", children: "Customer" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", weight: "plus", leading: "compact", children: "Email" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "text-sm text-pretty text-blue-500", to: `/customers/${quote.draft_order?.customer?.id}`, onClick: (e) => e.stopPropagation(), children: quote.draft_order?.customer?.email })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", weight: "plus", leading: "compact", children: "Phone" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", leading: "compact", className: "text-pretty", children: quote.draft_order?.customer?.phone })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", weight: "plus", leading: "compact", children: "Spending Limit" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", leading: "compact", className: "text-pretty", children: (0, utils_1.formatAmount)(quote?.customer?.employee?.spending_limit, quote?.customer?.employee?.company
                                                    ?.currency_code || "USD") })] })] }), (0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "divide-y p-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between px-6 py-4", children: (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", children: "Company" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { size: "small", weight: "plus", leading: "compact", children: "Name" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "text-sm text-pretty text-blue-500", to: `/companies/${quote?.customer?.employee?.company.id}`, onClick: (e) => e.stopPropagation(), children: quote?.customer?.employee?.company?.name })] })] })] })] }), (0, jsx_runtime_1.jsx)(ui_1.Toaster, {})] }));
};
exports.default = QuoteDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvcXVvdGVzL1txdW90ZUlkXS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQscUNBUXNCO0FBQ3RCLGlDQUE0QztBQUM1QyxpREFBK0M7QUFDL0MsdURBQWdFO0FBQ2hFLG9GQUErRTtBQUMvRSw0Q0FBcUQ7QUFDckQsc0RBSW1DO0FBQ25DLDBDQUE4QztBQUM5QywrREFLcUM7QUFDckMsaUVBQTZEO0FBRTdELE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBQSw0QkFBUyxHQUFFLENBQUM7SUFDaEMsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxNQUFNLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELE1BQU0sTUFBTSxHQUFHLElBQUEsY0FBUyxHQUFFLENBQUM7SUFDM0IsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUEsOEJBQWMsR0FBRSxDQUFDO0lBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUEsOEJBQVcsR0FBRSxDQUFDO0lBQy9CLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBQSxpQkFBUSxFQUFDLE9BQVEsRUFBRTtRQUM5QyxNQUFNLEVBQ0osNkZBQTZGO0tBQ2hHLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLElBQUEscUJBQWUsRUFDckUsS0FBSyxFQUFFLGNBQWUsRUFDdEIsRUFBRSxFQUNGLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxL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