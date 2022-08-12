import React, {useState, useEffect } from 'react';

const Modal = ({showModal, setShowModal, secondDir }) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";

    const [file, setFile] = useState([]);
    const fileUrl = '/fs?path=index.js';

    useEffect(() => {
        const file = async () => {
            await fetch(fileUrl)
                .then(res => res.json())
                .then(data => setFile(data))
                .catch(err => console.error('error:' + err))
        };
        file();
    }, [])

    //console.log(file);

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                {file.contents}
                <button type="button" onClick={() => setShowModal(!showModal)}>Close</button>
                </section>
            </div>
        )
};

export default Modal;
