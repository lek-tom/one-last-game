import {Link} from 'react-router-dom';
import './styles.module.scss';
import Login from '../Login/Login';
import styles from "./styles.module.scss"

// czemu do chuja hest off center
function Register() {
    return (
        <div className={styles.holder}>
            <div className={styles.signUp}>
                <p className={styles.title}>Sign Up</p>
                <form className={styles.signUp}>
                    <input type={"text"} placeholder={"Email"} name={"email"} className={styles.input}/>
                    <input type={"text"} placeholder={"Name"} name={"name"} className={styles.input}/>
                    <input type={"text"} placeholder={"Surname"} name={"surname"} className={styles.input}/>
                    <input type={"tel"} placeholder={"Phone number"} name={"phoneNum"} className={styles.input}/>
                    <input type={"password"} placeholder={"Password"} name={"password"} className={styles.input}/>
                    <input type={"password"} placeholder={"Repeat password"} name={"repPassword"} className={styles.input}/>
                    <select className={styles.input}>
                        <option value={"null"} selected disabled hidden>Choose your sex</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"odmieniec"}>Other</option>
                    </select>
                    <input type={"submit"} name={"submit"} value={"Sign Up"} className={styles.input} id={styles.submit}/>
                </form>
                <p>
                    Already have an account? <Link to={"/login"} className={`${styles.link} no_select`}>Log in here</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;