import React, {type FunctionComponent} from 'react';

interface ButtonProps {
    children: React.ReactNode,
    className: string,
    onClick?: (e: React.MouseEvent) => void,
    disabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({children, className, onClick, disabled}) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;