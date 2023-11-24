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
