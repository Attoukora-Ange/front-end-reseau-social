import React, { useContext } from "react";
import LogoPharma from '../../assets/images/pharmacieLogo.png'
import { AFFICHER_ACTUALITE, AFFICHER_CADRE_HAUT, AFFICHER_CADRE_HAUT_PHOTO, AFFICHER_CADRE_HAUT_TEXTE_CONTENUE, AFFICHER_CADRE_HAUT_VIDEO, AFFICHER_CADRE_HAUT_VIDEO_CONTENUE, AFFICHER_CONVERSATION, AFFICHER_LISTE_ABONNE, AFFICHER_LISTE_AMIS, AFFICHER_LISTE_SUIVIE, AFFICHER_MODIF_MOT_PASSE, AFFICHER_MON_PROFIL, AFFICHER_PHOTO_POST, AFFICHER_PROFIL_MODIFIER_PROFIL, AFFICHER_PROFIL_UTILISATEUR, AFFICHER_RECHERCHE_PSEUDO, AFFICHER_VUE, AFFICHER_VUE_CADRE_COMPLET } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";

const Logo = () => {
  const {dispacthVisible} = useContext(VisibleContexte)
  
  const handleLogo = ()=>{
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });

    dispacthVisible({type: AFFICHER_CONVERSATION, payload: false})
    dispacthVisible({type: AFFICHER_LISTE_ABONNE, payload: false})
    dispacthVisible({type: AFFICHER_LISTE_SUIVIE, payload: false})
    dispacthVisible({type: AFFICHER_LISTE_AMIS, payload: false})
    dispacthVisible({type: AFFICHER_MODIF_MOT_PASSE, payload: false})

    dispacthVisible({type: AFFICHER_VUE, payload: false})
    dispacthVisible({type: AFFICHER_CADRE_HAUT, payload: true})
    dispacthVisible({type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: false})
    dispacthVisible({type: AFFICHER_PROFIL_UTILISATEUR, payload: false})
    dispacthVisible({type: AFFICHER_MON_PROFIL, payload: false})
    dispacthVisible({type: AFFICHER_ACTUALITE, payload: true})
  
    
   
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
    window.location = '/'
  }
  return (
    <div className="logo_texte">
      <div className="logo">
        <img src={LogoPharma} alt="logo pharma 36" />
      </div>
      <div className="texte" onClick={handleLogo}>Pharma 36</div>
    </div>
  );
};

export default Logo;
