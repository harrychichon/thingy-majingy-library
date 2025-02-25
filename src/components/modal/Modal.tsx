import "./Modal.scss";
import {ReactNode, useRef} from 'react';

type ModalProps = {
  modalContent: ReactNode | string
  optionalButton1: boolean
  optionalButton1Text?: string
  optionalButton2: boolean
  optionalButton2Text?: string
  openButtonText: string
  closeButtonText: string
  handleClick?: () => void
}

const Modal = ({modalContent, optionalButton1, optionalButton1Text, optionalButton2, optionalButton2Text, openButtonText, closeButtonText, handleClick}: ModalProps) => {

  const dialogRef = useRef <HTMLDialogElement>(null)

  const openModal = () => {dialogRef.current?.showModal()}

  const closeModal = () => {
    dialogRef.current?.close();
}

  return <>
    <button className="OpenModalBtn" id="open-modal-button" onClick={openModal}>{openButtonText}</button>
    <dialog className="Modal" ref={dialogRef}>
      <div>
        <div className="ContentContainer">
          {modalContent}
        </div>
     <button className="CloseModalBtn" id="close-button" onClick={closeModal}>{closeButtonText}</button>
      {optionalButton1 && <button className="OptBtn1" id="opt-btn-1" onClick={handleClick}>{optionalButton1Text}</button>}
      {optionalButton2 && <button className="OptBtn2" id="opt-btn-2" onClick={handleClick}>{optionalButton2Text}</button>}
      </div>
    </dialog>

  </>
}

export default Modal