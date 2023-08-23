import React from "react";
import TextFieldForm from "./TextFieldForm";
import SelectFieldForm from "./SelectFieldForm";
import CheckFieldForm from "./CheckFieldForm";
import './FormFields.scss'

interface FormFieldRendererProps {
    fieldType: string;
    itemName: string;
    itemClass?: string;
    itemId: string;
    label: string;
    itemPlaceholder?: string;
    isRequired?: boolean;
    options: { value: string; label: string }[];
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = ({
                                                                 fieldType,
                                                                 options = [], // Использовать пустой массив по умолчанию
                                                                 ...props
                                                             }: FormFieldRendererProps) => {
    switch (fieldType) {
        case "text":
            return <TextFieldForm {...props} />;
        case "select":
            return <SelectFieldForm {...props} options={options} />;
        case "checkbox":
            return <CheckFieldForm {...props} />;
        default:
            return null;
    }
};
