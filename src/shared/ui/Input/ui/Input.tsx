import { memo, useRef } from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import "./Input.scss";

interface InputProps {
    itemName: string;
    itemClass?: string;
    itemId: string;
    inputType: string;
    label: string;
    itemPlaceholder?: string;
    isRequired?: boolean;
    description?: string;
}

const Input: React.FC<InputProps> = ({
                                         itemName,
                                         itemClass,
                                         itemId,
                                         inputType,
                                         label,
                                         itemPlaceholder,
                                         isRequired,
                                         description,
                                     }: InputProps) => {
    const errorRef = useRef<HTMLDivElement>(null);

    const errorClass =
        errorRef.current && errorRef.current.textContent ? "form-input__field--error" : "";

    return (
        <div className="form-input__container">
            <label htmlFor={itemId} className="form-input__label">
                {label}
                {isRequired && (
                    <span className="form-input__label--required">*</span>
                )}
            </label>
            <div className="form-input__field-container">
                <Field
                    name={itemName}
                    id={itemId}
                    className={`form-input__field ${itemClass || ""} ${errorClass}`}
                >
                    {(props: FieldProps) => (
                        <input
                            className='form-input__field'
                            type={inputType}
                            placeholder={itemPlaceholder || ""}
                            {...props.field} />
                    )}
                </Field>
                <div ref={errorRef}>
                    <ErrorMessage name={itemName} component="div" className="error-message" />
                </div>
            </div>
            {description && (
                <label className="form-input__description">{description}</label>
            )}

        </div>
    );
};

export default memo(Input);