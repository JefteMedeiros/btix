import * as Separator from "@radix-ui/react-separator"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useEffect, useState } from "react"
import { BsEmojiSmile } from "react-icons/bs"
import { HiOutlinePhotograph } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md"
import { Box, Button, ProfilePicture } from "../../components"
import { IComment } from "../../interfaces/posts"
import { Comment } from "../Comment/Comment"

interface ICommentModalContent {
  handleSetOpen: (setOpen: boolean) => void
  isOpen: boolean
  postId: number
}

export function CommentModalContent({
  handleSetOpen,
  isOpen,
  postId,
}: ICommentModalContent) {
  const [postComments, setPostComments] = useState<IComment[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setPostComments(data)
        setTimeout(() => setIsLoading(false), 300)
      })
  }, [])

  return (
    <Box className="py-3 flex max-w-[500px] w-full lg:w-[500px] text-gray-100 overflow-auto flex-col gap-5 px-4">
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ProfilePicture
            width={32}
            height={32}
            picture={`https://randomuser.me/api/portraits/thumb/men/${postId}.jpg`}
          />
          <h6 className="text-body-3">_jeffmedeiros.tsx</h6>
        </div>
        <button onClick={() => handleSetOpen(!isOpen)}>
          <MdOutlineClose className="text-gray-100" size={20} />
        </button>
      </header>
      <Separator.Root
        className="bg-gray-100 h-[1px]"
        orientation="horizontal"
      />
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <ProfilePicture
            width={32}
            height={32}
            picture="https://github.com/JefteMedeiros.png"
          />
          <input
            type="text"
            id="comment"
            className="outline-none flex-1 peer text-body-3"
            placeholder="Adicionar comentário"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <Button label="Comentar" />
          <div className="flex items-center gap-2">
            <BsEmojiSmile size={18} />
            <label>
              <HiOutlinePhotograph size={18} />
              <input
                type="file"
                accept="image/jpg, image/png, image/webp, image/jpeg, ."
              />
            </label>
          </div>
        </div>
      </section>
      <div className="flex flex-col max-h-96 gap-2 overflow-auto">
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          postComments.map((postComment, key) => {
            return <Comment {...postComment} key={key} />
          })
        )}
      </div>
    </Box>
  )
}
