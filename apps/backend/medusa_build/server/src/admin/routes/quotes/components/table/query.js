"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuotesTableQuery = void 0;
const use_query_params_1 = require("../../../../hooks/use-query-params");
const useQuotesTableQuery = ({ pageSize = 50, prefix, }) => {
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
exports.useQuotesTableQuery = useQuotesTableQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3RhYmxlL3F1ZXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5RUFBb0U7QUFFN0QsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEVBQ2xDLFFBQVEsR0FBRyxFQUFFLEVBQ2IsTUFBTSxHQUlQLEVBQUUsRUFBRTtJQUNILE1BQU0sR0FBRyxHQUFHLElBQUEsaUNBQWMsRUFDeEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLEVBQ3BELE1BQU0sQ0FDUCxDQUFDO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3hELE1BQU0sWUFBWSxHQUFHO1FBQ25CLEdBQUcsSUFBSTtRQUNQLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDM0QsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztLQUM1RCxDQUFDO0lBRUYsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUM7QUF0QlcsUUFBQSxtQkFBbUIsdUJBc0I5QiJ9