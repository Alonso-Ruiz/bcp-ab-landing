import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-[#003DA6] h-16 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-2xl">BCP</span>
        <span className="w-3 h-3 bg-[#4DB8FF] rounded-full inline-block"></span>
      </div>
      <nav className="hidden md:flex gap-6">
        <a href="#tarjetas" className="text-white no-underline text-base font-medium transition-opacity duration-200 hover:opacity-80">Tarjetas</a>
        <a href="#beneficios" className="text-white no-underline text-base font-medium transition-opacity duration-200 hover:opacity-80">Beneficios</a>
        <a href="#solicitar" className="text-white no-underline text-base font-medium transition-opacity duration-200 hover:opacity-80">Solicitar</a>
      </nav>
    </header>
  );
}
