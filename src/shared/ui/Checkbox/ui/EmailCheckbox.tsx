import React from 'react';
import './EmailCheckbox.scss'

interface EmailCheckboxProps {
    isChecked: boolean;
    onChange: (checked: boolean) => void;
    errorClass?: string;
}

export const EmailCheckbox: React.FC<EmailCheckboxProps> = ({isChecked, onChange}) => {
    const emailCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <div className="email-checkbox-container">
            <label htmlFor="email-checkbox" className="email-checkbox__outer">
                Я согласен
            </label>
            <input className="email-checkbox__input" type="checkbox" id="email-checkbox"
                   onChange={emailCheckboxHandler}/>{" "}
            <label htmlFor="email-checkbox" className="email-checkbox__inner">
                принимать актуальную информацию на email
            </label>
        </div>
    );
};
