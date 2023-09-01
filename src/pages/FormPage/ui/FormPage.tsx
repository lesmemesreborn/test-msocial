import React from 'react';
import {FormComponent} from "../../../features/Form";

interface FormPageProps {
    className?: string;
}

export const FormPage = ({className}: FormPageProps) => {
    return (
        <FormComponent/>
    );
};
