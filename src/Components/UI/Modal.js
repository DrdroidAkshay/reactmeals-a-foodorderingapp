import React from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={Styles.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalEleement = document.getElementById("overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalEleement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEleement
      )}
    </React.Fragment>
  );
};
export default Modal;
