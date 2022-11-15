import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/connexion.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageConnexion from "../../assets/images/imageFormeSport.jpg";
import axios from "axios";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import { AFFICHER_UTILISATEUR } from "../../reducer/Action";
const Connexion = () => {
  const { dispacth } = useContext(BASE_CONTEXTE);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const option = {theme: 'dark' ,draggable:false}
    const URL_JWT = `${process.env.REACT_APP_URL}/api/connexion`;
    axios
      .post(
        URL_JWT,
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {     
          setEmail("");
          setPassword("");
          toast('VOUS ETES BIEN CONNECTE...');
          dispacth({type: AFFICHER_UTILISATEUR, payload : response.data.NOUVEAU_CONNECTE})
          window.location = '/';
          return ;
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 400)
          return toast(
            err.response.data.erreur_chercher_email ||
              err.response.data.erreur_chercher_password
          , option);
        if (err.response.status === 401) {
          return err.response.data.erreur_validation.forEach((element) => {
            toast(element.msg, option);
          });
        }
      });
  };

  return (
    <div className="connexion_principal">
      <div className="conteneur_connexion_principal">
        <div className="conteneur_connexion_principal_gauche">
          <div className="conteneur_connexion_principal_gauche_image">
            <img src={ImageConnexion} alt="logo du site" />
          </div>
          <div className="conteneur_connexion_principal_gauche_texte">
            Le site de rencontre de la 36e promotion des pharmaciens de Côte
            d'Ivoire
          </div>
        </div>
        <div className="conteneur_connexion_principal_droit">
          <div className="champs_site_nom">Pharma 36</div>
          <div className="formulaire_champs">
            <form onSubmit={handleSubmit}>
              <div className="champs_en_tete">
                <div className="titre">Connectez vous</div>
                <div className="sous_menu">C'est rapide et simple.</div>
                <ToastContainer />
              </div>
              <div className="champs_a_saisir">
                <div className="champs_email">
                  <div className="email">Email</div>
                  <input type="email" placeholder="Enter votre email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="champs_password">
                  <div className="password">Mot de passe</div>
                  <input
                    type="password"
                    placeholder="Entrer votre mot de passe"
                    autoComplete="off"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="champs_boutton">
                  <button className="boutton_valider">Se connecter</button>
                </div>
              </div>
            </form>
          </div>
          <div className="texte_identification">
            <Link to="/compte/identification">
              Information sur le compte oublié
            </Link>
          </div>
          <div className="texte_redirection">
            <Link to="/inscription">Créer un nouveau compte</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
