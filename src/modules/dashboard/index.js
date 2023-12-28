"use client";

import Dashboardheader from "./dashboardheader";
import Dashboardtab from "./dashboardtab";
import React from "react";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Dashboardheader/>
      <Dashboardtab/>
    </React.Fragment>
  )
}
