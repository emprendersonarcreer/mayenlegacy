"use client";

import { useState } from "react";

export default function SpeakingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      organizacion: (form.elements.namedItem("organizacion") as HTMLInputElement).value,
      ciudad: (form.elements.namedItem("ciudad") as HTMLInputElement).value,
      tipo_evento: (form.elements.namedItem("tipo_evento") as HTMLInputElement).value,
      fecha: (form.elements.namedItem("fecha") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mkoeprvy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-[#9A7B0A] tracking-[0.3em] text-sm mb-3">✦ GRACIAS ✦</p>
        <p className="font-serif text-2xl text-[#2C4A7C] mb-4">¡Recibí tu invitación!</p>
        <p className="text-gray-600 leading-relaxed">
          Me pondré en contacto contigo pronto para conversar los detalles de tu evento.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">NOMBRE COMPLETO *</label>
          <input
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">ORGANIZACIÓN / IGLESIA *</label>
          <input
            name="organizacion"
            type="text"
            required
            placeholder="Nombre de tu organización"
            className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">CIUDAD / ESTADO *</label>
          <input
            name="ciudad"
            type="text"
            required
            placeholder="Ciudad, Estado"
            className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">TIPO DE EVENTO *</label>
          <select
            name="tipo_evento"
            required
            className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
          >
            <option value="">Selecciona una opción</option>
            <option value="Iglesia">Iglesia</option>
            <option value="Retiro de Mujeres">Retiro de Mujeres</option>
            <option value="Conferencia">Conferencia</option>
            <option value="Grupo Pequeño">Grupo Pequeño</option>
            <option value="Discipulado">Grupo de Discipulado</option>
            <option value="Evento Familiar">Evento Familiar</option>
            <option value="Formación de Líderes">Formación de Líderes</option>
            <option value="Evento Empresarial">Evento Empresarial</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 tracking-wider">FECHA TENTATIVA</label>
        <input
          name="fecha"
          type="text"
          placeholder="Ej: Junio 2025, primer fin de semana de julio..."
          className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">WHATSAPP *</label>
          <input
            name="whatsapp"
            type="tel"
            required
            placeholder="+1 (000) 000-0000"
            className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">CORREO ELECTRÓNICO *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@correo.com"
            className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 tracking-wider">CUÉNTAME MÁS SOBRE TU EVENTO</label>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Comparte más detalles sobre tu evento, audiencia esperada, tema de interés..."
          className="px-4 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#9A7B0A] transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center">
          Hubo un error. Por favor intenta de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-[#2C4A7C] text-white py-4 text-sm tracking-widest hover:bg-[#4A90E2] transition-colors disabled:opacity-60 mt-2"
      >
        {loading ? "ENVIANDO..." : "ENVIAR INVITACIÓN"}
      </button>

    </form>
  );
}
