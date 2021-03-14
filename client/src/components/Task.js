import React, { useState } from "react";
import "../index.css";

function Task(props) {

  const [taskNumber, setTaskNumber] = useState(props.number);
  const [name, setName] = useState(props.name);
  const [task_head, setTask_Head] = useState(props.number);
  const [deleted, setDeleted] = useState(false);

  function showDelete(mouseStatus){
    if(mouseStatus){
        setTask_Head("X")
    }else{
        setTask_Head(taskNumber);
    }
  }

  function deleteTask(){
    setDeleted(true);
  }



  /**status:
        0 - Created, Non-Completed
        1 - Completed

        if there are no needs for other statuses then could be a boolean

    **/
  const [status, setStatus] = useState(0);

  return (
      <li>
        <div class = "flex">
          <button class = "flex-initial bg-white hover:bg-red-400 rounded-full h-12 w-12 flex items-center justify-center self-center" onMouseEnter={()=>showDelete(true)} onMouseLeave={()=>showDelete(false)} onClick={() => deleteTask()}><div class = "text-xl font-bold">{task_head}</div></button>
            &nbsp;
            <div class="flex-1 bg-white rounded-xl shadow-xl p-4 ">
                <div class = "text-xl font-bold ">{name}</div>
                </div>
                <div class = "justify-self-end flex items-center justify-center self-center ">
                        
                        {/* <button class="bg-red-400 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </button> */}
                        &nbsp;&nbsp;
                        <button class="bg-green-300 hover:bg-green-500 text-gray-800 font-bold py-4 px-4 rounded-full inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </button>
                    </div>
            </div>
      </li>


  );
}

export default Task;
