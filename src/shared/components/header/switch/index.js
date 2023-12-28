import React from 'react'
import styles from './switch.module.scss';
import classNames from 'classnames';
import Checkbox from '../../checkobox';
export default function SwitchDesign() {
    return (
        <div className={styles.switchDesign}>
            <div className={styles.switchDesignStyle}>
                <label className={styles.switch}>
                    <Checkbox />
                    <span className={classNames(styles.slider, styles.round)}></span>
                </label>
            </div>
            <p>Focus</p>
        </div>
    )
}
