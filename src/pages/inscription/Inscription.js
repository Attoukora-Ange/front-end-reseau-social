import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/inscription.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageConnexion from "../../assets/images/connexion.jpg";

const Inscription = () => {
  const [pseudo, setPseudo] = useState("");
  const [naissance, setNaissance] = useState("");
  const [sexe, setSexe] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConf_Password] = useState("");
  const [success_inscription, setSucces_inscription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const option = {theme: 'dark' ,draggable:false}
    const URL_JWT = `${process.env.REACT_APP_URL}/api/inscription`;
    axios
      .post(
        URL_JWT,
        { pseudo, naissance, sexe, email, password, conf_password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setPseudo("");
          setNaissance("");
          setSexe("");
          setEmail("");
          setPassword("");
          setConf_Password("");
          toast(response.data.NOUVEAU_INSCRIT);
          setSucces_inscription(response.data.NOUVEAU_INSCRIT);
          setTimeout(()=>{
            window.location = '/connexion'
          }, 5000)
          return ;
        }
      })
      .catch((err) => {
        setSucces_inscription("")
        if (err.response.status === 400)
          return toast(
            err.response.data.password_erreur ||
              err.response.data.erreur_chercher_utilisateur, option
          );
        if (err.response.status === 401) {
          return err.response.data.erreur_validation.forEach((element) => {
            toast(element.msg, option);
          });
        }
      });
  };
  return (
    <div className="inscription_principal">
      <div className="conteneur_inscription_principal">
        <div className="conteneur_inscription_principal_gauche">
          <div className="conteneur_inscription_principal_gauche_image">
            <img src={ImageConnexion} alt="logo du site" />
          </div>
          <div className="conteneur_inscription_principal_gauche_texte">
            Bienvenue sur le site de rencontre de la 36e promotion des
            pharmaciens de Côte d'Ivoire
          </div>
        </div>
        <div className="conteneur_inscription_principal_droit">
          <div className="champs_site_nom">Pharma 36</div>
          <div className="formulaire_champs">
            <form onSubmit={handleSubmit}>
              <div className="champs_en_tete">
                <div className="titre">Créer un compte</div>

                <div className="sous_menu">C'est rapide et facile.</div>

                {success_inscription && (
                  <div className="success">{success_inscription}</div>
                )}
                <ToastContainer />
              </div>
              <div className="champs_a_saisir">
                <div className="champs_pseudo">
                  <div className="pseudo">Pseudo</div>
                  <input
                    type="text"
                    placeholder="Entrer votre pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                  />
                </div>
                <div className="champs_date">
                  <div className="date">Date de naissance</div>
                  <input
                    type="date"
                    value={naissance}
                    onChange={(e) => setNaissance(e.target.value)}
                  />
                </div>
                <div className="champs_sexe">
                  <div className="sexe">Sexe</div>
                  <div className="champs_sexe_contenue">
                    <div className="sexe_masculin">
                      <div className="homme">Homme</div>
                      <div className="sexe_masculin_radio">
                        <input
                          type="radio"
                          name="sexe"
                          value={"homme"}
                          id="homme"
                          onChange={(e) => setSexe(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="sexe_feminin">
                      <div className="femme">Femme</div>
                      <div className="sexe_feminin_radio">
                        <input
                          type="radio"
                          name="sexe"
                          value="femme"
                          id="femme"
                          onChange={(e) => setSexe(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="champs_email">
                  <div className="email">Email</div>
                  <input
                    type="email"
                    placeholder="Enter votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="champs_password">
                  <div className="password">Mot de passe</div>
                  <input
                    type="password"
                    placeholder="Entrer votre mot de passe"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="champs_password_confirme">
                  <div className="password_confirme">Confirmation</div>
                  <input
                    type="password"
                    placeholder="Veuillez confirmer votre mot de passe"
                    autoComplete="off"
                    value={conf_password}
                    onChange={(e) => setConf_Password(e.target.value)}
                  />
                </div>
                <div className="champs_boutton">
                  <button className="boutton_valider">S'inscrire</button>
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

export default Inscription;
