export interface ITodo {
    id: number,
    content: string
    isCompleted: boolean
}

export type FilterTypes = "All" | "Completed" | "Active";

export const FilterTypes = {
    All: "All" as FilterTypes,
    Completed: "Completed" as FilterTypes,
    Active: "Active" as FilterTypes
};