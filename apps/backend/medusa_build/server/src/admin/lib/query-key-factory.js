"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryKeysFactory = void 0;
const queryKeysFactory = (globalKey) => {
    const queryKeyFactory = {
        all: [globalKey],
        lists: () => [...queryKeyFactory.all, "list"],
        list: (query) => [...queryKeyFactory.lists(), { query }],
        details: () => [...queryKeyFactory.all, "detail"],
        detail: (id, query) => [
            ...queryKeyFactory.details(),
            id,
            { query },
        ],
    };
    return queryKeyFactory;
};
exports.queryKeysFactory = queryKeysFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkta2V5LWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vbGliL3F1ZXJ5LWtleS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQW9CTyxNQUFNLGdCQUFnQixHQUFHLENBSzlCLFNBQVksRUFDWixFQUFFO0lBQ0YsTUFBTSxlQUFlLEdBQW1EO1FBQ3RFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNoQixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1FBQzdDLElBQUksRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN6RSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO1FBQ2pELE1BQU0sRUFBRSxDQUFDLEVBQW9CLEVBQUUsS0FBc0IsRUFBRSxFQUFFLENBQUM7WUFDeEQsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQzVCLEVBQUU7WUFDRixFQUFFLEtBQUssRUFBRTtTQUNWO0tBQ0YsQ0FBQztJQUNGLE9BQU8sZUFBZSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQW5CVyxRQUFBLGdCQUFnQixvQkFtQjNCIn0=