import {type FunctionComponent, memo, useState} from 'react';
import Button from "./UI/Button.tsx";
import TodoModal from "./UI/TodoModal.tsx";
import TodoForm from "./UI/TodoForm.tsx";

interface CreateTodoSectionProps {
    onTodoCreate: (newTodo: {id: number, content: string, isCompleted: boolean}) => void
}

const CreateTodoSection:FunctionComponent<CreateTodoSectionProps> = ({onTodoCreate}) => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div>
            <Button
                className="bg-header py-2 px-4 rounded-md text-backgroundSecondary cursor-pointer border-2 border-header"
                onClick={() => setModal(true)}
            >
                +
            </Button>
            <TodoModal visible={modal} setVisible={setModal}>
                <TodoForm onCreate={onTodoCreate} />
            </TodoModal>
        </div>
    );
};

export default memo(CreateTodoSection);