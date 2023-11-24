//import styles from "./styles.module.scss";
import Navbar, { NavbarMain, NavbarElement, NavbarRow } from "./components/navbar/index";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar>
        <NavbarMain>
          <NavbarRow>
            <NavbarElement link={"https://stake.com"}>
              Stake
            </NavbarElement>
            <NavbarElement link={"https://bandit.camp"}>
              BanditCamp
            </NavbarElement>
            <NavbarElement>
              Link 3
            </NavbarElement>
            <NavbarElement>
              Link 4
            </NavbarElement>
          </NavbarRow>
        </NavbarMain>
      </Navbar>
    </BrowserRouter>
    )
}

export default App
