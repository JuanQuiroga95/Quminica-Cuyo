"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageItem = ManageItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const common_1 = require("../../../../components/common");
const form_1 = require("../../../../components/common/form");
const api_1 = require("../../../../hooks/api");
const utils_1 = require("../../../../utils");
function ManageItem({ originalItem, item, currencyCode, orderId, }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [showPriceForm, setShowPriceForm] = (0, react_1.useState)(false);
    const { mutateAsync: addItems } = (0, api_1.useAddItemsToQuote)(orderId);
    const { mutateAsync: updateAddedItem } = (0, api_1.useUpdateAddedQuoteItem)(orderId);
    const { mutateAsync: updateOriginalItem } = (0, api_1.useUpdateQuoteItem)(orderId);
    const { mutateAsync: undoAction } = (0, api_1.useRemoveQuoteItem)(orderId);
    const isAddedItem = (0, react_1.useMemo)(() => !!item.actions?.find((a) => a.action === "ITEM_ADD"), [item]);
    const isItemUpdated = (0, react_1.useMemo)(() => !!item.actions?.find((a) => a.action === "ITEM_UPDATE"), [item]);
    const isItemRemoved = (0, react_1.useMemo)(() => {
        // To be removed item needs to have updated quantity
        const updateAction = item.actions?.find((a) => a.action === "ITEM_UPDATE");
        return !!updateAction && item.quantity === item.detail.fulfilled_quantity;
    }, [item]);
    /**
     * HANDLERS
     */
    const onUpdate = async ({ quantity, unit_price, }) => {
        if (typeof quantity === "number" &&
            quantity <= item.detail.fulfilled_quantity) {
            ui_1.toast.error(t("orders.edits.validation.quantityLowerThanFulfillment"));
            return;
        }
        const addItemAction = item.actions?.find((a) => a.action === "ITEM_ADD");
        try {
            if (addItemAction) {
                await updateAddedItem({
                    quantity,
                    unit_price,
                    actionId: addItemAction.id,
                });
            }
            else {
                await updateOriginalItem({
                    quantity,
                    unit_price,
                    itemId: item.id,
                });
            }
        }
        catch (e) {
            ui_1.toast.error(e.message);
        }
    };
    const onRemove = async () => {
        const addItemAction = item.actions?.find((a) => a.action === "ITEM_ADD");
        try {
            if (addItemAction) {
                await undoAction(addItemAction.id);
            }
            else {
                await updateOriginalItem({
                    quantity: item.detail.fulfilled_quantity,
                    itemId: item.id,
                });
            }
        }
        catch (e) {
            ui_1.toast.error(e.message);
        }
    };
    const onRemoveUndo = async () => {
        const updateItemAction = item.actions?.find((a) => a.action === "ITEM_UPDATE");
        try {
            if (updateItemAction) {
                await undoAction(updateItemAction.id);
            }
        }
        catch (e) {
            ui_1.toast.error(e.message);
        }
    };
    const onDuplicate = async () => {
        try {
            await addItems({
                items: [
                    {
                        variant_id: item.variant_id,
                        quantity: item.quantity,
                    },
                ],
            });
        }
        catch (e) {
            ui_1.toast.error(e.message);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-1 items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-x-3", children: [(0, jsx_runtime_1.jsx)(common_1.Thumbnail, { src: item.thumbnail }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "txt-small", as: "span", weight: "plus", children: [item.title, " "] }), item.variant_sku && (0, jsx_runtime_1.jsxs)("span", { children: ["(", item.variant_sku, ")"] })] }), (0, jsx_runtime_1.jsx)(ui_1.Text, { as: "div", className: "text-ui-fg-subtle txt-small", children: item.product_title })] })] }), isAddedItem && ((0, jsx_runtime_1.jsx)(ui_1.Badge, { size: "2xsmall", rounded: "full", color: "blue", className: "mr-1", children: t("general.new") })), isItemRemoved ? ((0, jsx_runtime_1.jsx)(ui_1.Badge, { size: "2xsmall", rounded: "full", color: "red", className: "mr-1", children: t("general.removed") })) : (isItemUpdated && ((0, jsx_runtime_1.jsx)(ui_1.Badge, { size: "2xsmall", rounded: "full", color: "orange", className: "mr-1", children: t("general.modified") })))] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-1 justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-grow items-center gap-2", children: [(0, jsx_runtime_1.jsx)(ui_1.Input, { className: "bg-ui-bg-base txt-small w-[67px] rounded-lg [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", type: "number", disabled: item.detail.fulfilled_quantity === item.quantity, min: item.detail.fulfilled_quantity, defaultValue: item.quantity, onBlur: (e) => {
                                            const val = e.target.value;
                                            const quantity = val === "" ? null : Number(val);
                                            if (quantity) {
                                                onUpdate({ quantity });
                                            }
                                        } }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-small text-ui-fg-subtle", children: t("fields.qty") })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0", children: (0, jsx_runtime_1.jsx)(common_1.AmountCell, { currencyCode: currencyCode, amount: item.total, originalAmount: originalItem?.total }) }), (0, jsx_runtime_1.jsx)(common_1.ActionMenu, { groups: [
                                    {
                                        actions: [
                                            {
                                                label: "Update Price",
                                                onClick: () => setShowPriceForm(!showPriceForm),
                                                icon: (0, jsx_runtime_1.jsx)(icons_1.PencilSquare, {}),
                                            },
                                            {
                                                label: t("actions.duplicate"),
                                                onClick: onDuplicate,
                                                icon: (0, jsx_runtime_1.jsx)(icons_1.DocumentSeries, {}),
                                            },
                                        ],
                                    },
                                    {
                                        actions: [
                                            !isItemRemoved
                                                ? {
                                                    label: t("actions.remove"),
                                                    onClick: onRemove,
                                                    icon: (0, jsx_runtime_1.jsx)(icons_1.XCircle, {}),
                                                    disabled: item.detail.fulfilled_quantity === item.quantity,
                                                }
                                                : {
                                                    label: t("actions.undo"),
                                                    onClick: onRemoveUndo,
                                                    icon: (0, jsx_runtime_1.jsx)(icons_1.ArrowUturnLeft, {}),
                                                },
                                        ].filter(Boolean),
                                    },
                                ] })] })] }), showPriceForm && ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 gap-2 p-3 md:grid-cols-2", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(form_1.Form.Label, { children: t("fields.price") }), (0, jsx_runtime_1.jsx)(form_1.Form.Hint, { className: "!mt-1", children: "Override the unit price of this product" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-grow", children: (0, jsx_runtime_1.jsx)(form_1.Form.Field, { name: `inbound_items.${item.id}.unit_price`, render: ({ field: { ref, ...field } }) => {
                                        return ((0, jsx_runtime_1.jsxs)(form_1.Form.Item, { children: [(0, jsx_runtime_1.jsx)(form_1.Form.Control, { children: (0, jsx_runtime_1.jsx)(ui_1.CurrencyInput, { ...field, symbol: currencyCode, code: utils_1.currencySymbolMap[currencyCode], defaultValue: item.unit_price, type: "numeric", min: 0, onBlur: () => {
                                                            field.onChange(field.value);
                                                            onUpdate({
                                                                unit_price: parseFloat(field.value),
                                                                quantity: item.quantity,
                                                            });
                                                        }, className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover" }) }), (0, jsx_runtime_1.jsx)(form_1.Form.ErrorMessage, {})] }));
                                    } }) }), (0, jsx_runtime_1.jsx)(ui_1.IconButton, { type: "button", className: "flex-shrink", variant: "transparent", onClick: () => {
                                    setShowPriceForm(false);
                                }, children: (0, jsx_runtime_1.jsx)(icons_1.XMark, { className: "text-ui-fg-muted" }) })] })] }))] }, item.quantity));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vcm91dGVzL3F1b3Rlcy9jb21wb25lbnRzL3F1b3RlLW1hbmFnZS9tYW5hZ2UtaXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF5VVMsZ0NBQVU7O0FBeFVuQiwyQ0FNeUI7QUFDekIscUNBT3NCO0FBQ3RCLGlDQUEwQztBQUMxQyxpREFBK0M7QUFDL0MsMERBSXVDO0FBQ3ZDLDZEQUEwRDtBQUMxRCwrQ0FLK0I7QUFDL0IsNkNBQXNEO0FBU3RELFNBQVMsVUFBVSxDQUFDLEVBQ2xCLFlBQVksRUFDWixJQUFJLEVBQ0osWUFBWSxFQUNaLE9BQU8sR0FDUztJQUNoQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUUxRCxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUEsd0JBQWtCLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUQsTUFBTSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFBLDZCQUF1QixFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxJQUFBLHdCQUFrQixFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBQSx3QkFBa0IsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUVoRSxNQUFNLFdBQVcsR0FBRyxJQUFBLGVBQU8sRUFDekIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FB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