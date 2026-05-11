import { useState } from "react";

function StarRating({ rating }) {
  if (!rating) return null;
  return (
    <div className="flex gap-px mb-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-[10px] md:text-xs ${i <= rating ? "text-amber-400" : "text-stone-300"}`}>★</span>
      ))}
    </div>
  );
}

export default function BookCard({ book }) {
  const [wished, setWished] = useState(false);

  const badgeColors = {
    Preventa: "bg-red-700 text-white",
    Bestseller: "bg-stone-900 text-amber-100",
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-stone-100 md:hover:-translate-y-1 md:hover:shadow-xl transition-all duration-200 cursor-pointer w-[150px] sm:w-[175px] md:w-[185px] flex-shrink-0 snap-start flex flex-col h-full">

      {/* Cover */}
      <div className="relative bg-stone-100 aspect-[3/4] overflow-hidden">
        {book.badge && (
          <span className={`absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded text-[8px] md:text-[9px] font-bold tracking-widest uppercase shadow-sm ${badgeColors[book.badge]}`}>
            {book.badge}
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className={`absolute top-2 right-2 z-10 w-8 h-8 md:w-7 md:h-7 flex items-center justify-center rounded-full text-base md:text-sm shadow-md transition-all
            ${wished ? "text-red-700 bg-white" : "text-stone-400 bg-white/80 hover:text-red-700"}`}
        >
          {wished ? "♥" : "♡"}
        </button>
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
          onError={e => { e.target.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="p-2 md:p-3 flex flex-col flex-1">
        <p className="text-[9px] md:text-[10px] text-stone-400 truncate mb-0.5">{book.author}</p>
        <h3 className="font-serif text-[12px] md:text-[13px] font-bold text-stone-900 leading-snug mb-1.5 line-clamp-2 h-8 md:h-9">
          {book.title}
        </h3>

        <StarRating rating={book.rating} />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 mt-auto">
          <span className="text-[8px] md:text-[9px] text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded self-start">
            {book.format}
          </span>
          <span className="font-serif text-base md:text-lg font-bold text-stone-900">${book.price}</span>
        </div>

        {/* Botón adaptado: Siempre visible en móvil, hover en desktop */}
        <button className="w-full bg-stone-900 active:bg-red-800 md:hover:bg-red-700 text-amber-100 text-[9px] md:text-[10px] font-bold uppercase tracking-wider py-2 rounded transition-all duration-200 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0">
          Agregar
        </button>
      </div>
    </div>
  );
}
