import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Industria Química de Cuyo",
  description:
    "Política de privacidad de Industria Química de Cuyo.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
        Política de Privacidad
      </h1>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p>
          En <strong>Industria Química de Cuyo</strong> nos comprometemos a
          proteger la privacidad de nuestros clientes y visitantes. Esta
          política describe cómo recopilamos, usamos y protegemos su
          información.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">
          Información que recopilamos
        </h2>
        <p>
          Recopilamos información que usted nos proporciona directamente al
          registrarse, realizar un pedido o solicitar una cotización: nombre,
          razón social, CUIT, datos de contacto y dirección de entrega.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">
          Uso de la información
        </h2>
        <p>
          Utilizamos la información para procesar pedidos, emitir comprobantes,
          coordinar entregas, ofrecer asesoramiento técnico y comunicarnos con
          usted sobre su cuenta.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-6">Contacto</h2>
        <p>
          Para consultas sobre esta política, escribinos a{" "}
          <a
            href="mailto:ventas@iqcuyo.com.ar"
            className="text-blue-600 hover:underline"
          >
            ventas@iqcuyo.com.ar
          </a>
          .
        </p>
      </div>
    </div>
  )
}
