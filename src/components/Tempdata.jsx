import React from 'react'
import '../App.css';

const Tempdata = ({weatherData,searchdata}) => {
  return (
    
    <>
    {
       weatherData.length!==0 
       ?
   
    <div className='tempcontainer'> 
       
       <div className='box-1'>
         {
           weatherData.length!==0 
           ?
         <div>
         
         <h1 style={{fontSize:'80px',color:'white',paddingTop:'50%'}}>{weatherData?.main?.temp}°</h1>
         
         <h1 style={{paddingRight:'18px',color:'white'}}>{weatherData.weather[0].main}</h1>
         {/* <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" /> */}
       </div>:
       <h3 style={{color:'white'}}>please enter Valid city name</h3>
         }
       
    </div>
     
    
     <div className='box-2'>
       <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
     <h2 style={{color:'white'}}>{weatherData.name}</h2>
     </div>
     <h4>
       <br /><br />
     <ul style={{textDecoration:'none',listStyleType:'none'}}>
       
       <li id='tid' style={{borderBottom:'2px solid white',color:'white'}}>Current Temp: <b style={{color:'yellow'}}>{weatherData?.main?.temp}°</b></li>
       <br />
       <li id='tid' style={{borderBottom:'2px solid white',color:'white'}}>Min-Temp    : <b style={{color:'yellow'}}>{weatherData?.main?.temp_min}°</b></li>
       <br />
       <li id='tid' style={{borderBottom:'2px solid white',color:'white'}}>Max-Temp: <b style={{color:'yellow'}}>{weatherData?.main?.temp_max}°</b></li>
       <br />
       <li id='tid' style={{borderBottom:'2px solid white',color:'white'}}>Feels like: <b style={{color:'yellow'}}>{weatherData?.main?.feels_like}°</b></li>
       <br />
       <li id='tid' style={{borderBottom:'2px solid white',color:'white'}}>Humidity: <b style={{color:'yellow'}}>{weatherData?.main?.humidity}%</b></li>
     </ul>
     </h4>
     </div>
   </div>:
   <div style={{backgroundColor:'ActiveCaption',width:'50%',margin:'auto',borderRadius:'60px'}}>
   <h2 style={{color:'white'}}>Please Enter Valid City Name!!</h2>
   </div>
}
    </>
  )
}

export default Tempdata;