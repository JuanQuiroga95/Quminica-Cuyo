"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalActions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const approval_1 = require("../../../../types/approval");
const approvals_1 = require("../../../hooks/api/approvals");
const react_1 = require("react");
const ApprovalActions = ({ cart }) => {
    const [isApproving, setIsApproving] = (0, react_1.useState)(false);
    const [isRejecting, setIsRejecting] = (0, react_1.useState)(false);
    const dialog = (0, ui_1.usePrompt)();
    const awaitingSalesManagerApproval = cart.approvals.find((approval) => approval.type === approval_1.ApprovalType.SALES_MANAGER &&
        approval.status === approval_1.ApprovalStatusType.PENDING);
    const { mutateAsync: updateApproval } = (0, approvals_1.useUpdateApproval)(awaitingSalesManagerApproval?.id);
    const approveCart = async () => {
        setIsApproving(true);
        const confirmed = await dialog({
            title: "Are you sure you want to approve this cart?",
            description: "This action cannot be undone.",
        });
        if (confirmed) {
            await updateApproval({
                status: approval_1.ApprovalStatusType.APPROVED,
            });
        }
        setIsApproving(false);
    };
    const rejectCart = async () => {
        setIsRejecting(true);
        const confirmed = await dialog({
            title: "Are you sure you want to reject this cart?",
            description: "This action cannot be undone.",
        });
        if (confirmed) {
            await updateApproval({
                status: approval_1.ApprovalStatusType.REJECTED,
            });
        }
        setIsRejecting(false);
    };
    if (!awaitingSalesManagerApproval) {
        return null;
    }
    if (cart.approval_status.status === approval_1.ApprovalStatusType.PENDING) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)(ui_1.IconButton, { className: "w-8 h-8", onClick: rejectCart, isLoading: isRejecting, children: (0, jsx_runtime_1.jsx)(icons_1.XMark, {}) }), (0, jsx_runtime_1.jsx)(ui_1.IconButton, { className: "w-8 h-8", onClick: approveCart, isLoading: isApproving, children: (0, jsx_runtime_1.jsx)(icons_1.Check, {}) })] }));
    }
};
exports.ApprovalActions = ApprovalActions;
exports.default = exports.ApprovalActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvYXBwcm92YWxzL2NvbXBvbmVudHMvYXBwcm92YWwtYWN0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUErRDtBQUMvRCxxQ0FBNkQ7QUFDN0QseURBQThFO0FBQzlFLDREQUFpRTtBQUNqRSxpQ0FBaUM7QUFFMUIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBaUMsRUFBRSxFQUFFO0lBQ3pFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRELE1BQU0sTUFBTSxHQUFHLElBQUEsY0FBUyxHQUFFLENBQUM7SUFFM0IsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDdEQsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUNYLFFBQVEsQ0FBQyxJQUFJLEtBQUssdUJBQVksQ0FBQyxhQUFhO1FBQzVDLFFBQVEsQ0FBQyxNQUFNLEtBQUssNkJBQWtCLENBQUMsT0FBTyxDQUNqRCxDQUFDO0lBRUYsTUFBTSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFBLDZCQUFpQixFQUN2RCw0QkFBNEIsRUFBRSxFQUFFLENBQ2pDLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxLQUFLLElBQUksRUFBRTtRQUM3QixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUM7WUFDN0IsS0FBSyxFQUFFLDZDQUE2QztZQUNwRCxXQUFXLEVBQUUsK0JBQStCO1NBQzdDLENBQUMsQ0FBQztRQUVILElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxNQUFNLGNBQWMsQ0FBQztnQkFDbkIsTUFBTSxFQUFFLDZCQUFrQixDQUFDLFFBQVE7YUFDcEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksRUFBRTtRQUM1QixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUM7WUFDN0IsS0FBSyxFQUFFLDRDQUE0QztZQUNuRCxXQUFXLEVBQUUsK0JBQStCO1NBQzdDLENBQUMsQ0FBQztRQUVILElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxNQUFNLGNBQWMsQ0FBQztnQkFDbkIsTUFBTSxFQUFFLDZCQUFrQixDQUFDLFFBQVE7YUFDcEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLDZCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9ELE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsWUFBWSxhQUN6Qix1QkFBQyxlQUFVLElBQ1QsU0FBUyxFQUFDLFNBQVMsRUFDbkIsT0FBTyxFQUFFLFVBQVUsRUFDbkIsU0FBUyxFQUFFLFdBQVcsWUFFdEIsdUJBQUMsYUFBSyxLQUFHLEdBQ0UsRUFDYix1QkFBQyxlQUFVLElBQ1QsU0FBUyxFQUFDLFNBQVMsRUFDbkIsT0FBTyxFQUFFLFdBQVcsRUFDcEIsU0FBUyxFQUFFLFdBQVcsWUFFdEIsdUJBQUMsYUFBSyxLQUFHLEdBQ0UsSUFDVCxDQUNQLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBdEVXLFFBQUEsZUFBZSxtQkFzRTFCO0FBRUYsa0JBQWUsdUJBQWUsQ0FBQyJ9