import React from "react";

const CadreUtilIdent = ({user}) => {
  return (
    <div className="profil_utilisateur_identification_principal">
      <div className="profil_utilisateur_identification">
        <div className="pseudo_profil">
          <div className="pseudo_profil_label">Pseudo : </div>
          <div className="pseudo_profil_nom">{user.pseudo}</div>
        </div>
        <div className="pseudo_profil">
          <div className="pseudo_profil_label">Age : </div>
          <div className="pseudo_profil_age">{new Date(Date.now()).getFullYear() - new Date(user.naissance).getFullYear() } ans</div>
        </div>
        <div className="pseudo_profil">
            <div className="pseudo_profil_label">Sexe : </div>
            <div className="pseudo_profil_matrimonial">{user.sexe}</div>
          </div>
        <div className="pseudo_profil">
          <div className="pseudo_profil_label">Email : </div>
          <div className="pseudo_profil_email">{user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default CadreUtilIdent;
