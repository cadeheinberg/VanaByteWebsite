import React, { useEffect, useRef } from 'react';

function Modal({ isOpen, closeModal, children }) {
    const modalRef = useRef();

    useEffect(() => {
        //prevent scrolling when the modal is open
        //allow modal to close when user clicks outside of it
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isOpen) { document.addEventListener('mousedown', handleClickOutside); }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    return (
        <div className="fixed z-[101] inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div ref={modalRef} className="relative w-max max-w-[85%] xs:w-[70%] xs:max-w-[375px] bg-white p-6 rounded-lg shadow-lg max-h-[80vh] xs:max-h-[90vh] overflow-y-auto scrollbar-hide">
                <button
                    className="absolute top-2 right-2 text-2xl font-bold text-black"
                    onClick={closeModal}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
