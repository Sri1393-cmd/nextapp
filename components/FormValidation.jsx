"use client";

import {useState} from 'react';

const FormValidation = () => {
  const [ screenData, setScreenData ] = useState({});
  const handleChange = (e)=> {
      setScreenData( {...screenData,[e.target.name]:e.target.value});
    //  console.log(screenData);
  }
  const [ counterValue, setCounterValue ] = useState(0);
  const [ ctrApp, setctrApp ] = useState(false);
  const setCounters = (e) =>{
    console.log(e,'hi');
    let ctr = (e.target.value =='incre' && setCounterValue(counterValue + 1)) || (e.target.value =='decre' && setCounterValue(counterValue - 1)) || (e.target.value =='def' && setCounterValue(0));
  }
  return (
    <form>
      <div >
          <div >
              <label htmlFor="empid">Employee ID </label>
              <input 
                type="text"
                id="empid"
                name="empid"
                className="form_input"
                onChange = {handleChange}
              />
          </div>
          <div>
              <label htmlFor="empname">Employee Name </label>
              <input 
                type="text"
                id="empname"
                name="empname"
                className="form_input"
                onChange = {handleChange}
              />
          </div>
          <div>
              <label htmlFor="city">City </label>
              <select 
                type="text"
                id="city"
                name="city"
                className="form_input"
                onChange = {handleChange}
              >
              <option  value=" ">NA</option>
              <option  value="Sydney"> Sydney</option>
              <option  value="Melbourne"> Melbourne</option>
              <option  value="Perth"> Perth</option>
              </select>
          </div>
          {!ctrApp && <button  className="outline_btn form_input"  type="button"   onClick={()=>setctrApp(true)}>Show Counter App</button>}
           {ctrApp && <button  className="outline_btn form_input"  type="button"   onClick={()=>setctrApp(false)}>Hide Counter App</button>}
      </div>
      {ctrApp ? <>
          <div style={{padding:"25px"}} className = "flex-between">
            <button  className="black_btn" type="button" style={{"padding":"15px"}} value= "incre" onClick={setCounters}>Increment</button>
            <button  className="black_btn" type="button" style = {{"padding":"15px"}} value= "decre" onClick={setCounters}>Decrement</button>
            <button className="black_btn" type="button" style = {{"padding":"15px"}} value= "def"onClick={setCounters}>Set to Zero</button>
            <span className="text-lg text-gray-600 sm:text-xl max-w-2xl">{counterValue}</span>
          </div>
      </> : ''}
    </form>
  )
}

export default FormValidation