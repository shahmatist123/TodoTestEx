import {Observer} from 'mobx-react';
import React from 'react';
import TodoList from "../TodoList/TodoList";
import AddTask from "../AddTask/AddTask";
import Filter from "../Filter/Filter";

const Main = () => {
    return (
        <>
            <AddTask/>
            <Filter></Filter>
            <Observer>
                {() => <TodoList/>}
            </Observer>
        </>
    )
}

export default Main;
