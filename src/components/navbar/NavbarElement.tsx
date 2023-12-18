import {Link} from "react-router-dom";
import styles from "./styles.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export type NavbarElementProps = {
    children: ReactChildren;
    link?: string | React.ReactElement | undefined;
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
