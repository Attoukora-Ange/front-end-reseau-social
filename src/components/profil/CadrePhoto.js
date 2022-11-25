import React, { useContext } from "react";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import LOGIN from "../../assets/images/loginPersonne.png";
import COUVERTURE from "../../assets/images/couverture.jpg";
const CadrePhoto = () => {
  const { state } = useContext(BASE_CONTEXTE);
  return (
    <div className="profil_utilisateur_photo">
      <div className="image_couvrture">
        <img
          src={
            state.UTILISATEUR?.photo_couverture
              ? `${state.UTILISATEUR.photo_couverture}`
              :COUVERTURE
          }
          alt="utilisateur couverture"
        />
      </div>
      <div className="image_profil">
        <img
          src={
            state.UTILISATEUR?.photo_profil
              ? `${state.UTILISATEUR.photo_profil}`
              : LOGIN
          }
          alt="utilisateur profil"
        />
      </div>
    </div>
  );
};

export default CadrePhoto;
