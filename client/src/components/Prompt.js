import React, {} from "react";
import '../index.css';

function Prompt(props){

    function submitTime(){
        const e = document.getElementById("mins");
        var time = e.value;
        props.setTimer(time);
    }

    return(
        <div class = "md:col-span-2 col-span-4">
            <div class = "bg-white rounded-xl shadow-xl">
                <div class = "h-72 p-10">
                    <h2 class="text-center text-3xl sm:text-3xl lg:text-4xl leading-normal font-bold italic text-gray-900 tracking-tight mb-8 ">How Long Would You Like to Work For?</h2>
                    <div class="flex justify-center">
                        <select id="mins">
                            <option>5 Mins</option>
                            
                            <option>10 Mins</option>
                            
                            <option>15 Mins</option>
                            
                            <option>20 Mins</option>

                            <option>30 Mins</option>

                            <option>45 Mins</option>

                            <option>60 Mins</option>
                            
                            <option>75 Mins</option>

                            <option>90 Mins</option>
                            
                            <option>120 Mins</option>
                            

                        </select> &nbsp;&nbsp;&nbsp;
                        <button
                            onClick={submitTime}
                            type="button"
                            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            Begin
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Prompt;