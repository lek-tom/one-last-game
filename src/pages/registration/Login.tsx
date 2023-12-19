import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

function Login() {
    return (
        <div className={styles.logIn}>
            <p className={styles.title}>Log In</p>
            <form className={styles.logIn}>
                <input type={"text"} placeholder={"Email"} name={"email"} className={styles.input}/>
                <input type={"password"} placeholder={"Password"} name={"password"} className={styles.input}/>
                <input type={"submit"} name={"submit"} value={"Log In"} className={styles.input} id={styles.submit}/>
            </form>
            <p>
                Don't have an account? <Link to={"/register"}>Register here</Link>
            </p>
        </div>
    );
}


export default Login;