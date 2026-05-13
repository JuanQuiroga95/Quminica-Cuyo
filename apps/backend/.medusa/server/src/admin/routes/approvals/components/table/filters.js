"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApprovalsTableFilters = void 0;
const approval_1 = require("../../../../../types/approval");
const useApprovalsTableFilters = () => {
    const filters = [
        {
            label: "Status",
            key: "status",
            type: "select",
            options: [
                { label: "Pending", value: approval_1.ApprovalStatusType.PENDING },
                { label: "Approved", value: approval_1.ApprovalStatusType.APPROVED },
                { label: "Rejected", value: approval_1.ApprovalStatusType.REJECTED },
            ],
        },
    ];
    return filters;
};
exports.useApprovalsTableFilters = useApprovalsTableFilters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvYXBwcm92YWxzL2NvbXBvbmVudHMvdGFibGUvZmlsdGVycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNERBQW1FO0FBRTVELE1BQU0sd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE1BQU0sT0FBTyxHQUFVO1FBQ3JCO1lBQ0UsS0FBSyxFQUFFLFFBQVE7WUFDZixHQUFHLEVBQUUsUUFBUTtZQUNiLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsNkJBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN2RCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLDZCQUFrQixDQUFDLFFBQVEsRUFBRTtnQkFDekQsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSw2QkFBa0IsQ0FBQyxRQUFRLEVBQUU7YUFDMUQ7U0FDRjtLQUNGLENBQUM7SUFFRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFmVyxRQUFBLHdCQUF3Qiw0QkFlbkMifQ==