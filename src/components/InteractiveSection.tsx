import {type FunctionComponent} from 'react';
import {FilterTypes, type ITodo} from "../types/types.ts";
import SearchSection from "./SearchSection.tsx";
import CreateTodoSection from "./CreateTodoSection.tsx";
import FiltersSection from "./FiltersSection.tsx";

interface InteractiveSectionProps {
    onActiveFilterChange: (filter: FilterTypes) => void,
    onSearchQueryChange: (query: string) => void,
    searchQuery: string,
    activeFilter: FilterTypes,
    onTodoCreate: (newTodo: ITodo) => void,
    className?: string
}

const InteractiveSection: FunctionComponent<InteractiveSectionProps> = ({onActiveFilterChange, onSearchQueryChange, searchQuery, onTodoCreate, activeFilter, className}) => {
    return (
        <div className={className}>
            <SearchSection onSearchQueryChange={onSearchQueryChange} searchQuery={searchQuery}/>
            <div className="flex justify-between w-full">
                <CreateTodoSection onTodoCreate={onTodoCreate} />
                <FiltersSection activeFilter={activeFilter} onFilterChange={onActiveFilterChange}/>
            </div>
        </div>
    );
};

export default InteractiveSection;