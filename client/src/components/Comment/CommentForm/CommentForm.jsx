import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";
import { commentFactory } from "../../../services/commentService.js";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";

import './CommentForm.css'

export const CommentForm = ({
    comments,
    setComments
}) => {
  const commentService = commentFactory();
  const { movieId } = useParams()
  const owner = JSON.parse(localStorage.getItem('auth'))._id
  
  const onCommentSubmit = async (commentData) => {
    const comment = {
        movieId,
        text: commentData.commentText,
        title: commentData.commentTitle,
        owner
    }
    await commentService.post(comment);
    setComments(state => [...state,comment])
  };

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      commentTitle: "",
      commentText: "",
    },
    onCommentSubmit
  );

  return (
    <div id="commentFormContainer">
    <form id="commentForm" method="POST" onSubmit={onSubmit}>
        <h2>Add a comment</h2>
      <FormField
        type="text"
        name="commentTitle"
        value={formValues.commentTitle}
        onChange={onChangeHandler}
        placeholder={"Title"}
      />
      <textarea 
      name="commentText"
       id="addCommentText"
        cols="60"
         rows="10"
          placeholder="Text"
           value={formValues.commentText}
            onChange={onChangeHandler}
            ></textarea>
      <SubmitButton text={"Add Comment"} />
    </form>
    </div>
  );
};
