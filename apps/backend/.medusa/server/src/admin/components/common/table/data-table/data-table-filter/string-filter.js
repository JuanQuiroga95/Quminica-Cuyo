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
exports.StringFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const Popover = __importStar(require("@radix-ui/react-popover"));
const lodash_1 = require("lodash");
const react_1 = require("react");
const hooks_1 = require("../hooks");
const context_1 = require("./context");
const filter_chip_1 = __importDefault(require("./filter-chip"));
const StringFilter = ({ filter, prefix, readonly, openOnMount, }) => {
    const [open, setOpen] = (0, react_1.useState)(openOnMount);
    const { key, label } = filter;
    const { removeFilter } = (0, context_1.useDataTableFilterContext)();
    const selectedParams = (0, hooks_1.useSelectedParams)({ param: key, prefix });
    const query = selectedParams.get();
    const [previousValue, setPreviousValue] = (0, react_1.useState)(query?.[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedOnChange = (0, react_1.useCallback)((0, lodash_1.debounce)((e) => {
        const value = e.target.value;
        if (!value) {
            selectedParams.delete();
        }
        else {
            selectedParams.add(value);
        }
    }, 500), [selectedParams]);
    (0, react_1.useEffect)(() => {
        return () => {
            debouncedOnChange.cancel();
        };
    }, [debouncedOnChange]);
    let timeoutId = null;
    const handleOpenChange = (open) => {
        setOpen(open);
        setPreviousValue(query?.[0]);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (!open && !query.length) {
            timeoutId = setTimeout(() => {
                removeFilter(key);
            }, 200);
        }
    };
    const handleRemove = () => {
        selectedParams.delete();
        removeFilter(key);
    };
    return ((0, jsx_runtime_1.jsxs)(Popover.Root, { modal: true, open: open, onOpenChange: handleOpenChange, children: [(0, jsx_runtime_1.jsx)(filter_chip_1.default, { hasOperator: true, hadPreviousValue: !!previousValue, label: label, value: query?.[0], onRemove: handleRemove, readonly: readonly }), !readonly && ((0, jsx_runtime_1.jsx)(Popover.Portal, { children: (0, jsx_runtime_1.jsx)(Popover.Content, { hideWhenDetached: true, align: "start", sideOffset: 8, collisionPadding: 8, className: (0, ui_1.clx)("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-hidden rounded-lg outline-none"), onInteractOutside: (e) => {
                        if (e.target instanceof HTMLElement) {
                            if (e.target.attributes.getNamedItem("data-name")?.value ===
                                "filters_menu_content") {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                    }, children: (0, jsx_runtime_1.jsxs)("div", { className: "px-1 pb-3 pt-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-2 py-1.5", children: (0, jsx_runtime_1.jsx)(ui_1.Label, { size: "xsmall", weight: "plus", htmlFor: key, children: label }) }), (0, jsx_runtime_1.jsx)("div", { className: "px-2 py-0.5", children: (0, jsx_runtime_1.jsx)(ui_1.Input, { name: key, size: "small", defaultValue: query?.[0] || undefined, onChange: debouncedOnChange }) })] }) }) }))] }));
};
exports.StringFilter = StringFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi90YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUtZmlsdGVyL3N0cmluZy1maWx0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUQ7QUFDakQsaUVBQW1EO0FBQ25ELG1DQUFrQztBQUNsQyxpQ0FBc0U7QUFDdEUsb0NBQTZDO0FBQzdDLHVDQUFzRDtBQUV0RCxnRUFBdUM7QUFJaEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUMzQixNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEdBQ08sRUFBRSxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTlDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRTlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFBLG1DQUF5QixHQUFFLENBQUM7SUFDckQsTUFBTSxjQUFjLEdBQUcsSUFBQSx5QkFBaUIsRUFBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVqRSxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFbkMsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFDaEQsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FBQztJQUVGLHVEQUF1RDtJQUN2RCxNQUFNLGlCQUFpQixHQUFHLElBQUEsbUJBQVcsRUFDbkMsSUFBQSxpQkFBUSxFQUFDLENBQUMsQ0FBZ0MsRUFBRSxFQUFF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