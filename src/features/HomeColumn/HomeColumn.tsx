import { ReactNode } from "react"

interface IHomeColumn {
  children: ReactNode
  className?: string
}

export function HomeColumn({ children, className }: IHomeColumn) {
  return <div className={`flex flex-col gap-8 ${className}`}>{children}</div>
}
