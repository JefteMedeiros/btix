interface IButton {
  label: string
  className?: string
}

export function Button({ label, className }: IButton) {
  return (
    <button
      className={`
        py-1 
        px-4 
        border-2 
         
        rounded-default 
        b-gray-100 
        ${className}
      `}
    >
      {label}
    </button>
  )
}
