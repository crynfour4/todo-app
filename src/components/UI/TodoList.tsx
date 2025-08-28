import type {ITodo} from "../../types/types.tsx";
import type {FunctionComponent} from "react";
import TodoCard from "./TodoCard.tsx";

interface TodoListProps {
    todos: ITodo[],
    onRemove: (id: number) => void,
    onIsCompletedChange: (id: number, isCompleted: boolean) => void,
    onEdit: (id: number, newContent: string) => void;
}

const TodoList: FunctionComponent<TodoListProps> = ({todos, onRemove, onIsCompletedChange, onEdit}) => {
    if (todos.length === 0) {
        return (
            <h1 className="flex justify-center text-textPrimary">
                No todos for now :)
            </h1>
        )
    }

    return (
        <div>
            {todos.map(todo => (
                <TodoCard
                    onIsCompletedChange={onIsCompletedChange}
                    todo={todo}
                    onRemove={onRemove}
                    key={todo.id}
                    onEdit={onEdit}
                    className="bg-backgroundSecondary rounded-md my-3 p-3 flex flex-row justify-between items-center"
                />
            ))}
        </div>
    );
};

export default TodoList;