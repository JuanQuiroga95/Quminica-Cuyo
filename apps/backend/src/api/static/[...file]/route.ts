import { MedusaRequest, MedusaResponse } from "@medusajs/framework/types"
import fs from "fs"
import path from "path"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const fileParams = req.params.file
  const filePath = path.join(process.cwd(), "static", fileParams)
  
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath)
  }
  
  return res.status(404).send("File not found")
}
