import styles from "./styles.module.scss";

export type DropdownMenuColumnProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function DropdownMenuColumn({children}: DropdownMenuColumnProps) {
    return (
        <div className={styles.drop_down_menu_column}>
            {children}
        </div>
    );
}