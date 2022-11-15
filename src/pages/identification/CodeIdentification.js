import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/codeIdentification.css";
import Imagecode from "../../assets/images/imagePiq.jpg";
const Codecode = () => {
    return (
        <div className="code_principal">
          <div className="conteneur_code_principal">
            <div className="conteneur_code_principal_gauche">
              <div className="conteneur_code_principal_gauche_image">
                <img src={Imagecode} alt="logo du site" />
              </div>
              <div className="conteneur_code_principal_gauche_texte">
                Le site de rencontre de la 36e promotion des pharmaciens de Côte
                d'Ivoire
              </div>
            </div>
            <div className="conteneur_code_principal_droit">
              <div className="champs_site_nom">Pharma 36</div>
              <div className="formulaire_champs">
                <form action="">
                  <div className="champs_en_tete">
                    <div className="titre">Code d'identification</div>
                  </div>
                  <div className="champs_a_saisir">
                    <div className="champs_code">
                      <div className="code">Code</div>
                      <input type="number" placeholder="Enter votre code" />
                    </div>
                    <div className="champs_boutton">
                      <Link to="/connexion" className="boutton_valider annuler">
                        Annuler
                      </Link>
                      <Link to="" className="boutton_valider">
                        Chercher
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Codecode;