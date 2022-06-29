import React from 'react';
import {TodoItemI} from "../../types/TodoItem";
import './TodoItem.scss'
import {getCheckMark, getDeleteIcon} from "../Icons/Icons";
import {useStore} from "../../helpers/useStore";

interface ItemI {
    item: TodoItemI
}

const TodoItem = (props: ItemI) => {
    const todoList = useStore();

    const todoItem = props.item
    const isActive = todoItem.done
    const checkMarkClass = `item-actions__check-mark ${isActive ? 'active' : ''}`
    const itemClass = `item ${isActive ? 'active' : ''}`
    const onClickMark = () => {
        todoList.editTodoStatus(todoItem)
    }

    return (
        <div className={itemClass}>
            <div className='item-wrapper'>
                <span className='item-title'>
                    {todoItem.title}
                </span>
                <p className='item-text'>
                    {todoItem.body}
                </p>
                <p className='item-text-focused'>
                    {todoItem.body}
                </p>
                <div className="item-actions">
                    <div className="item-actions__delete" onClick={() => todoList.removeTodo(todoItem)}>
                        {getDeleteIcon()}
                    </div>
                    <div className={checkMarkClass} onClick={onClickMark}>
                        {getCheckMark()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;
