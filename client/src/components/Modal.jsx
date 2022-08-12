import React from 'react';

const Modal = ({showModal, setShowModal, secondDir }) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                {secondDir.contents}
                <button type="button" onClick={() => setShowModal(!showModal)}>Close</button>
                </section>
            </div>
        )
};

export default Modal;
