import styles from "./styles.module.scss";
import Navbar, { NavbarMain, NavbarElement, NavbarRow } from "../../components/navbar/index";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterCaption, FooterCaptionElement} from "../../components/footer/index";
import DropdownMenu, {DropdownMenuMain, DropdownMenuColumn, DropdownMenuElement} from "../../components/dropdown/index";

function MainPage() {
// nie dziala routing z dropdowna w navbarze i ogolnie router gdy probuje dodac link jako komponent wywala albo nie dziala pomocy picahl
// powienienem dodac switcha i routes czy cos jak w direct do navbarai main moze

  return (
    <div className={styles.holder}>
          <Navbar>
            <NavbarMain>
              <NavbarRow>
                <NavbarElement>
                  Welcome
                </NavbarElement>
                <NavbarElement>
                  News and Updates
                </NavbarElement>
                <NavbarElement>
                <DropdownMenu text="Resources">
                    <DropdownMenuMain>
                      <DropdownMenuColumn>
                        <DropdownMenuElement >
                          Propability Theory
                        </DropdownMenuElement>
                        <DropdownMenuElement>
                          Game Strategies
                        </DropdownMenuElement>
                        <DropdownMenuElement >
                          Video Lessons
                        </DropdownMenuElement>
                        <DropdownMenuElement>
                          Theoretical exercises
                        </DropdownMenuElement>
                        <DropdownMenuElement >
                          Upcoming events
                        </DropdownMenuElement>
                        <DropdownMenuElement>
                          Past Elements
                        </DropdownMenuElement>
                      </DropdownMenuColumn>
                    </DropdownMenuMain>
                  </DropdownMenu>
                </NavbarElement>
                <NavbarElement>
                  tu bedzie przerwa keidys
                </NavbarElement>
                <NavbarElement>
                  Wallet
                </NavbarElement>
                <NavbarElement>
                  Account
                </NavbarElement>
                <NavbarElement>
                  Settings
                </NavbarElement>
              </NavbarRow>
            </NavbarMain>
          </Navbar>
  <div className={styles.main_space}>

  </div>
      <Footer>
          <FooterMain>
              <FooterColumn>
                  <FooterSection>
                      <FooterSectionHeader>
                        About Us
                      </FooterSectionHeader>
                      <FooterSectionElement>
                        Our Mission
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Our Team
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Contact
                      </FooterSectionElement>
                  </FooterSection>
              </FooterColumn>
              <FooterColumn>
                  <FooterSection>
                      <FooterSectionHeader>
                        Legal
                      </FooterSectionHeader>
                      <FooterSectionElement>
                        Privacy Policy
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Terms of Service
                      </FooterSectionElement>
                      <FooterSectionElement>
                        FAQ
                      </FooterSectionElement>
                  </FooterSection>
              </FooterColumn>
              <FooterColumn>
                  <FooterSection>
                      <FooterSectionHeader>
                        Navigation
                      </FooterSectionHeader>
                      <FooterSectionElement>
                        Site Map
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Disclaimers
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Accesibility
                      </FooterSectionElement>
                  </FooterSection>
              </FooterColumn>
              <FooterColumn>
                  <FooterSection>
                      <FooterSectionHeader>
                        Find Us
                      </FooterSectionHeader>
                      <FooterSectionElement>
                        Facebook
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Instagram
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Twitter
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Hub
                      </FooterSectionElement>
                  </FooterSection>
              </FooterColumn>
              <FooterColumn>
                  <FooterSection>
                      <FooterSectionHeader>
                        Partenrships
                      </FooterSectionHeader>
                      <FooterSectionElement>
                        Our partners
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Become an Affiliate
                      </FooterSectionElement>
                      <FooterSectionElement>
                        Sponsorships
                      </FooterSectionElement>
                  </FooterSection>
              </FooterColumn>

          </FooterMain>
          <FooterBottom>
              {/* mysle ze footer additioanl text nie jest potrzeby ale narazie zostawie plik i mijesce jego*/}
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
    </div>
    );
}

export default MainPage;