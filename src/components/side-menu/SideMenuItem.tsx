// Opportunity for refactoring: The Button component could receive a class for background color
// and used instead of this component, which could be discarded.
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