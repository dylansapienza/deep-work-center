import React, {useState} from 'react';
import '../index.css';

function Task(props){

    const [name, setName] = useState("default_name");

    /**status:
        0 - Created, Non-Completed
        1 - Completed

        if there are no needs for other statuses then could be a boolean

    **/
    const [status, setStatus] = useState(0);





}

export default Task;