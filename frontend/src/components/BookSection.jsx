import { useRef } from "react";
import BookCard from "./BookCard";

export default function BookSection({ title, books }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    // Aumentamos un poco el scroll para que se note el movimiento en desktop
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pt-8 w-full overflow-hidden">
      {/* Header con ajuste de padding y tamaño de texto */}
      <div className="flex items-baseline justify-between mb-4 pb-2 border-b-2 border-stone-900">
        <h2 className="font-serif text-lg md:text-xl font-bold text-stone-900 italic">
          {title}
        </h2>
        <a
          href="#"
          className="text-[10px] md:text-xs text-red-700 font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Ver todo →
        </a>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="relative group flex items-center">

        {/* Flecha Izquierda - Oculta en móvil (hidden md:flex) */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute -left-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-stone-900 text-amber-100 shadow-xl hover:bg-red-700 transition-all duration-200"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Track de Libros */}
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-1 py-4 pb-6"
          style={{
            WebkitOverflowScrolling: "touch", // Mejora el scroll en iOS
            scrollSnapType: "x mandatory"
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="snap-start flex-shrink-0 w-[140px] sm:w-[180px] md:w-[200px]"
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>

        {/* Flecha Derecha - Oculta en móvil (hidden md:flex) */}
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute -right-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-stone-900 text-amber-100 shadow-xl hover:bg-red-700 transition-all duration-200"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      {/* Estilo para ocultar la barra de scroll visualmente */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
