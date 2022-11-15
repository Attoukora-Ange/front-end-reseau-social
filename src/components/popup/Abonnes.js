import React, { useContext } from "react";
import "../../assets/css/abonnes.css";
import { IoMdClose } from "react-icons/io";
import CadreAbonnes from "./CadreAbonnes";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { AFFICHER_LISTE_ABONNE } from "../../reducerVue/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
const Abonnes = () => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state } = useContext(BASE_CONTEXTE);
  const handleClose = () => {
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  };
  return (
    <div className="abonne milieu_visible">
      <IoMdClose className="fermer_abonne" onClick={handleClose} />
      <div className="abonne_titre">Mes abonnés</div>

      {
        // state.LISTE_UTILISATEUR &&
        state.LISTE_UTILISATEUR.map((user) => {
          for (let i = 0; i < state.UTILISATEUR.abonnes.length; i++) {
            if (user._id === state.UTILISATEUR.abonnes[i])
              return (
                <div key={user._id} className="abonne_contenue_principale">
                  <CadreAbonnes abonnes = {user} />
                </div>
              );
          }
        })
      }
    </div>
  );
};

export default Abonnes;
