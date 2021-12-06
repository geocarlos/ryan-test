import { Fragment } from "react";
import "./SideMenu.scss";
import SideMenuItem from "./SideMenuItem";

const items = [
    "Connect Wallet",
    "My Snowmen",
    "Stake Snowmen",
    "Buy $LODGE",
    "Farm $LODGE",
]

const SideMenu = () => {

    return (
        <div className="side-menu">
            {items.map(item => (
                <Fragment key={item}>
                    <SideMenuItem>{item}</SideMenuItem>
                </Fragment>
            ))}
        </div>
    )
}

export default SideMenu;