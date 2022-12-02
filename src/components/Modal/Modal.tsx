import * as Dialog from "@radix-ui/react-dialog"
import { ReactNode } from "react"

interface IModal {
  trigger: ReactNode
  content: ReactNode
}

export function Modal({ trigger, content }: IModal) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-60" />
        <Dialog.Content
          className="
            max-w-[500px] w-full
            absolute
            text-gray-100 
            top-1/2 
            left-1/2 
            translate-x-[-50%] 
            translate-y-[-50%]
          "
        >
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
