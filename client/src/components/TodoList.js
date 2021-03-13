import React, { useState } from 'react';
import '../index.css';
import Task from './Task'

function TodoList(props){

    //List to hold tasks

    return (
        <div class = "justify-self-stretch col-span-4">
            <div class = "bg-blue-200 rounded-xl shadow-2xl">
                <div class = "h-72 p-10"> 
                    <div class  = "bg-gray-400 rounded-xl shadow-2xl">
                        <div class = "h-full p-4">
                            <ul class = "space-y-2">
                                <Task name = "Get Groceries" />
                                <Task name = "Study for Linear Algebra" />
                                <Task name = "Take Over the World" />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default TodoList;