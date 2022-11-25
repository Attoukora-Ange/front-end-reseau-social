import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/gauche.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegNewspaper } from "react-icons/fa";
import { RiMessage3Line, RiLockPasswordLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { RiUserFollowLine, RiUserFollowFill } from "react-icons/ri";
import {
  AFFICHER_ACTUALITE,
  AFFICHER_CADRE_HAUT,
  AFFICHER_CADRE_HAUT_TEXTE_CONTENUE,
  AFFICHER_CADRE_HAUT_VIDEO,
  AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
  AFFICHER_CONVERSATION,
  AFFICHER_LISTE_ABONNE,
  AFFICHER_LISTE_AMIS,
  AFFICHER_LISTE_SUIVIE,
  AFFICHER_MODIF_MOT_PASSE,
  AFFICHER_MON_PROFIL,
  AFFICHER_PROFIL_MODIFIER_PROFIL,
  AFFICHER_PROFIL_UTILISATEUR,
  AFFICHER_RECHERCHE_PSEUDO,
  AFFICHER_VUE,
} from "../../reducerVue/Action";
import LOGIN from "../../assets/images/loginPersonne.png";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import axios from "axios";

const Gauche = () => {
  const { state } = useContext(BASE_CONTEXTE);
  const { dispacthVisible } = useContext(VisibleContexte);

  const handleMonProfil = () => {
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });

    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT, payload: false });
    dispacthVisible({ type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_ACTUALITE, payload: false });
    dispacthVisible({ type: AFFICHER_PROFIL_UTILISATEUR, payload: false });
    dispacthVisible({ type: AFFICHER_MON_PROFIL, payload: true });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
  };
  const handleActualite = () => {
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });

    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT, payload: true });
    dispacthVisible({ type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_PROFIL_UTILISATEUR, payload: false });
    dispacthVisible({ type: AFFICHER_MON_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_ACTUALITE, payload: true });

    dispacthVisible({ type: AFFICHER_CADRE_HAUT_VIDEO, payload: false });
    dispacthVisible({
      type: AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
      payload: null,
    });

    dispacthVisible({
      type: AFFICHER_CADRE_HAUT_TEXTE_CONTENUE,
      payload: null,
    });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
  };

  const handleCoversation = () => {
    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: true });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.add("flou");
  };
  const handleListeAmis = () => {
    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: true });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.add("flou");
  };
  const handleListeAbonne = () => {
    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: true });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.add("flou");
  };
  const handleListeSuivie = () => {
    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: true });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.add("flou");
  };
  const handlePasseWord = () => {
    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: true });

    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.add("flou");
  };
  const handleDeconnexion = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    const URL_DECONNEXION = `${process.env.REACT_APP_URL}/api/deconnexion`;
    axios
      .delete(URL_DECONNEXION, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast(response.data.deconnexion);
          window.location = "/connexion";
          // return dispacth({type: AFFICHER_ID_UTILISATEUR, payload: response.data.data});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="gauche">
      <div className="gauche_principale">
        {state.UTILISATEUR && (
          <div className="profil_utilisateur">
            <div className="profil_utilisateur_image">
              <img
                src={
                  state.UTILISATEUR?.photo_profil
                    ? `${state.UTILISATEUR.photo_profil}`
                    : LOGIN
                }
                alt="profil utilisateur"
              />
            </div>
            <div className="profil_utilisateur_pseudo">
              {state.UTILISATEUR.pseudo}
            </div>
          </div>
        )}
        <ToastContainer />

        {
          <div className="liste_amis">
            <div className="liste_amis_image">
              <ImProfile />
            </div>
            <div className="liste_amis_texte" onClick={handleMonProfil}>
              Mon profil
            </div>
          </div>
        }

        <div className="fil_actualite">
          <div className="fil_actualite_image">
            <FaRegNewspaper />
          </div>
          <div className="fil_actualite_texte active" onClick={handleActualite}>
            Fil d'actualité
          </div>
        </div>
        {/* Conversation */}

        {/* <div className="liste_amis">
          <div className="liste_amis_image">
            <RiMessage3Line />
          </div>
          <div
            className="liste_amis_texte click_flou"
            onClick={handleCoversation}
          >
            Conversation
          </div>
        </div>
        <div className="liste_amis">
          <div className="liste_amis_image">
            <RiMessage3Line />
          </div>
          <div className="liste_amis_texte">
            <Link to="/tchat">Tchat</Link>
          </div>
        </div> */}
         {/* Conversation */}
         
        <div className="liste_amis">
          <div className="liste_amis_image">
            <FaUserFriends />
          </div>
          <div
            className="liste_amis_texte click_flou"
            onClick={handleListeAmis}
          >
            Listes d'amis ({state.UTILISATEUR.amis.length})
          </div>
        </div>
        <div className="liste_amis">
          <div className="liste_amis_image">
            <RiUserFollowLine />
          </div>
          <div
            className="liste_amis_texte click_flou"
            onClick={handleListeAbonne}
          >
            Abonné(e)s ({state.UTILISATEUR.abonnes.length})
          </div>
        </div>
        <div className="liste_amis">
          <div className="liste_amis_image">
            <RiUserFollowFill />
          </div>
          <div
            className="liste_amis_texte click_flou"
            onClick={handleListeSuivie}
          >
            Suivie(s) ({state.UTILISATEUR.suivies.length})
          </div>
        </div>

        <div className="deconnexion">
          <div className="deconnexion_image">
            <RiLockPasswordLine />
          </div>
          <div
            className="deconnexion_texte click_flou"
            onClick={handlePasseWord}
          >
            Modifier mot de passe
          </div>
        </div>
        <div className="deconnexion">
          <div className="deconnexion_image">
            <BiLogOut />
          </div>
          <div className="deconnexion_texte" onClick={handleDeconnexion}>
            Deconnexion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gauche;
