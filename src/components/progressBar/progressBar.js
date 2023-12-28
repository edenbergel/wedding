import React from 'react'
import './progressBar.scss';

export const ProgressBar = ({ current }) => {
    return (
        <div className='progress_bar_container'>
            <p>0{current + 1}</p>
            <div className='progress_bar'>
                <div className='progress_bar_after' style={{ height: `${33 * (current + 1)}%`}} />
            </div>
            <p>03</p>
        </div>
    )
}
