import React, { useContext, useEffect, useRef, useState } from "react";
import "../../assets/css/profil.css";
import { AFFICHER_RECHERCHE_PSEUDO } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import LOGIN from "../../assets/images/loginPersonne.png";
import COUVERTURE from "../../assets/images/couverture.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import { AFFICHER_LISTE_UTILISATEUR, AFFICHER_UTILISATEUR } from "../../reducer/Action";
const ProfilModifier = () => {
  const { state, dispacth } = useContext(BASE_CONTEXTE);
  const { dispacthVisible } = useContext(VisibleContexte);
  const [photoCouverture, setPhotoCouverture] = useState();
  const [photoProfil, setPhotoProfil] = useState();
  const photo_couverture_ref = useRef();
  const photo_profil_ref = useRef();

  const [pseudo, setPseudo] = useState("");
  const [naissance, setNaissance] = useState("");
  const [email, setEmail] = useState("");
  const [sexe, setSexe] = useState("");
  const [is, setIs] = useState(false);

  useEffect(() => {
    const URL_JWT = `${process.env.REACT_APP_URL}/api/utilisateur/profil`;
    axios
      .get(URL_JWT, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEU_CONNTECT,
          });
          setPseudo(state.UTILISATEUR.pseudo);
          setNaissance(state.UTILISATEUR.naissance);
          setEmail(state.UTILISATEUR.email);

          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }, [is, setIs]);
  

  const handleClickPhotoCouverture = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    photo_couverture_ref.current.click();
  };
  const handleClickPhotoProfil = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    photo_profil_ref.current.click();
  };
  const handleChangePhotoCouverture = async (e) => {
    const PHOTO_COUVERTURE = e.target.files[0];
    const PHOTO_COUVERTURE_URL_NAME = URL.createObjectURL(PHOTO_COUVERTURE);
    setPhotoCouverture(PHOTO_COUVERTURE_URL_NAME);

    const URL_COUVERTURE = `${process.env.REACT_APP_URL}/api/modifier/photo/couverture`;
    const fd = new FormData();
    fd.append("couverture", PHOTO_COUVERTURE);
    await axios
      .patch(
        URL_COUVERTURE,
        {
          couverture: fd.get("couverture"),
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEUR,
          });
          setIs(!is);
        }
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangePhotoProfil = async (e) => {
    const PHOTO_PROFIL = e.target.files[0];
    const PHOTO_PROFIL_URL_NAME = URL.createObjectURL(PHOTO_PROFIL);
    setPhotoProfil(PHOTO_PROFIL_URL_NAME);

    const URL_PROFIL = `${process.env.REACT_APP_URL}/api/modifier/photo/profil`;
    const fd = new FormData();
    fd.append("profil", PHOTO_PROFIL);
    await axios
      .patch(
        URL_PROFIL,
        {
          profil: fd.get("profil"),
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEUR,
          });
          setIs(!is);
        }
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFocus = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL_MOD = `${process.env.REACT_APP_URL}/api/modifier/profil/identifiant`;
    axios
      .put(
        URL_MOD,
        { pseudo, naissance, sexe, email },
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
          dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEUR,
          });
          dispacth({
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
          toast('VOS INFORMATIONS ONT BIEN ETE ENREGISTRE...')
          setIs(!is);
          return;
        }
      })
      .catch((err) => {
        if (err.response.status === 400)
          return toast(
            err.response.data.erreur_chercher_utilisateur ||
              err.response.data.erreur_chercher_utilisateur
          );
        if (err.response.status === 401) {
          return err.response.data.erreur_validation.forEach((element) => {
            toast(element.msg);
          });
        }
      });
  };

  return (
    <div className="profil modifier">
      <div className="profil_principal">
        <div className="en_tete_profil">Modification de mon profil</div>
        <div className="profil_utilisateur">
          <div className="profil_utilisateur_photo">
            <div className="image_couvrture modifier">
              <input
                ref={photo_couverture_ref}
                type="file"
                name=""
                id=""
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleChangePhotoCouverture}
              />
              <img
                src={
                  photoCouverture
                    ? photoCouverture
                    : state.UTILISATEUR.photo_couverture
                    ? `${state.UTILISATEUR.photo_couverture}`
                    : COUVERTURE
                }
                title="Photo de couverture"
                alt="utilisateur couverture"
                onClick={handleClickPhotoCouverture}
              />
            </div>
            <div className="image_profil modifier">
              <input
                ref={photo_profil_ref}
                type="file"
                name=""
                id=""
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleChangePhotoProfil}
              />
              <img
                src={
                  photoProfil
                    ? photoProfil
                    : state.UTILISATEUR.photo_profil
                    ? `${state.UTILISATEUR.photo_profil}`
                    : LOGIN
                }
                title="Photo de profil"
                alt="utilisateur profil"
                onClick={handleClickPhotoProfil}
              />
            </div>
          </div>
          <div className="conteneur_inscription_principal_droit">
            <div className="formulaire_champs">
              <form onSubmit={handleSubmit}>
                <ToastContainer />
                <div className="champs_a_saisir">
                  <div className="champs_pseudo">
                    <div className="pseudo">Pseudo</div>
                    <input
                      type="text"
                      placeholder="Entrer votre pseudo"
                      onFocus={handleFocus}
                      value={pseudo}
                      onChange={(e) => setPseudo(e.target.value)}
                    />
                  </div>
                  <div className="champs_date">
                    <div className="date">Date de naissance</div>
                    <input
                      type="date"
                      value={naissance}
                      onFocus={handleFocus}
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
                            id="homme"
                            value={"homme"}
                            onChange={(e) => setSexe(e.target.value)}
                            onFocus={handleFocus}
                            defaultChecked={state.UTILISATEUR.sexe === "homme"}
                          />
                        </div>
                      </div>
                      <div className="sexe_feminin">
                        <div className="femme">Femme</div>
                        <div className="sexe_feminin_radio">
                          <input
                            type="radio"
                            name="sexe"
                            value={"femme"}
                            id="femme"
                            onChange={(e) => setSexe(e.target.value)}
                            onFocus={handleFocus}
                            defaultChecked={state.UTILISATEUR.sexe === "femme"}
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
                      onFocus={handleFocus}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="champs_boutton">
                    <button className="boutton_valider">Modifier</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilModifier;
