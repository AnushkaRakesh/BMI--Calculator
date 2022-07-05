import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [bmiRange, setBmiRange] = useState('');
  const [lowerWeight, setLowerWeight] = useState('');
  const [upperWeight, setUpperWeight] = useState('');

  let calcBmi = (event) => {
    //prevent submitting of page
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let BMI = ((weight / (height * height)) * 10000);
      setBmi(BMI.toFixed(1));

      setBmiMessage(`Your BMI is: `);
      // console.log(bmi);
      // Logic for BMI range & suggestion
      if (BMI < 18.5) {
        setLowerWeight((1  * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight((18.4 * (height * height) / 10000).toFixed(1));
        setBmiRange('You are in a low weight range');
      } else if (BMI >= 18.5 && BMI < 23) {
        setLowerWeight((18.5 * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight((22.9 * (height * height) / 10000).toFixed(1));
        setBmiRange('You are in a healthy weight range');
      } else if (BMI < 27.5) {
        setLowerWeight((23 * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight((27.4 * (height * height) / 10000).toFixed(1));
        setBmiRange('You are in a overweight weight range');
      } else {
        setLowerWeight((27.5 * (height * height) / 10000).toFixed(1) + " - ");
        setUpperWeight('above');
        setBmiRange('You are in a obese weight range');
      }
      // console.log(bmiRange);
      setSuggestion(`Your suggested weight range is between `);
    }
  }

  return (
    <>
    <div className="container-fluid bg-primary heading">
        <h1>BMI Calculator</h1>
    </div>
    <form onSubmit={calcBmi}>
        <div className="form-group">
            <label htmlFor="height">Enter your height in cm:</label>
            <input type="number" name="height" value={height} onChange={(event) => setHeight(event.target.value)} id="height" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="weight">Enter your weight in kg:</label>
            <input type="number" name="weight" value={weight} onChange={(event) => setWeight(event.target.value)} id="weight" className="form-control" placeholder="60" />
        </div>
        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
    </form>
    <div className="bmiResult">
      <h4>{bmiMessage} {bmi}</h4>
      <h4>{bmiRange}</h4>
      <h4>{suggestion} {lowerWeight} {upperWeight}</h4>
      </div>

    {/* <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>{bmiMessage}</h3>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default App;
