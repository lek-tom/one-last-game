import styles from "./styles.module.scss";

export type NavbarRowProps = {
    children: ReactChildren;
    [key: string]: unknown;
    className?: string;
}

export function NavbarRow({children, className}: NavbarRowProps) {
    return (
        <div className={`${styles}${className}`}>
            {children}
        </div>
    );
}