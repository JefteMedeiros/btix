import Image from "next/image"
import {
  BsBookmark,
  BsChat,
  BsCommand,
  BsHeart,
  BsThreeDots,
} from "react-icons/bs"
import { HiOutlinePaperAirplane } from "react-icons/hi"
import { Box } from "../Box"
import { ProfilePicture } from "../ProfilePicture"
import { IPost } from "../../interfaces/posts"
import { useState } from "react"
import { Modal } from "../Modal"
import { CommentModal } from "../../features/CommentModal"

export function Post({ ...post }: IPost) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSetOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box className="py-3 flex flex-col gap-3 px-4">
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ProfilePicture
            width={32}
            height={32}
            picture="https://github.com/JefteMedeiros.png"
          />
          <h6 title="_jeffmedeiros.tsx" className="text-body-3">
            _jeffmedeiros.tsx
          </h6>
        </div>
        <button>
          <BsThreeDots title="Opções" className="rotate-90" />
        </button>
      </header>
      <h4 className="text-body-3" title="Descrição">
        {post.body}
        <button className="text-body-4" title="Ler mais">
          &nbsp;Ler mais
        </button>
      </h4>
      <main title="Imagem" className="relative h-44">
        <Image
          fill
          className="rounded-default object-cover"
          alt="asdf"
          src="https://api.lorem.space/image/car?w=500&h=176"
        />
      </main>
      <section className="flex items-center justify-between">
        <div>
          <BsBookmark />
        </div>
        <div className="flex gap-3">
          <button>
            <HiOutlinePaperAirplane size={16} />
          </button>
          <button>
            <BsHeart size={16} />
          </button>
          <button onClick={() => handleSetOpen()}>
            <BsChat />
          </button>
          {isOpen && (
            <CommentModal
              isOpen={isOpen}
              handleSetOpen={handleSetOpen}
              postId={post.id}
            />
          )}
        </div>
      </section>
      <h4 className="text-body-3" title="371 curtidas">
        371 curtidas
      </h4>
      <footer className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ProfilePicture
            picture="https://github.com/JefteMedeiros.png"
            width={26}
            height={26}
          />
          <input
            type="text"
            title="comment"
            id="comment"
            className="outline-none peer text-body-3"
            placeholder="Adicionar comentário"
            required
          />
        </div>
        <h6 className="text-body-5" title="Publicado há 7h">
          Publicado há 7h
        </h6>
      </footer>
    </Box>
  )
}
