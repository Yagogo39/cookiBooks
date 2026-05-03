export default function Header() {
  return (
    <header className="bg-white border-b-2 border-stone-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center gap-5 px-6 py-3">

        <div className="flex items-center gap-4 flex-shrink-0">
          <a className="leading-none">
            <span className="block text-[9px] text-stone-400 tracking-[0.14em] uppercase font-sans">Cooki</span>
            <span className="block font-serif text-[26px] font-extrabold text-stone-900 italic">Books</span>
          </a>
        </div>

        <div className="flex-1 flex items-center bg-stone-100 border border-stone-300 rounded-md overflow-hidden focus-within:border-stone-900">

          <input
            type="text"
            placeholder="Encuentra lo que estes buscando"
            className="flex-1 bg-transparent px-4 py-2 text-sm text-stone-700 outline-none placeholder-stone-400 font-sans"
          />
          <button className="text-stone-800 border-stone-900 hover:bg-red-700 cursor-pointer transition-colors hover:text-amber-100 px-3 py-2 flex items-center">
            Buscar
          </button>
        </div>

      </div>

    </header>
  )
}
