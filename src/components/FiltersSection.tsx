import {type FunctionComponent, memo} from 'react';
import Button from "./UI/Button.tsx";
import {FilterTypes} from "../types/types.ts";

interface FiltersSectionProps {
    onFilterChange: (filter: FilterTypes) => void,
    activeFilter: FilterTypes
}

const FiltersSection: FunctionComponent<FiltersSectionProps> = ({onFilterChange, activeFilter}) => {
    return (
        <div className="flex gap-3">
            <Button
                className={
                    "bg-header py-2 px-3 rounded-md text-backgroundSecondary cursor-pointer" +
                    (activeFilter === FilterTypes.All ? " border-2 border-b-backgroundSecondary" : "")
                }
                onClick={() => onFilterChange(FilterTypes.All)}
            >
                All
            </Button>

            <Button
                className={
                    "bg-header py-2 px-3 rounded-md text-backgroundSecondary cursor-pointer" +
                    (activeFilter === FilterTypes.Active ? " border-2 border-b-backgroundSecondary" : "")
                }
                onClick={() => onFilterChange(FilterTypes.Active)}
            >
                Active
            </Button>

            <Button
                className={
                    "bg-header py-2 px-3 rounded-md text-backgroundSecondary cursor-pointer" +
                    (activeFilter === FilterTypes.Completed ? " border-2 border-b-backgroundSecondary" : "")
                }
                onClick={() => onFilterChange(FilterTypes.Completed)}
            >
                Completed
            </Button>
        </div>
    );
};

export default memo(FiltersSection);