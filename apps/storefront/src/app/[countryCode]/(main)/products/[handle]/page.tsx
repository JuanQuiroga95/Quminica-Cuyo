import { sdk } from "@/lib/config"
import { getAuthHeaders } from "@/lib/data/cookies"
import { getProductByHandle } from "@/lib/data/products"
import { getRegion, listRegions } from "@/lib/data/regions"
import ProductTemplate from "@/modules/products/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamicParams = true

type Props = {
  params: { countryCode: string; handle: string }
}

export async function generateStaticParams() {
  // Skip static generation at build time - pages will be rendered on-demand
  return []
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params

  if (!handle || handle === "undefined") {
    notFound()
  }

  let product: Awaited<ReturnType<typeof getProductByHandle>> | undefined
  try {
    const region = await getRegion(params.countryCode)
    if (!region) notFound()
    product = await getProductByHandle(handle, region.id)
  } catch (error) {
    notFound()
  }

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Industria Química de Cuyo`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Industria Química de Cuyo`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params

  if (!params.handle || params.handle === "undefined") {
    notFound()
  }

  let region: Awaited<ReturnType<typeof getRegion>> | undefined
  let pricedProduct: Awaited<ReturnType<typeof getProductByHandle>> | undefined
  try {
    region = await getRegion(params.countryCode)
    if (!region) notFound()
    pricedProduct = await getProductByHandle(params.handle, region.id)
  } catch (error) {
    notFound()
  }

  if (!region || !pricedProduct) {
    notFound()
  }

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
      countryCode={params.countryCode}
    />
  )
}
