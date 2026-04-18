import React from 'react';

const Benefits = ({ variant }) => {
  const isVariantA = variant === 'A';

  // Usar gradientes para los íconos de beneficios
  const circleGradientClass = isVariantA
    ? 'bg-gradient-to-br from-[#003DA6] to-[#002875] shadow-[#003DA6]/30'
    : 'bg-gradient-to-br from-[#FF6600] to-[#CC5200] shadow-[#FF6600]/30';

  const hoverHighlightClass = isVariantA
    ? 'group-hover:border-[#003DA6]/30 group-hover:shadow-blue-900/10'
    : 'group-hover:border-[#FF6600]/30 group-hover:shadow-orange-900/10';

  return (
    <section id="beneficios" className="py-24 bg-gray-50 bg-grid-pattern relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gray-200/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-gray-200/50 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm border border-gray-300 pointer-events-none">
            Ventajas Exclusivas
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            ¿Por qué elegir la Tarjeta BCP?
          </h2>
          <p className="text-gray-500 text-center text-lg md:text-xl max-w-2xl mx-auto">
            Disfruta de beneficios diseñados para adaptarse a tu estilo de vida, con la seguridad y respaldo del BCP en todo momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className={`group bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${hoverHighlightClass}`}>
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${circleGradientClass}`}>
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10h20M6 15h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-700">
              0% comisión
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Olvídate de los costos ocultos. Tu primera anualidad es <strong>completamente gratis</strong>.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`group bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${hoverHighlightClass}`}>
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${circleGradientClass}`}>
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-700">
              Múltiples Cashbacks
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Recibe hasta <strong>5% de devolución</strong> al comprar en supermercados, gasolina y restaurantes.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`group bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${hoverHighlightClass}`}>
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${circleGradientClass}`}>
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-700">
              Cuotas Exclusivas
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Divide tus compras en hasta <strong>12 cuotas sin intereses</strong> en tiendas aliadas seleccionadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
