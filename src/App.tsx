import {useCallback, useState} from "react";
import {FilterTypes, type ITodo} from "./types/types.ts";
import TodoList from "./components/UI/TodoList.tsx";
import InteractiveSection from "./components/InteractiveSection.tsx";
import {filterTodos} from "./components/utils/filterTodos.ts";

function App() {
    const [todos, setTodos] = useState<ITodo[]>(() => {
        const storedTodos = localStorage.getItem('todosList');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [activeFilter, setActiveFilter] = useState<FilterTypes>(FilterTypes.All);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const visibleTodos = filterTodos(todos, activeFilter, searchQuery);
    const remainingTodos = todos.filter((todo: ITodo) => !todo.isCompleted).length;

    const setNewTodos = (newTodos: ITodo[]) => {
        localStorage.setItem('todosList', JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const removeTodo = (id: number) => {
        const removedTodos = todos.filter((todo: ITodo) => todo.id !== id)
        setNewTodos(removedTodos);
    };

    const changeIsCompletedState = (id: number, isCompleted: boolean) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? {...todo, isCompleted} : todo
        );
        setNewTodos(updatedTodos);
    };

    const editTodo = (id: number, newContent: string) => {
        const editedTodos =
                todos.map(todo =>
                    todo.id === id ? {...todo, content: newContent} : todo
                );
        setNewTodos(editedTodos);
    }

    const createTodo = useCallback((newTodo: ITodo) => {
        const newTodos = [...todos, newTodo];
        setNewTodos(newTodos);
    }, [todos]);

    return (
        <div className="bg-backgroundPrimary min-h-screen w-full flex flex-col items-center font-mono">
            <h1 className="text-textPrimary font-semibold text-3xl my-8">
                ToDo App
            </h1>

            <InteractiveSection className={'w-1/3 items-center'} activeFilter={activeFilter}
                                onActiveFilterChange={setActiveFilter} searchQuery={searchQuery}
                                onSearchQueryChange={setSearchQuery} onTodoCreate={createTodo}/>

            <div className="w-1/3 pt-4">
                <div className="text-backgroundSecondary/60">
                    Remaining todos: {remainingTodos}
                </div>
                <TodoList onEdit={editTodo} todos={visibleTodos} onRemove={removeTodo}
                          onIsCompletedChange={changeIsCompletedState}/>
            </div>
        </div>
    );
}

export default App;