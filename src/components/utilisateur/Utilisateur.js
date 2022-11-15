import React, { useContext } from "react";
import "../../assets/css/profil.css";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import CadreBouton from "./CadreBouton";
import CadreUtilDetail from "./CadreUtilDetail";
import CadreUtilIdent from "./CadreUtilIdent";
import CadreUtilPhoto from "./CadreUtilPhoto";
const ProfilUtilisateur = () => {
  const { state } = useContext(BASE_CONTEXTE);
  return (
    <div className="profil">
      {state.LISTE_UTILISATEUR.map((user) => {
        if (user._id === state.ID) {
          return (
            <div key={user._id} className="profil_principal">
              <div className="en_tete_profil">Profil de {user.pseudo}</div>
              <div className="profil_utilisateur">
                <CadreUtilPhoto user= {user} />
                <CadreUtilIdent user= {user} />
                <CadreUtilDetail user= {user}/>
                {
                  (user._id !== state.UTILISATEUR._id) &&
                  <CadreBouton user= {user}/>
                }
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProfilUtilisateur;
