import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    name="login"
                    placeholder="Login"
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <Field
                    component={Input}
                    name="password"
                    placeholder="Password"
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <Field
                    component={Input}
                    type="checkbox"
                    name="rememberMe" />
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;