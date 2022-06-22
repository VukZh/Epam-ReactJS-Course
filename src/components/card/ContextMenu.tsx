import React, { useState} from "react";
import './card.style.scss';
import img from "../../images/x.png";
import FormDelete from "../../containers/formdelete/FormDelete";
import {Modal} from "../../containers/modal/Modal";
import FormAdd from "../../containers/formadd/FormAdd";
import {ContextMenuProps} from "./contextmenu.model";

const ContextMenu: React.FC<ContextMenuProps> = ({closeMenu}) => {

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const closeFormEditHandler = (event: React.MouseEvent<HTMLImageElement>) => setShowModalEdit(false);
    const showFormEditHandler = (event: React.MouseEvent<HTMLImageElement>) => setShowModalEdit(true);

    const closeFormDeleteHandler = (event: React.MouseEvent<HTMLImageElement>) => {
        setShowModalDelete(false);
    };
    const showFormDeleteHandler = (event: React.MouseEvent<HTMLImageElement>) => setShowModalDelete(true);

    return (<div>

            <div className="contextMenuWrapper">
                <img src={img} alt="" width="20px" className="contextMenu-img" onClick={closeMenu}/>
                <div onClick={showFormEditHandler} className="contextMenuItem">Edit</div>
                <div onClick={showFormDeleteHandler} className="contextMenuItem">Delete</div>
            </div>

            {showModalDelete && (
                <Modal>
                    <FormDelete close={closeFormDeleteHandler}/>
                </Modal>
                )
            }

            {showModalEdit && (
                <Modal>
                    <FormAdd typeAdd={false} close={closeFormEditHandler}/>
                </Modal>
                )
            }
    </div>

    )

}
export default ContextMenu;