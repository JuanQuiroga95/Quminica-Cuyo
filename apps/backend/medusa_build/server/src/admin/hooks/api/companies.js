"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRemoveCompanyFromCustomerGroup = exports.useAddCompanyToCustomerGroup = exports.useDeleteCompany = exports.useUpdateCompany = exports.useCreateCompany = exports.useCompany = exports.useCompanies = exports.companyQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const query_key_factory_1 = require("../../lib/query-key-factory");
const client_1 = require("../../lib/client");
exports.companyQueryKey = (0, query_key_factory_1.queryKeysFactory)("company");
const useCompanies = (query, options) => {
    const filterQuery = new URLSearchParams(query).toString();
    const fetchCompanies = async () => client_1.sdk.client.fetch(`/admin/companies${filterQuery ? `?${filterQuery}` : ""}`, {
        method: "GET",
    });
    return (0, react_query_1.useQuery)({
        queryKey: exports.companyQueryKey.list(query),
        queryFn: fetchCompanies,
        ...options,
    });
};
exports.useCompanies = useCompanies;
const useCompany = (companyId, query, options) => {
    const filterQuery = new URLSearchParams(query).toString();
    const fetchCompany = async () => client_1.sdk.client.fetch(`/admin/companies/${companyId}${filterQuery ? `?${filterQuery}` : ""}`, {
        method: "GET",
    });
    return (0, react_query_1.useQuery)({
        queryKey: exports.companyQueryKey.detail(companyId),
        queryFn: fetchCompany,
        ...options,
    });
};
exports.useCompany = useCompany;
const useCreateCompany = (options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (company) => client_1.sdk.client.fetch("/admin/companies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: company,
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.lists(),
            });
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.detail(data.id),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useCreateCompany = useCreateCompany;
const useUpdateCompany = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (company) => client_1.sdk.client.fetch(`/admin/companies/${companyId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: company,
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.lists(),
            });
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.detail(companyId),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useUpdateCompany = useUpdateCompany;
const useDeleteCompany = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: () => client_1.sdk.client.fetch(`/admin/companies/${companyId}`, {
            method: "DELETE",
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.lists(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useDeleteCompany = useDeleteCompany;
const useAddCompanyToCustomerGroup = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (groupId) => client_1.sdk.client.fetch(`/admin/companies/${companyId}/customer-group`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: { group_id: groupId },
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.lists(),
            });
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.detail(companyId),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useAddCompanyToCustomerGroup = useAddCompanyToCustomerGroup;
const useRemoveCompanyFromCustomerGroup = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (groupId) => client_1.sdk.client.fetch(`/admin/companies/${companyId}/customer-group/${groupId}`, {
            method: "DELETE",
            headers: {
                Accept: "text/plain",
            },
        }),
        onSuccess: (_, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.lists(),
            });
            queryClient.invalidateQueries({
                queryKey: exports.companyQueryKey.detail(companyId),
            });
            options?.onSuccess?.(undefined, variables, context);
        },
        ...options,
    });
};
exports.useRemoveCompanyFromCustomerGroup = useRemoveCompanyFromCustomerGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2hvb2tzL2FwaS9jb21wYW5pZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BLHVEQU8rQjtBQUMvQixtRUFBK0Q7QUFDL0QsNkNBQXVDO0FBRTFCLFFBQUEsZUFBZSxHQUFHLElBQUEsb0NBQWdCLEVBQUMsU0FBUyxDQUFDLENBQUM7QUFFcEQsTUFBTSxZQUFZLEdBQUcsQ0FDMUIsS0FBMkIsRUFDM0IsT0FLQyxFQUNELEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUxRCxNQUFNLGNBQWMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUNoQyxZQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDZCxtQkFBbUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDekQ7UUFDRSxNQUFNLEVBQUUsS0FBSztLQUNkLENBQ0YsQ0FBQztJQUVKLE9BQU8sSUFBQSxzQkFBUSxFQUFDO1FBQ2QsUUFBUSxFQUFFLHVCQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxPQUFPLEVBQUUsY0FBYztRQUN2QixHQUFHLE9BQU87S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUF4QlcsUUFBQSxZQUFZLGdCQXdCdkI7QUFFSyxNQUFNLFVBQVUsR0FBRyxDQUN4QixTQUFpQixFQUNqQixLQUEyQixFQUMzQixPQUtDLEVBQ0QsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTFELE1BQU0sWUFBWSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQzlCLFlBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNkLG9C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