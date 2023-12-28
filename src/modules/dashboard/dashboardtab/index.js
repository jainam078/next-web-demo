import React from 'react'
import styles from './dashboardtab.module.scss';
const GridIcon  = '/assets/icons/grid.svg';
const BoardIcon  = '/assets/icons/Board.svg';
const CalendarIcon  = '/assets/icons/Calendar.svg';
const DownIcon  = '/assets/icons/down-gray.svg';
export default function Dashboardtab() {
  return (
    <div className={styles.dashboardTab}>
      <div className={styles.tab}>
        <img src={GridIcon} alt="GridIcon"/>
        <span>Grid</span>
        <img src={DownIcon} alt="DownIcon"/>
      </div>
      <div className={styles.tab}>
        <img src={BoardIcon} alt="BoardIcon"/>
        <span>Board</span>
        <img src={DownIcon} alt="DownIcon"/>
      </div>
      <div className={styles.tab}>
        <img src={CalendarIcon} alt="CalendarIcon"/>
        <span>Calendar</span>
        <img src={DownIcon} alt="DownIcon"/>
      </div>
    </div>
  )
}

