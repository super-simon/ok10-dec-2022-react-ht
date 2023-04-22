import { useState } from "react";
import postInterface from "../../interfaces/post.interface";
import "./UserPost.css";
import Modal from "../Modal/Modal";
import CommentForm from "../CommentForm/CommentForm";

export default function UserPost({ post }: { post: postInterface }) {
  const [showAddCommentForm, setShowAddCommentForm] = useState<boolean>(false);
  const [
    showSuccessCommentCreationNotice,
    setShowSuccessCommentCreationNotice,
  ] = useState<boolean>(false);

  const onCommentCreateSuccess = () => {
    setShowAddCommentForm(false);
    setShowSuccessCommentCreationNotice(true);
  };

  return (
    <>
      <div className="user-post__card">
        <div>
          <img
            className="user-post__img"
            src={`https://picsum.photos/id/${10 + post.id}/300`}
            alt={post.title}
          />
          <span className="user-post__title">{post.title}</span>
          <span className="user-post__body">{post.body}</span>
        </div>
        <button onClick={() => setShowAddCommentForm(true)}>Add Comment</button>
      </div>

      {showAddCommentForm && (
        <Modal handleClose={() => setShowAddCommentForm(false)}>
          <CommentForm onSuccess={onCommentCreateSuccess} postId={post.id} />
        </Modal>
      )}

      {showSuccessCommentCreationNotice && (
        <Modal handleClose={() => setShowSuccessCommentCreationNotice(false)}>
          Comment Created Successfully
        </Modal>
      )}
    </>
  );
}
