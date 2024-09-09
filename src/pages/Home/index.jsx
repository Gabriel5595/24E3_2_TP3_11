import TodoList from "../../components/TodoList"
import { useState } from 'react';
import styles from "./home.module.css"

export default function Home() {

    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState("")

    function addTask(event) {
        event.preventDefault()
        setTaskList([...taskList, newTask]);
        setNewTask("");
    }

    function deleteTask(taskToDelete) {
        setTaskList(taskList.filter(task => task !== taskToDelete));
    }

    function updateTask(oldTask, newTask) {
        setTaskList(taskList.map(task => task === oldTask ? newTask : task));
    }

    return (
        <div>
            <h1>
                To Do List
            </h1>

            <form onSubmit={(event) => addTask(event)}>
                <input
                    placeholder="Tarefa"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)} />
                <button type="submit">Salvar</button>
            </form>

            <TodoList tasks={taskList} onTaskDelete={deleteTask} onTaskUpdate={updateTask}/>
        </div>
    )
}