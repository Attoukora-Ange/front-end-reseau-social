import React, { useContext } from "react";
import { AFFICHER_CADRE_HAUT, AFFICHER_MON_PROFIL, AFFICHER_PROFIL_MODIFIER_PROFIL, AFFICHER_RECHERCHE_PSEUDO } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";

const CadreBouton = () => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const handleModifierProfil =()=>{
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    dispacthVisible({type: AFFICHER_CADRE_HAUT, payload: false})
    dispacthVisible({type: AFFICHER_MON_PROFIL, payload: false})
    dispacthVisible({type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: true})
  }
  return (
    <div className="cadre_profil_detail boutton">
      <div className="cadre_profil_detail_amis" onClick={handleModifierProfil}>Modifier mon profil</div>
    </div>
  );
};

export default CadreBouton;