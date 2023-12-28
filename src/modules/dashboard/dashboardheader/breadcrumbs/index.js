import React from 'react'
import styles from './breadcrumbs.module.scss';
const BreadcrumbsIcon = '/assets/icons/breadcrumbs.svg';
export default function Breadcrumbs() {
    return (
        <div className={styles.breadcrumbsAlignment}>
            <span>Compass Collective</span>
            <img src={BreadcrumbsIcon} alt="BreadcrumbsIcon" />
            <span>Marketing</span>
            <img src={BreadcrumbsIcon} alt="BreadcrumbsIcon" />
            <span>Lists</span>
            <img src={BreadcrumbsIcon} alt="BreadcrumbsIcon" />
            <span>Main Focus</span>
        </div>
    )
}
