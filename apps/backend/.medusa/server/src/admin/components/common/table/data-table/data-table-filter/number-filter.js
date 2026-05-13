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
exports.NumberFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const Popover = __importStar(require("@radix-ui/react-popover"));
const RadioGroup = __importStar(require("@radix-ui/react-radio-group"));
const lodash_1 = require("lodash");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../hooks");
const context_1 = require("./context");
const filter_chip_1 = __importDefault(require("./filter-chip"));
const NumberFilter = ({ filter, prefix, readonly, openOnMount, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [open, setOpen] = (0, react_1.useState)(openOnMount);
    const { key, label } = filter;
    const { removeFilter } = (0, context_1.useDataTableFilterContext)();
    const selectedParams = (0, hooks_1.useSelectedParams)({
        param: key,
        prefix,
        multiple: false,
    });
    const currentValue = selectedParams.get();
    const [previousValue, setPreviousValue] = (0, react_1.useState)(currentValue);
    const [operator, setOperator] = (0, react_1.useState)(getOperator(currentValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedOnChange = (0, react_1.useCallback)((0, lodash_1.debounce)((e, operator) => {
        const value = e.target.value;
        const curr = JSON.parse(currentValue?.join(",") || "{}");
        const isCurrentNumber = !isNaN(Number(curr));
        const handleValue = (operator) => {
            if (!value && isCurrentNumber) {
                selectedParams.delete();
                return;
            }
            if (curr && !value) {
                delete curr[operator];
                selectedParams.add(JSON.stringify(curr));
                return;
            }
            if (!curr) {
                selectedParams.add(JSON.stringify({ [operator]: value }));
                return;
            }
            selectedParams.add(JSON.stringify({ ...curr, [operator]: value }));
        };
        switch (operator) {
            case "eq":
                if (!value) {
                    selectedParams.delete();
                }
                else {
                    selectedParams.add(value);
                }
                break;
            case "lt":
            case "gt":
                handleValue(operator);
                break;
        }
    }, 500), [selectedParams, currentValue]);
    (0, react_1.useEffect)(() => {
        return () => {
            debouncedOnChange.cancel();
        };
    }, [debouncedOnChange]);
    let timeoutId = null;
    const handleOpenChange = (open) => {
        setOpen(open);
        setPreviousValue(currentValue);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (!open && !currentValue.length) {
            timeoutId = setTimeout(() => {
                removeFilter(key);
            }, 200);
        }
    };
    const handleRemove = () => {
        selectedParams.delete();
        removeFilter(key);
    };
    const operators = [
        {
            operator: "exact",
            label: t("filters.compare.exact"),
        },
        {
            operator: "range",
            label: t("filters.compare.range"),
        },
    ];
    const GT_KEY = `${key}-gt`;
    const LT_KEY = `${key}-lt`;
    const EQ_KEY = key;
    const displayValue = parseDisplayValue(currentValue, t);
    const previousDisplayValue = parseDisplayValue(previousValue, t);
    return ((0, jsx_runtime_1.jsxs)(Popover.Root, { modal: true, open: open, onOpenChange: handleOpenChange, children: [(0, jsx_runtime_1.jsx)(filter_chip_1.default, { hasOperator: true, hadPreviousValue: !!previousDisplayValue, label: label, value: displayValue, onRemove: handleRemove, readonly: readonly }), !readonly && ((0, jsx_runtime_1.jsx)(Popover.Portal, { children: (0, jsx_runtime_1.jsxs)(Popover.Content, { "data-name": "number_filter_content", align: "start", sideOffset: 8, collisionPadding: 24, className: (0, ui_1.clx)("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] w-[300px] divide-y overflow-y-auto rounded-lg outline-none"), onInteractOutside: (e) => {
                        if (e.target instanceof HTMLElement) {
                            if (e.target.attributes.getNamedItem("data-name")?.value ===
                                "filters_menu_content") {
                                e.preventDefault();
                            }
                        }
                    }, children: [(0, jsx_runtime_1.jsx)("div", { className: "p-1", children: (0, jsx_runtime_1.jsx)(RadioGroup.Root, { value: operator, onValueChange: (val) => setOperator(val), className: "flex flex-col items-start", orientation: "vertical", autoFocus: true, children: operators.map((o) => ((0, jsx_runtime_1.jsxs)(RadioGroup.Item, { value: o.operator, className: "txt-compact-small hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed transition-fg grid w-full grid-cols-[20px_1fr] gap-2 rounded-[4px] px-2 py-1.5 text-left outline-none", children: [(0, jsx_runtime_1.jsx)("div", { className: "size-5", children: (0, jsx_runtime_1.jsx)(RadioGroup.Indicator, { children: (0, jsx_runtime_1.jsx)(icons_1.EllipseMiniSolid, {}) }) }), (0, jsx_runtime_1.jsx)("span", { className: "w-full", children: o.label })] }, o.operator))) }) }), (0, jsx_runtime_1.jsx)("div", { children: operator === "range" ? ((0, jsx_runtime_1.jsxs)("div", { className: "px-1 pb-3 pt-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-2 py-1.5", children: (0, jsx_runtime_1.jsx)(ui_1.Label, { size: "xsmall", weight: "plus", htmlFor: GT_KEY, children: t("filters.compare.greaterThan") }) }), (0, jsx_runtime_1.jsx)("div", { className: "px-2 py-0.5", children: (0, jsx_runtime_1.jsx)(ui_1.Input, { name: GT_KEY, size: "small", type: "number", defaultValue: getValue(currentValue, "gt"), onChange: (e) => debouncedOnChange(e, "gt") }) }), (0, jsx_runtime_1.jsx)("div", { className: "px-2 py-1.5", children: (0, jsx_runtime_1.jsx)(ui_1.Label, { size: "xsmall", weight: "plus", htmlFor: LT_KEY, children: t("filters.compare.lessThan") }) }), (0, jsx_runtime_1.jsx)("div", { className: "px-2 py-0.5", children: (0, jsx_runtime_1.jsx)(ui_1.Input, { name: LT_KEY, size: "small", type: "number", defaultValue: getValue(currentValue, "lt"), onChange: (e) => debouncedOnChange(e, "lt") }) })] }, "range")) : ((0, jsx_runtime_1.jsxs)("div", { className: "px-1 pb-3 pt-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-2 py-1.5", children: (0, jsx_runtime_1.jsx)(ui_1.Label, { size: "xsmall", weight: "plus", htmlFor: EQ_KEY, children: label }) }), (0, jsx_runtime_1.jsx)("div", { className: "px-2 py-0.5", children: (0, jsx_runtime_1.jsx)(ui_1.Input, { name: EQ_KEY, size: "small", type: "number", defaultValue: getValue(currentValue, "eq"), onChange: (e) => debouncedOnChange(e, "eq") }) })] }, "exact")) })] }) }))] }));
};
exports.NumberFilter = NumberFilter;
const parseDisplayValue = (value, t) => {
    const parsed = JSON.parse(value?.join(",") || "{}");
    let displayValue = "";
    if (typeof parsed === "object") {
        const parts = [];
        if (parsed.gt) {
            parts.push(t("filters.compare.greaterThanLabel", { value: parsed.gt }));
        }
        if (parsed.lt) {
            parts.push(t("filters.compare.lessThanLabel", {
                value: parsed.lt,
            }));
        }
        displayValue = parts.join(` ${t("filters.compare.andLabel")} `);
    }
    if (typeof parsed === "number") {
        displayValue = parsed.toString();
    }
    return displayValue;
};
const parseValue = (value) => {
    if (!value) {
        return undefined;
    }
    const val = value.join(",");
    if (!val) {
        return undefined;
    }
    return JSON.parse(val);
};
const getValue = (value, key) => {
    const parsed = parseValue(value);
    if (typeof parsed === "object") {
        return parsed[key];
    }
    if (typeof parsed === "number" && key === "eq") {
        return parsed;
    }
    return undefined;
};
const getOperator = (value) => {
    const parsed = parseValue(value);
    return typeof parsed === "object" ? "range" : "exact";
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi90YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtZmlsdGVyL251bWJlci1maWx0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQscUNBQWdEO0FBQ2hELGlFQUFrRDtBQUNsRCx3RUFBeUQ7QUFDekQsbUNBQWlDO0FBQ2pDLGlDQUtjO0FBQ2QsaURBQThDO0FBRTlDLG9DQUE0QztBQUM1Qyx1Q0FBcUQ7QUFHckQsZ0VBQXNDO0FBTy9CLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFDM0IsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxHQUNPLEVBQUUsRUFBRTtJQUN0QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUE7SUFDOUIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsV0FBVyxDQUFDLENBQUE7SUFFN0MsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUE7SUFFN0IsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUEsbUNBQXlCLEdBQUUsQ0FBQTtJQUNwRCxNQUFNLGNBQWMsR0FBRyxJQUFBLHlCQUFpQixFQUFDO1FBQ3ZDLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTTtRQUNOLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUMsQ0FBQTtJQUVGLE1BQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN6QyxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUNoRCxZQUFZLENBQ2IsQ0FB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