import axios from "axios";
const url =
  "http://my-json-server.typicode.com/yisehak-awm/finbit-hiring/result";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.map((covidData) => ({
      date: covidData.data.records.day,
      confirmed: covidData.data.records.new,
      death: covidData.data.records.death,
      recovered: covidData.data.records.recovered,
    }));
    return modifiedData;
  } catch (error) {}
};
