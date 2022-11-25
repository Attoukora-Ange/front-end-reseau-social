import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AFFICHER_ID_UTILISATEUR, AFFICHER_LISTE_UTILISATEUR, AFFICHER_UTILISATEUR } from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import LOGIN from '../../assets/images/loginPersonne.png'
import {
  AFFICHER_ACTUALITE,
  AFFICHER_CADRE_HAUT,
  AFFICHER_CONVERSATION,
  AFFICHER_LISTE_ABONNE,
  AFFICHER_LISTE_AMIS,
  AFFICHER_LISTE_SUIVIE,
  AFFICHER_MODIF_MOT_PASSE,
  AFFICHER_MON_PROFIL,
  AFFICHER_PROFIL_MODIFIER_PROFIL,
  AFFICHER_PROFIL_UTILISATEUR,
  AFFICHER_VUE,
} from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";

const CadreAmis = ({ amis }) => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state, dispacth } = useContext(BASE_CONTEXTE);

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

  const handleAmis = (id) => {
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

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  };


  const handleRetireAmis = (id) => {
    const URL_AMIS = `${process.env.REACT_APP_URL}/api/supprimer/amis/${id}`;
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
  const handleSuivreAmis = (id) => {
    const URL_AMIS = `${process.env.REACT_APP_URL}/api/suivre/${id}`;
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
    <div className="amis_contenue">
      <div className="amis_contenue_utilisateur">
        <div className="amis_photo">
          <img
            src={
              amis?.photo_profil
                ? `${amis.photo_profil}`
                : LOGIN
            }
            alt="profil amis"
          />
        </div>
        <div className="amis_pseudo" onClick={()=>handleAmis(amis._id)}>
          {amis.pseudo}
        </div>
      </div>
      <div className="amis_boutton">
        <button className="retirer_amis" onClick={()=>handleRetireAmis(amis._id)}>Rétirer</button>
        {!state.UTILISATEUR.suivies.includes(amis._id) && 
        <button className="suivre_amis" onClick={()=>handleSuivreAmis(amis._id)}>Suivre</button>
    }
       
      </div>
    </div>
  );
};

export default CadreAmis;
