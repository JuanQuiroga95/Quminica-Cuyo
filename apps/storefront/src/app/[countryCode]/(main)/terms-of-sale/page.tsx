import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Venta | Industria Química de Cuyo",
  description: "Términos y condiciones de venta de Industria Química de Cuyo.",
}

export default function TermsOfSalePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
        Términos y Condiciones de Venta
      </h1>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p>
          Las presentes condiciones rigen la relación comercial entre{" "}
          <strong>Industria Química de Cuyo</strong> y sus clientes B2B.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">Pedidos</h2>
        <p>
          Todos los pedidos están sujetos a disponibilidad de stock y a la
          aprobación crediticia del comprador. Los precios pueden actualizarse
          sin previo aviso por variaciones de costos de insumos o tipo de
          cambio.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">
          Métodos de pago
        </h2>
        <p>
          Aceptamos transferencia bancaria en pesos argentinos (ARS) y dólares
          estadounidenses (USD), efectivo en peso o dólar y acuerdo con
          vendedor para clientes con cuenta corriente habilitada.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">
          Entregas
        </h2>
        <p>
          Coordinamos despacho a Mendoza, San Juan, San Luis y resto del país.
          Los plazos se confirman al momento de aceptar el pedido.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">
          Devoluciones
        </h2>
        <p>
          Por tratarse de productos químicos, no se aceptan devoluciones salvo
          defecto de fábrica certificable. Las reclamaciones deben realizarse
          dentro de las 48 horas de recibida la mercadería.
        </p>
      </div>
    </div>
  )
}
