import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
  const { title } = props;
  const { taskList } = props;
  const { switchTask } = props;
  const { deleteTask } = props;

  return (
    <>
      <h3 className="text-center">{title}</h3>

      <div className="px-4" style={{ height: "50vh", overflowY: "auto" }}>
        <table className="table table-hover border">
          {/* <!--this is where you add all task--> */}
          <tbody id="taskListElement">
            {taskList.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.taskName}</td>
                  <td>{item.taskTime} hrs</td>
                  <Button variant="warning" onClick={() => deleteTask(item.id)}>
                    <FontAwesomeIcon color="red" icon={faTrash} />{" "}
                  </Button>{" "}
                  <Button variant="light" onClick={() => switchTask(item.id)}>
                    {" "}
                    {/* Conditionally render the arrow icon based on task type */}
                    <FontAwesomeIcon
                      color="green"
                      icon={item.type === "entry" ? faArrowRight : faArrowLeft}
                      onClick={() => switchTask(item.id)}
                      className="switch-icon"
                      style={{
                        color: item.type === "unwanted" ? "black" : "green",
                      }}
                    />
                  </Button>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Item;
