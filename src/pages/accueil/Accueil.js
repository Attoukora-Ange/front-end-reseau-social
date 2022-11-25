import axios from "axios";
import React, { useContext, useEffect } from "react";
import Contenue from "../../components/Contenue";
import Navigation from "../../components/Navigation";
import Abonnes from "../../components/popup/Abonnes";
import Amis from "../../components/popup/Amis";
import ModPasse from "../../components/popup/ModPasse";
import Suivie from "../../components/popup/Suivies";
import {
  AFFICHER_LISTE_UTILISATEUR,
  AFFICHER_POSTER,
  AFFICHER_UTILISATEUR,
} from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import { VisibleContexte } from "../../reducerVue/Contexte";
import socketIO from 'socket.io-client';
const socket = socketIO('http://localhost:5000');


const Accueil = () => {
  const { stateVisible } = useContext(VisibleContexte);
  const { state, dispacth } = useContext(BASE_CONTEXTE);
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
          return dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEU_CONNTECT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // return;
  }, []);
  useEffect(() => {
    const URL_JWT = `${process.env.REACT_APP_URL}/api/liste/utilisateur`;
    axios
      .get(URL_JWT, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return dispacth({
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // return;
  }, []);
  useEffect(() => {
    const URL_POST = `${process.env.REACT_APP_URL}/api/poster`;
    axios
      .get(URL_POST, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return dispacth({
            type: AFFICHER_POSTER,
            payload: response.data.LISTE_POSTER,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // return;
  }, [stateVisible]);

  return (
    <div className="accueil">
      {state.UTILISATEUR && (
        <>
          <Navigation />
          <Contenue />
        </>
      )}

      {stateVisible.VUE_LISTE_AMIS && <Amis />}
      {stateVisible.VUE_LISTE_ABONNE && <Abonnes />}
      {stateVisible.VUE_LISTE_SUIVIE && <Suivie />}
      {stateVisible.VUE_MOT_PASSE && <ModPasse />}
    </div>
  );
};

export default Accueil;
