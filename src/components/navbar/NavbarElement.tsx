import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type NavbarElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function NavbarElement({children, link = undefined, ...props}: NavbarElementProps) {
    return (
        <Link className={styles.navbar_element} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}
