import React from "react";

interface TextFieldFormProps {
    itemName: string;
    itemClass?: string;
    itemId: string;
    label: string;
    itemPlaceholder?: string;
    isRequired?: boolean;
}

const TextFieldForm: React.FC<TextFieldFormProps> = ({
                                                         itemName,
                                                         itemClass,
                                                         itemId,
                                                         label,
                                                         itemPlaceholder,
                                                         isRequired
                                                     }: TextFieldFormProps) => {
    return (
        <div className="form-field">
            <label htmlFor={itemId} className={`form-field-label ${isRequired ? "required" : ""}`}>
                {label}
            </label>
            <input
                name={itemName}
                type="text"
                id={itemId}
                className={`form-field-input ${itemClass || ""}`}
                placeholder={itemPlaceholder || ""}
                required={isRequired}
            />
        </div>
    );
};

export default TextFieldForm;