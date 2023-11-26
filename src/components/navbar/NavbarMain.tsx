import styles from "./styles.module.scss";

export type NavbarMainProps = {
    children: ReactChildren;
    [key: string]: unknown;
    className?: string;
}

export function NavbarMain({children, className}: NavbarMainProps) {
    return (
        <div className={`${styles}${className}`}>
            {children}
        </div>
    );
}