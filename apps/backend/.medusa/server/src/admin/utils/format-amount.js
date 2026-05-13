"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAmount = void 0;
const formatAmount = (amount, currency_code) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency_code,
    }).format(amount);
};
exports.formatAmount = formatAmount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWFtb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlscy9mb3JtYXQtYW1vdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBYyxFQUFFLGFBQXFCLEVBQUUsRUFBRTtJQUNwRSxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7UUFDcEMsS0FBSyxFQUFFLFVBQVU7UUFDakIsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFMVyxRQUFBLFlBQVksZ0JBS3ZCIn0=