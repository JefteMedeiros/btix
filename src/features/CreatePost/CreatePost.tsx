import { BsEmojiSmile, BsFillCameraVideoFill } from "react-icons/bs"
import { Box, ProfilePicture } from "../../components"
import { HiOutlinePhotograph } from "react-icons/hi"

export function CreatePost() {
  return (
    <Box className="py-3 px-4 flex flex-col gap-4 text-gray-100">
      <header className="flex items-center gap-2">
        <ProfilePicture
          width={32}
          height={32}
          picture="https://github.com/JefteMedeiros.png"
        />
        <h6 className="text-body-3">_jeffmedeiros.tsx</h6>
      </header>
      <section className="rounded-default relative bg-black-700">
        <textarea
          id="comment"
          name="comment"
          className="peer mx-2 text-body-2 my-2 outline-none w-full min-h-[96px]"
          title="Comment"
          required
        />
        <label
          className="text-body-2 opacity-50 peer-valid:hidden left-2 top-2 absolute"
          htmlFor="comment"
        >
          Criar publicação
        </label>
      </section>
      <footer className="flex justify-between items-center">
        <div>
          <BsEmojiSmile size={16} />
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <label>
              <HiOutlinePhotograph className="inline mr-1" size={16} />
              <input
                type="file"
                accept="image/jpg, image/png, image/webp, image/jpeg, ."
              />
            </label>
            <span className="text-body-4">Foto</span>
          </div>
          <div>
            <label>
              <input type="file" accept=".mp4, .mkv" />
              <BsFillCameraVideoFill className="inline mr-1" size={16} />
            </label>
            <span className="text-body-4">Vídeo</span>
          </div>
        </div>
      </footer>
    </Box>
  )
}
