import React, {type FunctionComponent} from 'react';

interface InputProps {
    type: string,
    placeholder?: string,
    value?: string,
    className: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    checked?: boolean
}

const Input: FunctionComponent<InputProps> = ({type, placeholder, className, value, onChange, checked, onKeyDown}) => {
    return (
        <input type={type} placeholder={placeholder} className={className} value={value} onChange={onChange} checked={checked} onKeyDown={onKeyDown}/>
    );
};

export default Input;