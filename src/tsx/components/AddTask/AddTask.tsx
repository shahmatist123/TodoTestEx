import React, {useState} from 'react';
import "./AddTask.scss"
import {useStore} from "../../helpers/useStore";

const AddTask = () => {
    const todoList = useStore();
    const [formValue, setFormValue] = useState<any>({
        body: "",
        title: ""
    })
    const onSubmit = () => {
        const date = new Date()
        todoList.addTodo({
            userId: 1,
            id: date.getSeconds() + date.getDay() + date.getMilliseconds(),
            title: formValue.title,
            body: formValue.body,
            done: false
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name
        const value = e.target.value
        if (name) {
            formValue[name] = value ? value : ""
            setFormValue({...formValue})
            console.log(formValue)
        }
    }

    return (
        <div className='add-task'>
            <input type="text" onChange={onChange} placeholder='Title' name="title" value={formValue.title}/>
            <textarea placeholder='Text' onChange={onChange} name="body" rows={5} value={formValue.body}/>
            <input type="submit" value="Add" onClick={onSubmit}/>
        </div>
    )
}

export default AddTask;
