"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const icons_1 = require("@medusajs/icons");
const react_router_dom_1 = require("react-router-dom");
const ActionMenu = ({ groups }) => {
    return ((0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Trigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(ui_1.IconButton, { size: "small", variant: "transparent", children: (0, jsx_runtime_1.jsx)(icons_1.EllipsisHorizontal, {}) }) }), (0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Content, { children: groups.map((group, index) => {
                    if (!group.actions.length) {
                        return null;
                    }
                    const isLast = index === groups.length - 1;
                    return ((0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu.Group, { children: [group.actions.map((action, index) => {
                                if (action.onClick) {
                                    return ((0, jsx_runtime_1.jsxs)(ui_1.DropdownMenu.Item, { disabled: action.disabled, onClick: (e) => {
                                            e.stopPropagation();
                                            action.onClick();
                                        }, className: (0, ui_1.clx)("[&_svg]:text-ui-fg-subtle flex items-center gap-x-2", {
                                            "[&_svg]:text-ui-fg-disabled": action.disabled,
                                        }), children: [action.icon, (0, jsx_runtime_1.jsx)("span", { children: action.label })] }, index));
                                }
                                return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Item, { className: (0, ui_1.clx)("[&_svg]:text-ui-fg-subtle flex items-center gap-x-2", {
                                            "[&_svg]:text-ui-fg-disabled": action.disabled,
                                        }), asChild: true, disabled: action.disabled, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: action.to, onClick: (e) => e.stopPropagation(), children: [action.icon, (0, jsx_runtime_1.jsx)("span", { children: action.label })] }) }) }, index));
                            }), !isLast && (0, jsx_runtime_1.jsx)(ui_1.DropdownMenu.Separator, {})] }, index));
                }) })] }));
};
exports.ActionMenu = ActionMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vYWN0aW9uLW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBNkQ7QUFFN0QsMkNBQXFEO0FBRXJELHVEQUF3QztBQXlCakMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBbUIsRUFBRSxFQUFFO0lBQ3hELE9BQU8sQ0FDTCx3QkFBQyxpQkFBWSxlQUNYLHVCQUFDLGlCQUFZLENBQUMsT0FBTyxJQUFDLE9BQU8sa0JBQzNCLHVCQUFDLGVBQVUsSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxhQUFhLFlBQzVDLHVCQUFDLDBCQUFrQixLQUFHLEdBQ1gsR0FDUSxFQUN2Qix1QkFBQyxpQkFBWSxDQUFDLE9BQU8sY0FDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQzFCLE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBRUQsTUFBTSxNQUFNLEdBQUcsS0FBSyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUUzQyxPQUFPLENBQ0wsd0JBQUMsaUJBQVksQ0FBQyxLQUFLLGVBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dDQUNuQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQ0FDbkIsT0FBTyxDQUNMLHdCQUFDLGlCQUFZLENBQUMsSUFBSSxJQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFFekIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7NENBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOzRDQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7d0NBQ25CLENBQUMsRUFDRCxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1oscURBQXFELEVBQ3JEOzRDQUNFLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxRQUFRO3lDQUMvQyxDQUNGLGFBRUEsTUFBTSxDQUFDLElBQUksRUFDWiwyQ0FBTyxNQUFNLENBQUMsS0FBSyxHQUFRLEtBYnRCLEtBQUssQ0FjUSxDQUNyQixDQUFDO2dDQUNKLENBQUM7Z0NBRUQsT0FBTyxDQUNMLDBDQUNFLHVCQUFDLGlCQUFZLENBQUMsSUFBSSxJQUNoQixTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1oscURBQXFELEVBQ3JEOzRDQUNFLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxRQUFRO3lDQUMvQyxDQUNGLEVBQ0QsT0FBTyxRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxZQUV6Qix3QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxhQUNyRCxNQUFNLENBQUMsSUFBSSxFQUNaLDJDQUFPLE1BQU0sQ0FBQyxLQUFLLEdBQVEsSUFDdEIsR0FDVyxJQWZaLEtBQUssQ0FnQlQsQ0FDUCxDQUFDOzRCQUNKLENBQUMsQ0FBQyxFQUNELENBQUMsTUFBTSxJQUFJLHVCQUFDLGlCQUFZLENBQUMsU0FBUyxLQUFHLEtBNUNmLEtBQUssQ0E2Q1QsQ0FDdEIsQ0FBQztnQkFDSixDQUFDLENBQUMsR0FDbUIsSUFDVixDQUNoQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBcEVXLFFBQUEsVUFBVSxjQW9FckIifQ==