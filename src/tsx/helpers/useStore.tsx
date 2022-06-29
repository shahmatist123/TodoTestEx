import { useContext } from 'react';
import { TodoContext } from './todoProvider';
import {TodoListS} from "../Store/store/store";

export const useStore = (): TodoListS => useContext(TodoContext);