import React, {useEffect, useState} from "react";
import './styles.scss';
import Button from "../../components/button/Button";
import {FormDeleteProps} from "./models";
import img from '../../images/x.png';
import {Modal} from "../modal/Modal";

const FormDelete: React.FC<FormDeleteProps> = ({close}) => {


    const [showFormDelete, setShowFormDelete] = useState(true);

    useEffect(() => {setShowFormDelete(true)}, []);


    if (showFormDelete) {
        return (
            <Modal>
                <div className='formdeletewrapper'>
                    <img src={img} alt="" width="20px" className="formdelete-img" onClick={close}/>
                    <h3 className="formdelete--text">
                        DELETE MOVIE
                    </h3>
                    <div className="formdelete--text--question">
                        Are you sure you want to delete this movie?
                    </div>
                    <div className="formdelete--buttons-wrapper">
                        <Button purpose="search" text="CONFIRM" onClick={() => null}></Button>
                    </div>
                </div>
            </Modal>

        );
    }


}

export default FormDelete;

