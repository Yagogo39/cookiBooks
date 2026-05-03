import { useState } from "react";

function StarRating({ rating }) {
  if (!rating) return null;
  return (
    <div className="flex gap-px mb-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-xs ${i <= rating ? "text-amber-400" : "text-stone-300"}`}>★</span>
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
    <div className="group bg-white rounded-lg overflow-hidden border border-stone-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer min-w-[170px] max-w-[185px] flex-shrink-0 snap-start">

      {/* Cover */}
      <div className="relative bg-stone-100" style={{ aspectRatio: "3/4" }}>
        {book.badge && (
          <span className={`absolute top-2 left-2 z-10 px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase ${badgeColors[book.badge]}`}>
            {book.badge}
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className={`absolute top-1.5 right-1.5 z-10 w-7 h-7 flex items-center justify-center rounded-full text-sm transition-colors
            ${wished ? "text-red-700 bg-white" : "text-stone-400 bg-white/80 hover:text-red-700 hover:bg-white"}`}
        >
          {wished ? "♥" : "♡"}
        </button>
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={e => { e.target.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-stone-400 truncate mb-1">{book.author}</p>
        <h3 className="font-serif text-[13px] font-bold text-stone-900 leading-snug mb-1.5 line-clamp-2">{book.title}</h3>
        <StarRating rating={book.rating} />
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded">{book.format}</span>
          <span className="font-serif text-lg font-bold text-stone-900">${book.price}</span>
        </div>
        <button className="w-full bg-stone-900 hover:bg-red-700 text-amber-100 text-[10px] font-semibold tracking-wide py-1.5 rounded transition-colors duration-200 opacity-0 group-hover:opacity-100">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
