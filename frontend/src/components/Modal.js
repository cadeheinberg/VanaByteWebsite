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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div ref={modalRef} className="w-max max-w-[85%] sm:max-w-[50%] bg-white p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
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
