"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackedModalProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const stacked_modal_context_1 = require("./stacked-modal-context");
const StackedModalProvider = ({ children, onOpenChange, }) => {
    const [state, setState] = (0, react_1.useState)({});
    const getIsOpen = (id) => {
        return state[id] || false;
    };
    const setIsOpen = (id, open) => {
        setState((prevState) => ({
            ...prevState,
            [id]: open,
        }));
        onOpenChange(open);
    };
    const register = (id) => {
        setState((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    };
    const unregister = (id) => {
        setState((prevState) => {
            const newState = { ...prevState };
            delete newState[id];
            return newState;
        });
    };
    return ((0, jsx_runtime_1.jsx)(stacked_modal_context_1.StackedModalContext.Provider, { value: {
            getIsOpen,
            setIsOpen,
            register,
            unregister,
        }, children: children }));
};
exports.StackedModalProvider = StackedModalProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1tb2RhbC1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NvbW1vbi9tb2RhbHMvcm91dGUtZm9jdXMtbW9kYWwvc3RhY2tlZC1tb2RhbC1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFvRDtBQUNwRCxtRUFBOEQ7QUFNdkQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEVBQ25DLFFBQVEsRUFDUixZQUFZLEdBQ2MsRUFBRSxFQUFFO0lBQzlCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUEwQixFQUFFLENBQUMsQ0FBQztJQUVoRSxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQy9CLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQVUsRUFBRSxJQUFhLEVBQUUsRUFBRTtRQUM5QyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkIsR0FBRyxTQUFTO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRTtRQUM5QixRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkIsR0FBRyxTQUFTO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQ2hDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sUUFBUSxHQUFHLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQztZQUNsQyxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCx1QkFBQywyQ0FBbUIsQ0FBQyxRQUFRLElBQzNCLEtBQUssRUFBRTtZQUNMLFNBQVM7WUFDVCxTQUFTO1lBQ1QsUUFBUTtZQUNSLFVBQVU7U0FDWCxZQUVBLFFBQVEsR0FDb0IsQ0FDaEMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTlDVyxRQUFBLG9CQUFvQix3QkE4Qy9CIn0=