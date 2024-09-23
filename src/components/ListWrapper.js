import React from "react";
import ListComponent from "./ListComponent";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

export default function ListWrapper({ taskList, switchTask, deleteTask }) {
  return (
    <div>
      <ListComponent
        taskList={taskList}
        switchTask={switchTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
