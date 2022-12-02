import { Box, Button, ProfilePicture } from "../../components"
import * as Dialog from "@radix-ui/react-dialog"
import * as Separator from "@radix-ui/react-separator"
import { MdOutlineClose } from "react-icons/md"
import { HiOutlinePhotograph } from "react-icons/hi"
import { BsEmojiSmile } from "react-icons/bs"
import { Comment } from "../Comment/Comment"

export function CommentModalContent() {
  return (
    <Box className="py-3 flex flex-col gap-5 px-4">
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ProfilePicture
            width={32}
            height={32}
            picture="https://github.com/JefteMedeiros.png"
          />
          <h6 className="text-body-3">_jeffmedeiros.tsx</h6>
        </div>
        <Dialog.Close>
          <MdOutlineClose className="text-gray-100" size={20} />
        </Dialog.Close>
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
            title="comment"
            id="comment"
            className="outline-none flex-1 peer text-body-3"
            placeholder="Adicionar comentário"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <Button label="Comentar" />
          <div className="flex items-center gap-1">
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
      <Comment />
    </Box>
  )
}
