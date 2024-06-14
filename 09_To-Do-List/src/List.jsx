import ListItem from "./ListItem.jsx"
import PropTypes from "prop-types"
const List = ({taskList, setTaskList}) => {

return(
    <div>
    <div className="row m-2">
        <div className="col-6">
          <h4>Task</h4>
        </div>
        <div className="col-3">
          <h4>Limit</h4>
        </div>
        <div className="col">
          <h4>Location</h4>
        </div>

      </div>
        {
            taskList.map((task) =>{
                return(
                    <ListItem
                    key={task.id}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    />
                )
            })
        }
    </div>
    )
}


List.protoTypes={
  taskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired
}
export default List