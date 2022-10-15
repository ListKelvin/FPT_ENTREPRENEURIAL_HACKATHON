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
                            label={label}
                            id={name}
                            sx={{
                                width: {
                                    xs: '220px',
                                    sm: '255px',
                                    md: '350px',
                                },
                                color: 'white',
                                // height: '50px',
                                marginBottom: '20px',
                                // "320px",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '5px',
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
