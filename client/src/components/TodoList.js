import React, { useState } from 'react';
import '../index.css';

function TodoList(props){

    //List to hold tasks

    return (
        <div class = "justify-self-stretch col-span-4">
            <div class = "bg-blue-200 rounded-xl shadow-2xl">
                <div class = "h-72 p-10"> 
                    <ul>
                        <li>
                            Milk
                        </li>
                        <li>
                            Coffee
                        </li>
                        <li>
                            Tea
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );

}

export default TodoList;