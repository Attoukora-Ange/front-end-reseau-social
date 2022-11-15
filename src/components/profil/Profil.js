import React from "react";
import "../../assets/css/profil.css";
import CadreBouton from "./CadreBouton";
// import CadreDetail from "./CadreDetail";
import CadreIdent from "./CadreIdent";
import CadrePhoto from "./CadrePhoto";
const Profil = () => {
  
  return (
    <div className="profil">
      <div className="profil_principal">
        <div className="en_tete_profil">Mon profil personnel</div>
        <div className="profil_utilisateur">
          <CadrePhoto />
          <CadreIdent />
          {/* <CadreDetail /> */}
          <CadreBouton/>
        </div>
      </div>
    </div>
  );
};

export default Profil;
