"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStackedModal = void 0;
const react_1 = require("react");
const stacked_modal_context_1 = require("./stacked-modal-context");
const useStackedModal = () => {
    const context = (0, react_1.useContext)(stacked_modal_context_1.StackedModalContext);
    if (!context) {
        throw new Error("useStackedModal must be used within a StackedModalProvider");
    }
    return context;
};
exports.useStackedModal = useStackedModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXN0YWNrZWQtbW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vbW9kYWxzL3JvdXRlLWZvY3VzLW1vZGFsL3VzZS1zdGFja2VkLW1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBbUM7QUFDbkMsbUVBQThEO0FBRXZELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtJQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFBLGtCQUFVLEVBQUMsMkNBQW1CLENBQUMsQ0FBQztJQUVoRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDYixNQUFNLElBQUksS0FBSyxDQUNiLDREQUE0RCxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQVZXLFFBQUEsZUFBZSxtQkFVMUIifQ==