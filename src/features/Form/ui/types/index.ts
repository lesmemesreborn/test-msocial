export interface FormValues {
    firstName: string;
    lastName: string;
    cities: Record<string, unknown>;
    password: string;
    repeatPassword: string;
    phoneNumber: string;
    emailAddress: string;
}

export type FormIds = {
    [P in keyof FormValues]: P;
};
