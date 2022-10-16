import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string()
        .required('email cannot be empty')
        .matches(/^[\w-]+@fpt.edu.vn$/, 'Your email must match the following formats'),
    accpetChallenge: Yup.boolean().oneOf([true], 'Please accept the terms of service'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Your password is too short.')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Required'),
});
