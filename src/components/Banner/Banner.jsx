import React, { useEffect } from 'react';
import { useVariant } from '../../hooks/useVariant';
import { pushExperimentViewed, pushCTAClick } from '../../utils/dataLayer';

export default function Banner() {
  const variant = useVariant();

  useEffect(() => {
    if (variant) {
      pushExperimentViewed(variant);
    }
  }, [variant]);

  if (!variant) {
    return <div></div>;
  }

  const isA = variant === 'A';
  const ctaText = isA ? 'Solicita ahora' : 'Aplica ya';
  
  // Utilizando estilos en línea para evadir los fallos de purgado de Tailwind en valores arbitrarios
  const bgStyle = isA 
    ? { background: 'linear-gradient(to bottom right, #003DA6, #002875, #001D4F)' }
    : { background: 'linear-gradient(to bottom right, #FF6600, #E85B00, #CC5200)' };
  
  const ctaTextColorStyle = { color: isA ? '#003DA6' : '#FF6600' };

  const handleCtaClick = () => {
    pushCTAClick(variant, ctaText);
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={bgStyle} className="relative w-full min-h-[560px] flex items-center justify-center py-16 px-6 overflow-hidden">
      {/* Decorative background blurs to give dynamic lighting feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 animate-fade-in">
        
        <div className="flex flex-col text-white max-w-xl animate-fade-in-up text-center md:text-left">
          <span className="inline-flex self-center md:self-start items-center space-x-2 font-bold text-xs tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Oferta especial digital</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Tu tarjeta de crédito ideal
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 mb-10 drop-shadow-sm max-w-lg mx-auto md:mx-0">
            Cero comisiones, aprobación al instante y beneficios diseñados 100% online para tu estilo de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <button 
              onClick={handleCtaClick}
              style={ctaTextColorStyle}
              className="bg-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {ctaText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-sm font-medium text-white/80 mt-4 sm:mt-0 opacity-80">
              Evaluación en 1 minuto
            </p>
          </div>
        </div>
        
        <div className="relative w-full max-w-sm perspective-1000 mt-10 md:mt-0 animate-float">
          {/* Glowing underlay */}
          <div className="absolute inset-0 bg-white/30 blur-2xl rounded-3xl transform rotate-3" />
          
          <div className="relative aspect-[1.58/1] bg-gradient-to-br from-white/30 to-white/10 rounded-[1.5rem] p-6 shadow-2xl backdrop-blur-md flex flex-col justify-between border border-white/40 transform md:rotate-[-5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 group overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] transition-transform duration-1000 group-hover:translate-x-[150%]" />

            <div className="flex justify-between items-start z-10">
              <div className="text-white font-black text-2xl tracking-widest drop-shadow-md">BCP</div>
              <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24">
                <path d="M4 10h16M4 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="z-10 mt-auto">
              {/* Fake smart chip */}
              <div className="w-12 h-10 bg-gradient-to-br from-white/50 to-white/20 rounded mb-4 border border-white/30" />
              <div className="text-white text-lg font-mono tracking-[0.2em] mb-4 drop-shadow-md">
                •••• •••• •••• 1234
              </div>
              <div className="flex justify-between items-end">
                <div className="text-white/90 text-sm font-medium tracking-widest uppercase">
                  Cliente Premium
                </div>
                <div className="text-white font-bold italic text-3xl font-sans drop-shadow-md">VISA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,118.17,192.5,103.7,235.34,93.63,278.43,77.56,321.39,56.44Z" fill="#F9FAFB"></path>
        </svg>
      </div>
    </div>
  );
}
