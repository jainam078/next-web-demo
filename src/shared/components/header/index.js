import React from "react";
import styles from "./header.module.scss";
import Atavyalogo from "../atavyalogo";
import Headersearch from "./headersearch";
import Button from "../button";
import SwitchDesign from "./switch";
const PlusIcon = "/assets/icons/plus-xs.svg";
const BellIcon = "/assets/icons/Bell.svg";
const ProfileIcon = "/assets/icons/profile-xs.svg";

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerAlignment}>
        <Atavyalogo />
        <Headersearch />
        <div className={styles.rightAlignment}>
          <SwitchDesign />
          <Button image={PlusIcon} alt="PlusIcon" text="New" className={styles.outlineButton} />
          <div className={styles.bellIcon}>
            <img src={BellIcon} alt='BellIcon' />
          </div>
          <div className={styles.profileicon}>
            <img src={ProfileIcon} alt="ProfileIcon" />
          </div>
        </div>
      </div>
    </header>
  );
}
