import styles from "./styles.module.scss";
import { useState } from "react";

export type DropdownMenuProps = {
    children: ReactChildren;
    text?: string;
}

function DropdownMenu({children, text = undefined, ...props}: DropdownMenuProps) {
    const [dropped, setDropped] = useState(false);

    return(
        <div className={`${styles.holder} ${dropped ? styles.holder_hover : ''} `}
            onMouseEnter={() => setDropped(true)}
            onMouseLeave={() => setDropped(false)}
        >
            <div className={styles.drop_down_menu_not_dropped}>{text}</div>
            {dropped && (
                <div {...props} className={styles.drop_down_menu_dropped}>{children}</div>
            )}
        </div>
    );
}

export default DropdownMenu;