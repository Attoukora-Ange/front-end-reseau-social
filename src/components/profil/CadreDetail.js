import React, { useContext } from "react";
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const CadreDetail = () => {
  const { state } = useContext(BASE_CONTEXTE);
  return (
    <div className="cadre_profil_detail">
      <div className="cadre_profil_detail_amis">
        {state.UTILISATEUR.amis.length} ami(e)s
      </div>
      <div className="cadre_profil_detail_abonne">
        {state.UTILISATEUR.abonnes.length} abonn(é)es
      </div>
      <div className="cadre_profil_detail_suivie">
        {state.UTILISATEUR.suivies.length}personnes suivie(s)
      </div>
    </div>
  );
};

export default CadreDetail;
