import React, {useEffect, useState} from 'react';
import './index.scss';
import Main from "./tsx/components/Pages/Main";
import { TodoProvider } from './tsx/helpers/todoProvider';
import {getTodoItems} from "./tsx/components/Api/getTodoItems";
import {TodoItemI} from "./tsx/types/TodoItem";
import {TodoListS} from "./tsx/Store/store/store";

const App = () => {

    const [todoItems, setTodoItems] = useState<TodoItemI[]>([])
    let todoList
    useEffect(() => {
        getTodoItems().then((res) => {
            setTodoItems(res.data)
        })
    }, [])

    if (todoItems.length) {
        todoList = new TodoListS(todoItems)
    }
    if (!todoList) {
        return <></>
    }
    return (
        <TodoProvider value={todoList}>
            <div className="App">
                <div className="container">
                    <Main/>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
