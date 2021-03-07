import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios'
import Timer from './components/Timer'



function App(){

  const [response, setResponse] = useState("")

  function getResponse(){
    axios.get('/api/v1/say-something').then((res) => {
      setResponse(res.data);
    });
}

  useEffect(() => {
    getResponse();
  }, [])



  return(
    <div class = "h-full bg-blue-200">
      <div class = "flex-auto max-w-9xl mx-auto p-10">
        <h2 class="text-center text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">Deep Work Center</h2>
          <div class = "grid justify-items-stretch gap-8 grid-cols-4">
            <div class = "md:col-span-2 col-span-4">
              <img class = "rounded-xl shadow-xl" alt="Inspo" src = "https://content.presspage.com/uploads/63/1920_aristotlequote.jpg?10000" style = {{maxWidth: '100%'}}></img>
            </div>
              <Timer />
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
