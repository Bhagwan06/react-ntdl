import React from "react";
import Button from "./Button";
import { useState } from "react";
import { randomIdGenerator } from "../utilty/randomIdGenerator";

const AddTaskForm = (props) => {
  const initialTaskObject = {
    taskName: "",
    taskTime: "",
    type: "entry",
  };
  const { addTask } = props;

  const [taskObject, setTaskObject] = useState(initialTaskObject);

  const { taskName, taskTime } = taskObject;

  const handleOnChange = (e) => {
    const keyToUpdate = e.target.name;

    setTaskObject({ ...taskObject, [keyToUpdate]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    // Stops the default behaviour of form to reload the page
    e.preventDefault();

    //Logic to add task to the taskList
    addTask({ ...taskObject, id: randomIdGenerator() });

    // Reset the form fields
    setTaskObject(initialTaskObject);
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div class="d-flex gap-1 aliign-items-center ">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Task name"
          name="taskName"
          value={taskName}
          onChange={(e) => handleOnChange(e)}
          required
          style={{ height: "40px", width: "500px" }}
        />

        <input
          type="number"
          class="form-control"
          placeholder="Enter Time Spent (hr)"
          name="taskTime"
          value={taskTime}
          onChange={(e) => handleOnChange(e)}
          min="1"
          max="24"
          required
          style={{ height: "40px", width: "500px" }}
        />

        <Button style={{ height: "40px", width: "500px" }} />
      </div>
    </form>
  );
};

export default AddTaskForm;
