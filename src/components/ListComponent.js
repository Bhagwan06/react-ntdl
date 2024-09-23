import Item from "./ItemComponent";

const ListComponent = ({ taskList, switchTask, deleteTask }) => {
  const goodList = taskList.filter((item) => item.type == "entry");
  const badList = taskList.filter((item) => item.type == "unwanted");

  return (
    <div className="shadow-lg border p-4 rounded">
      <div className="row gap-2">
        {/* <!---Second Column--> */}
        <div className="col border p-4 rounded">
          {/* <!----Task List--> */}
          <Item
            title="Good List"
            taskList={goodList}
            switchTask={switchTask}
            deleteTask={deleteTask}
          />
        </div>

        {/* <!---Third Column--> */}
        <div className="col border p-4 rounded ">
          {/* <!----Unwanted Task List--> */}
          <Item
            title="Unwanted Task List"
            taskList={badList}
            switchTask={switchTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
