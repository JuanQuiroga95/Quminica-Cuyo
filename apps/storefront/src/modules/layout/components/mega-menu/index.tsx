import { listCategories } from "@/lib/data/categories"
import MegaMenu from "./mega-menu"

export async function MegaMenuWrapper() {
  const categories = await listCategories().catch(() => [])

  // Filter categories to only show "Materias Primas" and "Insumos de Limpieza"
  const filteredCategories = categories.filter(c => 
    c.name.toLowerCase().includes("materia") || 
    c.name.toLowerCase().includes("insumo") ||
    c.handle.includes("materia") ||
    c.handle.includes("insumo")
  )

  return <MegaMenu categories={filteredCategories} />
}

export default MegaMenuWrapper
