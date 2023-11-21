import {Link} from 'react-router-dom';
import './styles.module.scss';

function Login() {
    return (
        <div className={"logIn"}>
            <p className={"title"}>Log In</p>
            <form className={"logIn"}>
                <input type={"text"} placeholder={"Email"} name={"email"} className={"input"}/>
                <input type={"password"} placeholder={"Password"} name={"password"} className={"input"}/>
                <input type={"submit"} name={"submit"} value={"Log In"} className={"input"} id={"submit"}/>
            </form>
            <p>
                Don't have an account? <Link to={"/register"}>Register here</Link>
            </p>
        </div>
    );
}


export default Login;