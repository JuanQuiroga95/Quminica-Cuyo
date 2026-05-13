"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegions = exports.regionQueryKey = void 0;
const react_query_1 = require("@tanstack/react-query");
const client_1 = require("../../lib/client");
const query_key_factory_1 = require("../../lib/query-key-factory");
exports.regionQueryKey = (0, query_key_factory_1.queryKeysFactory)("regions");
const useRegions = (options) => {
    const { data, ...rest } = (0, react_query_1.useQuery)({
        queryFn: () => client_1.sdk.admin.region.list(),
        queryKey: exports.regionQueryKey.list(),
        ...options,
    });
    return { ...data, ...rest };
};
exports.useRegions = useRegions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy9hcGkvcmVnaW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsdURBQTRFO0FBQzVFLDZDQUF1QztBQUN2QyxtRUFBK0Q7QUFFbEQsUUFBQSxjQUFjLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxTQUFTLENBQUMsQ0FBQztBQU1uRCxNQUFNLFVBQVUsR0FBRyxDQUN4QixPQUdDLEVBQ0QsRUFBRTtJQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEVBQUM7UUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUN0QyxRQUFRLEVBQUUsc0JBQWMsQ0FBQyxJQUFJLEVBQUU7UUFDL0IsR0FBRyxPQUFPO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBYlcsUUFBQSxVQUFVLGNBYXJCIn0=