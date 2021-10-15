import TypeTodo from "./components/TypeTodo";
import Todo from "./components/Todo";
import { useState } from "react";

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 0, title: 'امیر', text: 'بازید از محیط کار و مصاحبه' }
  ]);

  return (
    <box>
      <main>
        <div className="app2 col-sm-12 fixed"></div>
        <div className="container">
          <div className="todo-main row align-items-center">
            <div className="col-md-6 h-50 mt-3">
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
    </box>
  );
}

export default App;
