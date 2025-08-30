import {FilterTypes, type ITodo} from "../../types/types.ts";

export function filterTodos(todos: ITodo[], filterType: FilterTypes, searchQuery: string): ITodo[] {
    if (filterType === FilterTypes.Completed) {
        return todos.filter((todo: ITodo) => todo.isCompleted).filter((todo) => todo.content.toLowerCase().includes(searchQuery));
    } else if (filterType === FilterTypes.Active) {
        return todos.filter((todo: ITodo) => !todo.isCompleted).filter((todo) => todo.content.toLowerCase().includes(searchQuery));
    } else {
        return todos.filter((todo) => todo.content.toLowerCase().includes(searchQuery));
    }
}