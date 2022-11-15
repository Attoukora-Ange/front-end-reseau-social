import React, { useContext } from "react";
import Haut from "./Haut";
import Vue from "./Vue";
import "../../assets/css/milieu.css";
import Post from "./Post";
import Profil from "../profil/Profil";
import ProfilUtilisateur from "../utilisateur/Utilisateur";
import ProfilModifier from "../profil/ProfilModifier";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const Milieu = () => {
  const { stateVisible } = useContext(VisibleContexte);
  const { state } = useContext(BASE_CONTEXTE);
  return (
    <div className="milieu">
  
      {stateVisible.VUE_CADRE_HAUT && <Haut />}
      {stateVisible.VUE_MES_VUE && <Vue />}
      {stateVisible.VUE_MON_PROFIL && <Profil />}
      {stateVisible.VUE_ACTUALITE &&
        state.LISTE_POSTER?.map((post) =>{
          for (let i = 0; i < state.UTILISATEUR.suivies.length; i++) {
            if(post.posterId === state.UTILISATEUR.suivies[i] || post.posterId === state.UTILISATEUR._id)
            return(
             <div key={post._id}>
            <Post post={post} />
          </div>
          )
          }
          
        } 
         
        )}
      {stateVisible.VUE_PROFIL_UTILISATEUR && <ProfilUtilisateur />}
      {stateVisible.VUE_MODIFIER_PROFIL && <ProfilModifier />}

    </div>
  );
};

export default Milieu;
