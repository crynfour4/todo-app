import {type FunctionComponent, useState} from 'react';
import type {ITodo} from "../../types/types.tsx";
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";

interface TodoCardProps {
    className: string;
    todo: ITodo;
    onRemove: (id: number) => void;
    onIsCompletedChange: (id: number, isCompleted: boolean) => void;
    onEdit: (id: number, newContent: string) => void;
}

const TodoCard: FunctionComponent<TodoCardProps> = ({
                                                        className,
                                                        todo,
                                                        onRemove,
                                                        onIsCompletedChange,
                                                        onEdit,
                                                    }) => {
    const bodyClassName = "text-textPrimary w-5/6";
    const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
    const [editedInput, setEditedInput] = useState<string>(todo.content);

    return (
        <div className={className}>
            <div className="flex flex-row items-center gap-3">
                <Input
                    type="checkbox"
                    className="appearance-none w-3 h-3 bg-textSecondary border-1 border-textPrimary rounded outline outline-textPrimary checked:bg-textPrimary"
                    checked={todo.isCompleted}
                    onChange={() => onIsCompletedChange(todo.id, !todo.isCompleted)}
                />
                {isBeingEdited ? (
                    <Input
                        type="text"
                        value={editedInput}
                        onChange={(e) => setEditedInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                console.log('enter was pressed');
                                onEdit(todo.id, editedInput);
                                setIsBeingEdited(false);
                            } else if (e.key === "Escape") {
                                console.log('escape was pressed');
                                setIsBeingEdited(false);
                                setEditedInput(todo.content);
                            }
                        }}
                        className="outline outline-textPrimary bg-backgroundSecondary placeholder-textSecondary text-textPrimary rounded-md pl-2 w-full"
                    />
                ) : (
                    <p
                        className={
                            bodyClassName +
                            (todo.isCompleted ? " line-through text-textSecondary" : "")
                        }
                    >
                        {todo.content}
                    </p>
                )}
            </div>
            <div className="flex flex-row gap-2">
                <Button
                    disabled={todo.isCompleted}
                    className="cursor-pointer"
                    onClick={() => setIsBeingEdited(!isBeingEdited)}
                >
                    <PencilSquareIcon className="size-5 text-textSecondary" />
                </Button>
                <Button className="cursor-pointer" onClick={() => onRemove(todo.id)}>
                    <TrashIcon className="size-5 text-textSecondary" />
                </Button>
            </div>
        </div>
    );
};

export default TodoCard;