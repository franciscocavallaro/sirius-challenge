import React from 'react';
import './styles.css';

const Modal = (props) => {

    const {onClose, backgroundColor, textColor, children, isOpen} = props;
    const modalStyle = {backgroundColor: backgroundColor || "white", color: textColor || "black"};

    return (
        isOpen && (
            <div className="modalBackground">
                <div className="modalContainer" style={modalStyle}>
                    <text onClick={onClose} className="closeButton">&times;</text>
                    {children}
                </div>
            </div>
        )
    )
}

export default Modal