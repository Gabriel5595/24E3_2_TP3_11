import TodoItem from "../TodoItem"
import styles from "./todoList.module.css"

export default function TodoList(props) {

    return (
            <ul>
                {props.tasks.map((task, index) => (
                    <TodoItem 
                        key={index}
                        task={task}
                        onTaskDelete={props.onTaskDelete}
                        onTaskUpdate={props.onTaskUpdate}/>
                ))}
            </ul>
    )
}