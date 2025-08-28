import React, {type FunctionComponent} from "react";

interface TodoModalProps {
    children: React.ReactNode,
    visible: boolean,
    setVisible: (visible: boolean) => void
}

const TodoModal: FunctionComponent<TodoModalProps> = ({children, visible, setVisible}) => {
    const modalClasses = [
        "fixed", "top-0", "bottom-0", "left-0", "right-0",
        "bg-black/50", "flex", "justify-center", "items-center"
    ];

    if (!visible) {
        modalClasses.push("hidden");
    }

    return (
        <div
            className={modalClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className="p-10 bg-backgroundSecondary rounded-md min-w-1/3"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default TodoModal;