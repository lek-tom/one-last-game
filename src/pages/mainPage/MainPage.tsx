import styles from "./styles.module.scss";
import Navbar, { NavbarMain, NavbarElement, NavbarRow } from "../../components/navbar/index";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterCaption, FooterCaptionElement} from "../../components/footer/index";
import DropdownMenu, {DropdownMenuMain, DropdownMenuColumn, DropdownMenuElement} from "../../components/dropdown/index";
import NavbarMainPage from "../../components_premade/NavbarMainPage";
import FooterMainPage from "../../components_premade/FooterMainPAge";


function MainPage() {
// nie dziala routing z dropdowna w navbarze i ogolnie router gdy probuje dodac link jako komponent wywala albo nie dziala pomocy picahl
// powienienem dodac switcha i routes czy cos jak w direct do navbarai main moze

  return (
    <div className={styles.holder}>
      <NavbarMainPage/>
  <div className={styles.main_space}>

  </div>
      <FooterMainPage/>
    </div>
    );
}

export default MainPage;