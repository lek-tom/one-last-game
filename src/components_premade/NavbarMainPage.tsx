import Navbar, {NavbarMain, NavbarRow, NavbarElement}from "../components/navbar/index";
import DropdownMenu, {DropdownMenuMain, DropdownMenuColumn, DropdownMenuElement} from "../components/dropdown/index";

function NavbarMainPage() {
    return(
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
                <NavbarElement link="/mines">
                    Mines
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
    )
}

export default NavbarMainPage;