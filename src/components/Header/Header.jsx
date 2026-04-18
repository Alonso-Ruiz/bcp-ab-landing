import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-[#003DA6] h-16 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
        <img src={`${import.meta.env.BASE_URL}bcp-logo.png`} alt="Logo BCP" className="h-12 w-auto drop-shadow-sm" />
      </div>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-white no-underline text-base font-medium transition-opacity duration-200 hover:opacity-80">Inicio</a>
        <a href="#beneficios" className="text-white no-underline text-base font-medium transition-opacity duration-200 hover:opacity-80">Beneficios</a>
        <a href="#formulario" className="text-white no-underline text-base font-medium transition-opacity duration-200 hover:opacity-80">Solicitar</a>
      </nav>
    </header>
  );
}
