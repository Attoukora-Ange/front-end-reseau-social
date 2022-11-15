import {
  AFFICHER_ACTUALITE,
  AFFICHER_CADRE_HAUT,
  AFFICHER_CADRE_HAUT_PHOTO,
  AFFICHER_CADRE_HAUT_TEXTE,
  AFFICHER_CADRE_HAUT_TEXTE_CONTENUE,
  AFFICHER_CADRE_HAUT_VIDEO,
  AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
  AFFICHER_CARDRE_HAUT_INPUT_TEXTE,
  AFFICHER_CONVERSATION,
  AFFICHER_LISTE_ABONNE,
  AFFICHER_LISTE_AMIS,
  AFFICHER_LISTE_SUIVIE,
  AFFICHER_MODIF_MOT_PASSE,
  AFFICHER_MON_PROFIL,
  AFFICHER_PHOTO_POST,
  AFFICHER_POSTE_COMMENTAIRE,
  AFFICHER_POST_PHOTO_POSTER,
  AFFICHER_POST_VIDEO_POSTER,
  AFFICHER_PROFIL_MODIFIER_PROFIL,
  AFFICHER_PROFIL_UTILISATEUR,
  AFFICHER_RECHERCHE_PSEUDO,
  AFFICHER_VUE,
  AFFICHER_VUE_CADRE_COMPLET,
} from "./Action";

export const Reducer = (state, action) => {
  switch (action.type) {
    case AFFICHER_VUE:
      return { ...state, VUE_MES_VUE: action.payload };
    case AFFICHER_CADRE_HAUT:
      return { ...state, VUE_CADRE_HAUT: action.payload };
    case AFFICHER_CADRE_HAUT_TEXTE:
      return { ...state, VUE_TEXTE_CADRE_HAUT: action.payload };
    case AFFICHER_CADRE_HAUT_TEXTE_CONTENUE:
      return { ...state, TEXTE_CADRE_HAUT_CONTENUE: action.payload };
    case AFFICHER_CADRE_HAUT_PHOTO:
      return { ...state, VUE_PHOTO_CADRE_HAUT: action.payload };
    case AFFICHER_CARDRE_HAUT_INPUT_TEXTE:
      return { ...state, VUE_TEXTE_CADRE_INPUT: action.payload };
    case AFFICHER_VUE_CADRE_COMPLET:
      return { ...state, VUE_COMPLET: action.payload };
    case AFFICHER_PHOTO_POST:
      return { ...state, VUE_PHOTO_POST: action.payload };
    case AFFICHER_CADRE_HAUT_VIDEO:
      return { ...state, VUE_VIDEO_CADRE_HAUT: action.payload };
    case AFFICHER_CADRE_HAUT_VIDEO_CONTENUE:
      return { ...state, CONTENUE_VIDEO_CADRE_HAUT: action.payload };
    case AFFICHER_MON_PROFIL:
      return { ...state, VUE_MON_PROFIL: action.payload };
    case AFFICHER_ACTUALITE:
      return { ...state, VUE_ACTUALITE: action.payload };
    case AFFICHER_CONVERSATION:
      return { ...state, VUE_CONERSATION: action.payload };
    case AFFICHER_LISTE_AMIS:
      return { ...state, VUE_LISTE_AMIS: action.payload };
    case AFFICHER_LISTE_ABONNE:
      return { ...state, VUE_LISTE_ABONNE: action.payload };
    case AFFICHER_LISTE_SUIVIE:
      return { ...state, VUE_LISTE_SUIVIE: action.payload };
    case AFFICHER_MODIF_MOT_PASSE:
      return { ...state, VUE_MOT_PASSE: action.payload };
    case AFFICHER_PROFIL_UTILISATEUR:
      return { ...state, VUE_PROFIL_UTILISATEUR: action.payload };
    case AFFICHER_PROFIL_MODIFIER_PROFIL:
      return { ...state, VUE_MODIFIER_PROFIL: action.payload };
    case AFFICHER_POSTE_COMMENTAIRE:
      return { ...state, VUE_POSTE_COMMENTAIRE: action.payload };
    case AFFICHER_RECHERCHE_PSEUDO:
      return { ...state, VUE_RECHERCHE_PSEUDO: action.payload };
    case AFFICHER_POST_PHOTO_POSTER:
      return { ...state, POSTER_PHOTO: action.payload };
    case AFFICHER_POST_VIDEO_POSTER:
      return { ...state, POSTER_VIDEO: action.payload };

    default:
      return state;
  }
};
