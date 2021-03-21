import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "../index.css";

function Task(props) {

  const [taskNumber, setTaskNumber] = useState(props.number);
  const [name, setName] = useState(props.name);
  const [task_head, setTask_Head] = useState(props.number);
  const [deleted, setDeleted] = useState(false);

    /**status:
        0 - Created, Non-Completed
        1 - Completed

        if there are no needs for other statuses then could be a boolean

    **/
  const [status, setStatus] = useState(0);

  const [textDecor, setTextDecor] = useState("text-xl font-bold")

  function taskCompleted(){
    setStatus(1);
    setTextDecor("text-xl font-bold text-gray-400 line-through ")
  }

  function showDelete(mouseStatus){
    if(mouseStatus){
        setTask_Head("X")
    }else{
        setTask_Head(taskNumber);
    }
  }

  function deleteTask(){
    document.getElementById(props.number).remove();
    setDeleted(true);
  }

  return (
      <li>
        <div class = "flex" id = {props.number}>
          <button class = "flex-initial bg-white hover:bg-red-400 rounded-full h-12 w-12 flex items-center justify-center self-center" onMouseEnter={()=>showDelete(true)} onMouseLeave={()=>showDelete(false)} onClick={() => deleteTask()}><div class = {textDecor}>{task_head}.</div></button>
            &nbsp;
            <div class="flex-1 bg-white rounded-xl shadow-xl p-4 ">
                <div class = {textDecor}>{name}</div>
                </div>
                <div class = "justify-self-end flex items-center justify-center self-center ">

                        &nbsp;&nbsp;
                        <button onClick={() => taskCompleted()} class="bg-green-300 hover:bg-green-500 text-gray-800 font-bold py-4 px-4 rounded-full inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </button>
                    </div>
            </div>
      </li>


  );
}

export default Task;
