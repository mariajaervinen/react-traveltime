import React, {useState} from 'react';
import './App.css';


function App() {
  const [distance,setDistance] = useState(0);
  const [speed,setSpeed] = useState(0);
  const [time,setTime] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    calculateTime();
  }

  function calculateTime(){
    let distanceInMeters = parseInt(distance * 1000);
    let speedInMetersPerSecond =
      parseFloat(speed * 0.277777777777777);
    let seconds = distanceInMeters / speedInMetersPerSecond;
    let hours = Math.floor(seconds/3600);
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds /60);
    seconds = Math.floor(seconds - (minutes * 60));
    formatTime(hours,minutes,seconds);
    
  }

  function formatTime(hours, minutes, seconds){
    (hours > 0) ? hours += 'h ' : hours = '';
    (minutes > 0) ? minutes += 'min ' : minutes = '';
    (seconds > 0) ? seconds += 'sec ' : seconds = '';
    setTime(hours + minutes + seconds);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Travel Time  calculator</h3>
        <div>
          <label>Distance(km)</label>
          <input type='number' value={distance}
          onChange={e=> setDistance(e.target.value)}/>
        </div>
        <div>
          <label>Speed(km/h)</label>
          <input type='number' value={speed}
          onChange={e=> setSpeed(e.target.value)}/>
        </div>
        <div>
          <label>Time</label>
          <output>{time}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
