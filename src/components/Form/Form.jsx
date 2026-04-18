import React, { useState } from 'react';
import { pushFormSubmit } from '../../utils/dataLayer';

const Form = ({ variant }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isVariantA = variant === 'A';

  const themeColorClass = isVariantA
    ? 'bg-gradient-to-r from-[#003DA6] to-[#002875] hover:shadow-blue-900/40'
    : 'bg-gradient-to-r from-[#FF6600] to-[#CC5200] hover:shadow-orange-900/40';

  const themeRingClass = isVariantA
    ? 'focus:ring-[#003DA6]/50 focus:border-[#003DA6]'
    : 'focus:ring-[#FF6600]/50 focus:border-[#FF6600]';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Por favor ingresa tu nombre completo';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }

    const phoneRegex = /^[0-9]+$/;
    if (!formData.phone || !phoneRegex.test(formData.phone) || formData.phone.length < 9) {
      newErrors.phone = 'Por favor ingresa un número de celular válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      pushFormSubmit(variant);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="formulario" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-lg mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-green-400 blur-xl opacity-30 rounded-full animate-pulse"></div>
            <div className="w-24 h-24 bg-green-50 rounded-full border-4 border-green-500 flex items-center justify-center relative z-10 shadow-lg animate-float">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            ¡Solicitud enviada!
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Un asesor BCP se contactará contigo en menos de 24 horas para continuar con tu evaluación.
          </p>
          <button
            onClick={() => window.location.reload()}
            className={`w-full py-4 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${themeColorClass}`}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="formulario" className="py-24 bg-white relative">
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Solicita tu tarjeta ahora
          </h2>
          <p className="text-gray-500 text-lg">
            Completa tus datos de manera segura y un asesor se contactará contigo rápidamente.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="name">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-gray-50 rounded-xl border text-gray-800 transition-all focus:outline-none focus:ring-4 focus:bg-white ${themeRingClass} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-medium animate-fade-in">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-gray-50 rounded-xl border text-gray-800 transition-all focus:outline-none focus:ring-4 focus:bg-white ${themeRingClass} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-medium animate-fade-in">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="phone">
              Teléfono celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-gray-50 rounded-xl border text-gray-800 transition-all focus:outline-none focus:ring-4 focus:bg-white ${themeRingClass} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm font-medium animate-fade-in">{errors.phone}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 transform ${loading ? 'opacity-70 cursor-wait' : `hover:-translate-y-1 hover:scale-[1.02] ${themeColorClass}`
                }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando evaluación...
                </span>
              ) : 'Solicitar tarjeta de crédito'}
            </button>
            <p className="text-xs text-center text-gray-400 mt-4 font-medium px-4">
              Tus datos están protegidos y encriptados. Al continuar aceptas los términos y condiciones.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
