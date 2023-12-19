import styles from "./styles.module.scss";
import Navbar, { NavbarMain, NavbarElement, NavbarRow } from "../../components/navbar/index";
import Footer, {FooterSection, FooterSectionHeader, FooterSectionElement, FooterColumn, FooterMain, FooterBottom, FooterAdditionalText, FooterCaption, FooterCaptionElement} from "../../components/footer/index";
import DropdownMenu, {DropdownMenuMain, DropdownMenuColumn, DropdownMenuElement} from "../../components/dropdown/index";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../registration/Login/Login";
import Register from "../registration/Register/Register";

function MainPage() {
// nie dziala routing z dropdowna w navbarze i ogolnie router gdy probuje dodac link jako komponent wywala albo nie dziala pomocy picahl
// powienienem dodac switcha i routes czy cos jak w direct do navbarai main moze

  return (
    <div className={styles.holder}>
          <Navbar>
            <NavbarMain>
              <NavbarRow>
                <NavbarElement>
                  <DropdownMenu text="Ustawienia">
                    <DropdownMenuMain>
                      <DropdownMenuColumn>
                        <DropdownMenuElement link={"https://instagram.com"}>
                          Filmiki
                        </DropdownMenuElement>
                        <DropdownMenuElement link={"https://youtube.com"}>
                          {/* zepsuly sie linki i na nie najezdzanie */}
                          Jutub
                        </DropdownMenuElement>
                        <DropdownMenuElement>
                          Ptasznik
                        </DropdownMenuElement>
                      </DropdownMenuColumn>
                    </DropdownMenuMain>
                  </DropdownMenu>
                </NavbarElement>
                <NavbarElement link={"https://bandit.camp"}>
                  BanditCamp
                </NavbarElement>
                <NavbarElement link="/login">
                  Login
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

//const App = () => {
//   return (
//     <Router>
//         <Navbar />
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/portfolio" component={Portfolio} />
//             <Route path="/services" component={Services} />
//             <Route path="/about" component={About} />
//         </Switch>
//     </Router>
// );
// }

// const Navbar = () => {
//   const [show, setShow] = useState(true);

//   const handleShow = () => {
//       setShow(current => !current);
//   }

//   return (
//       <header>
//           <div className="logo">Company</div>
//           <div id={show && 'd-menu'} className='display-menu'>
//               <Link className='menu' to="/">Home</Link>
//               <Link className='menu' to="/portfolio">Portfolio</Link>
//               <Link className='menu' to="/services">Services</Link>
//               <Link className='menu' to="/about">About</Link>
//           </div>
//           <button onClick={handleShow} className='toggle'><MenuIcon /></button>
//       </header>
//   );
// }

