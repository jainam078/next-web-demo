import React from 'react'
import styles from './profile.module.scss';
const ArrowDown = '/assets/icons/arrow-down-fill.svg';
const LogoutIcon = '/assets/icons/logout.svg';
export default function Profile() {
  return (
    <div className={styles.sidebarProfile}>
      <div className={styles.leftcontent}>
        <span>My Private Stuff</span>
        <img src={ArrowDown} alt="ArrowDown"/>
      </div>
      <img src={LogoutIcon} alt="LogoutIcon"/>
    </div>
  )
}
