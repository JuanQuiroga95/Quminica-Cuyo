"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const Popover = __importStar(require("@radix-ui/react-popover"));
const cmdk_1 = require("cmdk");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../hooks");
const context_1 = require("./context");
const filter_chip_1 = __importDefault(require("./filter-chip"));
const SelectFilter = ({ filter, prefix, readonly, multiple, searchable, options, openOnMount, }) => {
    const [open, setOpen] = (0, react_1.useState)(openOnMount);
    const [search, setSearch] = (0, react_1.useState)("");
    const [searchRef, setSearchRef] = (0, react_1.useState)(null);
    const { t } = (0, react_i18next_1.useTranslation)();
    const { removeFilter } = (0, context_1.useDataTableFilterContext)();
    const { key, label } = filter;
    const selectedParams = (0, hooks_1.useSelectedParams)({ param: key, prefix, multiple });
    const currentValue = selectedParams.get();
    const labelValues = currentValue
        .map((v) => options.find((o) => o.value === v)?.label)
        .filter(Boolean);
    const [previousValue, setPreviousValue] = (0, react_1.useState)(labelValues);
    const handleRemove = () => {
        selectedParams.delete();
        removeFilter(key);
    };
    let timeoutId = null;
    const handleOpenChange = (open) => {
        setOpen(open);
        setPreviousValue(labelValues);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (!open && !currentValue.length) {
            timeoutId = setTimeout(() => {
                removeFilter(key);
            }, 200);
        }
    };
    const handleClearSearch = () => {
        setSearch("");
        if (searchRef) {
            searchRef.focus();
        }
    };
    const handleSelect = (value) => {
        const isSelected = selectedParams.get().includes(String(value));
        if (isSelected) {
            selectedParams.delete(String(value));
        }
        else {
            selectedParams.add(String(value));
        }
    };
    const normalizedValues = labelValues
        ? Array.isArray(labelValues)
            ? labelValues
            : [labelValues]
        : null;
    const normalizedPrev = previousValue
        ? Array.isArray(previousValue)
            ? previousValue
            : [previousValue]
        : null;
    return ((0, jsx_runtime_1.jsxs)(Popover.Root, { modal: true, open: open, onOpenChange: handleOpenChange, children: [(0, jsx_runtime_1.jsx)(filter_chip_1.default, { hasOperator: true, hadPreviousValue: !!normalizedPrev?.length, readonly: readonly, label: label, value: normalizedValues?.join(", "), onRemove: handleRemove }), !readonly && ((0, jsx_runtime_1.jsx)(Popover.Portal, { children: (0, jsx_runtime_1.jsx)(Popover.Content, { hideWhenDetached: true, align: "start", sideOffset: 8, collisionPadding: 8, className: (0, ui_1.clx)("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-hidden rounded-lg outline-none"), onInteractOutside: (e) => {
                        if (e.target instanceof HTMLElement) {
                            if (e.target.attributes.getNamedItem("data-name")?.value ===
                                "filters_menu_content") {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                    }, children: (0, jsx_runtime_1.jsxs)(cmdk_1.Command, { className: "h-full", children: [searchable && ((0, jsx_runtime_1.jsx)("div", { className: "border-b p-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-[1fr_20px] gap-x-2 rounded-md px-2 py-1", children: [(0, jsx_runtime_1.jsx)(cmdk_1.Command.Input, { ref: setSearchRef, value: search, onValueChange: setSearch, className: "txt-compact-small placeholder:text-ui-fg-muted bg-transparent outline-none", placeholder: "Search" }), (0, jsx_runtime_1.jsx)("div", { className: "flex h-5 w-5 items-center justify-center", children: (0, jsx_runtime_1.jsx)("button", { disabled: !search, onClick: handleClearSearch, className: (0, ui_1.clx)("transition-fg text-ui-fg-muted focus-visible:bg-ui-bg-base-pressed rounded-md outline-none", {
                                                    invisible: !search,
                                                }), children: (0, jsx_runtime_1.jsx)(icons_1.XMarkMini, {}) }) })] }) })), (0, jsx_runtime_1.jsx)(cmdk_1.Command.Empty, { className: "txt-compact-small flex items-center justify-center p-1", children: (0, jsx_runtime_1.jsx)("span", { className: "w-full px-2 py-1 text-center", children: t("general.noResultsTitle") }) }), (0, jsx_runtime_1.jsx)(cmdk_1.Command.List, { className: "h-full max-h-[163px] min-h-[0] overflow-auto p-1 outline-none", children: options.map((option) => {
                                    const isSelected = selectedParams
                                        .get()
                                        .includes(String(option.value));
                                    return ((0, jsx_runtime_1.jsxs)(cmdk_1.Command.Item, { className: "bg-ui-bg-base hover:bg-ui-bg-base-hover aria-selected:bg-ui-bg-base-pressed focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center gap-x-2 rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none", value: option.label, onSelect: () => {
                                            handleSelect(option.value);
                                        }, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("transition-fg flex h-5 w-5 items-center justify-center", {
                                                    "[&_svg]:invisible": !isSelected,
                                                }), children: multiple ? (0, jsx_runtime_1.jsx)(icons_1.CheckMini, {}) : (0, jsx_runtime_1.jsx)(icons_1.EllipseMiniSolid, {}) }), option.label] }, String(option.value)));
                                }) })] }) }) }))] }));
};
exports.SelectFilter = SelectFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi90YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtZmlsdGVyL3NlbGVjdC1maWx0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0U7QUFDeEUscUNBQWtDO0FBQ2xDLGlFQUFrRDtBQUNsRCwrQkFBOEI7QUFDOUIsaUNBQWdDO0FBQ2hDLGlEQUE4QztBQUU5QyxvQ0FBNEM7QUFDNUMsdUNBQXFEO0FBQ3JELGdFQUFzQztBQVUvQixNQUFNLFlBQVksR0FBRyxDQUFDLEVBQzNCLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsT0FBTyxFQUNQLFdBQVcsR0FDTyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDeEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQTBCLElBQUksQ0FBQyxDQUFBO0lBRXpFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFBLDhCQUFjLEdBQUUsQ0FBQTtJQUM5QixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBQSxtQ0FBeUIsR0FBRSxDQUFBO0lBRXBELE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFBO0lBQzdCLE1BQU0sY0FBYyxHQUFHLElBQUEseUJBQWlCLEVBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxF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