import React, { useContext, useEffect, useState } from "react";
import {RiCloseCircleFill} from "react-icons/ri";
import {BsCheckSquareFill} from "react-icons/bs";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { AFFICHER_ACTUALITE, AFFICHER_CADRE_HAUT, AFFICHER_CONVERSATION, AFFICHER_LISTE_ABONNE, AFFICHER_LISTE_AMIS, AFFICHER_LISTE_SUIVIE, AFFICHER_MODIF_MOT_PASSE, AFFICHER_MON_PROFIL, AFFICHER_PROFIL_MODIFIER_PROFIL, AFFICHER_PROFIL_UTILISATEUR, AFFICHER_RECHERCHE_PSEUDO, AFFICHER_VUE } from "../../reducerVue/Action";
import LOGIN from '../../assets/images/loginPersonne.png'
import { AFFICHER_ID_UTILISATEUR, AFFICHER_LISTE_UTILISATEUR, AFFICHER_UTILISATEUR } from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import axios from "axios";

const Suggestion = ({suggestion}) => {
  const { dispacthVisible } = useContext(VisibleContexte);
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

    // return;
  }, [is]);

  const handleSuggestionUtilisateur  = (id) => {
    dispacth({ type: AFFICHER_ID_UTILISATEUR, payload: id });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });

    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT, payload: false });
    dispacthVisible({ type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_MON_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_ACTUALITE, payload: false });
    dispacthVisible({ type: AFFICHER_PROFIL_UTILISATEUR, payload: true });
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  };

  const handleAccepter = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/accepter/invitation/${id}`;
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
          // return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRefuser = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/refuse/invitation/${id}`;
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
          // return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="suggestion_amis" >
      <div className="image">
        <img src={
              suggestion?.photo_profil
                ? `${suggestion.photo_profil}`
                : LOGIN
            } alt="profil suggestion" />
      </div>
      <div className="pseudo_utilisateur">
        <div className="pseudo" onClick={()=>handleSuggestionUtilisateur(suggestion._id)}>{suggestion.pseudo}</div>
        <div className="pseudo_icone">
          <BsCheckSquareFill title = 'Accepter' className="accepter" onClick={()=>handleAccepter(suggestion._id)}/>
          <RiCloseCircleFill title = 'Réfuser' className="refuser" onClick={()=>handleRefuser(suggestion._id)}/>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
