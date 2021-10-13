import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { useState } from 'react';

const Todo = ({ title, text, id, todoList, setTodoList }) => {

    const handleDelete = () =>{
        const filteredTodos = todoList.filter(item => item.id !== id);
        setTodoList(filteredTodos)
    }

    return (
        <todos>
            <div className="d-flex flex-column justify-content-center mt-3">
                <div className="todo-box">
                    <div className="todo-title d-flex justify-content-between">
                        <h3>{title}</h3>
                        <Button className="btn"
                            onClick={handleDelete}
                        >
                            <DeleteIcon />
                        </Button>
                    </div>
                    <div className="todo-text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </todos>
    );
}

export default Todo;