import React, { useContext } from 'react';
import "../../assets/css/amis.css";
// import CadreAmis from "./CadreAmis";
import { IoMdClose } from "react-icons/io";
import CadrePassword from './CadrePassword';
import { VisibleContexte } from '../../reducerVue/Contexte';
import { AFFICHER_MODIF_MOT_PASSE } from '../../reducerVue/Action';
const ModPasse = () => {
  const {dispacthVisible} = useContext(VisibleContexte)
  
  const handleClose =()=>{
    dispacthVisible({type: AFFICHER_MODIF_MOT_PASSE, payload: false})
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  }
    return (
        <div className="amis milieu_visible">
        <IoMdClose className="fermer_amis" onClick={handleClose}/>
        {/* <div className="amis_titre">Modification de mon mot de passe</div> */}
      <div className="amis_contenue_principale">
        <CadrePassword handleClose = {handleClose} />
      </div>
    </div>
    );
};

export default ModPasse;