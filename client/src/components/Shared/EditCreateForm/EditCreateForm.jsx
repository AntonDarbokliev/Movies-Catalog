import { useState } from "react";
import { FormField } from "../FormField/FormField.jsx";
import { SubmitButton } from "../SubmitButton/SubmitButton.jsx";

import "./EditCreateForm.css";
import { Modal } from "../Modal/Modal.jsx";

export const EditCreateForm = ({
  onSubmit,
  onChangeHandler,
  formValues,
  text,
  modalTitle,
  modalText
}) => {
  const [openModal, setOpenModal] = useState();
  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmitModal = async (e) => {
    setOpenModal(false);
    onSubmit(e)
  };

  return (
    <>
      {openModal && <Modal onClose={onCloseModal} onSubmit={onSubmitModal} title={modalTitle} text={modalText} />}

      <form id="createForm" method="POST" onSubmit={onSubmit}>
        <h2 id="createEdit">{text}:</h2>
        <div id="createFormFields">
          <FormField
            type={"text"}
            name={"name"}
            placeholder={"Title"}
            onChange={onChangeHandler}
            value={formValues.name}
          />
          <FormField
            type={"text"}
            name={"director"}
            placeholder={"Director"}
            onChange={onChangeHandler}
            value={formValues.director}
          />
          <FormField
            type={"number"}
            name={"year"}
            placeholder={"Year"}
            onChange={onChangeHandler}
            value={formValues.year}
          />
          <div style={{ display: "flex" }}>
            <FormField
              type={"text"}
              name={"topCast"}
              placeholder={"Top Cast"}
              onChange={onChangeHandler}
              value={formValues.topCast}
            />
            {/* <p className="formNote">Note: Top cast actors must be seperated by a coma, followed by an empty space</p> */}
            <p className="formNote">
              Note: Top cast actors must be seperated by ", "
            </p>
          </div>
          <FormField
            type={"text"}
            name={"moviePoster"}
            placeholder={"Movie Poster Image"}
            onChange={onChangeHandler}
            value={formValues.moviePoster}
          />
          <FormField
            type={"text"}
            name={"movieImagesOne"}
            placeholder={"Movie Image Url 1"}
            onChange={onChangeHandler}
            value={formValues.movieImagesOne}
          />
          <FormField
            type={"text"}
            name={"movieImagesTwo"}
            onChange={onChangeHandler}
            placeholder={"Movie Image Url 2"}
            value={formValues.movieImagesTwo}
          />
          <FormField
            type={"text"}
            name={"movieImagesThree"}
            onChange={onChangeHandler}
            placeholder={"Movie Image Url 3"}
            value={formValues.movieImagesThree}
          />
          <FormField
            type={"text"}
            name={"movieTrailer"}
            placeholder={"YouTube trailer link"}
            onChange={onChangeHandler}
            value={formValues.movieTrailer}
          />
          <FormField
            type={"text"}
            name={"description"}
            placeholder={"Description"}
            onChange={onChangeHandler}
            value={formValues.description}
          />
          <div style={{ display: "flex" }}>
            <FormField
              type={"text"}
              name={"genres"}
              placeholder={"Genre/s"}
              onChange={onChangeHandler}
              value={formValues.genres}
            />
            <p className="formNote">Note: Genres must be seperated by " "</p>
            {/* <p className="formNote">Note: Genres must be seperated by an empty space</p> */}
          </div>

          <SubmitButton
            text={text}
            onClick={(e) => {
              e.preventDefault()
              setOpenModal(true);
            }}
          />
        </div>
      </form>
    </>
  );
};
