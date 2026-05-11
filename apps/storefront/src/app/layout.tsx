import { getBaseURL } from "@/lib/util/env"
import { Toaster } from "@medusajs/ui"
import { Analytics } from "@vercel/analytics/next"
import { GeistSans } from "geist/font/sans"
import { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Industria Química de Cuyo | Distribuidora B2B",
    template: "%s | IQ Cuyo",
  },
  description:
    "Industria Química de Cuyo - Distribuidora de materias primas e insumos de limpieza para la industria en Mendoza, Argentina.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light" className={GeistSans.variable}>
      <body>
        <main className="relative">{props.children}</main>
        <Toaster className="z-[99999]" position="bottom-left" />
        <Analytics />
      </body>
    </html>
  )
}
