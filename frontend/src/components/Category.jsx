import { useState } from "react";

const categories = [
  { id: 1, label: "Los más leídos", icon: "📚" },
  { id: 2, label: "Novedades", icon: "✨" },
  { id: 3, label: "Libros de Arte", icon: "🎨" },
  { id: 4, label: "Audio Libros", icon: "🎧" },
  { id: 5, label: "Harry Potter", icon: "⚡" },
  { id: 6, label: "Ediciones Gandhi", icon: "🏛️" },
  { id: 7, label: "Juegos y Juguetes", icon: "🎲" },
  { id: 8, label: "Brecha de Oportunidades", icon: "🌟" },
];

export default function CategoryNav() {
  const [active, setActive] = useState(null);

  return (
    <nav className="bg-white border-b border-stone-200 overflow-x-auto scrollbar-hide">
      <div className="max-w-6xl mx-auto flex px-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id === active ? null : cat.id)}
            className={`flex flex-col items-center gap-1.5 px-5 py-3 flex-shrink-0 border-b-2 transition-all duration-200 font-sans
              ${active === cat.id
                ? "border-red-700 text-red-700"
                : "border-transparent text-stone-500 hover:border-red-700"
              }`}
          >
            <span className={`text-2xl w-12 h-12 flex items-center justify-center rounded-full transition-colors
              ${active === cat.id ? "bg-red-50" : "bg-stone-100 group-hover:bg-red-50"}`}>
              {cat.icon}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-center leading-tight max-w-[80px]">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
