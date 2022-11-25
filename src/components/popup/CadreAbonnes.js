import React, { useContext, useEffect, useState } from "react";
import { AFFICHER_ACTUALITE, AFFICHER_CADRE_HAUT, AFFICHER_CONVERSATION, AFFICHER_LISTE_ABONNE, AFFICHER_LISTE_AMIS, AFFICHER_LISTE_SUIVIE, AFFICHER_MODIF_MOT_PASSE, AFFICHER_MON_PROFIL, AFFICHER_PROFIL_MODIFIER_PROFIL, AFFICHER_PROFIL_UTILISATEUR, AFFICHER_VUE } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import LOGIN from '../../assets/images/loginPersonne.png';
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import axios from "axios";
import { AFFICHER_ID_UTILISATEUR, AFFICHER_LISTE_UTILISATEUR, AFFICHER_UTILISATEUR } from "../../reducer/Action";

const CadreAbonnes = ({abonnes}) => {
  const {dispacthVisible} = useContext(VisibleContexte)
  const {state, dispacth } = useContext(BASE_CONTEXTE);

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
  const handleAbonne = (id)=>{
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

  const handleRetirerAbonne= (id) => {
    const URL_AMIS = `${process.env.REACT_APP_URL}/api/retirer/abonner/${id}`;
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

  const handleSuivie = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/suivre/${id}`;
    axios
      .patch(
        URL_INV,
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
    <div className="abonne_contenue">
    <div className="abonne_contenue_utilisateur">
      <div className="abonne_photo">
        <img src={
              abonnes?.photo_profil
                ? `${abonnes.photo_profil}`
                : LOGIN
            } alt="profl abonné" />
      </div>
      <div className="abonne_pseudo" onClick={()=>handleAbonne(abonnes._id)}>{abonnes.pseudo}</div>
    </div>
    <div className="abonne_boutton">
      <button className="retirer_abonne" onClick={()=>handleRetirerAbonne(abonnes._id)}>Rétirer abonné(e)</button>
      
      
      {!state.UTILISATEUR.suivies.includes(abonnes._id) && 
        <button className="suivre_abonne" onClick={()=>handleSuivie(abonnes._id)}>Suivre en retour</button>
    }
      
     
    </div>
  </div>
  );
};

export default CadreAbonnes;
