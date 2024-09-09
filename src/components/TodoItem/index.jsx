import { useState } from 'react';
import styles from "./todoItem.module.css";

export default function TodoItem(props) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(props.task);

    // Função para marcar a tarefa como concluída
    function completeTask() {
        setIsCompleted(true);
    }

    // Função para alternar entre o modo de edição e visualização
    function toggleEdit() {
        setIsEditing(!isEditing);
    }

    // Função para atualizar o valor da tarefa enquanto edita
    function handleTaskChange(event) {
        setEditedTask(event.target.value);
    }

    // Função para salvar a edição e sair do modo de edição
    function saveTask() {
        props.onTaskUpdate(props.task, editedTask); // Atualiza o texto da tarefa
        setIsEditing(false);
    }

    function deleteTask() {
        props.onTaskDelete(props.task);
    }

    return (
        <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {/* Renderização condicional entre visualização e edição */}
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

            {/* Botão de alternância entre "Editar" e "Salvar" */}
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
