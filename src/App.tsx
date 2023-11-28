import styles from "./styles.module.scss";
import Navbar, { NavbarMain, NavbarElement, NavbarRow } from "./components/navbar/index";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterAdditionalText, FooterCaption, FooterCaptionElement} from "./components/footer/index"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className={styles.holder}>
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
    <div className={styles.main_space}></div>
      <BrowserRouter>
        <Footer>
            <FooterMain>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader link={"https://mylink.com"}>
                            Secton 1 
                        </FooterSectionHeader>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 1
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 2d
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 3
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader link={"https://mylink.com"}>
                           Secton 2
                        </FooterSectionHeader>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 4
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 5
                        </FooterSectionElement>
                        <FooterSectionElement link={"https://mylink.com"}>
                            link 6
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
            </FooterMain>
            <FooterBottom>
               {/* mysle ze footer additioanl text nie jest potrzeby ale narazie zostawie plik i mijesce jego */}
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



