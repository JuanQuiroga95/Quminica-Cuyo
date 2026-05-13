"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegions = useRegions;
const react_1 = require("react");
const client_1 = require("../lib/client");
function useRegions() {
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchRegions = async () => {
            try {
                const result = await client_1.sdk.admin.region.list();
                setData(result.regions);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        };
        fetchRegions();
    }, []);
    return {
        data,
        loading,
        error,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy9yZWdpb25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLGdDQXlCQztBQTdCRCxpQ0FBNEM7QUFFNUMsMENBQW9DO0FBRXBDLFNBQWdCLFVBQVU7SUFDeEIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQWlDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7UUFDYixNQUFNLFlBQVksR0FBRyxLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxZQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDYixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQztvQkFBUyxDQUFDO2dCQUNULFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsWUFBWSxFQUFFLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTztRQUNMLElBQUk7UUFDSixPQUFPO1FBQ1AsS0FBSztLQUNOLENBQUM7QUFDSixDQUFDIn0=