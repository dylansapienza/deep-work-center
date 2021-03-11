import React, {useState} from "react";
import '../index.css';

function TimerSelect(props){

    return(
        <div class = "md:col-span-2 col-span-4">
            <div class = "bg-white rounded-xl shadow-xl">
                <div class = "h-72 p-10">
                    <h2 class="text-center text-3xl sm:text-3xl lg:text-4xl leading-normal font-bold italic text-gray-900 tracking-tight mb-8 ">Which Type of Work?</h2>
                    <div class="flex justify-center">
                        <button
                            onClick = {() => {props.select(1)}}
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            Timer
                        </button>
                        <button
                            onClick = {() => {props.select(2)}}
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            Stopwatch
                        </button>
                        <button
                            onClick = {() => {props.select(3)}}
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            Pomodoro
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TimerSelect;