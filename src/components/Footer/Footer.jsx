import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#002B7A] text-white py-12 border-t-4 border-[#FF6600]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Grid de enlaces simulados */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm opacity-90">
          <div>
            <h4 className="font-bold text-lg mb-4 opacity-100">Sobre el BCP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Conócenos</a></li>
              <li><a href="#" className="hover:underline">Trabaja con nosotros</a></li>
              <li><a href="#" className="hover:underline">Relación con inversionistas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 opacity-100">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:underline">Libro de Reclamaciones</a></li>
              <li><a href="#" className="hover:underline">Puntos de atención</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 opacity-100">Tasas y Tarifas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Tarifario</a></li>
              <li><a href="#" className="hover:underline">Fórmulas y ejemplos</a></li>
              <li><a href="#" className="hover:underline">Transparencia de información</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 opacity-100">Avisos Importantes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
              <li><a href="#" className="hover:underline">Protección de datos</a></li>
              <li><a href="#" className="hover:underline">Seguridad</a></li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <hr className="border-white/20 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
          <p>© {new Date().getFullYear()} Banco de Crédito del Perú. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Esta es una landing de prueba de concepto A/B.</p>
        </div>
      </div>
    </footer>
  );
}
