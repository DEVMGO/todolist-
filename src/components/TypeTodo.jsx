import { Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TypeTodo = ({ todoList, setTodoList }) => {
    const [newTodo, setNewTodo] = useState({
        title: '',
        text: '',
        id: 0
    });

    const addNewTodo = () => {
        if(newTodo.title){
            setTodoList([...todoList, newTodo]);
            setNewTodo({
                title: '',
                text: '',
                id:0
            })
        }
    }

    return (
        <typetodo>
            <div className="type-todo-section d-flex flex-column justify-content-around h-100">
                <h2>لیست کارهای روزانه من</h2>

                <input
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({
                        ...newTodo,
                        title: e.target.value,
                        id: uuidv4()
                    })}
                    type="text" 
                    className="p-3"
                    placeholder="عنوان را وارد کنید.."
                />
                    
                <textarea
                    value={newTodo.text}
                    onChange={(e) => setNewTodo({
                        ...newTodo,
                        text: e.target.value
                    })}
                    className="p-3"
                    placeholder="لطفا متن مورد نظر خود را وارد کنید...">

                </textarea>

                <Button
                    onClick={addNewTodo}
                    variant="contained" >
                    ثبت کار
                </Button>

            </div>
        </typetodo>
    );
}

export default TypeTodo;