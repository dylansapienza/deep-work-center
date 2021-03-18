import React, { useState, useEffect } from "react";
import '../index.css';

function Stopwatch(props){

    const [startStop, setStartStop] = useState("Start")
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    function go_back(){
        props.select(0);
    }

    function statusChange(){
        if(startStop === "Start"){
            setStartStop("Pause")
        }
        else{
            setStartStop("Start")
        }
    }

    function reset(){
        setMins(props.mins);
        setSecs(0);
        if(startStop === "Pause")
            statusChange();
    }

    if(secs > 59){
        setSecs(0)
        setMins(mins + 1)
    }

    //If we are out of mins then initiate beep and begin the next cycle
    //Depending on cycle count, set time and begin running

    useEffect(() => {
        if(startStop === "Pause"){
            const id = window.setInterval(() => {
                setSecs(secs => secs + 1)
            }, 1000)
            return () => {window.clearInterval(id);}
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusChange]);

    return(
        <div class = "md:col-span-2 col-span-4">
            <div class = "bg-white rounded-xl shadow-2xl p-4">
                <div class = "h-72">
                    <h2 class="text-center text-3xl sm:text-3xl lg:text-4xl leading-normal font-extrabold text-gray-900 tracking-tight mb-8 ">Stopwatch</h2>
                    <h2 class="text-center text-5xl sm:text-5xl lg:text-6xl leading-normal font-extrabold text-gray-900 tracking-tight mb-8 ">{mins}:{secs < 10 ? "0": null}{secs} </h2>
                    <div class = "flex justify-center">
                        <button
                            onClick={statusChange}
                            type="button"
                            class="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
                            {startStop}
                        </button>
                        <button
                            onClick={reset}
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            Reset
                        </button>
                        <button
                            onClick={go_back}
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-100 focus:outline-none focus:shadow-outline">
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;