import React, {type FunctionComponent, useState} from 'react';
import Input from "./UI/Input.tsx";
import Button from "./UI/Button.tsx";
import TodoModal from "./UI/TodoModal.tsx";
import TodoForm from "./UI/TodoForm.tsx";
import {FilterTypes, type ITodo} from "../types/types.tsx";

interface InteractiveSectionProps {
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    filterTodos: (filter: FilterTypes) => void,
    className?: string,
    setVisibleTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    todos: ITodo[]
}

const InteractiveSection: FunctionComponent<InteractiveSectionProps> = ({setTodos, filterTodos, className, setVisibleTodos, todos}) => {
    const [modal, setModal] = useState<boolean>(false);

    const createTodo = (newTodo: ITodo) => {
        setTodos((prevTodos: ITodo[]) => [...prevTodos, newTodo]);
        setModal(false);
    };

    const [activeFilter, setActiveFilter] = useState<FilterTypes>(FilterTypes.All);

    const handleFilterClick = (filter: FilterTypes) => {
        filterTodos(filter);
        setActiveFilter(filter);
    }

    const [searchInput, setSearchInput] = useState<string>('');

    return (
        <div className={className}>
            <div className="w-full flex justify-center pb-4">
                <Input
                    type="text"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                        setVisibleTodos(
                            todos.filter((todo) => todo.content.toLowerCase().includes(e.target.value))
                        );

                }}
                    placeholder="Search..."
                    className="bg-backgroundSecondary placeholder-textSecondary text-textPrimary focus:outline focus:outline-textPrimary rounded-md p-2 w-1/2"
                />
            </div>

            <div className="flex justify-between w-full">
                <div>
                    <Button
                        className="bg-header py-2 px-4 rounded-md text-backgroundSecondary cursor-pointer border-2 border-header"
                        onClick={() => setModal(true)}
                    >
                        +
                    </Button>
                    <TodoModal visible={modal} setVisible={setModal}>
                        <TodoForm onCreate={createTodo} />
                    </TodoModal>
                </div>
                <div className="flex gap-3">
                    <Button
                        className={
                            "bg-header py-2 px-3 rounded-md text-backgroundSecondary cursor-pointer" +
                            (activeFilter === FilterTypes.All ? " border-2 border-b-backgroundSecondary" : "")
                        }
                        onClick={() => handleFilterClick(FilterTypes.All)}
                    >
                        All
                    </Button>

                    <Button
                        className={
                            "bg-header py-2 px-3 rounded-md text-backgroundSecondary cursor-pointer" +
                            (activeFilter === FilterTypes.Active ? " border-2 border-b-backgroundSecondary" : "")
                        }
                        onClick={() => handleFilterClick(FilterTypes.Active)}
                    >
                        Active
                    </Button>

                    <Button
                        className={
                            "bg-header py-2 px-3 rounded-md text-backgroundSecondary cursor-pointer" +
                            (activeFilter === FilterTypes.Completed ? " border-2 border-b-backgroundSecondary" : "")
                        }
                        onClick={() => handleFilterClick(FilterTypes.Completed)}
                    >
                        Completed
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default InteractiveSection;