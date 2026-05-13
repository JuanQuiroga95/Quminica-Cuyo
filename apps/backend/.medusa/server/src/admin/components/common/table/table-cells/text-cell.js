"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextHeader = exports.TextCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const placeholder_cell_1 = require("./placeholder-cell");
const TextCell = ({ text, align = "left", maxWidth = 220, }) => {
    if (!text) {
        return (0, jsx_runtime_1.jsx)(placeholder_cell_1.PlaceholderCell, {});
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex h-full w-full items-center gap-x-3 overflow-hidden", {
            "justify-start text-start": align === "left",
            "justify-center text-center": align === "center",
            "justify-end text-end": align === "right",
        }), style: {
            maxWidth: maxWidth,
        }, children: (0, jsx_runtime_1.jsx)("span", { className: "truncate", children: text }) }));
};
exports.TextCell = TextCell;
const TextHeader = ({ text, align = "left" }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex h-full w-full items-center", {
            "justify-start text-start": align === "left",
            "justify-center text-center": align === "center",
            "justify-end text-end": align === "right",
        }), children: (0, jsx_runtime_1.jsx)("span", { className: "truncate", children: text }) }));
};
exports.TextHeader = TextHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlL3RhYmxlLWNlbGxzL3RleHQtY2VsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUFtQztBQUNuQyx5REFBcUQ7QUFhOUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUN2QixJQUFJLEVBQ0osS0FBSyxHQUFHLE1BQU0sRUFDZCxRQUFRLEdBQUcsR0FBRyxHQUNKLEVBQUUsRUFBRTtJQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE9BQU8sdUJBQUMsa0NBQWUsS0FBRyxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLENBQ0wsZ0NBQ0UsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUNaLHlEQUF5RCxFQUN6RDtZQUNFLDBCQUEwQixFQUFFLEtBQUssS0FBSyxNQUFNO1lBQzVDLDRCQUE0QixFQUFFLEtBQUssS0FBSyxRQUFRO1lBQ2hELHNCQUFzQixFQUFFLEtBQUssS0FBSyxPQUFPO1NBQzFDLENBQ0YsRUFDRCxLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsUUFBUTtTQUNuQixZQUVELGlDQUFNLFNBQVMsRUFBQyxVQUFVLFlBQUUsSUFBSSxHQUFRLEdBQ3BDLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTFCVyxRQUFBLFFBQVEsWUEwQm5CO0FBRUssTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFlLEVBQUUsRUFBRTtJQUNsRSxPQUFPLENBQ0wsZ0NBQ0UsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUFDLGlDQUFpQyxFQUFFO1lBQ2hELDBCQUEwQixFQUFFLEtBQUssS0FBSyxNQUFNO1lBQzVDLDRCQUE0QixFQUFFLEtBQUssS0FBSyxRQUFRO1lBQ2hELHNCQUFzQixFQUFFLEtBQUssS0FBSyxPQUFPO1NBQzFDLENBQUMsWUFFRixpQ0FBTSxTQUFTLEVBQUMsVUFBVSxZQUFFLElBQUksR0FBUSxHQUNwQyxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFaVyxRQUFBLFVBQVUsY0FZckIifQ==