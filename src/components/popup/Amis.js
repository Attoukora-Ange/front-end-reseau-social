import React, { useContext } from "react";
import "../../assets/css/amis.css";
import CadreAmis from "./CadreAmis";
import { IoMdClose } from "react-icons/io";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { AFFICHER_LISTE_AMIS } from "../../reducerVue/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const Amis = () => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state } = useContext(BASE_CONTEXTE);
  const handleClose = () => {
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  };

  return (
    <div className="amis">
      <IoMdClose className="fermer_amis" onClick={handleClose} />
      <div className="amis_titre">Mes amis</div>
      {
        // state.LISTE_UTILISATEUR &&
        state.LISTE_UTILISATEUR.map((user) => {
          for (let i = 0; i < state.UTILISATEUR.amis.length; i++) {
            if (user._id === state.UTILISATEUR.amis[i])
              return (
                <div key={user._id} className="amis_contenue_principale">
                  <CadreAmis amis={user} />
                </div>
              );
          }
        })
      }
    </div>
  );
};

export default Amis;
