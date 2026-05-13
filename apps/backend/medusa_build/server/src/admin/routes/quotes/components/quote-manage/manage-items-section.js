"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageItemsSection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const route_focus_modal_1 = require("../../../../components/common/modals/route-focus-modal");
const api_1 = require("../../../../hooks/api");
const manage_item_1 = require("./manage-item");
const manage_items_table_1 = require("./manage-items-table");
let addedVariants = [];
const ManageItemsSection = ({ order, preview, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    /**
     * STATE
     */
    const { setIsOpen } = (0, route_focus_modal_1.useStackedModal)();
    const [filterTerm, setFilterTerm] = (0, react_1.useState)("");
    /*
     * MUTATIONS
     */
    const { mutateAsync: addItems, isPending } = (0, api_1.useAddItemsToQuote)(preview.id);
    /**
     * CALLBACKS
     */
    const onItemsSelected = async () => {
        try {
            await addItems({
                items: addedVariants.map((i) => ({
                    variant_id: i,
                    quantity: 1,
                })),
            });
        }
        catch (e) {
            ui_1.toast.error(e.message);
        }
        setIsOpen("inbound-items", false);
    };
    const filteredItems = (0, react_1.useMemo)(() => {
        return preview.items.filter((i) => i.title.toLowerCase().includes(filterTerm) ||
            i.product_title?.toLowerCase().includes(filterTerm));
    }, [preview, filterTerm]);
    const originalItemsMap = (0, react_1.useMemo)(() => {
        return new Map(order.items.map((item) => [item.id, item]));
    }, [order, filterTerm]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-3 mt-8 flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", children: t("fields.items") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)(ui_1.Input, { value: filterTerm, onChange: (e) => setFilterTerm(e.target.value), placeholder: t("fields.search"), autoComplete: "off", type: "search" }), (0, jsx_runtime_1.jsxs)(route_focus_modal_1.StackedFocusModal, { id: "inbound-items", children: [(0, jsx_runtime_1.jsx)(route_focus_modal_1.StackedFocusModal.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "small", children: t("actions.addItems") }) }), (0, jsx_runtime_1.jsxs)(route_focus_modal_1.StackedFocusModal.Content, { children: [(0, jsx_runtime_1.jsx)(route_focus_modal_1.StackedFocusModal.Header, {}), (0, jsx_runtime_1.jsx)(manage_items_table_1.ManageItemsTable, { currencyCode: order.currency_code, onSelectionChange: (finalSelection) => {
                                                    addedVariants = finalSelection;
                                                } }), (0, jsx_runtime_1.jsx)(route_focus_modal_1.StackedFocusModal.Footer, { children: (0, jsx_runtime_1.jsx)("div", { className: "flex w-full items-center justify-end gap-x-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-end gap-x-2", children: [(0, jsx_runtime_1.jsx)(route_focus_modal_1.RouteFocusModal.Close, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.Button, { type: "button", variant: "secondary", size: "small", children: t("actions.cancel") }) }), (0, jsx_runtime_1.jsx)(ui_1.Button, { type: "submit", variant: "primary", size: "small", role: "button", disabled: isPending, onClick: async () => await onItemsSelected(), children: t("actions.save") }, "submit-button")] }) }) })] })] })] })] }), filteredItems.map((item) => ((0, jsx_runtime_1.jsx)(manage_item_1.ManageItem, { originalItem: originalItemsMap.get(item.id), item: item, orderId: order.id, currencyCode: order.currency_code }, item.id))), filterTerm && !filteredItems.length && ((0, jsx_runtime_1.jsx)("div", { style: {
                    background: "repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)",
                }, className: "bg-ui-bg-field mt-4 block h-[56px] w-full rounded-lg border border-dashed" }))] }));
};
exports.ManageItemsSection = ManageItemsSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWl0ZW1zLXNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3F1b3RlLW1hbmFnZS9tYW5hZ2UtaXRlbXMtc2VjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLHFDQUE2RDtBQUM3RCxpQ0FBMEM7QUFDMUMsaURBQStDO0FBQy9DLDhGQUlnRTtBQUNoRSwrQ0FBMkQ7QUFDM0QsK0NBQTJDO0FBQzNDLDZEQUF3RDtBQU94RCxJQUFJLGFBQWEsR0FBYSxFQUFFLENBQUM7QUFFMUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQ2pDLEtBQUssRUFDTCxPQUFPLEdBQ2lCLEVBQUUsRUFBRTtJQUM1QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUM7SUFDL0I7O09BRUc7SUFDSCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBQSxtQ0FBZSxHQUFFLENBQUM7SUFDeEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFakQ7O09BRUc7SUFDSCxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFBLHdCQUFrQixFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU1RTs7T0FFRztJQUNILE1BQU0sZUFBZSxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2pDLElBQUksQ0FBQztZQUNILE1BQU0sUUFBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUMvQixVQUFVLEVBQUUsQ0FBQztvQkFDYixRQUFRLEVBQUUsQ0FBQztpQkFDWixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLFVBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxTQUFTLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRTtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUM5QixDQUFDO0lBQzVCLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRTFCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1FBQ3BDLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFeEIsT0FBTyxDQUNMLDRDQUNFLGlDQUFLLFNBQVMsRUFBQyw2Q0FBNkMsYUFDMUQsdUJBQUMsWUFBTyxJQUFDLEtBQUssRUFBQyxJQUFJLFlBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFXLEVBRWpELGlDQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3pCLHVCQUFDLFVBQUssSUFDSixLQUFLLEVBQUUsVUFBVSxFQUNqQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUM5QyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUMvQixZQUFZLEVBQUMsS0FBSyxFQUNsQixJQUFJLEVBQUMsUUFBUSxHQUNiLEVBRUYsd0JBQUMscUNBQWlCLElBQUMsRUFBRSxFQUFDLGVBQWUsYUFDbkMsdUJBQUMscUNBQWlCLENBQUMsT0FBTyxJQUFDLE9BQU8sa0JBQ2hDLHVCQUFDLFdBQU0sSUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxPQUFPLFlBQ3JDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUNmLEdBQ2lCLEVBRTVCLHdCQUFDLHFDQUFpQixDQUFDLE9BQU8sZUFDeEIsdUJBQUMscUNBQWlCLENBQUMsTUFBTSxLQUFHLEVBRTVCLHVCQUFDLHFDQUFnQixJQUNmLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUNqQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFO29EQUNwQyxhQUFhLEdBQUcsY0FBYyxDQUFDO2dEQUNqQyxDQUFDLEdBQ0QsRUFFRix1QkFBQyxxQ0FBaUIsQ0FBQyxNQUFNLGNBQ3ZCLGdDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsWUFDM0QsaUNBQUssU0FBUyxFQUFDLHVDQUF1QyxhQUNwRCx1QkFBQyxtQ0FBZSxDQUFDLEtBQUssSUFBQyxPQUFPLGtCQUM1Qix1QkFBQyxXQUFNLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxPQUFPLFlBQ25ELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUNiLEdBQ2EsRUFDeEIsdUJBQUMsV0FBTSxJQUVMLElBQUksRUFBQyxRQUFRLEVBQ2IsT0FBTyxFQUFDLFNBQVMsRUFDakIsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLEVBQUMsUUFBUSxFQUNiLFFBQVEsRUFBRSxTQUFTLEVBQ25CLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sZUFBZSxFQUFFLFlBRTNDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFSZCxlQUFlLENBU1osSUFDTCxHQUNGLEdBQ21CLElBQ0QsSUFDVixJQUNoQixJQUNGLEVBRUwsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FDM0IsdUJBQUMsd0JBQVUsSUFFVCxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUUsRUFDNUMsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxhQUFhLElBSjVCLElBQUksQ0FBQyxFQUFFLENBS1osQ0FDSCxDQUFDLEVBRUQsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUN0QyxnQ0FDRSxLQUFLLEVBQUU7b0JBQ0wsVUFBVSxFQUNSLDhIQUE4SDtpQkFDakksRUFDRCxTQUFTLEVBQUMsMkVBQTJFLEdBQ3JGLENBQ0gsSUFDRyxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUE3SFcsUUFBQSxrQkFBa0Isc0JBNkg3QiJ9