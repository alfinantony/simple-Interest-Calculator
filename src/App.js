import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';



function App() {

    //we need to create state
    const [principle,setPrinciple]=useState('')
    const [rate,setRate]=useState('')
    const [year,setYear]=useState('')
    const [interest,setInterest]=useState('')
    console.log(principle);
    console.log(year);
    console.log(rate);

    const handleCalculate = (e) => {
      let  output = principle*year*rate/100
      console.log(output);
      setInterest(output)
  }

    const reset =(e)=>{
      setRate('')
      setInterest('')
      setPrinciple('')
      setYear('')
    }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="head">
            <h1>Simple Interest calculator</h1>
            <p>A simple interest calculator is a tool that calculates the interest on loans or savings without compounding. It uses the simple interest formula to calculate the interest and end balance.</p>
          </div>

        {/* card */}

        <div className="card">
          <h3 className='symbol'>&#8377; {interest}</h3>
          <p id='para'>Your Total Simple Interest</p> 
        </div>

        {/* outline */}
         <div className="input">
         <TextField id="outlined-basic" label="Principle Amount" variant="outlined" onChange={e=>setPrinciple(e.target.value)}value={principle} />

         <br />
        <TextField id="outlined-basic" label="Rate Of Interest" variant="outlined"  onChange={e => setRate(e.target.value)} value={rate} />
        <br />
        <TextField id="outlined-basic" label="Year" variant="outlined" onChange={e => setYear(e.target.value)} value={year}/>
        <br />

        <Button onClick={handleCalculate} variant="contained">Calculate</Button>
         <br />
         <Button onClick={reset} variant="outlined">Reset</Button>
         </div>

        
       
        </div>
      </header>
    </div>
  );
}

export default App;
