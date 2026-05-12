import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const apiKeyModuleService = req.scope.resolve(Modules.API_KEY)
    const apiKeys = await apiKeyModuleService.listApiKeys({ type: "publishable" })
    res.json({ apiKeys })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
