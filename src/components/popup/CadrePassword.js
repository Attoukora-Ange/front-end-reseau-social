import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AFFICHER_UTILISATEUR } from '../../reducer/Action';
import { BASE_CONTEXTE } from '../../reducer/Contexte';

const CadrePassword = ({handleClose}) => {

  const { dispacth } = useContext(BASE_CONTEXTE);
  const [ancien_password, setAncien_password] = useState("");
  const [nouveau_password, setNouveau_password] = useState("");
  const [conf_password, setConf_password] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const URL_JWT = `${process.env.REACT_APP_URL}/api/modifier/profil/password`;
    axios
      .put(
        URL_JWT,
        { ancien_password, nouveau_password, conf_password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {     
          setAncien_password("");
          setNouveau_password("");
          setConf_password("");
          toast('VOTRE MOT DE PASSE A BIEN ETE MODIFIE...');
          dispacth({type: AFFICHER_UTILISATEUR, payload : response.data.NOUVEAU_CONNECTE})
          handleClose()
          // window.location = '/';
          // UtilId.setId(response.data.NOUVEAU_CONNECTE)
          return ;
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 400)
          return toast(
            err.response.data.erreur_utilisateur_connect ||
              err.response.data.password_erreur
          );
        if (err.response.status === 401) {
          return err.response.data.erreur_validation.forEach((element) => {
            toast(element.msg);
          });
        }
      });
  };

    return (
        <div className="conteneur_inscription_principal_droit">
          <ToastContainer />
          <div className="formulaire_champs">
            <form onSubmit={handleSubmit}>
              <div className="champs_en_tete">
                <div className="titre">Mot de passe</div>
                <div className="sous_menu">Modifier votre mot de passe, c'est rapide et facile.</div>
              </div>
              <div className="champs_a_saisir">
              
                <div className="champs_password">
                  <div className="password">Ancien mot de passe</div>
                  <input
                    type="password"
                    placeholder="Entrer votre ancien mot de passe"
                    autoComplete="off"
                    value={ancien_password}
                    onChange={(e)=>setAncien_password(e.target.value)}
                  />
                </div>
                <div className="champs_password_confirme">
                  <div className="password_confirme">Nouveau mot de passe</div>
                  <input
                    type="password"
                    placeholder="Veuillez entrer votre nouveau mot de passe"
                    autoComplete="off"
                    value={nouveau_password}
                    onChange={(e)=>setNouveau_password(e.target.value)}
                  />
                </div>
                <div className="champs_password_confirme">
                  <div className="password_confirme">Confirmer nouveau mot de passe</div>
                  <input
                    type="password"
                    placeholder="Veuillez confirmer votre nouveau mot de passe"
                    autoComplete="off"
                    value={conf_password}
                    onChange={(e)=>setConf_password(e.target.value)}
                  />
                </div>
                <div className="champs_boutton">
                  <button className="boutton_valider">S'inscrire</button>
                </div>
              </div>
            </form>
          </div>
         
        </div>
    );
};

export default CadrePassword;