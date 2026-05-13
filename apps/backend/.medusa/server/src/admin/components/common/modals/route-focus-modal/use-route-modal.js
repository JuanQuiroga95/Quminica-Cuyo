"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouteModal = void 0;
const react_1 = require("react");
const route_modal_context_1 = require("./route-modal-context");
const useRouteModal = () => {
    const context = (0, react_1.useContext)(route_modal_context_1.RouteModalProviderContext);
    if (!context) {
        throw new Error("useRouteModal must be used within a RouteModalProvider");
    }
    return context;
};
exports.useRouteModal = useRouteModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXJvdXRlLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL21vZGFscy9yb3V0ZS1mb2N1cy1tb2RhbC91c2Utcm91dGUtbW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFtQztBQUNuQywrREFBa0U7QUFFM0QsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUEsa0JBQVUsRUFBQywrQ0FBeUIsQ0FBQyxDQUFDO0lBRXRELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBUlcsUUFBQSxhQUFhLGlCQVF4QiJ9