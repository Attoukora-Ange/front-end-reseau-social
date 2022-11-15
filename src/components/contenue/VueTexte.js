import React, { useContext } from "react";
import { VisibleContexte } from "../../reducerVue/Contexte";

const VueTexte = () => {
  const { stateVisible } = useContext(VisibleContexte);
  return (
    <div className="vue_contenue_texte">
      <div className="texte_input">
        {stateVisible.TEXTE_CADRE_HAUT_CONTENUE}
      </div>
    </div>
  );
};

export default VueTexte;
