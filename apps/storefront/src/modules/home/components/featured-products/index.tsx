import { listCollections } from "@/lib/data/collections"
import { getRegion } from "@/lib/data/regions"
import ProductRail from "@/modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  countryCode,
}: {
  countryCode: string
}) {
  const { collections } = await listCollections({
    limit: "3",
    fields: "*products,*products.categories",
  })
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  // Filter products in each collection to only show relevant ones
  const filteredCollections = collections.map(collection => ({
    ...collection,
    products: collection.products?.filter(p => 
      p.categories?.some(c => 
        c.name.toLowerCase().includes("materia") || 
        c.name.toLowerCase().includes("insumo")
      )
    )
  })).filter(c => c.products && c.products.length > 0)

  return (
    <ul className="flex flex-col gap-x-6 bg-neutral-100">
      {filteredCollections.map((collection) => (
        <li key={collection.id}>
          <ProductRail collection={collection as any} region={region} />
        </li>
      ))}
    </ul>
  )
}
