import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Industria Química de Cuyo",
  description:
    "Contactanos para cotizaciones, asesoramiento técnico y consultas comerciales.",
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Contacto
      </h1>
      <p className="text-lg text-slate-600 mb-10">
        Estamos para ayudarte. Escribinos o llamanos y un ejecutivo de ventas
        se comunicará a la brevedad.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-2">Ventas</h2>
          <p className="text-slate-600 text-sm mb-1">
            <a
              href="mailto:ventas@iqcuyo.com.ar"
              className="text-blue-600 hover:underline"
            >
              ventas@iqcuyo.com.ar
            </a>
          </p>
          <p className="text-slate-600 text-sm">+54 261 555-0100</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-2">Administración</h2>
          <p className="text-slate-600 text-sm mb-1">
            <a
              href="mailto:info@iqcuyo.com.ar"
              className="text-blue-600 hover:underline"
            >
              info@iqcuyo.com.ar
            </a>
          </p>
          <p className="text-slate-600 text-sm">Lun a Vie: 8:00 - 17:00</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm sm:col-span-2">
          <h2 className="font-bold text-slate-900 mb-2">Dirección</h2>
          <p className="text-slate-600 text-sm">
            Zona Industrial, Mendoza, Argentina · CP 5500
          </p>
        </div>
      </div>
    </div>
  )
}
