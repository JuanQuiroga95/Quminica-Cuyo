"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApprovalsTableQuery = void 0;
const use_query_params_1 = require("../../../../hooks/use-query-params");
const useApprovalsTableQuery = ({ pageSize = 50, prefix, }) => {
    const raw = (0, use_query_params_1.useQueryParams)(["q", "offset", "order", "created_at", "updated_at", "status"], prefix);
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
exports.useApprovalsTableQuery = useApprovalsTableQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL2FwcHJvdmFscy9jb21wb25lbnRzL3RhYmxlL3F1ZXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5RUFBb0U7QUFFN0QsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEVBQ3JDLFFBQVEsR0FBRyxFQUFFLEVBQ2IsTUFBTSxHQUlQLEVBQUUsRUFBRTtJQUNILE1BQU0sR0FBRyxHQUFHLElBQUEsaUNBQWMsRUFDeEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUM5RCxNQUFNLENBQ1AsQ0FBQztJQUVGLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN4RCxNQUFNLFlBQVksR0FBRztRQUNuQixHQUFHLElBQUk7UUFDUCxLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQzNELFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDNUQsQ0FBQztJQUVGLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsc0JBQXNCLDBCQXNCakMifQ==