import styles from "./styles.module.scss";

export type NavbarRowProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function NavbarRow({children}: NavbarRowProps) {
    return (
        <div className={styles.navbar_row}>
            {children}
        </div>
    );
}