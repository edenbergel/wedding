import React, { useEffect, useState } from "react";
import './toast.scss';

export const Toast = ({ error, setError }) => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        setShowToast(error)

        const toast = setTimeout(() => {
            setShowToast(false)
            setError('')
        }, 3000)

        return () => clearTimeout(toast);
    }, [error, setError])

    return (
        <div className={`error ${showToast && 'isActive'}`}>
            <p className="error_msg">{error}</p>
        </div>
    );
};
