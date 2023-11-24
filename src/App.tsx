import styles from "./styles.module.scss";
import Navbar, { NavbarMain, NavbarElement, NavbarRow } from "./components/navbar/index";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterAdditionalText, FooterCaption, FooterCaptionElement} from "./components/footer/index"
import {BrowserRouter} from "react-router-dom";

// usunac styled components bo moze sie nie przydadza tak samo jak zapominiałem
// linka i wszystkie elementy nava/footera mozna wystylowac className ale nie tego cel, nie po to styluje je w ich reactowym kodzie by znów stlyować je tam, gdzie je uzwywa
// główny tag footer i navbar powoien przyjmować jeden argument którym będzie przedrostek nazwy klasy która będzie użwywana
// np: <Navbar className={styles.main_navbar}> i ten main_ będzie dodawany do każdego elementu w tej klasie czyli: styles.main_navbar_element etc.
function App() {

  return (
    <div className={styles.holder}>

      <BrowserRouter>
          <Navbar>
            <NavbarMain>
              <NavbarRow>
                <NavbarElement link={"https://stake.com"} className={styles.link}>
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

      <BrowserRouter>
        <Footer>
            <FooterMain>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader link={"https://mylink.com"}>
                            Example section
                        </FooterSectionHeader>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 1
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 2
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 3
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader link={"https://mylink.com"}>
                            Example section 2
                        </FooterSectionHeader>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 1
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 2
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 3
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
            </FooterMain>
            <FooterBottom>
                <FooterAdditionalText link={"https://mylink.com"}>
                    Text us or sth
                </FooterAdditionalText>
                <FooterCaption>
                    <FooterCaptionElement link={"https://mylink.com"}>
                        Copyright
                    </FooterCaptionElement>
                    <FooterCaptionElement link={"https://mylink.com"}>
                        Cool link
                    </FooterCaptionElement>
                    <FooterCaptionElement link={"https://mylink.com"}>
                        Cool link 2
                    </FooterCaptionElement>
                </FooterCaption>
            </FooterBottom>
        </Footer>
      </BrowserRouter>
    </div>
    );
}

export default App
