import React, { useContext } from 'react';
import { BASE_CONTEXTE } from '../../reducer/Contexte';

const CadreIdent = () => {
  const { state } = useContext(BASE_CONTEXTE);
    return (
        <div className="profil_utilisateur_identification_principal">
        <div className="profil_utilisateur_identification">
          <div className="pseudo_profil">
            <div className="pseudo_profil_label">Pseudo : </div>
            <div className="pseudo_profil_nom">{state.UTILISATEUR.pseudo}</div>
          </div>
          <div className="pseudo_profil">
            <div className="pseudo_profil_label">Age : </div>
            <div className="pseudo_profil_age">{new Date(Date.now()).getFullYear() - new Date(state.UTILISATEUR.naissance).getFullYear() } ans</div>
          </div>
          <div className="pseudo_profil">
            <div className="pseudo_profil_label">Sexe : </div>
            <div className="pseudo_profil_matrimonial">{state.UTILISATEUR.sexe}</div>
          </div>
          <div className="pseudo_profil">
            <div className="pseudo_profil_label">Email : </div>
            <div className="pseudo_profil_email">
              {state.UTILISATEUR.email}
            </div>
          </div>
          <div className="pseudo_profil">
            <div className="pseudo_profil_label">Date d'inscription : </div>
            <div className="pseudo_profil_email">
              {state.UTILISATEUR.dateInscription.split('T')[0]}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CadreIdent;