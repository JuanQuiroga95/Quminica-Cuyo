"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectedParams = void 0;
const react_router_dom_1 = require("react-router-dom");
const useSelectedParams = ({ param, prefix, multiple = false, }) => {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const identifier = prefix ? `${prefix}_${param}` : param;
    const offsetKey = prefix ? `${prefix}_offset` : "offset";
    const add = (value) => {
        setSearchParams((prev) => {
            const newValue = new URLSearchParams(prev);
            const updateMultipleValues = () => {
                const existingValues = newValue.get(identifier)?.split(",") || [];
                if (!existingValues.includes(value)) {
                    existingValues.push(value);
                    newValue.set(identifier, existingValues.join(","));
                }
            };
            const updateSingleValue = () => {
                newValue.set(identifier, value);
            };
            multiple ? updateMultipleValues() : updateSingleValue();
            newValue.delete(offsetKey);
            return newValue;
        });
    };
    const deleteParam = (value) => {
        const deleteMultipleValues = (prev) => {
            const existingValues = prev.get(identifier)?.split(",") || [];
            const index = existingValues.indexOf(value || "");
            if (index > -1) {
                existingValues.splice(index, 1);
                prev.set(identifier, existingValues.join(","));
            }
        };
        const deleteSingleValue = (prev) => {
            prev.delete(identifier);
        };
        setSearchParams((prev) => {
            if (value) {
                multiple ? deleteMultipleValues(prev) : deleteSingleValue(prev);
                if (!prev.get(identifier)) {
                    prev.delete(identifier);
                }
            }
            else {
                prev.delete(identifier);
            }
            prev.delete(offsetKey);
            return prev;
        });
    };
    const get = () => {
        return searchParams.get(identifier)?.split(",").filter(Boolean) || [];
    };
    return { add, delete: deleteParam, get };
};
exports.useSelectedParams = useSelectedParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jb21tb24vdGFibGUvZGF0YS10YWJsZS9ob29rcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQWtEO0FBRTNDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxFQUNoQyxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsR0FBRyxLQUFLLEdBS2pCLEVBQUUsRUFBRTtJQUNILE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsSUFBQSxrQ0FBZSxHQUFFLENBQUE7SUFDekQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ3hELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO0lBRXhELE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDNUIsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFMUMsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7Z0JBQ2hDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFFakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDcEMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDMUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUNwRCxDQUFDO1lBQ0gsQ0FBQyxDQUFBO1lBRUQsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7Z0JBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2pDLENBQUMsQ0FBQTtZQUVELFFBQVEsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN2RCxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBRTFCLE9BQU8sUUFBUSxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBO0lBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUNyQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFO1lBQ3JELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM3RCxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUNqRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNmLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDaEQsQ0FBQztRQUNILENBQUMsQ0FBQTtRQUVELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUE7UUFFRCxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2QixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLFFBQVEsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDekIsQ0FBQztZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDdEIsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQTtJQUVELE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUNmLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN2RSxDQUFDLENBQUE7SUFFRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUE7QUFDMUMsQ0FBQyxDQUFBO0FBdEVZLFFBQUEsaUJBQWlCLHFCQXNFN0IifQ==