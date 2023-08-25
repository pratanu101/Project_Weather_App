import React, { useRef } from 'react'
import '../App.css';
const Search = (props) => {
  const ref1=useRef();
  return (
       <div className='search-card'>
        <div className='search-main'>
            <input type="text" style={{outline:'none'}} ref={ref1} className='form-control-lg' 
            onChange={()=>props.handleChange(ref1.current.value)}
            value={props.searchdata}/>
            &nbsp;
            <button className='btn btn-outline-dark btn-lg'
            onClick={props.getWeather}
            >FIND</button>
        </div>
        </div>
  )
}

export default Search;