import React, { useContext } from "react";
import "../../assets/css/droit.css";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import EnLigne from "./EnLigne";
import Suggestion from "./Suggestion";

const Droit = () => {
  const { state } = useContext(BASE_CONTEXTE);
  return (
    <div className="droit">
      <div className="liste_amis_texte">Amis en ligne (0)</div>
      <div className="droit_principal_ligne">
        <EnLigne />
      </div>
      <div className="suggestion_amis_texte">Suggestion d'amis ({state.UTILISATEUR.suggestions.length})</div>
      <div  className="suggestion_haut">

      {
        // state.LISTE_UTILISATEUR &&
        state.LISTE_UTILISATEUR?.map((user) => {
          for (let i = 0; i < state.UTILISATEUR.suggestions.length; i++) {
            if (user._id === state.UTILISATEUR.suggestions[i])
              return (
                <div key={user._id} className="suggestion">
                  <Suggestion suggestion={user} />
                </div>
              );
            }
          })
        }
      </div>
    </div>
  );
};

export default Droit;
