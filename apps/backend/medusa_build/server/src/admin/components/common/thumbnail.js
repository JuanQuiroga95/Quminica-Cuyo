"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thumbnail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const Thumbnail = ({ src, alt }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-ui-bg-component flex h-8 w-6 items-center justify-center overflow-hidden rounded-[4px]", children: src ? ((0, jsx_runtime_1.jsx)("img", { src: src, alt: alt, className: "h-full w-full object-cover object-center" })) : ((0, jsx_runtime_1.jsx)(icons_1.Photo, { className: "text-ui-fg-subtle" })) }));
};
exports.Thumbnail = Thumbnail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY29tbW9uL3RodW1ibmFpbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUF3QztBQU9qQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBa0IsRUFBRSxFQUFFO0lBQ3hELE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMsMkZBQTJGLFlBQ3ZHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDTCxnQ0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFDLDBDQUEwQyxHQUNwRCxDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0YsdUJBQUMsYUFBSyxJQUFDLFNBQVMsRUFBQyxtQkFBbUIsR0FBRyxDQUN4QyxHQUNHLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWRXLFFBQUEsU0FBUyxhQWNwQiJ9