"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdminCreateCustomer = exports.useAdminCustomerGroups = exports.customerQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const query_key_factory_1 = require("../../lib/query-key-factory");
const client_1 = require("../../lib/client");
exports.customerQueryKey = (0, query_key_factory_1.queryKeysFactory)("customer");
const useAdminCustomerGroups = (options) => {
    return (0, react_query_1.useQuery)({
        queryKey: exports.customerQueryKey.list("groups"),
        queryFn: () => client_1.sdk.admin.customerGroup.list(),
        select: (data) => data.customer_groups,
        ...options,
    });
};
exports.useAdminCustomerGroups = useAdminCustomerGroups;
const useAdminCreateCustomer = (options) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (customer) => client_1.sdk.admin.customer.create(customer),
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: exports.customerQueryKey.lists(),
            });
            options?.onSuccess?.(data, variables, context);
        },
        ...options,
    });
};
exports.useAdminCreateCustomer = useAdminCreateCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2hvb2tzL2FwaS9jdXN0b21lcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHVEQU8rQjtBQUMvQixtRUFBK0Q7QUFDL0QsNkNBQXVDO0FBRTFCLFFBQUEsZ0JBQWdCLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxVQUFVLENBQUMsQ0FBQztBQUV0RCxNQUFNLHNCQUFzQixHQUFHLENBQ3BDLE9BS0MsRUFDRCxFQUFFO0lBQ0YsT0FBTyxJQUFBLHNCQUFRLEVBQUM7UUFDZCxRQUFRLEVBQUUsd0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQzdDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWU7UUFDdEMsR0FBRyxPQUFPO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBZFcsUUFBQSxzQkFBc0IsMEJBY2pDO0FBRUssTUFBTSxzQkFBc0IsR0FBRyxDQUNwQyxPQUlDLEVBQ0QsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLElBQUEsNEJBQWMsR0FBRSxDQUFDO0lBRXJDLE9BQU8sSUFBQSx5QkFBVyxFQUFDO1FBQ2pCLFVBQVUsRUFBRSxDQUFDLFFBQTZCLEVBQUUsRUFBRSxDQUM1QyxZQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLElBQVMsRUFBRSxTQUFjLEVBQUUsT0FBWSxFQUFFLEVBQUU7WUFDckQsV0FBVyxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixRQUFRLEVBQUUsd0JBQWdCLENBQUMsS0FBSyxFQUFFO2FBQ25DLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxHQUFHLE9BQU87S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFwQlcsUUFBQSxzQkFBc0IsMEJBb0JqQyJ9