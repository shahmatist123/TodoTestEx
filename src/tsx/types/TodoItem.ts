export interface TodoItemI{
    userId: number,
    id: number,
    title: string,
    body: string,
    done: boolean
}

export interface ResI {
    data: TodoItemI[]
}