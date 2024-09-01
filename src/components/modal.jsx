import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>X</button>
        <div>
          <h2>{title}</h2>
          <p>{message}</p>
          <button className="modal-accept-button" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;