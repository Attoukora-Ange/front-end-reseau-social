import React, { useContext } from "react";
import { RiNotificationLine } from "react-icons/ri";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import LOGIN from '../../assets/images/loginPersonne.png'

const Utilisateur = () => {
  const { state } = useContext(BASE_CONTEXTE);

  return (
    <div className="champs_utilisateur">
      <div className="champs_notification">
        <RiNotificationLine />
        <div className="nombre_notification">100</div>
      </div>
      <div className="champs_image">
        <img
          src={
            state.UTILISATEUR?.photo_profil
              ? `${state.UTILISATEUR.photo_profil}`
              : LOGIN
          }
          alt="imag utilisateur"
        />
      </div>
      <div className="champs_icone">
        <div className="champs_icone_pseudo">{state.UTILISATEUR.pseudo}</div>
      </div>
    </div>
  );
};

export default Utilisateur;
