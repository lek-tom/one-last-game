import styles from "./styles.module.scss";
import { useState } from "react";

export type DropdownMenuProps = {
    children: ReactChildren;
    text?: string;
}
// return chlidren if usestate returnes false if trr  return text
function DropdownMenu({children, text = undefined, ...props}: DropdownMenuProps) {
    const [dropdownClicked, setDropdownClicked] = useState(false);
    
    const handleClick = () => {
        setDropdownClicked(!dropdownClicked);
        console.log("Dropdown clicked: ", dropdownClicked )
    }

    return( 
        <div onClick={() => console.log('Clicked!')} className={styles.drop_down_menu_not_dropped}>{text}</div>
    );

}

export default DropdownMenu;