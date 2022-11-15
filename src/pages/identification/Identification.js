import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/indentification.css";
import Imageidentification from "../../assets/images/imagePiq.jpg";
const Identification = () => {
  return (
    <div className="identification_principal">
      <div className="conteneur_identification_principal">
        <div className="conteneur_identification_principal_gauche">
          <div className="conteneur_identification_principal_gauche_image">
            <img src={Imageidentification} alt="logo du site" />
          </div>
          <div className="conteneur_identification_principal_gauche_texte">
            Le site de rencontre de la 36e promotion des pharmaciens de Côte
            d'Ivoire
          </div>
        </div>
        <div className="conteneur_identification_principal_droit">
          <div className="champs_site_nom">Pharma 36</div>
          <div className="formulaire_champs">
            <form action="">
              <div className="champs_en_tete">
                <div className="titre">Chercher votre compte</div>
              </div>
              <div className="champs_a_saisir">
                <div className="champs_email">
                  <div className="email">Email</div>
                  <input type="email" placeholder="Enter votre email" />
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

export default Identification;
