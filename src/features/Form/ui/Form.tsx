import "./Form.scss";
import {useState} from "react";
import {FormikProvider, useFormik} from "formik";
import {Input} from "../../../shared/ui/Input";
import Cities from "../../../shared/ui/Cities/ui/Cities";
import {Separator} from "../../../shared/ui/Separator";
import {Submit} from "../../Submit";
import {sortedCityList} from "../../../shared/helpers/CityList";
import {EmailCheckbox} from "../../../shared/ui/Checkbox";
import {getValidationSchema} from "./helpers";
import {FORM_DEFAULT_VALUES, FORM_IDS} from "./constants";
import {FormValues} from "./types";
export const FormComponent = () => {
    const [isEmailRequired, setIsEmailRequired] = useState(false);

    const validationSchema = getValidationSchema(isEmailRequired);

    const emailCheckboxChangeHandler = (checked: boolean): void => {
        setIsEmailRequired(checked);
    };

    const formSubmitHandler = (formValues: FormValues): void => {
        console.log(JSON.stringify(formValues));

        formik.resetForm();
    };

    const formik = useFormik({
        initialValues: FORM_DEFAULT_VALUES,
        validationSchema,
        onSubmit: formSubmitHandler,
    });

    const name = formik.values.firstName || "Человек";

    return (
        <FormikProvider value={formik}>
            <div className="form-container">
                <form
                    noValidate={true}
                    onSubmit={formik.handleSubmit}
                    className="form-container-form"
                >
                    <div className="greetings-container">
                        Здравствуйте, <div className="greetings-user">{name}</div>
                    </div>
                    <Input
                        itemName={FORM_IDS.firstName}
                        itemId={FORM_IDS.firstName}
                        inputType="text"
                        label="Имя"
                        itemPlaceholder="Введите имя"
                        isRequired={true}
                        description="Должен содержать не менее 2 символов и только кириллица"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <Input
                        itemName={FORM_IDS.lastName}
                        itemClass={`lastName ${
                            formik.errors.lastName ? "error-field" : ""
                        }`}
                        itemId={FORM_IDS.lastName}
                        inputType="text"
                        label="Фамилия"
                        itemPlaceholder="Введите фамилию"
                        isRequired={true}
                        description="Должен содержать не менее 2 символов и только кириллица"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <Cities
                        itemName={FORM_IDS.cities}
                        sortedCitiesData={sortedCityList}
                        value={formik.values.cities}
                    />
                    <Separator />
                    <Input
                        itemName={FORM_IDS.password}
                        itemClass="password"
                        itemId={FORM_IDS.password}
                        inputType="password"
                        label="Пароль"
                        itemPlaceholder="Введите пароль"
                        isRequired={false}
                        description="Должен содержать не менее 6 символов и только латинские буквы"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <Input
                        itemName={FORM_IDS.repeatPassword}
                        itemClass="repeatPassword"
                        itemId={FORM_IDS.repeatPassword}
                        inputType="password"
                        label="Пароль ещё раз"
                        itemPlaceholder="Повторите пароль"
                        isRequired={true}
                        description="Проверка на совпадение с паролем"
                        onChange={formik.handleChange}
                        value={formik.values.repeatPassword}
                    />
                    <Separator />
                    <Input
                        itemName={FORM_IDS.phoneNumber}
                        itemClass="phoneNumber"
                        itemId={FORM_IDS.phoneNumber}
                        inputType="numeric"
                        label="Номер телефона"
                        itemPlaceholder="+7 (***) ***-**-**"
                        description={'Маска с международным форматом "+7 (999) 999-99-99"'}
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                    />
                    <Input
                        itemName={FORM_IDS.emailAddress}
                        itemClass="emailAddress"
                        itemId={FORM_IDS.emailAddress}
                        inputType="email"
                        label="Электронная почта"
                        itemPlaceholder="Введите электронную почту"
                        isRequired={isEmailRequired}
                        description="Проверка на валидность email"
                        onChange={formik.handleChange}
                        value={formik.values.emailAddress}
                        errorClass={formik.errors.emailAddress ? "error-field" : ""}
                    />
                    <EmailCheckbox
                        isChecked={isEmailRequired}
                        onChange={emailCheckboxChangeHandler}
                        errorClass={formik.errors.emailAddress ? "error-field" : ""}
                    />
                    <Submit />
                </form>
            </div>
        </FormikProvider>
    );
};