import React, {useContext, useState} from "react";
import './card.style.scss';
import ContextMenu from "./ContextMenu";
import {ContextMenuIconProps} from "./contextmenuicon.model";
import {MainContext} from "../../index";

const ContextMenuIcon: React.FC<ContextMenuIconProps> = ({id}) => {

    const context = useContext(MainContext);
    const {changeCurrentMovie} = context;

    const [showContextMenu, setShowContextMenu] = useState(false);

    const setShowContextMenuHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        changeCurrentMovie(id);
        setShowContextMenu(true);
    }
    const setCloseContextMenuHandler = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation();
        setShowContextMenu(false);
    }

    return (
        <div className="contextMenuIcon" onClick={setShowContextMenuHandler}>
            +
            {showContextMenu && <ContextMenu closeMenu={setCloseContextMenuHandler}/>}
        </div>
    );
}
 export default ContextMenuIcon;