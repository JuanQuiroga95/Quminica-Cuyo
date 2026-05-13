"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useManageItemsTableQuery = void 0;
const use_query_params_1 = require("../../../../../hooks/use-query-params");
const useManageItemsTableQuery = ({ pageSize = 50, prefix, }) => {
    const raw = (0, use_query_params_1.useQueryParams)(["q", "offset", "order", "created_at", "updated_at"], prefix);
    const { offset, created_at, updated_at, ...rest } = raw;
    const searchParams = {
        ...rest,
        limit: pageSize,
        offset: offset ? Number(offset) : 0,
        created_at: created_at ? JSON.parse(created_at) : undefined,
        updated_at: updated_at ? JSON.parse(updated_at) : undefined,
    };
    return { searchParams, raw };
};
exports.useManageItemsTableQuery = useManageItemsTableQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3F1b3RlLW1hbmFnZS90YWJsZS9xdWVyeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEVBQXVFO0FBRWhFLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxFQUN2QyxRQUFRLEdBQUcsRUFBRSxFQUNiLE1BQU0sR0FJUCxFQUFFLEVBQUU7SUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFBLGlDQUFjLEVBQ3hCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxFQUNwRCxNQUFNLENBQ1AsQ0FBQztJQUVGLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN4RCxNQUFNLFlBQVksR0FBRztRQUNuQixHQUFHLElBQUk7UUFDUCxLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQzNELFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDNUQsQ0FBQztJQUVGLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsd0JBQXdCLDRCQXNCbkMifQ==