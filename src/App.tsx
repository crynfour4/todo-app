import {useEffect, useState} from "react";
import {FilterTypes, type ITodo} from "./types/types.tsx";
import TodoList from "./components/UI/TodoList.tsx";
import InteractiveSection from "./components/InteractiveSection.tsx";

function App() {

    const [todos, setTodos] = useState<ITodo[]>(() => {
        const storedTodos = localStorage.getItem('todosList');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [visibleTodos, setVisibleTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        localStorage.setItem('todosList', JSON.stringify(todos));
        console.log('Todos updated:', todos);
        setVisibleTodos(todos);
    }, [todos]);

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo: ITodo) => todo.id !== id));
    };

    const changeIsCompletedState = (id: number, isCompleted: boolean) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, isCompleted } : todo
            )
        );
    };

    function filterTodos(filterType: FilterTypes) {
        if (filterType === FilterTypes.All) {
            setVisibleTodos(todos);
        } else if (filterType === FilterTypes.Active) {
            setVisibleTodos(todos.filter((todo: ITodo) => !todo.isCompleted));
        } else if (filterType === FilterTypes.Completed) {
            setVisibleTodos(todos.filter((todo: ITodo) => todo.isCompleted));
        }
    }

    const editTodo = (id: number, newContent: string) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, content: newContent } : todo
            )
        );
        setVisibleTodos(todos);
    }

    const remainingTodos = todos.filter((todo: ITodo) => !todo.isCompleted).length;

    return (
        <div className="bg-backgroundPrimary min-h-screen w-full flex flex-col items-center font-mono">
            <h1 className="text-textPrimary font-semibold text-3xl my-8">
                ToDo App
            </h1>

            <InteractiveSection todos={todos} className={'w-1/3 items-center'} setTodos={setTodos} filterTodos={filterTodos} setVisibleTodos={setVisibleTodos}/>

            <div className="w-1/3 pt-4">
                <div className="text-backgroundSecondary/60">
                    Remaining todos: {remainingTodos}
                </div>
                <TodoList onEdit={editTodo} todos={visibleTodos} onRemove={removeTodo} onIsCompletedChange={changeIsCompletedState} />
            </div>
        </div>
    );
}

export default App;