import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let API_KEY = "c36ad4b88d2b67e6c099a4cf7274c551";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await response.json();

      let result = {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let text = (event) => {
    setCity(event.target.value);
  };

  let submit = async (event) => {
    try {
      // console.log(city);
      event.preventDefault();
      setCity("");
      let info = await getWeatherInfo();
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <form action="" onSubmit={submit}>
        <h2>Search for Weather in your City :</h2>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={text}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p> NO SUCH CITY Exists in API !!! </p>}
      </form>
    </>
  );
}
export default SearchBox;
