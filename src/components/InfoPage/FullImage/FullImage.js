import React from 'react';
import style from './FullImage.module.css';

const FullImage = ({ avatar, showFullImage }) => {
    return (
        <div className={style.fullImage}>
            <img src={avatar} alt='fullImage' onClick={showFullImage} />
        </div>
    )
}

export { FullImage };