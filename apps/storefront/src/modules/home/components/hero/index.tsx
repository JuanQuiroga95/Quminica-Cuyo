"use client"

import { Heading } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex flex-col items-center justify-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
          }} />
        </div>
        
        {/* Hexagonal molecule pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M40 10 L55 20 L55 40 L40 50 L25 40 L25 20 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-32 gap-8 py-20">
          {/* Company badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mt-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Distribuidora de Materias Primas
            </span>
          </div>

          <Heading
            level="h1"
            className="text-4xl sm:text-5xl lg:text-7xl leading-tight text-white font-bold tracking-tight"
          >
            Industria Química
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              de Cuyo
            </span>
          </Heading>

          <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl font-light leading-relaxed">
            Proveemos materias primas e insumos de limpieza de alta calidad para 
            la industria. Más de 20 años siendo líderes en la región de Cuyo, Argentina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <LocalizedClientLink href="/store">
              <Button 
                variant="primary" 
                className="rounded-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
              >
                Ver Catálogo B2B
              </Button>
            </LocalizedClientLink>
            <a href="#quienes-somos">
              <Button 
                variant="secondary" 
                className="rounded-full px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                Conócenos
              </Button>
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-12 p-8 bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl relative z-40">
            <div className="text-center group transition-transform hover:scale-105 px-4">
              <p className="text-3xl sm:text-4xl font-black text-white">20+</p>
              <p className="text-xs sm:text-sm text-blue-300 font-bold uppercase tracking-widest mt-1">Años de experiencia</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden sm:block" />
            <div className="text-center group transition-transform hover:scale-105 px-4">
              <p className="text-3xl sm:text-4xl font-black text-white">500+</p>
              <p className="text-xs sm:text-sm text-blue-300 font-bold uppercase tracking-widest mt-1">Clientes B2B</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden sm:block" />
            <div className="text-center group transition-transform hover:scale-105 px-4">
              <p className="text-3xl sm:text-4xl font-black text-white">100+</p>
              <p className="text-xs sm:text-sm text-blue-300 font-bold uppercase tracking-widest mt-1">Productos</p>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              Quiénes Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Industria Química de Cuyo</strong> es una empresa 
                mendocina con más de dos décadas de trayectoria en la distribución de materias primas 
                e insumos para la industria química, cosmética y de productos de limpieza.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Con sede en <strong className="text-slate-900">Mendoza, Argentina</strong>, nos 
                especializamos en proveer insumos de la más alta calidad a fabricantes y formuladores 
                de toda la región de Cuyo y el país, garantizando un servicio de excelencia, precios 
                competitivos y asesoramiento técnico especializado.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nuestra misión es ser el socio estratégico de nuestros clientes, brindando soluciones 
                integrales con productos certificados y un servicio logístico eficiente que asegure 
                la continuidad de sus procesos productivos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Calidad Certificada</h3>
                <p className="text-sm text-slate-600">Productos con garantía de calidad y trazabilidad completa</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Entrega Rápida</h3>
                <p className="text-sm text-slate-600">Logística eficiente en toda la región de Cuyo</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
                <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Asesoría Técnica</h3>
                <p className="text-sm text-slate-600">Equipo de profesionales especializados en química industrial</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Cobertura Regional</h3>
                <p className="text-sm text-slate-600">Presencia en Mendoza, San Juan, San Luis y más</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Contacto</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              ¿Necesitás una cotización?
            </h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Contactanos y un ejecutivo de ventas se comunicará con vos para ofrecerte las mejores condiciones comerciales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Ubicación</h3>
              <p className="text-slate-600 text-center text-sm">
                Zona Industrial<br />
                Mendoza, Argentina<br />
                CP 5500
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Teléfono</h3>
              <p className="text-slate-600 text-center text-sm">
                +54 261 555-0100<br />
                Lun a Vie: 8:00 - 17:00
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 text-center text-sm">
                ventas@iqcuyo.com.ar<br />
                info@iqcuyo.com.ar
              </p>
            </div>
          </div>

          {/* Payment Methods Info */}
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Métodos de Pago Aceptados
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Transferencia Bancaria</h4>
                  <p className="text-sm text-slate-600">Pago directo a cuenta bancaria</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Acuerdo con Vendedor / Cheque</h4>
                  <p className="text-sm text-slate-600">Condiciones especiales B2B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
