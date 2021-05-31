import s from "./FormsControls.module.css";

const FormControl = ({ input, meta, children, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + (hasError ? " " + s.error : "")}>
            <div>{children}</div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const Textarea = (props) => {
    const { input, meta, children, ...restprops } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restprops} />
        </FormControl>
    );
};

export const Input = (props) => {
    const { input, meta, children, ...restprops } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restprops} />
        </FormControl>
    );
};
