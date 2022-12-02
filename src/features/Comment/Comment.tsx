import { BsHeart } from "react-icons/bs"
import { ProfilePicture } from "../../components"
import * as Separator from "@radix-ui/react-separator"
import { IComment } from "../../interfaces/posts"

export function Comment({ ...comment }: IComment) {
  return (
    <>
      <Separator.Root
        className="bg-gray-100 h-[1px]"
        orientation="horizontal"
      />
      <div className="py-3 flex flex-col gap-2 rounded-default bg-black-700 px-4">
        <header className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ProfilePicture
              width={32}
              height={32}
              picture="https://github.com/JefteMedeiros.png"
            />
            <h6 title="_jeffmedeiros.tsx" className="text-body-3">
              {comment.email}
            </h6>
          </div>
          <h6 className="text-body-3">há 23m</h6>
        </header>
        <h4 className="text-body-3" title="Descrição">
          {comment.body}
          <button className="text-body-4" title="Ler mais">
            &nbsp;Ler mais
          </button>
        </h4>
        <footer className="flex justify-between items-center">
          <h6 className="text-body-3">Responder</h6>
          <div className="flex gap-2 items-center">
            <h6 className="text-body-3" title="27 Curtidas">
              27
            </h6>
            <button>
              <BsHeart />
            </button>
          </div>
        </footer>
      </div>
      <Separator.Root
        className="bg-gray-100 h-[1px]"
        orientation="horizontal"
      />
    </>
  )
}
