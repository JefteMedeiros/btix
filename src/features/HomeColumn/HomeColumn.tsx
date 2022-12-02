import { ReactNode } from "react"

interface IHomeColumn {
  children: ReactNode
}

export function HomeColumn({ children }: IHomeColumn) {
  return <div className="flex flex-col gap-8">{children}</div>
}
