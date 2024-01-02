import { SubmitButton } from '../SubmitButton/SubmitButton';
import './Modal.css'

export const Modal = ({title,text,onClose,onSubmit}) => {
  const modalClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  return (
    <>
      <div id="modalContainer" onClick={onClose}>
      <div id="modalContent" onClick={modalClick}>
        <h2 id="modalTitle">{title}</h2>
        <p id="modalText">{text}</p>
        <SubmitButton text={'Yes'} onClick={onSubmit}/>
        <SubmitButton text={'No'} onClick={onClose}/>
        {/* <button id='closeButton' onClick={onSubmit}>Yes</button>
        <button id='closeButton' onClick={onClose}>Close</button> */}
      </div>
    </div>
    </>
  );
};
