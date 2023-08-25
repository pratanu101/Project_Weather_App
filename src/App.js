
import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Tempdata from './components/Tempdata';
import axios from 'axios';

function App() {
  const [sval,setSval]=useState('');
  const [weather,setWeather]=useState([]);

  const handleChange=(value)=>{
    setSval(value);
    // console.log(sval);
  }

  const getWeather=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${sval}&appid=87dc5d9db1fd28133988babd8396c2f6&units=metric`)
    .then((res)=>{
      console.log(res.data);
      setWeather(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  // https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=87dc5d9db1fd28133988babd8396c2f6
  return (
    <div className="App">
      <Search handleChange={handleChange} searchdata={sval} getWeather={getWeather}/>
      
      <Tempdata weatherData={weather} searchdata={sval}/>
    </div>
  );
}

export default App;
