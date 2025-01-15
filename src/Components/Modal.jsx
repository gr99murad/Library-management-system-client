import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div className='modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
            <div className='modal-content bg-white p-6 rounded-lg w-96'>
                <button onClick={onClose} className='absolute top-2 right-2 text-gray-600'>&times;</button>
                {children}

            </div>
            
        </div>
    );
};

export default Modal;