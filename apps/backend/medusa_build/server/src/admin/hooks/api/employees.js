"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteEmployee = exports.useUpdateEmployee = exports.useCreateEmployee = exports.useEmployees = exports.employeeQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const client_1 = require("../../lib/client");
const query_key_factory_1 = require("../../lib/query-key-factory");
exports.employeeQueryKey = (0, query_key_factory_1.queryKeysFactory)("employee");
const useEmployees = (companyId, query, options) => {
    const filterQuery = new URLSearchParams(query).toString();
    const fetchEmployees = async () => client_1.sdk.client.fetch(`/admin/companies/${companyId}/employees${filterQuery ? `?${filterQuery}` : ""}`, {
        method: "GET",
    });
    return (0, react_query_1.useQuery)({
        queryKey: exports.employeeQueryKey.list(companyId),
        queryFn: fetchEmployees,
        ...options,
    });
};
exports.useEmployees = useEmployees;
const useCreateEmployee = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (employee) => client_1.sdk.client.fetch(`/admin/companies/${companyId}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: employee,
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.employeeQueryKey.list(companyId),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useCreateEmployee = useCreateEmployee;
const useUpdateEmployee = (companyId, employeeId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (employee) => client_1.sdk.client.fetch(`/admin/companies/${companyId}/employees/${employeeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: employee,
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.employeeQueryKey.detail(employeeId),
            });
            queryClient.invalidateQueries({
                queryKey: exports.employeeQueryKey.list(companyId),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useUpdateEmployee = useUpdateEmployee;
const useDeleteEmployee = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (employeeId) => client_1.sdk.client.fetch(`/admin/companies/${companyId}/employees/${employeeId}`, {
            method: "DELETE",
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.employeeQueryKey.list(companyId),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useDeleteEmployee = useDeleteEmployee;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2hvb2tzL2FwaS9lbXBsb3llZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BLHVEQU8rQjtBQUMvQiw2Q0FBdUM7QUFDdkMsbUVBQStEO0FBRWxELFFBQUEsZ0JBQWdCLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxVQUFVLENBQUMsQ0FBQztBQUV0RCxNQUFNLFlBQVksR0FBRyxDQUMxQixTQUFpQixFQUNqQixLQUEyQixFQUMzQixPQUtDLEVBQ0QsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTFELE1BQU0sY0FBYyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQ2hDLFlBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNkLG9CQUFvQixTQUFTLGFBQzNCLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDcEMsRUFBRSxFQUNGO1FBQ0UsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUNGLENBQUM7SUFFSixPQUFPLElBQUEsc0JBQVEsRUFBQztRQUNkLFFBQVEsRUFBRSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFDLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEdBQUcsT0FBTztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQTNCVyxRQUFBLFlBQVksZ0JBMkJ2QjtBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FDL0IsU0FBaUIsRUFDakIsT0FJQyxFQUNELEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxJQUFBLDRCQUFjLEdBQUUsQ0FBQztJQUVyQyxPQUFPLElBQUEseUJBQVcsRUFBQztRQUNqQixVQUFVLEVBQUUsQ0FBQyxRQUE2QixFQUFFLEVBQUUsQ0FDNUMsWUFBRyxDQUFDLE1B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