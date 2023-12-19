import {Link, useNavigate} from 'react-router-dom';
import './styles.module.scss';
import styles from "./styles.module.scss"
import { useState } from 'react';




function Register() {
    const navigate = useNavigate();
    //const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // const password = e.target.elements.parssword.value;
        // const repPassword = e.target.elements.repParssword.value;
        // if(password !== repPassword) {
        //     setErrorMessage("Passwords do not match");
        //     return;
        // }
        
        navigate("/")
    }

    return (

        //sprawidzic czy haslo i powtorzenie hasla sa zgodne
        // nie dziala blad wywala hasel nie wykrywa nie wie co to e.tearget.elements.password.value
        <div className={styles.holder}>
            <div className={styles.signUp}>
                <p className={styles.title}>Sign Up</p>
                <form className={styles.signUp} onSubmit={handleSubmit}>
                    <input type={"text"} placeholder={"Email"} name={"email"} className={styles.input} required/>
                    <input type={"text"} placeholder={"Name"} name={"name"} className={styles.input} required/>
                    <input type={"text"} placeholder={"Surname"} name={"surname"} className={styles.input} required/>
                    <input type={"tel"} placeholder={"Phone number"} name={"phoneNum"} className={styles.input} required/>
                    <input type={"password"} placeholder={"Password"} name={"password"} className={styles.input} required/>
                    <input type={"password"} placeholder={"Repeat password"} name={"repPassword"} className={styles.input} required/>
                    {/* {errorMessage && <div className={styles.errorMessage}>{err}</div>} */}
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