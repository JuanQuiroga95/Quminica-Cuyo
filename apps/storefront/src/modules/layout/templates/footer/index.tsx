import { listCategories } from "@/lib/data/categories"
import { listCollections } from "@/lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    offset: "0",
    limit: "6",
  }).catch(() => ({ collections: [] as any[] }))
  const product_categories = await listCategories({
    offset: 0,
    limit: 100, // Fetch more to filter effectively
  }).catch(() => [] as any[])

  // Filter categories to only show "Materias Primas" and "Insumos de Limpieza"
  const filteredCategories = product_categories.filter(c => 
    c.name.toLowerCase().includes("materia") || 
    c.name.toLowerCase().includes("insumo") ||
    c.handle.includes("materia") ||
    c.handle.includes("insumo")
  )

  return (
    <footer className="border-t border-ui-border-base w-full bg-slate-900 text-slate-300">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          {/* Company Info */}
          <div className="max-w-xs">
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-2 mb-4"
            >
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-lg font-bold text-white">
                Industria Química de Cuyo
              </span>
            </LocalizedClientLink>
            <p className="text-sm text-slate-400 leading-relaxed">
              Distribuidora de materias primas e insumos de limpieza para la industria. 
              Más de 20 años de experiencia en Mendoza, Argentina.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>📍 Zona Industrial, Mendoza, Argentina</p>
              <p>📞 +54 261 555-0100</p>
              <p>✉️ ventas@iqcuyo.com.ar</p>
            </div>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {filteredCategories && filteredCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white font-semibold">
                  Categorías
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {filteredCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-slate-400 txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-white transition-colors",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-white transition-colors"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white font-semibold">
                  Colecciones
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-slate-400 txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-white transition-colors"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-white font-semibold">Empresa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-slate-400 txt-small">
                <li>
                  <a
                    href="#quienes-somos"
                    className="hover:text-white transition-colors"
                  >
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-white transition-colors"
                  >
                    Catálogo
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-8 justify-between text-slate-500 border-t border-slate-800 pt-8">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Industria Química de Cuyo. Todos los derechos reservados.
          </Text>
          <Text className="txt-compact-small">
            Mendoza, Argentina
          </Text>
        </div>
      </div>
    </footer>
  )
}
