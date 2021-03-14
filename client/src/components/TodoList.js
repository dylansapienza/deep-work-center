import React, { useState } from 'react';
import '../index.css';
import Task from './Task'

function TodoList(props){

    //List to hold tasks

    return (
        <div class = "justify-self-stretch col-span-4">
            <div class = "bg-blue-200 rounded-xl shadow-2xl">
                <div class = "h-full p-10"> 
                    <div class  = "bg-gray-400 rounded-xl shadow-2xl">
                        <div class = "h-full p-4">
                            <ul class = "space-y-2">
                                <Task name = "Get Groceries" number = "1"/>
                                <Task name = "Study for Linear Algebra" number = "2" />
                                <Task name = "Take Over the World" number = "3"/>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default TodoList;