import React from "react";

interface SelectFieldFormProps {
    itemName: string;
    itemClass?: string;
    itemId: string;
    label: string;
    options: { value: string; label: string }[];
    isRequired?: boolean;
}

const SelectFieldForm: React.FC<SelectFieldFormProps> = ({
                                                             itemName,
                                                             itemClass,
                                                             itemId,
                                                             label,
                                                             options,
                                                             isRequired
                                                         }: SelectFieldFormProps) => {
    return (
        <div className="form-field">
            <label htmlFor={itemId} className={`form-field-label ${isRequired ? "required" : ""}`}>
                {label}
            </label>
            <select
                name={itemName}
                id={itemId}
                className={`form-field-select ${itemClass || ""}`}
                required={isRequired}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectFieldForm;