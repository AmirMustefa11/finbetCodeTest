import axios from "axios";
const url =
  "http://my-json-server.typicode.com/yisehak-awm/finbit-hiring/result";

export const fetchData = async () => {
  try {
    const { record } = await axios.get(url);
    const modifiedData = data.map((covidData) => ({
      date: covidData.day,
      confirmed: covidData.new,
      death: covidData.death,
      recovered: covidData.recovered,
    }));
    return modifiedData;
  } catch (error) {}
};
