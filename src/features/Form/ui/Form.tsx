import "./Form.scss";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {Input} from "../../../shared/ui/Input";
import Cities from "../../../shared/ui/Cities/ui/Cities";
import {Separator} from "../../../shared/ui/Separator";
import {Submit} from "../../Submit";
import {sortedCityList} from "../../../shared/helpers/CityList";
import {EmailCheckbox} from "../../../shared/ui/Checkbox";


export const FormComponent = () => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const handleEmailCheckboxChange = (checked: boolean) => {
        setIsCheckboxChecked(checked);
    };

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Имя должно быть длиннее 2 символов")
            .required("Обязательное поле")
            .matches(/[а-яА-Я]/, "Используйте только кириллицу"),
        lastName: Yup.string()
            .min(2, "Фамилия должна быть длиннее 2 символов")
            .required("Обязательное поле")
            .matches(/[а-яА-Я]/, "Используйте только кириллицу"),
        password: Yup.string()
            .min(6, "Минимум 6 символов")
            .required("Обязательное поле")
            .matches(/[a-zA-Z]/, "Используйте только латиницу"),
        repeatPassword: Yup.string()
            .min(6, "Минимум 6 символов")
            .required("Обязательное поле")
            .oneOf([Yup.ref("password"), null as any], "Пароли не совпадают")
            .matches(/[a-zA-Z]/, "Используйте только латиницу"),
        phoneNumber: Yup.string().matches(/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, "Неверный формат"),
        emailAddress: isCheckboxChecked ? Yup.string().email("Неверный email").required("Введите email") : Yup.string().email("Неверный email").notRequired(),
    });

    return (
        <div className="form-container">
            <Formik
                initialValues={{ firstName: "", lastName: "", cities: sortedCityList[0].city, password: "", repeatPassword: "", phoneNumber: "", emailAdress: "" }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values));
                    actions.resetForm();
                }}
            >
                {({ values, errors }) => (
                    <Form className="form-container-form">
                        <div className="greetings-container">
                            Здравствуйте,{" "}
                            <div className="greetings-user">
                                {`${values.firstName || "Человек"}`}
                            </div>{" "}
                        </div>
                        <Input
                            itemName="firstName"
                            itemClass="firstname"
                            itemId="firstname"
                            inputType="text"
                            label="Имя"
                            itemPlaceholder="Введите имя"
                            isRequired={true}
                            description="Должен содержать не менее 2 символов и только кириллица"
                        />
                        <Input
                            itemName="lastName"
                            itemClass={`"lastName"${errors ? "error-field" : ""}`}
                            itemId="firstname"
                            inputType="text"
                            label="Фамилия"
                            itemPlaceholder="Введите фамилию"
                            isRequired={true}
                            description="Должен содержать не менее 2 символов и только кириллица"
                        />
                        <Cities itemName="cities" sortedCitiesData={sortedCityList} />
                        <Separator />
                        <Input
                            itemName="password"
                            itemClass="password"
                            itemId="password"
                            inputType="password"
                            label="Пароль"
                            itemPlaceholder="Введите пароль"
                            isRequired={false}
                            description="Должен содержать не менее 6 символов и только латинские буквы"
                        />
                        <Input
                            itemName="repeatPassword"
                            itemClass="repeatPassword"
                            itemId="repeatPassword"
                            inputType="password"
                            label="Пароль ещё раз"
                            itemPlaceholder="Повторите пароль"
                            isRequired={true}
                            description="Проверка на совпадение с паролем"
                        />
                        <Separator />
                        <Input
                            itemName="phoneNumber"
                            itemClass="phoneNumber"
                            itemId="phoneNumber"
                            inputType="numeric"
                            label="Номер телефона"
                            itemPlaceholder="+7 (***) ***-**-**"
                            description={"Маска с международным форматом \"+7 (999) 999-99-99\""}
                        />
                        <Input
                            itemName="emailAddress"
                            itemClass="emailAddress"
                            itemId="emailAddress"
                            inputType="email"
                            label="Электронная почта"
                            itemPlaceholder="Введите электронную почту"
                            isRequired={isCheckboxChecked}
                            description="Проверка на валидность email"
                        />
                        <EmailCheckbox isChecked={isCheckboxChecked} onChange={handleEmailCheckboxChange} />
                        <Submit />
                    </Form>
                )}
            </Formik>
        </div>
    );
};
