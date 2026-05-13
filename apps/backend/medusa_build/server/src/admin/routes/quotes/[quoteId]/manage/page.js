"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const route_focus_modal_1 = require("../../../../components/common/modals/route-focus-modal/route-focus-modal");
const quotes_1 = require("../../../../hooks/api/quotes");
const components_1 = require("../../components");
const QuoteManage = () => {
    const { quoteId } = (0, react_router_dom_1.useParams)();
    const { quote, isLoading } = (0, quotes_1.useQuote)(quoteId, {
        fields: "*draft_order.customer,*draft_order.customer.employee,*draft_order.customer.employee.company",
    });
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    if (!quote) {
        throw "quote not found";
    }
    return ((0, jsx_runtime_1.jsx)(route_focus_modal_1.RouteFocusModal, { children: (0, jsx_runtime_1.jsx)(components_1.ManageQuoteForm, { order: quote.draft_order }) }));
};
exports.default = QuoteManage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9yb3V0ZXMvcXVvdGVzL1txdW90ZUlkXS9tYW5hZ2UvcGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQTZDO0FBQzdDLGdIQUEyRztBQUMzRyx5REFBd0Q7QUFDeEQsaURBQW1EO0FBRW5ELE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtJQUN2QixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBQSw0QkFBUyxHQUFFLENBQUM7SUFDaEMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFBLGlCQUFRLEVBQUMsT0FBUSxFQUFFO1FBQzlDLE1BQU0sRUFDSiw2RkFBNkY7S0FDaEcsQ0FBQyxDQUFDO0lBRUgsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sa0RBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFFRCxPQUFPLENBQ0wsdUJBQUMsbUNBQWUsY0FDZCx1QkFBQyw0QkFBZSxJQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVyxHQUFJLEdBQzdCLENBQ25CLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMifQ==