import { createContext } from 'react';
import {TodoListS} from "../Store/store/store";

export const TodoContext = createContext<TodoListS>({} as TodoListS);
export const TodoProvider = TodoContext.Provider;