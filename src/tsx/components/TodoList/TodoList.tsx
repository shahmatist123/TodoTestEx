import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss"
import {useStore} from "../../helpers/useStore";
import {Observer} from "mobx-react";


const TodoList = () => {
    const todoList = useStore();


    const getList = (): JSX.Element[] => {
        const openTodos = todoList.openTodos.map(item => {
            return (
                    <TodoItem
                        key={item.id}
                        item={item}
                    />
            )
        })
        const closeTodos = todoList.finishedTodos.map(item => {
            return <TodoItem
                key={item.id}
                item={item}
            />
        })
        return [...openTodos, ...closeTodos]
    }
    return (
        <div className='todo-list'>
        <Observer>
            {() => (<>{getList()}</>)}
        </Observer>
        </div>
    )
}

export default TodoList;
