import React from 'react';
import { Link } from "react-router-dom";
import "../../assets/css/modifierIdentification.css";
import ImageConnexion from "../../assets/images/connexion.jpg";
const ModfierIdendification = () => {
    return (
        <div className="modifier_identification_principal">
          <div className="conteneur_modifier_identification_principal">
            <div className="conteneur_modifier_identification_principal_gauche">
              <div className="conteneur_modifier_identification_principal_gauche_image">
                <img src={ImageConnexion} alt="logo du site" />
              </div>
              <div className="conteneur_modifier_identification_principal_gauche_texte">
                Bienvenue sur le site de rencontre de la 36e promotion des
                pharmaciens de Côte d'Ivoire
              </div>
            </div>
            <div className="conteneur_modifier_identification_principal_droit">
              <div className="champs_site_nom">Pharma 36</div>
              <div className="formulaire_champs">
                <form action="">
                  <div className="champs_en_tete">
                    <div className="titre">Récuperer votre compte</div>
                    <div className="sous_menu">C'est rapide et facile.</div>
                  </div>
                  <div className="champs_a_saisir">
                    <div className="champs_password">
                      <div className="password">Nouveau mot de passe</div>
                      <input
                        type="password"
                        placeholder="Entrer votre nouveau mot de passe"
                      />
                    </div>
                    <div className="champs_password_confirme">
                      <div className="password_confirme">Confirmation</div>
                      <input
                        type="password"
                        placeholder="Veuillez confirmer votre nouveau mot de passe"
                      />
                    </div>
                    <div className="champs_boutton">
                      <button className="boutton_valider">Modifier</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="texte_redirection">
                <Link to="/connexion">Vous avez déja un compte ?</Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ModfierIdendification;