import { Modal } from "../../components/Modal"
import { CommentModalContent } from "../CommentModalContent"

interface ICommentModal {
  isOpen: boolean
  handleSetOpen: (isOpen: boolean) => void
  postId: number
}

export function CommentModal({ isOpen, handleSetOpen, postId }: ICommentModal) {
  return (
    <Modal isOpen={isOpen} handleSetOpen={handleSetOpen}>
      <CommentModalContent
        handleSetOpen={handleSetOpen}
        isOpen={isOpen}
        postId={postId}
      />
    </Modal>
  )
}
