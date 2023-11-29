import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type DropdownMenuElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function DropdownMenuElement({children, link = undefined, ...props}: DropdownMenuElementProps) {
    return (
        <div className={styles.drop_down_menu_element}>
            <Link to={link ?? ""} {...props}>
                {children}
            </Link>
        </div>
    );
}
