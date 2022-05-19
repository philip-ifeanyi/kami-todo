import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tasklist = ({tasks, deletetask}) => {
  const taskList = tasks.length ? (
    tasks.map(task => {
      return (
        <div className="taskList" key={task.id}>
          <label><input type="checkbox"/> { task.task }</label>
          <button onClick={() =>{ deletetask(task.id)}}>
            <FontAwesomeIcon icon="fa-regular fa-circle-xmark" size="lg"/>
          </button>
        </div>
      )
    })
  ) : (
    <p className="pxy">You have no tasks today, Yay!</p>
  )
  return (
    <div className="task-list">
      {taskList}
    </div>
  )
}

export default Tasklist