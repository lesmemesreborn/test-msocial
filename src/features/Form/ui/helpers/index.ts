import * as yup from "yup";

export const getValidationSchema = (isEmailRequired: boolean) => {
    const validationSchema = yup.object().shape({
        firstName: yup
            .string()
            .min(2, "Имя должно быть длиннее 2 символов")
            .required("Обязательное поле")
            .matches(/[а-яА-Я]/, "Используйте только кириллицу"),
        lastName: yup
            .string()
            .min(2, "Фамилия должна быть длиннее 2 символов")
            .required("Обязательное поле")
            .matches(/[а-яА-Я]/, "Используйте только кириллицу"),
        password: yup
            .string()
            .min(6, "Минимум 6 символов")
            .required("Обязательное поле")
            .matches(/[a-zA-Z]/, "Используйте только латиницу"),
        repeatPassword: yup
            .string()
            .min(6, "Минимум 6 символов")
            .required("Обязательное поле")
            .oneOf([yup.ref("password"), null as any], "Пароли не совпадают")
            .matches(/[a-zA-Z]/, "Используйте только латиницу"),
        phoneNumber: yup
            .string()
            .matches(
                /^(?:(\+7)|8)[\s-]?\d{10}$/,
                "Неверный формат"
            ),
        emailAddress: isEmailRequired
            ? yup.string().email("Неверный email").required("Введите email")
            : yup.string().email("Неверный email").notRequired(),
    });

    return validationSchema;
};
