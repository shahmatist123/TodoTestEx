import axios from "axios";
import {ResI} from "../../types/TodoItem";

export const getTodoItems = (): Promise<ResI> => {
    return axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
}