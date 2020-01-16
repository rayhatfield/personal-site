import React from "react";

import DonutView from "./DonutView";

import "./palette.css";
import styles from "./styles.module.css";

export default function DemoChart() {
  return (
    <div className={styles.demoChart}>
      <DonutView />
    </div>
  );
}
