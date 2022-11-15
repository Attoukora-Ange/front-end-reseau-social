import React, { useContext } from "react";
import "../../assets/css/suivies.css";
import { IoMdClose } from "react-icons/io";
import CadreSuivies from "./CadreSuivies";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { AFFICHER_LISTE_SUIVIE } from "../../reducerVue/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
const Suivie = () => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state } = useContext(BASE_CONTEXTE);
  const handleClose = () => {
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  };
  return (
    <div className="suivie milieu_visible">
      <IoMdClose className="fermer_suivie" onClick={handleClose} />
      <div className="suivie_titre">Personnes suivies</div>

      {
        // state.LISTE_UTILISATEUR &&
        state.LISTE_UTILISATEUR.map((user) => {
          for (let i = 0; i < state.UTILISATEUR.suivies.length; i++) {
            if (user._id === state.UTILISATEUR.suivies[i])
              return (
                <div key={user._id} className="suivie_contenue_principale">
                  <CadreSuivies user={user} />
                </div>
              );
          }
        })
      }
    </div>
  );
};

export default Suivie;
