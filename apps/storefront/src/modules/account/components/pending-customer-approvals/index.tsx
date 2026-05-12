import ApprovalCard from "@/modules/account/components/approval-card"
import { Text } from "@medusajs/ui"

const PendingCustomerApprovals = ({
  cartsWithApprovals,
}: {
  cartsWithApprovals: any[]
}) => {
  if (cartsWithApprovals.length) {
    return (
      <div className="flex flex-col gap-y-2 w-full">
        {cartsWithApprovals.map((cart) => (
          <ApprovalCard
            key={cart.id}
            cartWithApprovals={cart}
            type="customer"
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      data-testid="no-approvals-container"
    >
      <Text className="text-large-semi">No hay nada para ver acá</Text>
      <Text className="text-base-regular">
        Todavía no tenés ninguna aprobación.
      </Text>
    </div>
  )
}

export default PendingCustomerApprovals
