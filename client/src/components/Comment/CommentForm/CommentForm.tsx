import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { commentFactory } from "../../../services/commentService";
import { FormField } from "../../Shared/FormField/FormField";
import { SubmitButton } from "../../Shared/SubmitButton/SubmitButton";

import "./CommentForm.css";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useErrorContext } from "../../../contexts/ErrorContext";

import { Comment, RawComment } from '../../../types/movieData'

interface CommentFormProps {
  setShowAddComment:  React.Dispatch<React.SetStateAction<boolean>>,
  setComments: React.Dispatch<React.SetStateAction<Comment[]>> ,
}

export const CommentForm:React.FC<CommentFormProps> = ({ setShowAddComment, setComments }) => {
  const { setErrors } = useErrorContext();
  const commentService = commentFactory();
  const { movieId } = useParams();
  const { userId } = useAuthContext();
  const owner = userId;

  const onCommentSubmit = async (commentData:{commentTitle:string,commentText:string}) => {
    if(!movieId){
      throw Error('Movie id wasn\'t found')
    }

    try {
      const comment:RawComment = {
        movieId,
        text: commentData.commentText,
        title: commentData.commentTitle,
        owner,
      };
      const result = await commentService.post(comment);
      setComments((state) => [...state, result]);
    } catch (err:any) {
      setErrors(err);
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
        <button id="closeCommentForm" onClick={() => setShowAddComment(false)}>
          X
        </button>
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
          cols= {60}
          rows= {10}
          placeholder="Text"
          value={formValues.commentText}
          onChange={onChangeHandler}
        ></textarea>
        <SubmitButton text={"Add Comment"} />
      </form>
    </div>
  );
};
