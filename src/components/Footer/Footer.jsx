import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] py-8 px-6 flex flex-col items-center gap-6 mt-auto">
      <div className="flex flex-col md:flex-row items-center flex-wrap justify-center gap-3 md:gap-4">
        <a href="#terminos" className="text-[#E0E0E0] no-underline text-sm transition-colors duration-200 hover:text-white">Términos y condiciones</a>
        <span className="hidden md:inline text-[#757575]">·</span>
        <a href="#privacidad" className="text-[#E0E0E0] no-underline text-sm transition-colors duration-200 hover:text-white">Política de privacidad</a>
        <span className="hidden md:inline text-[#757575]">·</span>
        <a href="#contacto" className="text-[#E0E0E0] no-underline text-sm transition-colors duration-200 hover:text-white">Contacto</a>
        <span className="hidden md:inline text-[#757575]">·</span>
        <a href="#preguntas" className="text-[#E0E0E0] no-underline text-sm transition-colors duration-200 hover:text-white">Preguntas frecuentes</a>
      </div>
      <p className="text-[#9E9E9E] text-xs text-center">
        © 2025 Banco de Crédito del Perú. Todos los derechos reservados.
      </p>
    </footer>
  );
}
