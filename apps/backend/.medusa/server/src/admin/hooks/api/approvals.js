"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateApproval = exports.useApprovals = exports.useUpdateApprovalSettings = exports.approvalSettingsQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const client_1 = require("../../lib/client");
const query_key_factory_1 = require("../../lib/query-key-factory");
const companies_1 = require("./companies");
exports.approvalSettingsQueryKey = (0, query_key_factory_1.queryKeysFactory)("approvalSettings");
const useUpdateApprovalSettings = (companyId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (payload) => client_1.sdk.client.fetch(`/admin/companies/${companyId}/approval-settings`, {
            body: payload,
            method: "POST",
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.approvalSettingsQueryKey.detail(companyId),
            });
            queryClient.invalidateQueries({
                queryKey: companies_1.companyQueryKey.detail(companyId),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useUpdateApprovalSettings = useUpdateApprovalSettings;
const approvalQueryKey = (0, query_key_factory_1.queryKeysFactory)("approval");
const useApprovals = (query, options) => {
    const fetchApprovals = async () => client_1.sdk.client.fetch(`/admin/approvals`, {
        method: "GET",
        query,
    });
    return (0, react_query_1.useQuery)({
        queryKey: approvalQueryKey.list(query),
        queryFn: fetchApprovals,
        ...options,
    });
};
exports.useApprovals = useApprovals;
const useUpdateApproval = (approvalId, options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (payload) => client_1.sdk.client.fetch(`/admin/approvals/${approvalId}`, {
            body: payload,
            method: "POST",
        }),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: approvalQueryKey.lists(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useUpdateApproval = useUpdateApproval;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2hvb2tzL2FwaS9hcHByb3ZhbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFBLHVEQU0rQjtBQUMvQiw2Q0FBdUM7QUFDdkMsbUVBQStEO0FBQy9ELDJDQUE4QztBQUVqQyxRQUFBLHdCQUF3QixHQUFHLElBQUEsb0NBQWdCLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV0RSxNQUFNLHlCQUF5QixHQUFHLENBQ3ZDLFNBQWlCLEVBQ2pCLE9BSUMsRUFDRCxFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBQSw0QkFBYyxHQUFFLENBQUM7SUFFckMsT0FBTyxJQUFBLHlCQUFXLEVBQUM7UUFDakIsVUFBVSxFQUFFLENBQUMsT0FBb0MsRUFBRSxFQUFFLENBQ25ELFlBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNkLG9CQUFvQixTQUFTLG9CQUFvQixFQUNqRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLE1BQU07U0FDZixDQUNGO1FBQ0gsU0FBUyxFQUFFLENBQUMsSUFBUyxFQUFFLFNBQWMsRUFBRSxPQUFZLEVBQUUsRUFBRTtZQUNyRCxXQUFXLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFFBQVEsRUFBRSxnQ0FBd0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ3JELENBQUMsQ0FBQztZQUVILFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsUUFBUSxFQUFFLDJCQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUM1QyxDQUFDLENBQUM7WUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsR0FBRyxPQUFPO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBaENXLFFBQUEseUJBQXlCLDZCQWdDcEM7QUFFRixNQUFNLGdCQUFnQixHQUFHLElBQUEsb0NBQWdCLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFFL0MsTUFBTSxZQUFZLEdBQUcsQ0FDMUIsS0FBMkIsRUFDM0IsT0FBNkQsRUFDN0QsRUFBRTtJQUNGLE1BQU0sY0FBYyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQ2hDLFlBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUF5QixrQkFBa0IsRUFBRTtRQUMzRCxNQUFNLEVBQUUsS0FBSztRQUNiLEtBQUs7S0FDTixDQUFDLENBQUM7SUFFTCxPQUFPLElBQUEsc0JBQVEsRUFBQztRQUNkLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RDLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLEdBQUcsT0FBTztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWZXLFFBQUEsWUFBWSxnQkFldkI7QUFFSyxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFVBQWtCLEVBQ2xCLE9BQTRFLEVBQzVFLEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxJQUFBLDRCQUFjLEdBQUUsQ0FBQztJQUVyQyxPQUFPLElBQUEseUJBQVcsRUFBQztRQUNqQixVQUFVLEVBQUUsQ0FBQyxPQUE0QixFQUFFLEVBQUUsQ0FDM0MsWUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQWdCLG9CQUFvQixVQUFVLEVBQUUsRUFBRTtZQUNoRSxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUNKLFNBQVMsRUFBRSxDQUFDLElBQVMsRUFBRSxTQUFjLEVBQUUsT0FBWSxFQUFFLEVBQUU7WUFDckQsV0FBVyxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO2FBQ25DLENBQUMsQ0FBQztZQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxHQUFHLE9BQU87S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFyQlcsUUFBQSxpQkFBaUIscUJBcUI1QiJ9