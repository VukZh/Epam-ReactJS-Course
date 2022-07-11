import React, {useState} from "react";
import './card.style.scss';
import ContextMenu from "./ContextMenu";

const ContextMenuIcon: React.FC = () => {

    const [showContextMenu, setShowContextMenu] = useState(false);

    const setShowContextMenuHandler = (event: React.MouseEvent<HTMLDivElement>) => setShowContextMenu(true);
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