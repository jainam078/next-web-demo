import React from 'react'
import styles from './atavyalogo.module.scss';
const AtavyaLogo = '/assets/logo/atavyalogo.svg';
export default function Atavyalogo() {
  return (
    <div className={styles.atavyalogo}>
      <img src={AtavyaLogo} alt="AtavyaLogo"/>
      <span>Atavya</span>
    </div>
  )
}
