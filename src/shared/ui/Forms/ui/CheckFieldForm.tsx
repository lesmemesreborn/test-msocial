import React from "react";

interface CheckFieldFormProps {
    itemName: string;
    itemClass?: string;
    itemId: string;
    label: string;
}

const CheckFieldForm: React.FC<CheckFieldFormProps> = ({
                                                           itemName,
                                                           itemClass,
                                                           itemId,
                                                           label
                                                       }: CheckFieldFormProps) => {
    return (
        <div className="form-field form-field-checkbox">
            <label htmlFor={itemId} className="form-field-label">
                {label}
            </label>
            <input
                type="checkbox"
                name={itemName}
                id={itemId}
                className={`form-field-input ${itemClass || ""}`}
            />
        </div>
    );
};

export default CheckFieldForm;