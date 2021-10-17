import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay';
import Backdrop from './Backdrop';

export default function Modal(props) {

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

// import { Fragment } from 'react';
// import ReactDOM from 'react-dom';

// import classes from './Modal.module.css';

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById('overlays');

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;