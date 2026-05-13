"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVariants = exports.productVariantQueryKeys = void 0;
const react_query_1 = require("@tanstack/react-query");
const query_key_factory_1 = require("../../lib/query-key-factory");
const client_1 = require("../../lib/client");
const PRODUCT_VARIANT_QUERY_KEY = "product_variant";
exports.productVariantQueryKeys = (0, query_key_factory_1.queryKeysFactory)(PRODUCT_VARIANT_QUERY_KEY);
const useVariants = (query, options) => {
    const { data, ...rest } = (0, react_query_1.useQuery)({
        queryFn: () => client_1.sdk.admin.productVariant.list(query),
        queryKey: exports.productVariantQueryKeys.list(query),
        ...options,
    });
    return { ...data, ...rest };
};
exports.useVariants = useVariants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vaG9va3MvYXBpL3ZhcmlhbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1REFBNEU7QUFDNUUsbUVBQStEO0FBQy9ELDZDQUF1QztBQUV2QyxNQUFNLHlCQUF5QixHQUFHLGlCQUEwQixDQUFDO0FBQ2hELFFBQUEsdUJBQXVCLEdBQUcsSUFBQSxvQ0FBZ0IsRUFDckQseUJBQXlCLENBQzFCLENBQUM7QUFFSyxNQUFNLFdBQVcsR0FBRyxDQUN6QixLQUEyQixFQUMzQixPQUdDLEVBQ0QsRUFBRTtJQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEVBQUM7UUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkQsUUFBUSxFQUFFLCtCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0MsR0FBRyxPQUFPO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBZFcsUUFBQSxXQUFXLGVBY3RCIn0=