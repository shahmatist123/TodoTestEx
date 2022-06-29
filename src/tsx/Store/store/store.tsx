import {action, computed, observable} from "mobx";
import {TodoItemI} from "../../types/TodoItem";
import { makeAutoObservable } from 'mobx'
export class TodoListS {
    @observable.shallow list: TodoItemI[] = [];
    @observable.shallow isFilter: boolean = false;
    @observable.shallow filterId: number = 0;

    constructor(todos: TodoItemI[]) {
        todos.forEach(item => {
            item.done = false
            this.addTodo(item)
        });
        makeAutoObservable(this)
    }

    @action
    addTodo = (todo: TodoItemI) => {
        this.list.push(todo);
    }

    @action
    removeTodo = (todo: TodoItemI) => {
        this.list.splice(this.list.indexOf(todo), 1);
    };

    @action
    editTodoStatus = (todo: TodoItemI) => {
        const todoIndex = this.list.indexOf(todo)
        const status = this.list[todoIndex].done
        this.list[todoIndex].done = !status
    };

    @action
    filterTodo = (id: number) => {
        this.filterId = id
        if (id === 0) {
            this.isFilter = false
        }
        this.isFilter = true
    };

    @computed
    get finishedTodos(): TodoItemI[] {
        if (this.filterId !== 2){
            return this.list.filter(todo => todo.done);
        }
        return this.list.filter(todo => null);
    }

    @computed
    get openTodos(): TodoItemI[] {
        if (this.filterId !== 1){
            return this.list.filter(todo => !todo.done);
        }
        return this.list.filter(todo => null);
    }
}
