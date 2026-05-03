import { useState } from "react";

const slides = [
  {
    id: 1,
    tag: "PREVENTA EXCLUSIVA",
    tagClass: "bg-amber-100 text-yellow-800",
    title: "Una Perfecta\nConfusión",
    subtitle: "en Gandhi.com Del 1 al 15 de mayo",
    cta: "Consigue tu ejemplar con Photocard\nfirmada por la autora (1,000 disponibles)",
    bgClass: "from-green-100 via-green-200 to-green-300",
    accentColor: "#2e7d32",
    covers: [
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680461023i/122987001.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644003449i/60110091.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628162852i/58784774.jpg",
    ],
  },
  {
    id: 2,
    tag: "NOVEDAD",
    tagClass: "bg-red-700 text-white",
    title: "Los Bestsellers\nde Temporada",
    subtitle: "Las mejores lecturas de la temporada",
    cta: "Encuentra tu próxima lectura favorita",
    bgClass: "from-yellow-50 via-yellow-100 to-yellow-200",
    accentColor: "#c0392b",
    covers: [
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644003449i/60110091.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680461023i/122987001.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628162852i/58784774.jpg",
    ],
  },
  {
    id: 3,
    tag: "EDICIÓN ESPECIAL",
    tagClass: "bg-white/15 text-amber-100 border border-white/30",
    title: "Colecciones\nde Arte",
    subtitle: "Libros únicos para mentes creativas",
    cta: "Explora nuestra galería editorial",
    bgClass: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    accentColor: "#e94560",
    textLight: true,
    covers: [
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574798600i/43890641.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628162852i/58784774.jpg",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644003449i/60110091.jpg",
    ],
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const [main, ...thumbs] = slide.covers;

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${slide.bgClass} transition-all duration-500`}>
      <div className="max-w-6xl mx-auto px-6 py-10 pb-14 flex items-center justify-between gap-8">

        {/* Content */}
        <div className={`flex-1 max-w-lg ${slide.textLight ? "text-amber-100" : "text-stone-900"}`}>
          <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase mb-3 ${slide.tagClass}`}>
            {slide.tag}
          </span>
          <h1
            className="font-serif text-4xl xl:text-5xl font-extrabold italic leading-tight mb-3"
            style={{ color: slide.accentColor }}
          >
            {slide.title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
          </h1>
          <p className="text-sm opacity-70 mb-2">{slide.subtitle}</p>
          <p className="text-sm opacity-85 leading-relaxed mb-6">
            {slide.cta.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
          </p>
          <button
            className="text-amber-100 px-7 py-3 rounded text-sm font-semibold tracking-wide hover:opacity-80 transition-opacity"
            style={{ background: slide.accentColor }}
          >
            Ver más →
          </button>
        </div>

        {/* Books */}
        <div className="hidden md:flex items-end gap-4 flex-shrink-0">
          <div className="w-44 h-60 rounded-lg overflow-hidden shadow-2xl bg-stone-200">
            <img src={main} alt="" className="w-full h-full object-cover" onError={e => e.target.style.display = "none"} />
          </div>
          <div className="flex flex-col gap-3 pb-2">
            {thumbs.map((c, i) => (
              <div key={i} className="w-20 h-28 rounded overflow-hidden shadow-lg bg-stone-200">
                <img src={c} alt="" className="w-full h-full object-cover" onError={e => e.target.style.display = "none"} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full border-none transition-all duration-300 ${i === active ? "scale-125" : "bg-black/20"}`}
            style={i === active ? { background: slide.accentColor } : {}}
          />
        ))}
      </div>
    </section>
  );
}
