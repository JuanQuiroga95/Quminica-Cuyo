"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoColumnPageSkeleton = exports.SingleColumnPageSkeleton = exports.JsonViewSectionSkeleton = exports.TableSectionSkeleton = exports.TableSkeleton = exports.TableFooterSkeleton = exports.GeneralSectionSkeleton = exports.IconButtonSkeleton = exports.TextSkeleton = exports.HeadingSkeleton = exports.Skeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const Skeleton = ({ className, style }) => {
    return ((0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: (0, ui_1.clx)("bg-ui-bg-component h-3 w-3 animate-pulse rounded-[4px]", className), style: style }));
};
exports.Skeleton = Skeleton;
const HeadingSkeleton = ({ level = "h1", characters = 10, }) => {
    let charWidth = 9;
    switch (level) {
        case "h1":
            charWidth = 11;
            break;
        case "h2":
            charWidth = 10;
            break;
        case "h3":
            charWidth = 9;
            break;
    }
    return ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: (0, ui_1.clx)({
            "h-7": level === "h1",
            "h-6": level === "h2",
            "h-5": level === "h3",
        }), style: {
            width: `${charWidth * characters}px`,
        } }));
};
exports.HeadingSkeleton = HeadingSkeleton;
const TextSkeleton = ({ size = "small", leading = "compact", characters = 10, }) => {
    let charWidth = 9;
    switch (size) {
        case "xlarge":
            charWidth = 13;
            break;
        case "large":
            charWidth = 11;
            break;
        case "base":
            charWidth = 10;
            break;
        case "small":
            charWidth = 9;
            break;
        case "xsmall":
            charWidth = 8;
            break;
    }
    return ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: (0, ui_1.clx)({
            "h-5": size === "xsmall",
            "h-6": size === "small",
            "h-7": size === "base",
            "h-8": size === "xlarge",
            "!h-5": leading === "compact",
        }), style: {
            width: `${charWidth * characters}px`,
        } }));
};
exports.TextSkeleton = TextSkeleton;
const IconButtonSkeleton = () => {
    return (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-7 rounded-md" });
};
exports.IconButtonSkeleton = IconButtonSkeleton;
const GeneralSectionSkeleton = ({ rowCount, }) => {
    const rows = Array.from({ length: rowCount ?? 0 }, (_, i) => i);
    return ((0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "divide-y p-0", "aria-hidden": true, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-6 py-4", children: [(0, jsx_runtime_1.jsx)(exports.HeadingSkeleton, { characters: 16 }), (0, jsx_runtime_1.jsx)(exports.IconButtonSkeleton, {})] }), rows.map((row) => ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 items-center px-6 py-4", "aria-hidden": true, children: [(0, jsx_runtime_1.jsx)(exports.TextSkeleton, { size: "small", leading: "compact", characters: 12 }), (0, jsx_runtime_1.jsx)(exports.TextSkeleton, { size: "small", leading: "compact", characters: 24 })] }, row)))] }));
};
exports.GeneralSectionSkeleton = GeneralSectionSkeleton;
const TableFooterSkeleton = ({ layout }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("flex items-center justify-between p-4", {
            "border-t": layout === "fill",
        }), children: [(0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-[138px]" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-24" }), (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-11" }), (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-11" })] })] }));
};
exports.TableFooterSkeleton = TableFooterSkeleton;
const TableSkeleton = ({ rowCount = 10, search = true, filters = true, orderBy = true, pagination = true, layout = "fit", }) => {
    // Row count + header row
    const totalRowCount = rowCount + 1;
    const rows = Array.from({ length: totalRowCount }, (_, i) => i);
    const hasToolbar = search || filters || orderBy;
    console.log({ filters });
    return ((0, jsx_runtime_1.jsxs)("div", { "aria-hidden": true, className: (0, ui_1.clx)({
            "flex h-full flex-col overflow-hidden": layout === "fill",
        }), children: [hasToolbar && ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-6 py-4", children: [filters && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-full max-w-[135px]" }), (search || orderBy) && ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-2", children: [search && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-[160px]" }), orderBy && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-7 w-7" })] }))] })), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col divide-y border-y", children: rows.map((row) => ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-10 w-full rounded-none" }, row))) }), pagination && (0, jsx_runtime_1.jsx)(exports.TableFooterSkeleton, { layout: layout })] }));
};
exports.TableSkeleton = TableSkeleton;
const TableSectionSkeleton = (props) => {
    return ((0, jsx_runtime_1.jsxs)(ui_1.Container, { className: "divide-y p-0", "aria-hidden": true, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-6 py-4", "aria-hidden": true, children: [(0, jsx_runtime_1.jsx)(exports.HeadingSkeleton, { level: "h2", characters: 16 }), (0, jsx_runtime_1.jsx)(exports.IconButtonSkeleton, {})] }), (0, jsx_runtime_1.jsx)(exports.TableSkeleton, { ...props })] }));
};
exports.TableSectionSkeleton = TableSectionSkeleton;
const JsonViewSectionSkeleton = () => {
    return ((0, jsx_runtime_1.jsx)(ui_1.Container, { className: "divide-y p-0", "aria-hidden": true, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-6 py-4", "aria-hidden": true, children: [(0, jsx_runtime_1.jsxs)("div", { "aria-hidden": true, className: "flex items-center gap-x-4", children: [(0, jsx_runtime_1.jsx)(exports.HeadingSkeleton, { level: "h2", characters: 16 }), (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-5 w-12 rounded-md" })] }), (0, jsx_runtime_1.jsx)(exports.IconButtonSkeleton, {})] }) }));
};
exports.JsonViewSectionSkeleton = JsonViewSectionSkeleton;
const SingleColumnPageSkeleton = ({ sections = 2, showJSON = false, showMetadata = false, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-3", children: [Array.from({ length: sections }, (_, i) => i).map((section) => {
                return ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: (0, ui_1.clx)("h-full max-h-[460px] w-full rounded-lg", {
                        // First section is smaller on most pages, this gives us less
                        // layout shifting in general,
                        "max-h-[219px]": section === 0,
                    }) }, section));
            }), showMetadata && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-[60px] w-full rounded-lg" }), showJSON && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-[60px] w-full rounded-lg" })] }));
};
exports.SingleColumnPageSkeleton = SingleColumnPageSkeleton;
const TwoColumnPageSkeleton = ({ mainSections = 2, sidebarSections = 1, showJSON = false, showMetadata = true, }) => {
    const showExtraData = showJSON || showMetadata;
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-y-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-y-3", children: [Array.from({ length: mainSections }, (_, i) => i).map((section) => {
                            return ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: (0, ui_1.clx)("h-full max-h-[460px] w-full rounded-lg", {
                                    "max-h-[219px]": section === 0,
                                }) }, section));
                        }), showExtraData && ((0, jsx_runtime_1.jsxs)("div", { className: "hidden flex-col gap-y-3 xl:flex", children: [showMetadata && ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-[60px] w-full rounded-lg" })), showJSON && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-[60px] w-full rounded-lg" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[440px]", children: [Array.from({ length: sidebarSections }, (_, i) => i).map((section) => {
                            return ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: (0, ui_1.clx)("h-full max-h-[320px] w-full rounded-lg", {
                                    "max-h-[140px]": section === 0,
                                }) }, section));
                        }), showExtraData && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-3 xl:hidden", children: [showMetadata && ((0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-[60px] w-full rounded-lg" })), showJSON && (0, jsx_runtime_1.jsx)(exports.Skeleton, { className: "h-[60px] w-full rounded-lg" })] }))] })] }) }));
};
exports.TwoColumnPageSkeleton = TwoColumnPageSkeleton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vc2tlbGV0b24vc2tlbGV0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBNkQ7QUFRdEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLEVBQUUsRUFBRTtJQUM5RCxPQUFPLENBQ0wscURBRUUsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUNaLHdEQUF3RCxFQUN4RCxTQUFTLENBQ1YsRUFDRCxLQUFLLEVBQUUsS0FBSyxHQUNaLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVhXLFFBQUEsUUFBUSxZQVduQjtBQWFLLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFDOUIsS0FBSyxHQUFHLElBQUksRUFDWixVQUFVLEdBQUcsRUFBRSxHQUNNLEVBQUUsRUFBRTtJQUN6QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFFbEIsUUFBUSxLQUFLLEVBQUUsQ0FBQztRQUNkLEtBQUssSUFBSTtZQUNQLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDZixNQUFNO1FBQ1IsS0FBSyxJQUFJO1lBQ1AsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNmLE1BQU07UUFDUixLQUFLLElBQUk7WUFDUCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsTUFBTTtJQUNWLENBQUM7SUFFRCxPQUFPLENBQ0wsdUJBQUMsZ0JBQVEsSUFDUCxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQUM7WUFDYixLQUFLLEVBQUUsS0FBSyxLQUFLLElBQUk7WUFDckIsS0FBSyxFQUFFLEtBQUssS0FBSyxJQUFJO1lBQ3JCLEtBQUssRUFBRSxLQUFLLEtBQUssSUFBSTtTQUN0QixDQUFDLEVBQ0YsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEdBQUcsU0FBUyxHQUFHLFVBQVUsSUFBSTtTQUNyQyxHQUNE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