import React, { useState } from 'react';

// Iconos SVG reutilizables
export const IconArrowLeft = () => (
  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export const IconShare = () => (
  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

export const IconClose = () => (
  <svg className="w-4 h-4 text-gray-500 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const IconMapPin = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const IconCalendar = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const IconClock = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const IconUser = () => (
  <svg className="w-4 h-4 text-[#2D4B3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const IconPhone = () => (
  <svg className="w-4 h-4 text-[#2D4B3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const IconMessage = () => (
  <svg className="w-4 h-4 text-[#2D4B3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const IconUsers = () => (
  <svg className="w-4 h-4 text-[#2D4B3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const IconTrash = () => (
  <svg className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const IconLotus = () => (
  <svg className="w-5 h-5 text-[#2D4B3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 4.5-3.5 8-3.5 12a3.5 3.5 0 007 0c0-4-3.5-7.5-3.5-12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15c-2.5 0-5.5-1.5-6.5-5 2.5 0 5 1.5 6.5 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 15c2.5 0 5.5-1.5 6.5-5-2.5 0-5 1.5-6.5 5z" />
  </svg>
);

export const IconCheck = () => (
  <svg className="w-3.5 h-3.5 text-[#2D4B3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export default function App() {
  const [retreat, setRetreat] = useState({
    id: "RET-001",
    nombre: "Retiro de Yoga & Meditación",
    ubicacion: "Capilla del Monte, Córdoba",
    fechaInicio: "2026-11-20",
    fechaFin: "2026-11-22",
    fechaInicioDisplay: "20 nov. 2026",
    fechaFinDisplay: "22 nov. 2026",
    horario: "16:00",
    duracion: "3 días · 2 noches",
    descripcion: "Tres días para bajar el ritmo y reconectar con vos. Yoga suave, meditación y caminatas en las sierras, con alojamiento y alimentación vegetariana incluidos.",
    costo: 185000,
    estado: "Reservado",
    requisitos: "• Traer mate, ropa cómoda y abrigo.\n• Informar alergias o restricciones alimentarias.\n• No se necesita experiencia previa.",
    organizador: {
      nombre: "Clara Ríos",
      subtitulo: "Espacio Raíz · @espacio.raiz",
      telefono: "+54 9 351 612 4080",
      redes: "@espacio.raiz"
    },
    acompanantes: [
      { id: 1, nombre: "Lucía", apellido: "Martínez", relacion: "Hermana", iniciales: "LM" },
      { id: 2, nombre: "Tomás", apellido: "Vega", relacion: "Pareja", iniciales: "TV" },
    ],
    actividades: [
      { id: 101, dia: "20", mes: "NOV", horario: "17:00 - 18:00", nombre: "Círculo de bienvenida", lugar: "Salón principal", tipo: "Incluido", costo: 0 },
      { id: 102, dia: "21", mes: "NOV", horario: "08:00 - 09:30", nombre: "Yoga & meditación", lugar: "Deck al aire libre", tipo: "Incluido", costo: 0 },
      { id: 103, dia: "21", mes: "NOV", horario: "18:00 - 19:30", nombre: "Taller de Sonoterapia", lugar: "Salón principal", tipo: "Adicional $15.000", costo: 15000 }
    ],
    pagos: {
      total: 185000,
      pagado: 90000,
      pendiente: 95000,
      detalle: "Retiro $170.000 + sonoterapia $15.000"
    },
    resena: {
      calificacion: 4,
      texto: "En mi visita anterior, la calidez de Clara y la meditación al amanecer fueron lo mejor. Me gustaría tener más tiempo libre entre talleres.",
      nota: "Nota personal · Experiencia de 2025"
    }
  });

  return (
    <div className="min-h-screen bg-[#111311] text-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-6">
        <h1 className="text-2xl font-serif text-white mb-2">Prototipo de Casos de Uso · Grupo 14 ASI</h1>
        <p className="text-sm text-gray-400">
          Abra <code className="bg-[#222] px-2 py-1 rounded text-emerald-400">index.html</code> o ejecute <code className="bg-[#222] px-2 py-1 rounded text-emerald-400">node serve.js</code> para ver la experiencia interactiva completa.
        </p>
      </div>
    </div>
  );
}
