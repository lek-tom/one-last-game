import styles from "./styles.module.scss";

export type NavbarMainProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function NavbarMain({children}: NavbarMainProps) {
    return (
        <div className={styles.navbar_main}>
            {children}
        </div>
    );
}