import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios'



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
    <div class = "min-h screen flex items-center bg-purple-400">
      <div class = "flex-1 max-w-4xl mx-auto p-10">
        <div class = "bg-white rounded-lg shadow-xl">
          <div class = "h-24">
            <div class= "font-sans text-2xl antialiased text-center text-blue-700">
              <h1>Hello from the frontend!</h1>
              <h1>{response.body}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );

}

export default App;
