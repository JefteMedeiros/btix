export function SearchBar() {
  return (
    <div className="relative w-full border-b-2 border-gray-100">
      <input
        className="
          bg-transparent
          max-w-full
          w-full
          peer
          
          caret-gray-100
          outline-none
        "
        type="text"
        name="search"
        id="search"
        required
      />
      <label
        className="
          opacity-50
          cursor-text
          absolute
          select-none
          peer-valid:left-0 
          peer-valid:bottom-6 
          peer-valid:text-body-5 
          peer-focus:left-0 
          peer-focus:bottom-6 
          peer-focus:text-body-5 
          transition-all 
          left-2 bottom-1 
          
        "
        htmlFor="search"
      >
        Pesquisar
      </label>
    </div>
  )
}
