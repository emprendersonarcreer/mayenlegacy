"use client";

import { useState } from "react";

export default function ContactForm() {
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
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mnjrggnb", {
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
        <p className="font-serif text-2xl text-[#2C4A7C] mb-4">¡Recibí tu mensaje!</p>
        <p className="text-gray-600 leading-relaxed">
          Me pondré en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 tracking-wider">NOMBRE *</label>
          <input
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
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
        <label className="text-xs text-gray-500 tracking-wider">MENSAJE *</label>
        <textarea
          name="mensaje"
          rows={4}
          required
          placeholder="¿En qué puedo acompañarte?"
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
        className="bg-[#2C4A7C] text-white py-4 text-sm tracking-widest hover:bg-[#4A90E2] transition-colors disabled:opacity-60"
      >
        {loading ? "ENVIANDO..." : "ENVIAR MENSAJE"}
      </button>

    </form>
  );
}
