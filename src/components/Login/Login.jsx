import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import s from "./../common/FormsControls/FormsControls.module.css"
const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    name="email"
                    placeholder="Email"
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <Field
                    component={Input}
                    name="password"
                    placeholder="Password"
                    type="password"
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <Field
                    component={Input}
                    type="checkbox"
                    name="rememberMe" />
                Remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const actions = {
    login
}

export default connect(mapStateToProps, actions)(Login);