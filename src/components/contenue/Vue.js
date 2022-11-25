import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/vue.css";
import VueTexte from "./VueTexte";
import VueImage from "./VueImage";
import VueVideo from "./VueVideo";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { VisibleContexte } from "../../reducerVue/Contexte";
import {
  AFFICHER_CADRE_HAUT_PHOTO,
  AFFICHER_CADRE_HAUT_TEXTE_CONTENUE,
  AFFICHER_CADRE_HAUT_VIDEO,
  AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
  AFFICHER_PHOTO_POST,
  AFFICHER_POST_PHOTO_POSTER,
  AFFICHER_POST_VIDEO_POSTER,
  AFFICHER_RECHERCHE_PSEUDO,
  AFFICHER_VUE,
  AFFICHER_VUE_CADRE_COMPLET,
} from "../../reducerVue/Action";
import InputTexte from "./InputTexte";
import axios from "axios";
import { AFFICHER_POSTER } from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const Vue = () => {
  const { stateVisible, dispacthVisible } = useContext(VisibleContexte);
  const { dispacth} = useContext(BASE_CONTEXTE);
 
  const handleClose = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_PHOTO, payload: false });
    dispacthVisible({ type: AFFICHER_VUE_CADRE_COMPLET, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_VIDEO, payload: false });
    dispacthVisible({ type: AFFICHER_PHOTO_POST, payload: null });
    dispacthVisible({
      type: AFFICHER_CADRE_HAUT_TEXTE_CONTENUE,
      payload: null,
    });
    dispacthVisible({
      type: AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
      payload: null,
    });
    dispacthVisible({
      type: AFFICHER_POST_VIDEO_POSTER,
      payload: false,
    });
    dispacthVisible({
      type: AFFICHER_POST_PHOTO_POSTER,
      payload: false,
    });

  };

  const handleEnvoyer=  (e) => {
    const option = {theme: 'dark', draggable:false}
    e.preventDefault()

    const FD = new FormData()
    FD.append('post_texte', stateVisible.TEXTE_CADRE_HAUT_CONTENUE)
    console.log(stateVisible.POSTER_VIDEO)
      
    if(stateVisible.VUE_VIDEO_CADRE_HAUT){
    FD.append('post', stateVisible.POSTER_VIDEO )
   }
   
    if(stateVisible.POSTER_PHOTO ){
       FD.append('post', stateVisible.POSTER_PHOTO )
    }
    
    const URL_COM = `${process.env.REACT_APP_URL}/api/poster`;

    if(FD.get("post")?.size > 3000000) return toast(`La taille ${FD.get("post").size} oct du fichier doit être inferieur à 3000000 oct`, option)
   axios
      .post(
        URL_COM,
        {
          post_texte: FD.get("post_texte"),
          post: FD.get("post"),
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
            type: AFFICHER_POSTER,
            payload: response.data.POSTER_AFFICHE_UTILISATEURS,
          });
          handleClose();
        //  return;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      {stateVisible.VUE_TEXTE_CADRE_INPUT && <InputTexte />}
      {(stateVisible.TEXTE_CADRE_HAUT_CONTENUE || stateVisible.VUE_COMPLET ) && (
        <div className="vue">
          <ToastContainer/>
          {stateVisible.VUE_TEXTE_CADRE_HAUT && (
            <IoMdClose className="vue_fermer" onClick={handleClose} />
          )}
          {stateVisible.TEXTE_CADRE_HAUT_CONTENUE && <VueTexte />}
          {stateVisible.VUE_PHOTO_CADRE_HAUT && <VueImage />}
          {stateVisible.VUE_VIDEO_CADRE_HAUT && <VueVideo />}
          {stateVisible.VUE_TEXTE_CADRE_HAUT && (
            <RiSendPlaneLine className="vue_envoyer" onClick={handleEnvoyer}/>
          )}
        </div>
      )}
    </>
  );
};

export default Vue;
