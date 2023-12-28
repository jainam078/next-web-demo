import React from 'react'
import styles from './icontext.module.scss';
export default function Icontext({ text, path }) {
    return (
        <div className={styles.icontext}>
            <img src={path} alt="icontext" />
            <span>{text}</span>
        </div>
    )
}
