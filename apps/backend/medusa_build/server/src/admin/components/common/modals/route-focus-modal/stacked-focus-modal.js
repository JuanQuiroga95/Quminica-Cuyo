"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackedFocusModal = exports.Root = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const use_stacked_modal_1 = require("./use-stacked-modal");
/**
 * A stacked modal that can be rendered above a parent modal.
 */
const Root = ({ id, children }) => {
    const { register, unregister, getIsOpen, setIsOpen } = (0, use_stacked_modal_1.useStackedModal)();
    (0, react_1.useEffect)(() => {
        register(id);
        return () => unregister(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0, jsx_runtime_1.jsxs)(ui_1.FocusModal, { open: getIsOpen(id), onOpenChange: (open) => setIsOpen(id, open), children: [(0, jsx_runtime_1.jsx)(ui_1.FocusModal.Title, {}), (0, jsx_runtime_1.jsx)(ui_1.FocusModal.Description, {}), children] }));
};
exports.Root = Root;
const Close = ui_1.FocusModal.Close;
Close.displayName = "StackedFocusModal.Close";
const Header = ui_1.FocusModal.Header;
Header.displayName = "StackedFocusModal.Header";
const Body = ui_1.FocusModal.Body;
Body.displayName = "StackedFocusModal.Body";
const Trigger = ui_1.FocusModal.Trigger;
Trigger.displayName = "StackedFocusModal.Trigger";
const Footer = ui_1.FocusModal.Footer;
Footer.displayName = "StackedFocusModal.Footer";
const Title = ui_1.FocusModal.Title;
Title.displayName = "StackedFocusModal.Title";
const Description = ui_1.FocusModal.Description;
Description.displayName = "StackedFocusModal.Description";
const Content = (0, react_1.forwardRef)(({ className, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)(ui_1.FocusModal.Content, { ref: ref, className: (0, ui_1.clx)("!top-6", className), overlayProps: {
            className: "bg-transparent",
        }, ...props }));
});
Content.displayName = "StackedFocusModal.Content";
exports.StackedFocusModal = Object.assign(exports.Root, {
    Close,
    Header,
    Body,
    Content,
    Trigger,
    Footer,
    Description,
    Title,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1mb2N1cy1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi9tb2RhbHMvcm91dGUtZm9jdXMtbW9kYWwvc3RhY2tlZC1mb2N1cy1tb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUErQztBQUMvQyxpQ0FLZTtBQUNmLDJEQUFzRDtBQVV0RDs7R0FFRztBQUNJLE1BQU0sSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUEwQixFQUFFLEVBQUU7SUFDL0QsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsbUNBQWUsR0FBRSxDQUFDO0lBRXpFLElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7UUFDYixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFYixPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1Qix1REFBdUQ7SUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNMLHdCQUFDLGVBQVUsSUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNuQixZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBRTNDLHVCQUFDLGVBQVUsQ0FBQyxLQUFLLEtBQW9CLEVBQ3JDLHVCQUFDLGVBQVUsQ0FBQyxXQUFXLEtBQTBCLEVBQ2hELFFBQVEsSUFDRSxDQUNkLENBQUM7QUFDSixDQUFDLENBQUM7QUFwQlcsUUFBQSxJQUFJLFFBb0JmO0FBRUYsTUFBTSxLQUFLLEdBQUcsZUFBVSxDQUFDLEtBQUssQ0FBQztBQUMvQixLQUFLLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sTUFBTSxHQUFHLGVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztBQUVoRCxNQUFNLElBQUksR0FBRyxlQUFVLENBQUMsSUFBSSxDQUFDO0FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7QUFFNUMsTUFBTSxPQUFPLEdBQUcsZUFBVSxDQUFDLE9BQU8sQ0FBQztBQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO0FBRWxELE1BQU0sTUFBTSxHQUFHLGVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDakMsTUFBTSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztBQUVoRCxNQUFNLEtBQUssR0FBRyxlQUFVLENBQUMsS0FBSyxDQUFDO0FBQy9CLEtBQUssQ0FBQyxXQUFXLEdBQUcseUJBQXlCLENBQUM7QUFFOUMsTUFBTSxXQUFXLEdBQUcsZUFBVSxDQUFDLFdBQVcsQ0FBQztBQUMzQyxXQUFXLENBQUMsV0FBVyxHQUFHLCtCQUErQixDQUFDO0FBRTFELE1BQU0sT0FBTyxHQUFHLElBQUEsa0JBQVUsRUFHeEIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pDLE9BQU8sQ0FDTCx1QkFBQyxlQUFVLENBQUMsT0FBTyxJQUNqQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQ25DLFlBQVksRUFBRTtZQUNaLFNBQVMsRUFBRSxnQkFBZ0I7U0FDNUIsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO0FBRXJDLFFBQUEsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFJLEVBQUU7SUFDbkQsS0FBSztJQUNMLE1BQU07SUFDTixJQUFJO0lBQ0osT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLEtBQUs7Q0FDTixDQUFDLENBQUMifQ==