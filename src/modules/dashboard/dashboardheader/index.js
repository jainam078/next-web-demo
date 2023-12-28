import React from 'react'
import styles from './dashboardheader.module.scss';
import Breadcrumbs from './breadcrumbs';
import Icontext from '@/shared/components/icontext';
import Button from '@/shared/components/button';
const DotIcon = '/assets/icons/dot-lg.svg';
const ShareIcon = '/assets/icons/share-sm.svg';
const PlusIcon = '/assets/icons/plus-white-sm.svg';
export default function Dashboardheader() {
    return (
        <div className={styles.dashboardheader}>
            <div className={styles.leftContnet}>
                <Breadcrumbs />
                <div className={styles.textIconAlignment}>
                    <h1>Main Focus List</h1>
                    <img src={DotIcon} alt="DotIcon" />
                </div>
            </div>
            <div className={styles.rightContnet}>
                <Icontext path={ShareIcon} text='Share' />
                <Icontext path={ShareIcon} text='Workflow' />
                <Icontext path={ShareIcon} text='Export' />
                <Button image={PlusIcon} alt="PlusIcon" text="Task" className={styles.fillbutton} />
            </div>
        </div>
    )
}

