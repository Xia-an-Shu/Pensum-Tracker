import React from 'react';
import './WarningBox.css';

function WarningBox({ message, onConfirm, onCancel }) {
    return (
        <div className="warning-box">
            <p>{message}</p>
            {onConfirm && <button id='confirm' onClick={onConfirm}>Continuar</button>}
            <button id='cancel' onClick={onCancel}>Cancelar</button>
        </div>
    );
}

export default WarningBox;
