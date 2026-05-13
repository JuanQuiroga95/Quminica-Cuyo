"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateQuoteMessage = exports.useRejectQuote = exports.useSendQuote = exports.useConfirmQuote = exports.useUpdateAddedQuoteItem = exports.useRemoveQuoteItem = exports.useUpdateQuoteItem = exports.useAddItemsToQuote = exports.useQuote = exports.useQuotes = exports.quoteQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const query_key_factory_1 = require("../../lib/query-key-factory");
const client_1 = require("../../lib/client");
const order_preview_1 = require("./order-preview");
exports.quoteQueryKey = (0, query_key_factory_1.queryKeysFactory)("quote");
const useQuotes = (query, options) => {
    const fetchQuotes = (query, headers) => client_1.sdk.client.fetch(`/admin/quotes`, {
        query,
        headers,
    });
    const { data, ...rest } = (0, react_query_1.useQuery)({
        ...options,
        queryFn: () => fetchQuotes(query),
        queryKey: exports.quoteQueryKey.list(),
    });
    return { ...data, ...rest };
};
exports.useQuotes = useQuotes;
const useQuote = (id, query, options) => {
    const fetchQuote = (id, query, headers) => client_1.sdk.client.fetch(`/admin/quotes/${id}`, {
        query,
        headers,
    });
    const { data, ...rest } = (0, react_query_1.useQuery)({
        queryFn: () => fetchQuote(id, query),
        queryKey: exports.quoteQueryKey.detail(id),
        ...options,
    });
    return { ...data, ...rest };
};
exports.useQuote = useQuote;
const useAddItemsToQuote = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (payload) => client_1.sdk.admin.orderEdit.addItems(id, payload),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.detail(id),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useAddItemsToQuote = useAddItemsToQuote;
const useUpdateQuoteItem = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: ({ itemId, ...payload }) => {
            return client_1.sdk.admin.orderEdit.updateOriginalItem(id, itemId, payload);
        },
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.detail(id),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useUpdateQuoteItem = useUpdateQuoteItem;
const useRemoveQuoteItem = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (actionId) => client_1.sdk.admin.orderEdit.removeAddedItem(id, actionId),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.detail(id),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useRemoveQuoteItem = useRemoveQuoteItem;
const useUpdateAddedQuoteItem = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: ({ actionId, ...payload }) => {
            return client_1.sdk.admin.orderEdit.updateAddedItem(id, actionId, payload);
        },
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.detail(id),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useUpdateAddedQuoteItem = useUpdateAddedQuoteItem;
const useConfirmQuote = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: () => client_1.sdk.admin.orderEdit.request(id),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.details(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useConfirmQuote = useConfirmQuote;
const useSendQuote = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    const sendQuote = async (id) => client_1.sdk.client.fetch(`/admin/quotes/${id}/send`, {
        method: "POST",
    });
    return (0, react_query_1.useMutation)({
        mutationFn: () => sendQuote(id),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.details(),
            });
            queryClient.invalidateQueries({
                queryKey: exports.quoteQueryKey.detail(id),
            });
            queryClient.invalidateQueries({
                queryKey: exports.quoteQueryKey.lists(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useSendQuote = useSendQuote;
const useRejectQuote = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    const rejectQuote = async (id) => client_1.sdk.client.fetch(`/admin/quotes/${id}/reject`, {
        method: "POST",
    });
    return (0, react_query_1.useMutation)({
        mutationFn: () => rejectQuote(id),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: order_preview_1.orderPreviewQueryKey.details(),
            });
            queryClient.invalidateQueries({
                queryKey: exports.quoteQueryKey.detail(id),
            });
            queryClient.invalidateQueries({
                queryKey: exports.quoteQueryKey.lists(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useRejectQuote = useRejectQuote;
const useCreateQuoteMessage = (id, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    const sendQuote = async (id, body) => client_1.sdk.client.fetch(`/admin/quotes/${id}/messages`, {
        body,
        method: "POST",
    });
    return (0, react_query_1.useMutation)({
        mutationFn: (body) => sendQuote(id, body),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.quoteQueryKey.details(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useCreateQuoteMessage = useCreateQuoteMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2hvb2tzL2FwaS9xdW90ZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLHVEQU8rQjtBQUMvQixtRUFBK0Q7QUFDL0QsNkNBQXVDO0FBQ3ZDLG1EQUF1RDtBQUUxQyxRQUFBLGFBQWEsR0FBRyxJQUFBLG9DQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWhELE1BQU0sU0FBUyxHQUFHLENBQ3ZCLEtBQXdCLEVBQ3hCLE9BS0MsRUFDRCxFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUF3QixFQUFFLE9BQXVCLEVBQUUsRUFBRSxDQUN4RSxZQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBc0IsZUFBZSxFQUFFO1FBQ3JELEtBQUs7UUFDTCxPQUFPO0tBQ1IsQ0FBQyxDQUFDO0lBRUwsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLElBQUEsc0JBQVEsRUFBQztRQUNqQyxHQUFHLE9BQU87UUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBRTtRQUNsQyxRQUFRLEVBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUU7S0FDL0IsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsU0FBUyxhQXNCcEI7QUFFSyxNQUFNLFFBQVEsR0FBRyxDQUN0QixFQUFVLEVBQ1YsS0FBeUIsRUFDekIsT0FLQyxFQUNELEVBQUU7SUFDRixNQUFNLFVBQVUsR0FBRyxDQUNqQixFQUFVLEVBQ1YsS0FBeUIsRUFDekIsT0FBdUIsRUFDdkIsRUFBRSxDQUNGLFlBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFxQixpQkFBaUIsRUFBRSxFQUFFLEVBQUU7UUFDMUQsS0FBSztRQUNM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