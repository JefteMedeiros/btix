import { ReactNode } from "react"

interface ITemplate {
  children: ReactNode
}

export function Template({ children }: ITemplate) {
  return (
    <div className="min-h-screen m-auto px-4 max-w-wrapper">{children}</div>
  )
}
