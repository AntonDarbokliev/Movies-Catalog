import { ReactEventHandler } from 'react';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import './Modal.css'

interface ModalProps {
  title:string;
  text:string;
  onClose: () => void;
  onSubmit: (e: ReactEventHandler<Element>) => void
}

export const Modal:React.FC<ModalProps> = ({title,text,onClose,onSubmit}) => {
  const modalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      </div>
    </div>
    </>
  );
};
