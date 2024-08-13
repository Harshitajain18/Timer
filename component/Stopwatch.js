import { useState } from "react";

function Stopwatch(){
    const [time,setTime]=useState({hr:0,min:0,sec:0});
    const [status,setStatus]=useState();
    let updHr=time.hr;
    let updMin=time.min;
    let updSec=time.sec;

    const start = ()=>{
        MyFunc();
        //setInterval is use for jb hme kuch repeatdly krvana ho. Every 1000 miliseconds ke baad "MyFunc" vala function call hoga.
        setStatus(setInterval(MyFunc,1000));
    }
    const stop = () =>{
        //setInterval ko rokne k liye we have clearInterval method.
        clearInterval(status);
    }

    const reset = () =>{
        clearInterval(status);
        setTime({hr:0, min:0, sec:0})
    }

   const MyFunc = ()=>{
        if(updSec === 60){
            updSec = 0;
            updMin++;
        }
        if(updMin === 60){
            updMin=0;
            updHr++;
        }
        updSec++;
        return setTime({hr:updHr, min:updMin, sec:updSec})

    }
    return(
        
        <div>
             <h1 className="stopwatch">Stopwatch Project</h1> 
             <h1 style={{color:"white"}}>{time.hr+" : "+time.min+" : "+time.sec}</h1> 
            <button className="start" onClick={start}>Start</button>
            <button className="pause" onClick={stop}>Pause</button>
            <button className="restart" onClick={reset}> Reset</button>
        </div>
    )
}
export default Stopwatch;

// Imagine you're building a stopwatch and you need a way to keep track of whether it's running or not.

// useState Hook: Think of useState as a special tool that lets you create a tiny box to store some information. This box can hold any kind of information, and you can easily change what's inside the box whenever you need to.

// status and setStatus: When you use useState, it gives you two things:

// status: This is the actual box where your information is stored. In this case, it's like a label that tells you whether the stopwatch is running or not.
// setStatus: This is a button that lets you change what's inside the box. Whenever you need to update the label, you use this button.
// So, in simpler terms, const [status, setStatus] = useState(); is a way to create a label to keep track of whether your stopwatch is running. You also get a button to change this label whenever you start or stop the stopwatch.