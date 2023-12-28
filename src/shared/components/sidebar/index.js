"use client";
import React from "react";
import classNames from "classnames";
import styles from "./sidebar.module.scss";
import Profile from "./profile";
const ListIcon = '/assets/icons/list.svg';
const InboxIcon = '/assets/icons/Inbox.svg';
const ChatIcon = '/assets/icons/Chat.svg';
const FilesIcon = '/assets/icons/Files.svg';
const DocsIcon = '/assets/icons/Docs.svg';
const ContactsIcon = '/assets/icons/Contacts.svg';
const CompassIcon = '/assets/icons/compass.svg';
const SettingIcon = '/assets/icons/setting-sm.svg';
const OrganizationIcon = '/assets/icons/Organization.svg';
const MarketingIcon = '/assets/icons/Marketing.svg';
const FinanceIcon = '/assets/icons/Finance.svg';

export default function Sidebar() {
  const NavigationMenu = [
    {
      key: "lists",
      label: "ListIcon",
      icon: ListIcon,
      number: null,
      numberColorClass: null
    },
    {
      key: "inbox",
      label: "Inbox",
      icon: InboxIcon,
      number: 17,
      numberColorClass: classNames(styles.counter, styles.pink)
    },
    {
      key: "chat",
      label: "Chat",
      icon: ChatIcon,
      number: 6,
      numberColorClass: classNames(styles.counter, styles.pink)
    },
    {
      key: "files",
      label: "Files",
      icon: FilesIcon,
      number: 163,
      numberColorClass: classNames(styles.counter, styles.dark)
    },
    {
      key: "docs",
      label: "Docs",
      icon: DocsIcon,
      number: 107,
      numberColorClass: classNames(styles.counter, styles.dark)
    },
    {
      key: "contacts",
      label: "Contacts",
      icon: ContactsIcon,
      number: null,
      numberColorClass: null
    },
  ];


  return (
    <aside className={styles.aside}>
      <div className={styles.sidebarTop}>
        <Profile />
        <div className={styles.allSidebarMenu}>
          {NavigationMenu.map((x) => {
            return (
              <div className={styles.sidebarmenu} key={x.key}>
                <div className={styles.leftMenu}>
                  <img src={x.icon} alt="InboxIcon" />
                </div>
                <div className={styles.rightMenu}>
                  <span>{x.label}</span>
                  {x.number && <div className={x.numberColorClass}>{x.number}</div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.sidebarCenter}>
        <div className={styles.allSidebarMenu}>
          <div className={styles.sidebarmenu}>
            <div className={styles.leftMenu}>
              <img src={CompassIcon} alt="CompassIcon" />
            </div>
            <div className={styles.rightMenu}>
              <span className={styles.boldtext}>Compass Collective</span>
              <img src={SettingIcon} alt="SettingIcon" />
            </div>
          </div>
          <div className={styles.sidebarmenu}>
            <div className={styles.leftMenu}>
              <img src={OrganizationIcon} alt="OrganizationIcon" />
            </div>
            <div className={styles.rightMenu}>
              <span>Organization space</span>
            </div>
          </div>
          <div className={styles.sidebarmenu}>
            <div className={styles.leftMenu}>
              <img src={MarketingIcon} alt="MarketingIcon" />
            </div>
            <div className={styles.rightMenu}>
              <span className={styles.darkText}>Marketing</span>
            </div>
          </div>
          <div className={classNames(styles.sidebarmenu, styles.sidebarmenuLeftAlignment)}>
            <div className={styles.leftMenu}>
              <img src={ListIcon} alt="ListIcon" />
            </div>
            <div className={styles.rightMenu}>
              <span>Lists</span>
            </div>
          </div>
          <div className={classNames(styles.sidebarmenu, styles.sidebarmenuStructure)}>
            <div className={styles.leftMenu}>
              <img src={ListIcon} alt="ListIcon" />
            </div>
            <div className={styles.rightMenu}>
              <span>Structure</span>
            </div>
          </div>
          <div className={styles.sidebarmenu}>
            <div className={styles.leftMenu}>
              <img src={FinanceIcon} alt="FinanceIcon" />
            </div>
            <div className={styles.rightMenu}>
              <span className={styles.blueText}>Finance</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
