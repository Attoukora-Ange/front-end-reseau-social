import React, { useContext } from "react";
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
  AFFICHER_RECHERCHE_PSEUDO,
  AFFICHER_VUE,
} from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";

const EnLigne = () => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const handleEnligneUtilisateur = () => {
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
  };
  return (
    <div className="amis_en_ligne">
      <div className="image">
        <img src="/assets/images/loginPersonne.png" alt="amis en ligne" />
      </div>
      <div className="pseudo" onClick={handleEnligneUtilisateur}>
        Aucun utilisateur en ligne
      </div>
    </div>
  );
};

export default EnLigne;
