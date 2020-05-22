import React from "react";
import LineChart from "./core/LineChart";
import PieChart from "./core/PieChart";
import { LineChart, PieChart, CountryPicker } from "./Components";
import "./style.css";

import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <LineChart />
      </div>
    );
  }
}

export default App;
