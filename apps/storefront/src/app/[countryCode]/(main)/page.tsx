import FeaturedProducts from "@/modules/home/components/featured-products"
import Hero from "@/modules/home/components/hero"
import SkeletonFeaturedProducts from "@/modules/skeletons/templates/skeleton-featured-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Industria Química de Cuyo | Distribuidora de Materias Primas",
  description:
    "Distribuidora de materias primas e insumos de limpieza para la industria. Más de 20 años en Mendoza, Argentina. Lauril Betaína, Glicerina, Soda Cáustica y más.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Catálogo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Productos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Explore nuestra línea de materias primas e insumos de la más alta calidad para su industria.
          </p>
        </div>
        <Suspense fallback={<SkeletonFeaturedProducts />}>
          <FeaturedProducts countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}
