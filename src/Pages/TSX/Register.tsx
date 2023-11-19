// Register component
import '../SCSS/Registration.scss';
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div className={"signUp"}>
            <p className={"title"}>Sign Up</p>
            <form className={"signUp"}>
                <input type={"text"} placeholder={"Email"} name={"email"} className={"input"}/>
                <input type={"text"} placeholder={"Name"} name={"name"} className={"input"}/>
                <input type={"text"} placeholder={"Surname"} name={"surname"} className={"input"}/>
                <input type={"tel"} placeholder={"Phone number"} name={"phoneNum"} className={"input"}/>
                <input type={"password"} placeholder={"Password"} name={"password"} className={"input"}/>
                <input type={"password"} placeholder={"Repeat password"} name={"repPassword"} className={"input"}/>
                <select className={"input"}>
                    <option value={"null"} selected disabled hidden>Choose your sex</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"odmieniec"}>Other</option>
                </select>
                <input type={"submit"} name={"submit"} value={"Sign Up"} className={"input"} id={"submit"}/>
            </form>
            <p>
                Already have an account? <Link to={"/login"}>Log in here</Link>
            </p>
        </div>
    );
}

export default Register;