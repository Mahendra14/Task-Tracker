import React from "react";
import Task from './Task';

const Tasks = ({ tasks , onDelete , onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
       <Task key={task.id} task = { task } onDelete = { onDelete } onToggle = {onToggle}/>
      ))}
    </>
  );
};

export default Tasks;

//raw tasks data:::::
//the code for raw data is as follows:
// <>
// {tasks.map((task) => (
//     <h3 key={task.id}> {task.text}</h3>
// ))}
// </>
