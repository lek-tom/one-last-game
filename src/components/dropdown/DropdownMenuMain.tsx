import styles from "./styles.module.scss";

export type DropdownMenuMainProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function DropdownMenuMain({children}: DropdownMenuMainProps) {
    return (
        <div className={styles.drop_down_menu_main}>
            {children}
        </div>
    );
}