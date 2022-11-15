import { AFFICHER_ID_UTILISATEUR, AFFICHER_LISTE_UTILISATEUR, AFFICHER_POSTER, AFFICHER_POSTER_MESSAGE, AFFICHER_UTILISATEUR } from "./Action";

export const Reducer = (state, action) => {
    switch (action.type) {
        case AFFICHER_ID_UTILISATEUR:
      return { ...state, ID: action.payload };
        case AFFICHER_UTILISATEUR:
      return { ...state, UTILISATEUR: action.payload };
        case AFFICHER_LISTE_UTILISATEUR:
      return { ...state, LISTE_UTILISATEUR: action.payload };
        case AFFICHER_POSTER:
      return { ...state, LISTE_POSTER: action.payload };
      //   case AFFICHER_POSTER_MESSAGE:
      // return { ...state, MESSAGE: {...MESSAGE, MESSAGES: action.payload} };
      default:
        return state;
    }
  };
  