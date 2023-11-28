import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm.js";
import { commentFactory } from "../../../services/commentService.js";
import { FormField } from "../../Shared/FormField/FormField.jsx";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton.jsx";

import './CommentForm.css'

import { useAuthContext } from "../../../contexts/AuthContext.jsx";
import { useErrorContext } from "../../../contexts/ErrorContext.jsx";

export const CommentForm = ({
    setShowAddComment,
    setComments
}) => {
  const {setErrors} = useErrorContext()
  const commentService = commentFactory();
  const { movieId } = useParams()
  const {userId} = useAuthContext()
  const owner = userId
  
  const onCommentSubmit = async (commentData) => {
    const comment = {
        movieId,
        text: commentData.commentText,
        title: commentData.commentTitle,
        owner
    }
    try {
      const result = await commentService.post(comment);
      setComments(state => [...state,result])
    } catch (err) {
      setErrors(err)
    }
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
        <button id="closeCommentForm" onClick={() => setShowAddComment(false)}>X</button>
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
