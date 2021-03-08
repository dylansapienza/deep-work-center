import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios'
import Prompt from './components/Prompt'
import Timer from './components/Timer'



function App(){

  const [response, setResponse] = useState({ text: 'Loading...', attribution: '' })
  const [desiredTime, setDesiredTime] = useState(0);

  function setTimer(childData){
    childData = childData.substr(0,childData.indexOf(' '));
    setDesiredTime(childData);
    console.log(childData);
    }

  function getResponse(){
    axios.get('/api/quote').then((res) => {
      setResponse(res.data);
      console.log(response);
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
            <div class = "bg-red-300 rounded-xl shadow-2xl">
                <div class = "h-72 p-10">
                <h2 class="text-center text-3xl sm:text-3xl lg:text-4xl leading-normal font-bold italic text-gray-900 tracking-tight mb-8 ">{response.text}</h2>
                <h2 class="text-right text-xl sm:text-xl lg:text-xl leading-normal italic text-gray-500 tracking-tight mb-8 ">-{response.attribution}</h2>
                 
              </div>
            </div>
            </div>

              {desiredTime === 0 ? <Prompt setTimer = {setTimer} /> : <Timer mins = {desiredTime}/>}             
             
             
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
