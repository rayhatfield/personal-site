import React from "react";

import Controls from "./Controls";
import Donut from "./Donut";
import values from "./initial-values";

import styles from "./DonutView.module.css";

export default class DonutView extends React.Component {
  state = { values };

  onChange = values => this.setState({ values });

  render() {
    const { values } = this.state;

    return (
      <div className={styles.donutView}>
        <Controls onChange={this.onChange} values={values} />
        <Donut series={values} />
      </div>
    );
  }
}
