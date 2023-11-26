import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type NavbarElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
    className?: string;
}

export function NavbarElement({children, link = undefined, className, ...props}: NavbarElementProps) {
    return (
        <Link className={`${styles}${className}`} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}
