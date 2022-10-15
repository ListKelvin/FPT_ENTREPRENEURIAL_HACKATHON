import { Field } from 'formik';

import { TextField } from '@mui/material';

const MuiInput = ({ label, name, variant, ...rest }) => {
    return (
        <Field name={name}>
            {({ field, form }) => {
                // console.log(field);
                return (
                    <>
                        <TextField
                            inputProps={{ input: { color: 'red' } }}
                            label={label}
                            id={name}
                            sx={{
                                width: {
                                    xs: '220px',
                                    sm: '255px',
                                    md: '350px',
                                },
                                marginBottom: '20px',
                                // "320px",
                                '& .MuiFormLabel-root': {
                                    '&.MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '5px',
                                    borderColor: 'white',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                            }}
                            {...rest}
                            {...field}
                            error={form.errors[name] ? true : false}
                            helperText={form.errors[name]}
                            variant={variant}
                        />
                    </>
                );
            }}
        </Field>
    );
};

export default MuiInput;
