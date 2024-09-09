import { useState } from 'react';
import styles from "./todoItem.module.css";

export default function TodoItem(props) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(props.task);

    function completeTask() {
        setIsCompleted(true);
    }

    function toggleEdit() {
        setIsEditing(!isEditing);
    }

    function handleTaskChange(event) {
        setEditedTask(event.target.value);
    }

    function saveTask() {
        props.onTaskUpdate(props.task, editedTask);
        setIsEditing(false);
    }

    function deleteTask() {
        props.onTaskDelete(props.task);
    }

    return (
        <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={editedTask}
                    onChange={handleTaskChange}
                />
            ) : (
                <span>{props.task}</span>
            )}

            {!isCompleted && (
                <button onClick={completeTask} style={{ marginLeft: '10px' }}>
                    Concluir
                </button>
            )}

            {isEditing ? (
                <button onClick={saveTask} style={{ marginLeft: '10px' }}>
                    Salvar
                </button>
            ) : (
                <button onClick={toggleEdit} style={{ marginLeft: '10px' }}>
                    Editar
                </button>
            )}

            <button onClick={deleteTask} style={{ marginLeft: '10px', color: 'red' }}>
                Excluir
            </button>
        </li>
    );
}
