import { useRef } from "react";
import BookCard from "./BookCard";

export default function BookSection({ title, books }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 210, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pt-8">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-5 pb-2.5 border-b-2 border-stone-900">
        <h2 className="font-serif text-xl font-bold text-stone-900 italic">{title}</h2>
        <a href="#" className="text-xs text-red-700 font-semibold tracking-wide hover:opacity-70 transition-opacity">
          Ver todo →
        </a>
      </div>

      {/* Carousel */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => scroll(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-900 text-amber-100 text-xl flex-shrink-0 hover:bg-red-700 hover:scale-105 transition-all duration-200 leading-none"
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-1 py-2 pb-5"
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-900 text-amber-100 text-xl flex-shrink-0 hover:bg-red-700 hover:scale-105 transition-all duration-200 leading-none"
        >
          ›
        </button>
      </div>
    </section>
  );
}
