import { ReactNode } from "react"

interface IBox {
  children: ReactNode
  className?: string
}

export function Box({ children, className }: IBox) {
  return (
    <div className={`bg-black-900 rounded-default ${className}`}>
      {children}
    </div>
  )
}
