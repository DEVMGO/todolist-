import TypeTodo from "./components/TypeTodo";
import Todo from "./components/Todo";
import "./assets/Styles/index.scss";
import { useState } from "react";

const App = () => {

  const [todoList, setTodoList] = useState([
    {id:0, title: 'امیر' ,text:'بازید از محیط کار و مصاحبه'}
  ]);

  return (
    <main>
      <div className="container">
        <div className="todo-main row align-items-center">
          <div className="col-md-6 h-50">
            <TypeTodo todoList={todoList} setTodoList={setTodoList} />
          </div>
          <div className="todobar col-md-6 h-100">
            {
              todoList.map(item =>
                (
                  <Todo 
                    title={item.title}
                    text={item.text}
                    key={item.id}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    id={item.id}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
