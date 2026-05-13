"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrderPreview = exports.orderPreviewQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const query_key_factory_1 = require("../../lib/query-key-factory");
const client_1 = require("../../lib/client");
exports.orderPreviewQueryKey = (0, query_key_factory_1.queryKeysFactory)("custom_orders");
const useOrderPreview = (id, query, options) => {
    const { data, ...rest } = (0, react_query_1.useQuery)({
        queryFn: async () => client_1.sdk.admin.order.retrievePreview(id, query),
        queryKey: exports.orderPreviewQueryKey.detail(id),
        ...options,
    });
    return { ...data, ...rest };
};
exports.useOrderPreview = useOrderPreview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy9hcGkvb3JkZXItcHJldmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsdURBQTRFO0FBQzVFLG1FQUErRDtBQUMvRCw2Q0FBdUM7QUFFMUIsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLG9DQUFnQixFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRS9ELE1BQU0sZUFBZSxHQUFHLENBQzdCLEVBQVUsRUFDVixLQUFtQyxFQUNuQyxPQVFDLEVBQ0QsRUFBRTtJQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEVBQUM7UUFDakMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsWUFBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFDL0QsUUFBUSxFQUFFLDRCQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekMsR0FBRyxPQUFPO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBcEJXLFFBQUEsZUFBZSxtQkFvQjFCIn0=