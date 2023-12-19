import MainPage from "./pages/mainPage/MainPage";
import styles from "./styles.module.scss"
import Login from "./pages/registration/Login";
import Register from "./pages/registration/Register";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className={styles.holder}>
        <MainPage/>
23
      </div>
    );
}

export default App



