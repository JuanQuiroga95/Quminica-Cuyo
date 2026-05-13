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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const Popover = __importStar(require("@radix-ui/react-popover"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const context_1 = require("./context");
const number_filter_1 = require("./number-filter");
const select_filter_1 = require("./select-filter");
const string_filter_1 = require("./string-filter");
const DataTableFilter = ({ filters, readonly, prefix, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const [activeFilters, setActiveFilters] = (0, react_1.useState)(getInitialFilters({ searchParams, filters, prefix }));
    const availableFilters = filters.filter((f) => !activeFilters.find((af) => af.key === f.key));
    /**
     * If there are any filters in the URL that are not in the active filters,
     * add them to the active filters. This ensures that we display the filters
     * if a user navigates to a page with filters in the URL.
     */
    const initialMount = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (initialMount.current) {
            const params = new URLSearchParams(searchParams);
            filters.forEach((filter) => {
                const key = prefix ? `${prefix}_${filter.key}` : filter.key;
                const value = params.get(key);
                if (value && !activeFilters.find((af) => af.key === filter.key)) {
                    if (filter.type === "select") {
                        setActiveFilters((prev) => [
                            ...prev,
                            {
                                ...filter,
                                multiple: filter.multiple,
                                options: filter.options,
                                openOnMount: false,
                            },
                        ]);
                    }
                    else {
                        setActiveFilters((prev) => [
                            ...prev,
                            { ...filter, openOnMount: false },
                        ]);
                    }
                }
            });
        }
        initialMount.current = false;
    }, [activeFilters, filters, prefix, searchParams]);
    const addFilter = (filter) => {
        setOpen(false);
        setActiveFilters((prev) => [...prev, { ...filter, openOnMount: true }]);
    };
    const removeFilter = (0, react_1.useCallback)((key) => {
        setActiveFilters((prev) => prev.filter((f) => f.key !== key));
    }, []);
    const removeAllFilters = (0, react_1.useCallback)(() => {
        setActiveFilters([]);
    }, []);
    return ((0, jsx_runtime_1.jsx)(context_1.DataTableFilterContext.Provider, { value: (0, react_1.useMemo)(() => ({
            removeFilter,
            removeAllFilters,
        }), [removeAllFilters, removeFilter]), children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-2/3 flex flex-wrap items-center gap-2", children: [activeFilters.map((filter) => {
                    switch (filter.type) {
                        case "select":
                            return ((0, jsx_runtime_1.jsx)(select_filter_1.SelectFilter, { filter: filter, prefix: prefix, readonly: readonly, options: filter.options, multiple: filter.multiple, searchable: filter.searchable, openOnMount: filter.openOnMount }, filter.key));
                        case "string":
                            return ((0, jsx_runtime_1.jsx)(string_filter_1.StringFilter, { filter: filter, prefix: prefix, readonly: readonly, openOnMount: filter.openOnMount }, filter.key));
                        case "number":
                            return ((0, jsx_runtime_1.jsx)(number_filter_1.NumberFilter, { filter: filter, prefix: prefix, readonly: readonly, openOnMount: filter.openOnMount }, filter.key));
                        default:
                            break;
                    }
                }), !readonly && availableFilters.length > 0 && ((0, jsx_runtime_1.jsxs)(Popover.Root, { modal: true, open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(Popover.Trigger, { asChild: true, id: "filters_menu_trigger", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { size: "small", variant: "secondary", children: t("filters.addFilter") }) }), (0, jsx_runtime_1.jsx)(Popover.Portal, { children: (0, jsx_runtime_1.jsx)(Popover.Content, { className: (0, ui_1.clx)("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-auto rounded-lg p-1 outline-none"), "data-name": "filters_menu_content", align: "start", sideOffset: 8, collisionPadding: 8, onCloseAutoFocus: (e) => {
                                    const hasOpenFilter = activeFilters.find((filter) => filter.openOnMount);
                                    if (hasOpenFilter) {
                                        e.preventDefault();
                                    }
                                }, children: availableFilters.map((filter) => {
                                    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none", role: "menuitem", onClick: () => {
                                            addFilter(filter);
                                        }, children: filter.label }, filter.key));
                                }) }) })] })), !readonly && activeFilters.length > 0 && ((0, jsx_runtime_1.jsx)(ClearAllFilters, { filters: filters, prefix: prefix }))] }) }));
};
exports.DataTableFilter = DataTableFilter;
const ClearAllFilters = ({ filters, prefix }) => {
    const { removeAllFilters } = (0, context_1.useDataTableFilterContext)();
    const [_, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const handleRemoveAll = () => {
        setSearchParams((prev) => {
            const newValues = new URLSearchParams(prev);
            filters.forEach((filter) => {
                newValues.delete(prefix ? `${prefix}_${filter.key}` : filter.key);
            });
            return newValues;
        });
        removeAllFilters();
    };
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: handleRemoveAll, className: (0, ui_1.clx)("text-ui-fg-muted transition-fg txt-compact-small-plus rounded-md px-2 py-1", "hover:text-ui-fg-subtle", "focus-visible:shadow-borders-focus"), children: "Clear all" }));
};
const getInitialFilters = ({ searchParams, filters, prefix, }) => {
    const params = new URLSearchParams(searchParams);
    const activeFilters = [];
    filters.forEach((filter) => {
        const key = prefix ? `${prefix}_${filter.key}` : filter.key;
        const value = params.get(key);
        if (value) {
            if (filter.type === "select") {
                activeFilters.push({
                    ...filter,
                    multiple: filter.multiple,
                    options: filter.options,
                    openOnMount: false,
                });
            }
            else {
                activeFilters.push({ ...filter, openOnMount: false });
            }
        }
    });
    return activeFilters;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWZpbHRlci9kYXRhLXRhYmxlLWZpbHRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUEyQztBQUMzQyxpRUFBbUQ7QUFDbkQsaUNBQTBFO0FBQzFFLHVEQUFtRDtBQUVuRCxpREFBK0M7QUFDL0MsdUNBQThFO0FBQzlFLG1EQUErQztBQUMvQyxtREFBK0M7QUFDL0MsbURBQStDO0FBcUN4QyxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQzlCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxHQUNlLEVBQUUsRUFBRTtJQUN6QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBQSw4QkFBYyxHQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUEsa0NBQWUsR0FBRSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQ2hELGlCQUFpQixDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUNyRCxDQUFDO0lBRUYsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUNyQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDckQsQ0FB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