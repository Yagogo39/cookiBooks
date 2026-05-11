import { Library, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-stone-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">

        <div className="flex items-center justify-between gap-4 md:gap-8">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="leading-none group">
              <span className="block text-[9px] text-stone-400 tracking-[0.14em] uppercase font-sans group-hover:text-red-700 transition-colors">
                Cooki
              </span>
              <span className="block font-serif text-[22px] md:text-[26px] font-extrabold text-stone-900 italic">
                Books
              </span>
            </a>
          </div>

          <div className="hidden md:flex flex-1 items-center bg-stone-100 border border-stone-300 rounded-md overflow-hidden focus-within:border-stone-900 transition-all">
            <input
              type="text"
              placeholder="Encuentra lo que estés buscando..."
              className="flex-1 bg-transparent px-4 py-2 text-sm text-stone-700 outline-none placeholder-stone-400 font-sans"
            />
            <button className="bg-stone-900 text-white hover:bg-red-700 cursor-pointer transition-colors px-5 py-2 flex items-center text-sm font-bold">
              Buscar
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-stone-900">
              <Library size={20} />
            </button>
          </div>
        </div>

        <div className="mt-3 flex md:hidden items-center bg-stone-100 border border-stone-300 rounded-md overflow-hidden focus-within:border-stone-900">
          <input
            type="text"
            placeholder="Buscar libros..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-stone-700 outline-none placeholder-stone-400 font-sans"
          />
          <button className="bg-stone-900 text-white px-4 py-2 flex items-center">
            <Search size={18} />
          </button>
        </div>

      </div>
    </header>
  );
}
