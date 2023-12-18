import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type DropdownMenuElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function DropdownMenuElement({children, link = undefined, ...props}: DropdownMenuElementProps) {
    const isExternal = link?.startsWith('http://') || link?.startsWith('https://');

    const content = isExternal
        ? <a href={link} {...props}>{children}</a>
        : <Link to={link ?? ""} {...props}>{children}</Link>;

    return (
        <div className={styles.drop_down_menu_element}>
            {content}
        </div>
    );
}
