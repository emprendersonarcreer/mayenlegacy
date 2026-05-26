"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/mnjrggnb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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
      <div className="text-center py-8">
        <p className="text-[#D4AF37] tracking-[0.3em] text-sm mb-3">✦ GRACIAS ✦</p>
        <p className="font-serif text-2xl text-[#2C4A7C] mb-4">¡Ya estás en la lista!</p>
        <p className="text-gray-600">Te avisaremos en cuanto ESSENTIA esté disponible.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3 border border-[#EADCC6] bg-white text-gray-700 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#D4AF37] text-white px-8 py-3 text-sm tracking-widest hover:bg-[#b8962e] transition-colors whitespace-nowrap disabled:opacity-60"
        >
          {loading ? "ENVIANDO..." : "QUIERO SABER"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm mt-3 text-center">
          Hubo un error. Por favor intenta de nuevo.
        </p>
      )}
    </div>
  );
}
