import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type NavbarElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function NavbarElement({children, link = undefined, ...props}: NavbarElementProps) {
    return (
        <div className={styles.navbar_element}>
            <Link to={link ?? ""} {...props}>
                {children}
            </Link>
        </div>
    );
}
