"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_router_dom_1 = require("react-router-dom");
const FilterGroup = ({ filters }) => {
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const filterKeys = Object.keys(filters);
    if (filterKeys.length === 0) {
        return null;
    }
    const isClearable = filterKeys.some((key) => searchParams.get(key));
    const hasMore = !filterKeys.every((key) => searchParams.get(key));
    const availableKeys = filterKeys.filter((key) => !searchParams.get(key));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center flex-wrap gap-2", children: [hasMore && (0, jsx_runtime_1.jsx)(AddFilterMenu, { availableKeys: availableKeys }), isClearable && ((0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "transparent", size: "small", children: "Clear all" }))] }));
};
exports.FilterGroup = FilterGroup;
const AddFilterMenu = ({ availableKeys }) => {
    return ((0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "small", children: "Add filter" }) }), (0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Content, { children: availableKeys.map((key) => ((0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Item, { children: key }, key))) })] }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL2ZpbHRlcmluZy9maWx0ZXItZ3JvdXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBb0Q7QUFFcEQsdURBQW1EO0FBUTVDLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQW9CLEVBQUUsRUFBRTtJQUMzRCxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBQSxrQ0FBZSxHQUFFLENBQUM7SUFDekMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLE1BQU0sT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXpFLE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsbUNBQW1DLGFBQy9DLE9BQU8sSUFBSSx1QkFBQyxhQUFhLElBQUMsYUFBYSxFQUFFLGFBQWEsR0FBSSxFQUMxRCxXQUFXLElBQUksQ0FDZCx1QkFBQyxXQUFNLElBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsT0FBTywwQkFFakMsQ0FDVixJQUNHLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXRCVyxRQUFBLFdBQVcsZUFzQnRCO0FBTUYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLGFBQWEsRUFBc0IsRUFBRSxFQUFFO0lBQzlELE9BQU8sQ0FDTCx3QkFBQyxpQkFBWSxlQUNYLHVCQUFDLGlCQUFZLENBQUMsT0FBTyxJQUFDLE9BQU8sa0JBQzNCLHVCQUFDLFdBQU0sSUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxPQUFPLDJCQUUvQixHQUNZLEVBQ3ZCLHVCQUFDLGlCQUFZLENBQUMsT0FBTyxjQUNsQixhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUMxQix1QkFBQyxpQkFBWSxDQUFDLElBQUksY0FBWSxHQUFHLElBQVQsR0FBRyxDQUEyQixDQUN2RCxDQUFDLEdBQ21CLElBQ1YsQ0FDaEIsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9