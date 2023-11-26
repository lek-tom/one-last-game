import styles from "./styles.module.scss"

export type NavbarProps = {
    children: ReactChildren;
    className?: string;
} 

function Navbar({children, className, ...props}: NavbarProps) {
    return (
        <div {...props} className={`${styles}${className}`}>{children}</div>
    );
}

export default Navbar;