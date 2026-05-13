"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModalProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const route_modal_context_1 = require("./route-modal-context");
const RouteModalProvider = ({ prev, children, }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [closeOnEscape, setCloseOnEscape] = (0, react_1.useState)(true);
    const handleSuccess = (0, react_1.useCallback)((path) => {
        const to = path || prev;
        navigate(to, { replace: true, state: { isSubmitSuccessful: true } });
    }, [navigate, prev]);
    const value = (0, react_1.useMemo)(() => ({
        handleSuccess,
        setCloseOnEscape,
        __internal: { closeOnEscape },
    }), [handleSuccess, setCloseOnEscape, closeOnEscape]);
    return ((0, jsx_runtime_1.jsx)(route_modal_context_1.RouteModalProviderContext.Provider, { value: value, children: children }));
};
exports.RouteModalProvider = RouteModalProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtbW9kYWwtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vbW9kYWxzL3JvdXRlLWZvY3VzLW1vZGFsL3JvdXRlLW1vZGFsLXByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUNBQTBFO0FBQzFFLHVEQUErQztBQUMvQywrREFBa0U7QUFNM0QsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQ2pDLElBQUksRUFDSixRQUFRLEdBQ2dCLEVBQUUsRUFBRTtJQUM1QixNQUFNLFFBQVEsR0FBRyxJQUFBLDhCQUFXLEdBQUUsQ0FBQztJQUUvQixNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpELE1BQU0sYUFBYSxHQUFHLElBQUEsbUJBQVcsRUFDL0IsQ0FBQyxJQUFhLEVBQUUsRUFBRTtRQUNoQixNQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDLEVBQ0QsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQ2pCLENBQUM7SUFFRixNQUFNLEtBQUssR0FBRyxJQUFBLGVBQU8sRUFDbkIsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNMLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsVUFBVSxFQUFFLEVBQUUsYUFBYSxFQUFFO0tBQzlCLENBQUMsRUFDRixDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FDakQsQ0FBQztJQUVGLE9BQU8sQ0FDTCx1QkFBQywrQ0FBeUIsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLEtBQUssWUFDN0MsUUFBUSxHQUMwQixDQUN0QyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBOUJXLFFBQUEsa0JBQWtCLHNCQThCN0IifQ==