// import React, { Component } from "react";
// import LineChart from "./core/LineChart";
// import PieChart from "./core/PieChart";
// import "./style.css";
// import CovidLineChart from "./CovidLineChart";

// import styles from "./App.module.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <covidLineChart />
//         <h1>hello</h1>
//       </div>
//     );
//   }
// }
// export default App;
import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import { CovidLineChart, CovidPieChart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <CovidLineChart />
        <CovidPieChart />
        <CountryPicker />
      </div>
    );
  }
}
export default App;
