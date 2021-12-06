import './SideMenuItem.scss';
import { ReactNode } from "react";

type ItemProps = {
    children?: string | ReactNode | ReactNode[];
}

const SideMenuItem = ({children}: ItemProps) => {
    return (
        <div className="side-menu-item">
            {children}
        </div>
    )
}

export default SideMenuItem;