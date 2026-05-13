"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryParams = useQueryParams;
const react_router_dom_1 = require("react-router-dom");
function useQueryParams(keys, prefix) {
    const [params] = (0, react_router_dom_1.useSearchParams)();
    // Use a type assertion to initialize the result
    const result = {};
    keys.forEach((key) => {
        const prefixedKey = prefix ? `${prefix}_${key}` : key;
        const value = params.get(prefixedKey) || undefined;
        result[key] = value;
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXF1ZXJ5LXBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2UtcXVlcnktcGFyYW1zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLHdDQWlCQztBQXZCRCx1REFBbUQ7QUFNbkQsU0FBZ0IsY0FBYyxDQUM1QixJQUFTLEVBQ1QsTUFBZTtJQUVmLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFBLGtDQUFlLEdBQUUsQ0FBQztJQUVuQyxnREFBZ0Q7SUFDaEQsTUFBTSxNQUFNLEdBQUcsRUFBb0IsQ0FBQztJQUVwQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDbkIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIn0=