import { useState, useRef, useEffect } from "react";
import { MoreHorizontal, ChevronDown } from "lucide-react"; // Usando lucide-react para los iconos

const categories = [
  { id: 1, label: "Novelas", icon: "❣" },
  { id: 2, label: "Cuentos", icon: "𖠊" },
  { id: 3, label: "Poesia", icon: "𓀟" },
  { id: 4, label: "Teatro", icon: "♣" },
  { id: 5, label: "Biografias", icon: "❁" },
  { id: 6, label: "Historia", icon: "𖠿" },
  { id: 7, label: "Autoayuda", icon: "♨︎" },
  { id: 8, label: "Cientificos", icon: "⠵" },
];

export default function CategoryNav() {
  const [active, setActive] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Definimos cuántas mostrar antes de los puntos suspensivos
  // En móvil mostraremos 3 o 4, en desktop 6.
  const visibleLimit = 4;
  const visibleCategories = categories.slice(0, visibleLimit);
  const hiddenCategories = categories.slice(visibleLimit);

  return (
    <nav className="bg-white border-b border-stone-200 relative w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">

        {/* Categorías Principales */}
        <div className="flex flex-1 justify-around md:justify-center">
          {visibleCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActive(cat.id);
                setShowMore(false);
              }}
              className={`flex flex-col items-center gap-1.5 px-3 py-3 border-b-2 transition-all duration-200
                ${active === cat.id && !showMore
                  ? "border-red-700 text-red-700"
                  : "border-transparent text-stone-500 hover:text-red-700"
                }`}
            >
              <span className={`text-xl w-10 h-10 flex items-center justify-center rounded-full transition-colors
                ${active === cat.id && !showMore ? "bg-red-50" : "bg-stone-50"}`}>
                {cat.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tight">{cat.label}</span>
            </button>
          ))}

          {/* Botón de "Más" (Los tres puntos) */}
          <div className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className={`flex flex-col items-center gap-1.5 px-3 py-3 border-b-2 transition-all duration-200
                ${showMore
                  ? "border-red-700 text-red-700"
                  : "border-transparent text-stone-500"
                }`}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors
                ${showMore ? "bg-red-50" : "bg-stone-50"}`}>
                <MoreHorizontal size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight">Más</span>
            </button>

            {/* Menú Desplegable (Dropdown) */}
            {showMore && (
              <>
                {/* Overlay para cerrar al hacer clic fuera */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMore(false)}
                ></div>

                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-stone-200 rounded-xl shadow-xl z-20 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="py-2">
                    {hiddenCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActive(cat.id);
                          setShowMore(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-stone-50 transition-colors
                          ${active === cat.id ? "text-red-700 bg-red-50/50" : "text-stone-600"}`}
                      >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-sm font-medium">{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
