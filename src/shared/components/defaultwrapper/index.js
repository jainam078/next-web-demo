import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import styles from "./defaultwrapper.module.scss";

export default function Defaultwrapper({ children }) {

  return (
    <React.Fragment>
      <Header />
      <div className={styles.defaultwrapper}>
        <div className={styles.sidebarlayout}>
          <Sidebar />
        </div>
        <div className={styles.childrenlayout}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}
