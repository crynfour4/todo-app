export interface ITodo {
    id: number,
    content: string
    isCompleted: boolean
}

export enum FilterTypes {
    All = "All",
    Completed = 'Completed',
    Active = 'Active'
}