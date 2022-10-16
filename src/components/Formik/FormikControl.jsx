import CheckBox from './CheckBox';
import Input from './Input';
import MuiInput from './Mui-input';
import RadioButtons from './RadioButtons';
import Select from './select';

const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        // case 'textarea':
        //   return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />;
        case 'radio':
            return <RadioButtons {...rest} />;
        case 'checkbox':
            return <CheckBox {...rest} />;
        case 'MuiInput':
            return <MuiInput {...rest} />;
        default:
            return null;
    }
};

export default FormikControl;
