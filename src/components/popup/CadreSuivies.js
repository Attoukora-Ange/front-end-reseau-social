import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AFFICHER_ID_UTILISATEUR, AFFICHER_LISTE_UTILISATEUR, AFFICHER_UTILISATEUR } from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import { AFFICHER_ACTUALITE, AFFICHER_CADRE_HAUT, AFFICHER_CONVERSATION, AFFICHER_LISTE_ABONNE, AFFICHER_LISTE_AMIS, AFFICHER_LISTE_SUIVIE, AFFICHER_MODIF_MOT_PASSE, AFFICHER_MON_PROFIL, AFFICHER_PROFIL_MODIFIER_PROFIL, AFFICHER_PROFIL_UTILISATEUR, AFFICHER_VUE } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import LOGIN from '../../assets/images/loginPersonne.png'
const CadreSuivies = ({user}) => {
  const {dispacthVisible} = useContext(VisibleContexte)
  const { dispacth } = useContext(BASE_CONTEXTE);

  const [is, setIs] = useState(false)

  useEffect(() => {
    const URL_JWT = `${process.env.REACT_APP_URL}/api/utilisateur/profil`;
    axios
      .get(URL_JWT, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEU_CONNTECT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }, [is, setIs]);

  const handleSuivie = (id)=>{
    dispacth({ type: AFFICHER_ID_UTILISATEUR, payload: id });
    dispacthVisible({type: AFFICHER_CONVERSATION, payload: false})
    dispacthVisible({type: AFFICHER_LISTE_ABONNE, payload: false})
    dispacthVisible({type: AFFICHER_LISTE_SUIVIE, payload: false})
    dispacthVisible({type: AFFICHER_LISTE_AMIS, payload: false})
    dispacthVisible({type: AFFICHER_MODIF_MOT_PASSE, payload: false})

    dispacthVisible({type: AFFICHER_VUE, payload: false})
    dispacthVisible({type: AFFICHER_CADRE_HAUT, payload: false})
    dispacthVisible({type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: false})
    dispacthVisible({type: AFFICHER_MON_PROFIL, payload: false})
    dispacthVisible({type: AFFICHER_ACTUALITE, payload: false})
    dispacthVisible({type: AFFICHER_PROFIL_UTILISATEUR, payload: true})

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  }

  const handleNePlusSuivie= (id) => {
    const URL_AMIS = `${process.env.REACT_APP_URL}/api/annuler/suivre/${id}`;
    axios
      .patch(
        URL_AMIS,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispacth({
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
          setIs(!is)
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="suivie_contenue">
    <div className="suivie_contenue_utilisateur">
      <div className="suivie_photo">
        <img  src={
              user?.photo_profil
                ? `${user.photo_profil}`
                : LOGIN
            } alt="profil personne suivie" />
      </div>
      <div className="suivie_pseudo" onClick={()=>handleSuivie(user._id)}>{user.pseudo}</div>
    </div>
    <div className="suivie_boutton">
      <button className="retirer_suivie" onClick={()=>handleNePlusSuivie(user._id)}>Ne plus suivre</button>
      {/* <button className="suivre_suivie">Suivre en retour</button> */}
    </div>
  </div>
  );
};

export default CadreSuivies;
