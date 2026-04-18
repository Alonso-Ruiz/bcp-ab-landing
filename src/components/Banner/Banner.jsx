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

  const bgColor = variant === 'A' ? 'bg-[#003DA6]' : 'bg-[#FF6600]';
  const ctaText = variant === 'A' ? 'Solicita ahora' : 'Aplica ya';
  const ctaTextColor = variant === 'A' ? 'text-[#003DA6]' : 'text-[#FF6600]';

  const handleCtaClick = () => {
    pushCTAClick(variant, ctaText);
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`w-full min-h-[520px] ${bgColor} flex items-center justify-center py-12 px-6`}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col text-white max-w-xl">
          <span className="inline-block self-start font-semibold text-xs tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full mb-4">
            Oferta especial
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Tu tarjeta de crédito ideal
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 mb-8">
            Sin colas, sin papeleos. 100% online.
          </p>
          <button 
            onClick={handleCtaClick}
            className={`self-start bg-white ${ctaTextColor} font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95`}
          >
            {ctaText}
          </button>
        </div>
        
        <div className="w-full max-w-sm aspect-[1.6/1] bg-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm flex flex-col justify-between border border-white/30 transform md:rotate-[-5deg] transition-transform hover:rotate-0">
          <div className="text-white font-bold text-xl tracking-widest">BCP</div>
          <div className="text-center text-white/90 font-mono tracking-widest text-xl mb-2">
            •••• •••• •••• 1234
          </div>
          <div className="text-right text-white font-bold italic text-2xl">VISA</div>
        </div>
      </div>
    </div>
  );
}
