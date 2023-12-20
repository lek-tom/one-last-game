import { Link, useNavigate } from 'react-router-dom';
import './styles.module.scss';
import styles from "./styles.module.scss"
import { useState } from 'react';
import { FooterMain } from '../../../components/footer';

export type FormProps = {
    email: string;
    name: string;
    surname: string;
    phoneNumber: string; 
    password: string;
    repPassword: string;
    sex: string;
}


function Register() {
    const [formState, setFormState] = useState<FormProps>({email: '', name: '',  surname: '', phoneNumber: '', password: '', repPassword: '', sex: ''});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    //przekierowanie po signup moze nie dzialaac bo ejst asycn

    const handleSubmit = async (e: any) => {
        e.preventDefault();
            if(formState.password !== formState.repPassword) {
                console.error("Passwords do not match")
                return;
            }

            try {
                const response = await fetch('http://localhost:8000/login/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
                });
                const data = await response.json();
                console.log(data);
            } 
            catch (error) {
                console.error('Error:', error);
            }
        };
        
        navigate("/")

    return (

        //sprawidzic czy haslo i powtorzenie hasla sa zgodne
        // nie dziala blad wywala hasel nie wykrywa nie wie co to e.tearget.elements.password.value
        <div className={styles.holder}>
            <div className={styles.signUp}>
                <p className={styles.title}>Sign Up</p>
                <form className={styles.signUp} onSubmit={handleSubmit}>
                    <input type={"text"} placeholder={"Email"} name={"email"} className={styles.input} value={formState.email} onChange={handleChange} required/>
                    <input type={"text"} placeholder={"Name"} name={"name"} className={styles.input} value={formState.name} onChange={handleChange} required/>
                    <input type={"text"} placeholder={"Surname"} name={"surname"} className={styles.input} value={formState.surname} onChange={handleChange} required/>
                    <input type={"tel"} placeholder={"Phone number"} name={"phoneNum"} className={styles.input} value={formState.phoneNumber} onChange={handleChange} required/>
                    <input type={"password"} placeholder={"Password"} name={"password"} className={styles.input} value={formState.password} onChange={handleChange} required/>
                    <input type={"password"} placeholder={"Repeat password"} name={"repPassword"} className={styles.input} value={formState.repParssword} onChange={handleChange} required/>
                    {/* {errorMessage && <div className={styles.errorMessage}>{err}</div>} */}
                    <select className={styles.input} value={formState.sex} onChange={handleChange} required>
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