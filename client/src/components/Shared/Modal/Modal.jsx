import './Modal.css'

export const Modal = ({title,text,onClose,onSubmit}) => {
  return (
    <div id="modalContainer">
      <div id="modalOverlay" onClick={onClose}></div>
      <div id="modalContent">
        <h2 id="modalTitle">{title}</h2>
        <p id="modalText">{text}</p>
        <button onClick={onSubmit}>Yes</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
