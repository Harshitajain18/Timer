import {useState} from "react";

function Countdown() {
    const [time,setTime]=useState({hr:0,min:1,sec:15});
    const [status,setStatus]=useState(null);

const start = () =>{
    MyFunc();
    setStatus(setInterval(MyFunc,1000));
}

const stop = ()=>{
    clearInterval(status); 
}

const reset = () =>{
    clearInterval(status);
    setTime({hr:0, min:0, sec:0})
}

function MyFunc(){
    let {hr, min, sec} = time;

    if (sec > 0) {
        sec--;
    } else if (min > 0) {
        sec = 59;
        min--;
    } else if (hr > 0) {
        sec = 59;
        min = 59;
        hr--;
    } else {
        clearInterval(status);
        return;
    }
    setTime({hr, min, sec});
}

 return (
        <div>
            <h1 className="countdown">Countdown Timer Project</h1>
            <br></br>

            <div className="time">
                <p>Hours Minutes Seconds</p>
            </div>

            <div className="input">
                <input type="number" placeholder="Hours" onChange={(e) => setTime({time, hr: e.target.value})}/>
                <input type="number" placeholder="Minutes" onChange={(e) => setTime({time, min: e.target.value})}/>
                <input type="number" placeholder="Seconds" onChange={(e) => setTime({time, sec: e.target.value})}/>
            </div>

            <button className="start" onClick={start} >Start</button>
            <button className="pause" onClick={stop} >Pause</button>
            <button className="reset" onClick={reset} >Reset</button>
        </div>
    )
};
export default Countdown;