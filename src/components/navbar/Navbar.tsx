import styles from "./styles.module.scss"

export type NavbarProps = {
    children: ReactChildren;
} 

function Navbar({children, ...props}: NavbarProps) {
    return (
        <div {...props} className={styles.navbar}>{children}</div>
    );
}

export default Navbar;