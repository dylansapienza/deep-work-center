import React, { useState } from 'react';
import '../index.css';
import Task from './Task'

function TodoList(props){

    //List to hold tasks
    const [task_list, set_task_list] = useState([]);
    const [newTaskModal, setNewTaskModal] = useState(<></>)
    let temp_array = []

    function addNewTask(name){
        if(name === ""){
            alert("Enter a Task Name")
            return
        }
        console.log(name)
        
        set_task_list(task_list.concat(name));

        console.log(task_list);
        
        setNewTaskModal(<></>);
    }

    function newTask(){
        setNewTaskModal(<div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Create New Task
                    </h3>
                    <div class="mt-2">
                    <p class="text-sm text-gray-500">  
                    </p>
                    <input id = "task_name"class="appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Task Name"></input>
                    </div>
                </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={()=>addNewTask(document.getElementById('task_name').value)} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 sm:ml-3 sm:w-auto sm:text-sm">
                Create
                </button>
                <button onClick={()=>setNewTaskModal(<></>)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
                </button>
            </div>
            </div>
        </div>
        </div>)

    }

    //Task Syntax
    // [name: "default_name"]
    //Map Func



    return (
        <>
        {newTaskModal}
        <div class = "justify-self-stretch col-span-4">
            <div class = "bg-blue-200 rounded-xl shadow-2xl p-4">
            <button onClick={()=>newTask()} class = "float-right"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button>     
                <div class = "h-full p-6">
                    <div class  = "bg-gray-400 rounded-xl shadow-2xl">
                        <div class = "h-full p-4">
                            <ul class = "space-y-2">
                                {task_list.length === 0 ? <div class = "text-white text-xl font-bold">Press the + Button to Manage Tasks</div> : task_list.map((task, index) => (
                                    index = index + 1,
                                    <Task name = {task} number = {index}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default TodoList;