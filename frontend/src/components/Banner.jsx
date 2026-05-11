import { useState, useRef, useEffect } from "react";

const slides = [
  {
    id: 1,
    tag: "DE LO MÁS EXCLUSIVO",
    tagClass: "bg-purple-500 text-white shadow-lg shadow-purple-500/20",
    title: "Nosotros en\nla luna",
    subtitle: "en CookiBooks Del 1 al 20 de mayo",
    cta: "Firmado por el autor (1,000 disponibles)",
    bgClass: "from-[#4c1d95] via-[#5b21b6] to-[#2e1065]",
    accentColor: "#f5d0fe",
    textLight: true,
    covers: [
      "https://m.media-amazon.com/images/I/81Cx7pQxUEL.jpg",
      "https://www.planetadelibros.com.mx/usuaris/libros/thumbs/75e8db2b-2b57-4d80-b2b3-c24ec56e9a38/d_360_620/444303_nosotros-en-la-luna-edicion-especial-con-cantos-decorados_9788408310525_contra_202509191217.webp",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE6vZX5N734rXnrwL1UfrQlAhLTTcIyGAHD2NQVwS1w6foXSq2sQj7SRnocsk44Rm1erHOJtUr6ENnwQLi95xJrTxkBcHyo8e-ElQkHX_Sy6DQ_BoaFgt_H7q2L3cAYggD8WGap9i6xzZ767I8PEGYQulHSnxeCPuZbxsqcXTQy5RB4Sq_Up2yi0D8Mg/s3870/nosotrosenlaluna-HQ.jpg",
    ],
  },
  {
    id: 2,
    tag: "QUE NOVEDAD",
    tagClass: "bg-red-700 text-white",
    title: "El chico que\ndibujaba constelaciones",
    subtitle: "Las mejores lecturas de la temporada",
    cta: "Encuentra tu próxima lectura favorita",
    bgClass: "from-emerald-500 via-emerald-600 to-emerald-700",
    accentColor: "#e6e225",
    textLight: true,
    covers: [
      "https://m.media-amazon.com/images/I/61+eBLOKN6L.jpg",
      "https://cdn.agapea.com/Editorial-Planeta/El-chico-que-dibujaba-constelaciones-i7n19823053c.jpg",
      "https://lalocomotoraazul.cl/wp-content/uploads/2022/11/IMG_20221121_175409.jpg"
    ],
  },
  {
    id: 3,
    tag: "LO MÁS ESPECIAL",
    tagClass: "bg-white/15 text-amber-100 border border-white/30",
    title: "Al final\nmueren los dos",
    subtitle: "Un libro para mentes abiertas",
    cta: "No te quedes sin el tuyo",
    bgClass: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    accentColor: "#ffffff",
    textLight: true,
    covers: [
      "https://m.media-amazon.com/images/I/818SMlbGApL.jpg",
      "https://ratondebiblioteca15.wordpress.com/wp-content/uploads/2020/06/al-final-mueren-los-dos-fan-art2.jpg?w=236",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnWwHLgzjZ33OD6dH3RaMdF28l6ZEUOQKrmVuDOprsdBeZCIpQ390ML360cgsBizBqL8sG7o3Xx9aHvMgdJVszPVi_r_m4rZRAf_3bWtYb73dfz2Y8Ye1-CsawgHJRVqRfMqdUClcXvFdW/s1600/AL+FINAL+MUEREN+LOS+DOS+CONTRA.jpg"
    ],
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  // Sincronizar los puntos (dots) cuando el usuario desliza con el dedo
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== active) {
        setActive(newIndex);
      }
    }
  };

  // Función para cuando haces clic en los puntos
  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Contenedor deslizable */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full snap-start bg-gradient-to-br ${slide.bgClass} transition-all duration-700`}
          >
            <div className="max-w-6xl mx-auto px-6 py-10 pb-20 flex flex-col md:flex-row items-center justify-between gap-10">

              {/* Texto */}
              <div className={`flex-1 max-w-lg text-center md:text-left ${slide.textLight ? "text-amber-100" : "text-stone-900"}`}>
                <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase mb-4 ${slide.tagClass}`}>
                  {slide.tag}
                </span>
                <h1
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold italic leading-tight mb-4"
                  style={{ color: slide.accentColor }}
                >
                  {slide.title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                </h1>
                <p className="text-sm opacity-80 mb-6">{slide.cta}</p>
              </div>

              {/* Libros */}
              <div className="flex items-end gap-3 flex-shrink-0 scale-90 sm:scale-100 md:scale-110">
                <div className="w-32 h-48 md:w-44 md:h-60 rounded-lg overflow-hidden shadow-2xl border border-white/10">
                  <img src={slide.covers[0]} className="w-full h-full object-cover" alt="Cover" />
                </div>
                <div className="flex flex-col gap-2 pb-2">
                  {slide.covers.slice(1, 3).map((c, i) => (
                    <div key={i} className="w-14 h-20 md:w-20 md:h-28 rounded shadow-lg overflow-hidden border border-white/10">
                      <img src={c} className="w-full h-full object-cover" alt="Thumb" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === active ? "scale-125 shadow-lg" : "bg-white/30"
              }`}
            style={i === active ? { background: slides[active].accentColor } : {}}
          />
        ))}
      </div>

      {/* Estilo para ocultar barra de scroll */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
