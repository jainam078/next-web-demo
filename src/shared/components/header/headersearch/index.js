import React from 'react'
import styles from './headersearch.module.scss';
import Input from '../../input';
const SearchIcon = '/assets/icons/searchicon.svg';
const Icon5 = '/assets/icons/icon5.svg';
const Icon6 = '/assets/icons/icon6.svg';
export default function Headersearch() {
    return (
        <div className={styles.headersearch}>
            <Input />
            <div className={styles.searchicon}>
                <img src={SearchIcon} alt='SearchIcon' />
            </div>
            <div className={styles.twoImageAlignment}>
                <img src={Icon5} alt='Icon5' />
                <img src={Icon6} alt='Icon6' />
            </div>
        </div>
    )
}

