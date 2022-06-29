import React, {useState} from 'react';
import "./Filter.scss"
import {useStore} from "../../helpers/useStore";

const filterItems = [
    {
        name: "All",
    },
    {
        name: "Done",
    },
    {
        name: "Not done",
    },
]


const Filter = () => {
    const todoList = useStore();
    const [filter, setFilter] = useState(0)
    const onClick = (id: number) => {
        todoList.filterTodo(id)
        setFilter(id)
    }

    const getFilterItems = (): JSX.Element[] => {
        return filterItems.map((item, i) => {
            return (
                <div className={`filter-item ${filter === i ? "active" : ""}`}  key={i} onClick={() => onClick(i)}>
                    {item.name}
                </div>
            )
        })
    }

    return (
        <div className='filter'>
            {getFilterItems()}
        </div>
    )
}

export default Filter;
