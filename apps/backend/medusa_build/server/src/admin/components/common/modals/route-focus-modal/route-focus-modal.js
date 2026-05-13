"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteFocusModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const route_modal_form_1 = require("./route-modal-form");
const route_modal_provider_1 = require("./route-modal-provider");
const stacked_modal_provider_1 = require("./stacked-modal-provider");
const use_route_modal_1 = require("./use-route-modal");
const Root = ({ prev = "..", children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const [stackedModalOpen, onStackedModalOpen] = (0, react_1.useState)(false);
    /**
     * Open the modal when the component mounts. This
     * ensures that the entry animation is played.
     */
    (0, react_1.useEffect)(() => {
        setOpen(true);
        return () => {
            setOpen(false);
            onStackedModalOpen(false);
        };
    }, []);
    const handleOpenChange = (open) => {
        if (!open) {
            document.body.style.pointerEvents = "auto";
            navigate(prev, { replace: true });
            return;
        }
        setOpen(open);
    };
    return ((0, jsx_runtime_1.jsxs)(ui_1.FocusModal, { open: open, onOpenChange: handleOpenChange, children: [(0, jsx_runtime_1.jsx)(ui_1.FocusModal.Title, {}), (0, jsx_runtime_1.jsx)(ui_1.FocusModal.Description, {}), (0, jsx_runtime_1.jsx)(route_modal_provider_1.RouteModalProvider, { prev: prev, children: (0, jsx_runtime_1.jsx)(stacked_modal_provider_1.StackedModalProvider, { onOpenChange: onStackedModalOpen, children: (0, jsx_runtime_1.jsx)(Content, { stackedModalOpen: stackedModalOpen, children: children }) }) })] }));
};
const Content = ({ stackedModalOpen, children }) => {
    const { __internal } = (0, use_route_modal_1.useRouteModal)();
    const shouldPreventClose = !__internal.closeOnEscape;
    return ((0, jsx_runtime_1.jsx)(ui_1.FocusModal.Content, { onEscapeKeyDown: shouldPreventClose
            ? (e) => {
                e.preventDefault();
            }
            : undefined, className: (0, ui_1.clx)({
            "!bg-ui-bg-disabled !inset-x-5 !inset-y-3": stackedModalOpen,
        }), children: children }));
};
const Header = ui_1.FocusModal.Header;
const Title = ui_1.FocusModal.Title;
const Description = ui_1.FocusModal.Description;
const Footer = ui_1.FocusModal.Footer;
const Body = ui_1.FocusModal.Body;
const Close = ui_1.FocusModal.Close;
const Form = route_modal_form_1.RouteModalForm;
/**
 * FocusModal that is used to render a form on a separate route.
 *
 * Typically used for forms creating a resource or forms that require
 * a lot of space.
 */
exports.RouteFocusModal = Object.assign(Root, {
    Header,
    Title,
    Body,
    Description,
    Footer,
    Close,
    Form,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtZm9jdXMtbW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vbW9kYWxzL3JvdXRlLWZvY3VzLW1vZGFsL3JvdXRlLWZvY3VzLW1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUNBQStDO0FBQy9DLGlDQUErRDtBQUMvRCx1REFBK0M7QUFDL0MseURBQW9EO0FBQ3BELGlFQUE0RDtBQUM1RCxxRUFBZ0U7QUFDaEUsdURBQWtEO0FBTWxELE1BQU0sSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBd0IsRUFBRSxFQUFFO0lBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUEsOEJBQVcsR0FBRSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUUvRDs7O09BR0c7SUFDSCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWQsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBYSxFQUFFLEVBQUU7UUFDekMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUMzQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEMsT0FBTztRQUNULENBQUM7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLHdCQUFDLGVBQVUsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsYUFDcEQsdUJBQUMsZUFBVSxDQUFDLEtBQUssS0FBb0IsRUFDckMsdUJBQUMsZUFBVSxDQUFDLFdBQVcsS0FBMEIsRUFFakQsdUJBQUMseUNBQWtCLElBQUMsSUFBSSxFQUFFLElBQUksWUFDNUIsdUJBQUMsNkNBQW9CLElBQUMsWUFBWSxFQUFFLGtCQUFrQixZQUNwRCx1QkFBQyxPQUFPLElBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLFlBQUcsUUFBUSxHQUFXLEdBQzVDLEdBQ0osSUFDVixDQUNkLENBQUM7QUFDSixDQUFDLENBQUM7QUFNRixNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFnQixFQUFFLEVBQUU7SUFDL0QsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUEsK0JBQWEsR0FBRSxDQUFDO0lBRXZDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBRXJELE9BQU8sQ0FDTCx1QkFBQyxlQUFVLENBQUMsT0FBTyxJQUNqQixlQUFlLEVBQ2Isa0JBQWtCO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNKLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLFNBQVMsRUFFZixTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQUM7WUFDYiwwQ0FBMEMsRUFBRSxnQkFBZ0I7U0FDN0QsQ0FBQyxZQUVELFFBQVEsR0FDVSxDQUN0QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsZUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNqQyxNQUFNLEtBQUssR0FBRyxlQUFVLENBQUMsS0FBSyxDQUFDO0FBQy9CLE1BQU0sV0FBVyxHQUFHLGVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDM0MsTUFBTSxNQUFNLEdBQUcsZUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNqQyxNQUFNLElBQUksR0FBRyxlQUFVLENBQUMsSUFBSSxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLGVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDL0IsTUFBTSxJQUFJLEdBQUcsaUNBQWMsQ0FBQztBQUU1Qjs7Ozs7R0FLRztBQUNVLFFBQUEsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2pELE1BQU07SUFDTixLQUFLO0lBQ0wsSUFBSTtJQUNKLFdBQVc7SUFDWCxNQUFNO0lBQ04sS0FBSztJQUNMLElBQUk7Q0FDTCxDQUFDLENBQUMifQ==