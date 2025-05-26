import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [weather, setWeather] = useState({
      temp: '',
      desc: '',
      icon :''
    }
  );

  useEffect(() => {
  fetch  ('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Metric&APIkey=c1a90f11d4aa8b6ae50c104a6d8d3612')
  .then(Response => Response.json())
  .then(result => {
    setWeather({
      temp: result.main.temp,
      desc: result.weather[0].description,
      icon: result.weather[0].icon
  });
  })
  .catch(err => console.log(err));
  },[]); 
if (weather.icon) {
  return (
    <>
    <p>온도 : {weather.temp}</p>
    <p>설명 : {weather.desc}</p>
    <p>아이콘 : {weather.icon}</p>
    <img src={'https://openerathermap.org/img/wn/${weater.icon}@2x.png'}
    alt="날씨아이콘입니다." />
    </>
  )
} else {
  return <h1>로딩 중...</h1>
}
}

export default App
