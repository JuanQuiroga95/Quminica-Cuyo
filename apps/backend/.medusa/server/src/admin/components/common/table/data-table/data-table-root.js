"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableRoot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_table_1 = require("@tanstack/react-table");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const empty_state_1 = require("../empty-state");
/**
 * TODO
 *
 * Add a sticky header to the table that shows the column name when scrolling through the table vertically.
 *
 * This is a bit tricky as we can't support horizontal scrolling and sticky headers at the same time, natively
 * with CSS. We need to implement a custom solution for this. One solution is to render a duplicate table header
 * using a DIV that, but it will require rerendeing the duplicate header every time the window is resized, to keep
 * the columns aligned.
 */
/**
 * Table component for rendering a table with pagination, filtering and ordering.
 */
const DataTableRoot = ({ table, columns, pagination, navigateTo, commands, count = 0, noResults = false, noHeader = false, layout = "fit", }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [showStickyBorder, setShowStickyBorder] = (0, react_1.useState)(false);
    const scrollableRef = (0, react_1.useRef)(null);
    const hasSelect = columns.find((c) => c.id === "select");
    const hasActions = columns.find((c) => c.id === "actions");
    const hasCommandBar = commands && commands.length > 0;
    const rowSelection = table.getState().rowSelection;
    const { pageIndex, pageSize } = table.getState().pagination;
    const colCount = columns.length - (hasSelect ? 1 : 0) - (hasActions ? 1 : 0);
    const colWidth = 100 / colCount;
    const handleHorizontalScroll = (e) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        if (scrollLeft > 0) {
            setShowStickyBorder(true);
        }
        else {
            setShowStickyBorder(false);
        }
    };
    const handleAction = async (action) => {
        await action(rowSelection).then(() => {
            table.resetRowSelection();
        });
    };
    (0, react_1.useEffect)(() => {
        scrollableRef.current?.scroll({ top: 0, left: 0 });
    }, [pageIndex]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("flex w-full flex-col overflow-hidden", {
            "flex flex-1 flex-col": layout === "fill",
        }), children: [(0, jsx_runtime_1.jsx)("div", { ref: scrollableRef, onScroll: handleHorizontalScroll, className: (0, ui_1.clx)("w-full", {
                    "min-h-0 flex-grow overflow-auto": layout === "fill",
                    "overflow-x-auto": layout === "fit",
                }), children: !noResults ? ((0, jsx_runtime_1.jsxs)(ui_1.Table, { className: "relative w-full", children: [!noHeader && ((0, jsx_runtime_1.jsx)(ui_1.Table.Header, { className: "border-t-0", children: table.getHeaderGroups().map((headerGroup) => {
                                return ((0, jsx_runtime_1.jsx)(ui_1.Table.Row, { className: (0, ui_1.clx)({
                                        "relative border-b-0 [&_th:last-of-type]:w-[1%] [&_th:last-of-type]:whitespace-nowrap": hasActions,
                                        "[&_th:first-of-type]:w-[1%] [&_th:first-of-type]:whitespace-nowrap": hasSelect,
                                    }), children: headerGroup.headers.map((header, index) => {
                                        const isActionHeader = header.id === "actions";
                                        const isSelectHeader = header.id === "select";
                                        const isSpecialHeader = isActionHeader || isSelectHeader;
                                        const firstHeader = headerGroup.headers.findIndex((h) => h.id !== "select");
                                        const isFirstHeader = firstHeader !== -1
                                            ? header.id === headerGroup.headers[firstHeader].id
                                            : index === 0;
                                        const isStickyHeader = isSelectHeader || isFirstHeader;
                                        return ((0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { "data-table-header-id": header.id, style: {
                                                width: !isSpecialHeader
                                                    ? `${colWidth}%`
                                                    : undefined,
                                            }, className: (0, ui_1.clx)({
                                                "bg-ui-bg-base sticky left-0 after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-transparent after:content-['']": isStickyHeader,
                                                "left-[68px]": isStickyHeader && hasSelect && !isSelectHeader,
                                                "after:bg-ui-border-base": showStickyBorder &&
                                                    isStickyHeader &&
                                                    !isSpecialHeader,
                                            }), children: (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id));
                                    }) }, headerGroup.id));
                            }) })), (0, jsx_runtime_1.jsx)(ui_1.Table.Body, { className: "border-b-0", children: table.getRowModel().rows.map((row) => {
                                const to = navigateTo ? navigateTo(row) : undefined;
                                const isRowDisabled = hasSelect && !row.getCanSelect();
                                const isOdd = row.depth % 2 !== 0;
                                const cells = row.getVisibleCells();
                                return ((0, jsx_runtime_1.jsx)(ui_1.Table.Row, { "data-selected": row.getIsSelected(), className: (0, ui_1.clx)("transition-fg group/row group relative [&_td:last-of-type]:w-[1%] [&_td:last-of-type]:whitespace-nowrap", "has-[[data-row-link]:focus-visible]:bg-ui-bg-base-hover", {
                                        "bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover": isOdd,
                                        "cursor-pointer": !!to,
                                        "bg-ui-bg-highlight hover:bg-ui-bg-highlight-hover": row.getIsSelected(),
                                        "!bg-ui-bg-disabled !hover:bg-ui-bg-disabled": isRowDisabled,
                                    }), children: cells.map((cell, index) => {
                                        const visibleCells = row.getVisibleCells();
                                        const isSelectCell = cell.column.id === "select";
                                        const firstCell = visibleCells.findIndex((h) => h.column.id !== "select");
                                        const isFirstCell = firstCell !== -1
                                            ? cell.column.id === visibleCells[firstCell].column.id
                                            : index === 0;
                                        const isStickyCell = isSelectCell || isFirstCell;
                                        /**
                                         * If the table has nested rows, we need to offset the cell padding
                                         * to indicate the depth of the row.
                                         */
                                        const depthOffset = row.depth > 0 && isFirstCell
                                            ? row.depth * 14 + 24
                                            : undefined;
                                        const hasLeftOffset = isStickyCell && hasSelect && !isSelectCell;
                                        const Inner = (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext());
                                        const isTabableLink = isFirstCell && !!to;
                                        const shouldRenderAsLink = !!to && !isSelectCell;
                                        return ((0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { className: (0, ui_1.clx)({
                                                "!pl-0 !pr-0": shouldRenderAsLink,
                                                "bg-ui-bg-base group-data-[selected=true]/row:bg-ui-bg-highlight group-data-[selected=true]/row:group-hover/row:bg-ui-bg-highlight-hover group-hover/row:bg-ui-bg-base-hover transition-fg group-has-[[data-row-link]:focus-visible]:bg-ui-bg-base-hover sticky left-0 after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-transparent after:content-['']": isStickyCell,
                                                "bg-ui-bg-subtle group-hover/row:bg-ui-bg-subtle-hover": isOdd && isStickyCell,
                                                "left-[68px]": hasLeftOffset,
                                                "after:bg-ui-border-base": showStickyBorder && isStickyCell && !isSelectCell,
                                                "!bg-ui-bg-disabled !hover:bg-ui-bg-disabled": isRowDisabled,
                                            }), style: {
                                                paddingLeft: depthOffset
                                                    ? `${depthOffset}px`
                                                    : undefined,
                                            }, children: shouldRenderAsLink ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: to, className: "size-full outline-none", "data-row-link": true, tabIndex: isTabableLink ? 0 : -1, children: (0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex size-full items-center pr-6", {
                                                        "pl-6": isTabableLink && !hasLeftOffset,
                                                    }), children: Inner }) })) : (Inner) }, cell.id));
                                    }) }, row.id));
                            }) })] })) : ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)({ "border-b": layout === "fit" }), children: (0, jsx_runtime_1.jsx)(empty_state_1.NoResults, {}) })) }), pagination && ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)({ "border-t": layout === "fill" }), children: (0, jsx_runtime_1.jsx)(Pagination, { canNextPage: table.getCanNextPage(), canPreviousPage: table.getCanPreviousPage(), nextPage: table.nextPage, previousPage: table.previousPage, count: count, pageIndex: pageIndex, pageCount: table.getPageCount(), pageSize: pageSize }) })), hasCommandBar && ((0, jsx_runtime_1.jsx)(ui_1.CommandBar, { open: !!Object.keys(rowSelection).length, children: (0, jsx_runtime_1.jsxs)(ui_1.CommandBar.Bar, { children: [(0, jsx_runtime_1.jsx)(ui_1.CommandBar.Value, { children: t("general.countSelected", {
                                count: Object.keys(rowSelection).length,
                            }) }), (0, jsx_runtime_1.jsx)(ui_1.CommandBar.Seperator, {}), commands?.map((command, index) => {
                            return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.CommandBar.Command, { label: command.label, shortcut: command.shortcut, action: () => handleAction(command.action) }), index < commands.length - 1 && (0, jsx_runtime_1.jsx)(ui_1.CommandBar.Seperator, {})] }, index));
                        })] }) }))] }));
};
exports.DataTableRoot = DataTableRoot;
const Pagination = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const translations = {
        of: t("general.of"),
        results: t("general.results"),
        pages: t("general.pages"),
        prev: t("general.prev"),
        next: t("general.next"),
    };
    return ((0, jsx_runtime_1.jsx)(ui_1.Table.Pagination, { className: "flex-shrink-0", ...props, translations: translations }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb290LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlL2RhdGEtdGFibGUvZGF0YS10YWJsZS1yb290LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUNBQXNEO0FBQ3RELHVEQUsrQjtBQUMvQixpQ0FPZTtBQUNmLGlEQUErQztBQUMvQyx1REFBd0M7QUFDeEMsZ0RBQTJDO0FBK0MzQzs7Ozs7Ozs7O0dBU0c7QUFFSDs7R0FFRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQVMsRUFDcEMsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEdBQUcsQ0FBQyxFQUNULFNBQVMsR0FBRyxLQUFLLEVBQ2pCLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLE1BQU0sR0FBRyxLQUFLLEdBQ1ksRUFBRSxFQUFFO0lBQzlCLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFBLDhCQUFjLEdBQUUsQ0FBQztJQUMvQixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEUsTUFBTSxhQUFhLEdBQUcsSUFBQSxjQUFNLEVBQWlCLElBQUksQ0FBQyxDQUFDO0lBRW5ELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDekQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUMzRCxNQUFNLGFBQWEsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxD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