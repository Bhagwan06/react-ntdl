import React, { useState } from "react";
import Header from "./Header";
import AddTaskForm from "./AddTaskForm";
import ListWrapper from "./ListWrapper";
import TimeDisplay from "./TimeDisplay";
import Button from "react-bootstrap/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Wrapper() {
  const [taskList, setTaskList] = useState([]);
  const [totalTimeWasted, setTotalTimeWasted] = useState(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  const totalHoursInWeek = 168; // 7 days * 24 hours

  // Function to add task
  const addTask = (taskObject) => {
    console.log(taskObject);

    // Calculate the new total time if the task is added
    const newTotalTime = totalTimeSpent + parseInt(taskObject.taskTime);

    // Check if adding the task exceeds the weekly limit
    if (newTotalTime > totalHoursInWeek) {
      alert("Sorry, You do not have enough time left!!");
      return;
    }

    // If within the limit, add the task
    const tempTaskList = [...taskList, taskObject];
    setTaskList(tempTaskList);

    // Update total time spent
    const totalHour = getTotalTimeSpent(tempTaskList);
    setTotalTimeSpent(totalHour);
  };

  // funstion to delete task
  const deleteTask = (taskid) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      const updatedTaskList = taskList.filter((task) => task.id !== taskid);
      setTaskList(updatedTaskList);

      // update total hour
      const totalHour = getTotalTimeSpent(updatedTaskList);
      setTotalTimeSpent(totalHour);

      // update wasted hour
      const badHour = getTotalTimeWasted(updatedTaskList);
      setTotalTimeWasted(badHour);
    }
  };

  // function to switch task
  const switchTask = (taskid) => {
    const tempTask = taskList.map((task) => {
      if (task.id === taskid) {
        task.type = task.type === "entry" ? "unwanted" : "entry";
      }

      return task;
    });

    console.log(tempTask);
    setTaskList(tempTask);

    // update wasted hour
    const badHour = getTotalTimeWasted(tempTask);
    setTotalTimeWasted(badHour);
  };

  // Function to disply total time spent
  const getTotalTimeSpent = (taskList) => {
    const totalTimeSpent = taskList.reduce((acc, curr) => {
      return acc + parseInt(curr.taskTime);
    }, 0);

    return totalTimeSpent;
  };

  // Function to disply total wasted time
  const getTotalTimeWasted = (taskList) => {
    const unwantedTask = taskList.filter((task) => task.type === "unwanted");
    const totalWastedTime = unwantedTask.reduce((acc, curr) => {
      return acc + parseInt(curr.taskTime);
    }, 0);

    return totalWastedTime;
  };

  return (
    <div>
      <Header />
      <AddTaskForm addTask={addTask} />
      <br />
      <ListWrapper
        taskList={taskList}
        switchTask={switchTask}
        deleteTask={deleteTask}
      />
      <TimeDisplay
        totalTimeSpent={totalTimeSpent}
        totalTimeWasted={totalTimeWasted}
      />
    </div>
  );
}
