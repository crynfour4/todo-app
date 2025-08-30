import {type FunctionComponent, memo} from 'react';
import Input from "./UI/Input.tsx";

interface SearchSectionProps {
    onSearchQueryChange: (query: string) => void,
    searchQuery: string
}

const SearchSection: FunctionComponent<SearchSectionProps> = ({onSearchQueryChange, searchQuery}) => {
    return (
        <div className="w-full flex justify-center pb-4">
            <Input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                placeholder="Search..."
                className="bg-backgroundSecondary placeholder-textSecondary text-textPrimary focus:outline focus:outline-textPrimary rounded-md p-2 w-1/2"
            />
        </div>
    );
};

export default memo(SearchSection);