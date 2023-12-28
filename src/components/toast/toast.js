import React, { useEffect, useState } from "react";
import './toast.scss';

export const Toast = ({ error }) => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        setShowToast(error)

        const toast = setTimeout(() => {
            setShowToast(false)
        }, 3000)

        return () => clearTimeout(toast);
    }, [error])

    return (
        <div className={`error ${showToast && 'isActive'}`}>
            <p className="error_msg">{error}</p>
        </div>
    );
};
