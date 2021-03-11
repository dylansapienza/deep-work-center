import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios'
import TimerSelect from './components/TimerSelect'
import Prompt from './components/Prompt'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'
import Pomodoro from './components/Pomodoro'


function App(){

  const [response, setResponse] = useState({ text: 'Loading...', attribution: '' });
  const [desiredTime, setDesiredTime] = useState(0);
  const [timerBlock, setTimerBlock] = useState(<TimerSelect select={timeSelect}/>)

  function timeSelect(childData){
    if(childData === 1){
      setTimerBlock(desiredTime === 0 ? <Prompt setTimer = {setTimer} /> : <Timer setTimer = {setTimer} mins = {desiredTime}/>);
    }
    if(childData === 2){
      setTimerBlock(<Stopwatch />)
    }
    if(childData === 3){
      setTimerBlock(<Pomodoro />)
    }
    else{
      console.log(childData)
    }
  }

  function setTimer(childData){
    if(childData === 0)
      setDesiredTime(childData);
    else{
    childData = childData.substr(0,childData.indexOf(' '));
    setDesiredTime(childData);
    console.log(childData);
    }
  }

  function getResponse(){
    axios.get('/api/quote').then((res) => {
      setResponse(res.data);
    });
}

  useEffect(() => {
    getResponse();
  }, [])



  return(
    <div class = "h-full bg-yellow-200">
      <div class = "flex-auto max-w-9xl mx-auto p-10">
        <h2 class="text-center text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">Deep Work Center</h2>
          <div class = "grid justify-items-stretch gap-8 grid-cols-4">
            <div class = "md:col-span-2 col-span-4">
            <div class = "bg-red-300 rounded-xl shadow-2xl p-4">
                <div class = "h-72 p-10">
                  <h2 class="text-center text-3xl sm:text-3xl lg:text-4xl leading-normal font-bold italic text-gray-900 tracking-tight mb-8 ">{response.text}</h2>
                  <h2 class="text-right text-xl sm:text-xl lg:text-xl leading-normal italic text-gray-500 tracking-tight mb-8 ">-{response.attribution}</h2>  
                </div>
                <button 
                    onClick = {getResponse.bind(this)}
                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded align-top items-center">
                    <svg class="fill-current w-4 h-4 mr-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                  </button> 

            </div>
            </div>

              {timerBlock}

              {/* {desiredTime === 0 && timeSelection !== 0 ? <Prompt setTimer = {setTimer} /> : <Timer setTimer = {setTimer} mins = {desiredTime}/>}             
              */}
             
             {/* task list */}
            <div class = "justify-self-center col-span-4">
              <img class = "rounded-xl shadow-xl" alt="Inspo" src = "https://content.presspage.com/uploads/63/1920_aristotlequote.jpg?10000" style = {{maxWidth: '100%'}}></img>
          </div>
          </div>
        </div>
    </div>
    
  );

}

export default App;
