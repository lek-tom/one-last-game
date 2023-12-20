import MainPage from "./pages/mainPage/MainPage";
import styles from "./styles.module.scss"
import Login from "./pages/registration/Login/Login";
import Register from "./pages/registration/Register/Register";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className={styles.holder}>
        <Register/>
      </div>
    );
}

export default App



