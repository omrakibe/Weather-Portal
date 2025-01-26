import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css";

function InfoBox({ info }) {

  let icon = info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>;

  return (
    <>
      <h1>Weather Info - {info.weather}</h1>
      
      <div className="cardCont">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://media.istockphoto.com/id/1310822348/photo/deep-blue-sky-with-few-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=RLhYGNuJ6jGCHWg3nsFerljdU_JjKcY0DDLLvyD9B4g="
            title="green iguana"
          />
          <CardContent>
            
              {info.city}
              &nbsp;
              {icon}
            
            
              <p>Temprature = {info.temp}&deg;C</p>
              
              
              <p>Minimum Temprature = {info.tempMin}&deg;C</p>
              
              <p>Maximum Temprature = {info.tempMax}&deg;C</p>
              <p>Humidity = {info.humidity}</p>

              <p>Feels Like = {info.feels_like}&deg;C</p>
            
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default InfoBox;
