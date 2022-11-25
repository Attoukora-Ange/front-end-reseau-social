import React from "react";
import LOGIN from '../../assets/images/loginPersonne.png'
import COUVERTURE from '../../assets/images/couverture.jpg'

const CadreUtilPhoto = ({user}) => {
  return (
    <div className="profil_utilisateur_photo">
      <div className="image_couvrture">
        <img  src= {user.photo_couverture ? `${user.photo_couverture}` : COUVERTURE} alt="utilisateur couverture" />
      </div>
      <div className="image_profil">
        <img  src= {user.photo_profil ? `${user.photo_profil}` : LOGIN}  alt="utilisateur profil" />
      </div>
    </div>
  );
};

export default CadreUtilPhoto;
