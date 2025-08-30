import React, {type FunctionComponent, useState} from 'react';
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import type {ITodo} from "../../types/types.ts";

interface TodoFormProps {
    onCreate: (todo: ITodo) => void
}

const TodoForm: FunctionComponent<TodoFormProps> = ({onCreate}) => {
    const [todo, setTodo] = useState<ITodo>({
        id: 0,
        content: '',
        isCompleted: false
    })

    const addNewTodo = (e: React.MouseEvent) => {
        e.preventDefault()
        const newTodo: ITodo = {
            ...todo, id: Date.now()
        }
        onCreate(newTodo)
        setTodo({
            id: 0,
            content: '',
            isCompleted: false
        })
    }

    return (
        <form className="flex flex-col items-center">
            <Input
                type="text"
                value={todo.content}
                onChange={e => setTodo({...todo, content: e.target.value})}
                placeholder="What is your goal?"
                className="bg-backgroundSecondary placeholder-textSecondary text-textPrimary outline outline-textPrimary rounded-md p-2 w-full"
            />
            <Button onClick={addNewTodo} className="bg-textPrimary py-2 px-4 rounded-md text-backgroundSecondary cursor-pointer mt-6">
                Add new Todo
            </Button>
        </form>
    );
};

export default TodoForm;