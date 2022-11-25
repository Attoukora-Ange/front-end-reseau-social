import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import LOGIN from "../../assets/images/loginPersonne.png";
import {
  AFFICHER_ACTUALITE,
  AFFICHER_CADRE_HAUT,
  AFFICHER_CONVERSATION,
  AFFICHER_LISTE_ABONNE,
  AFFICHER_LISTE_AMIS,
  AFFICHER_LISTE_SUIVIE,
  AFFICHER_MODIF_MOT_PASSE,
  AFFICHER_MON_PROFIL,
  AFFICHER_PROFIL_MODIFIER_PROFIL,
  AFFICHER_PROFIL_UTILISATEUR,
  AFFICHER_RECHERCHE_PSEUDO,
  AFFICHER_VUE,
} from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import axios from "axios";
import { AFFICHER_ID_UTILISATEUR, AFFICHER_POSTER } from "../../reducer/Action";

const PosteUtilisateur = ({ post }) => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state, dispacth } = useContext(BASE_CONTEXTE);

  const handlePosteUtilisateur = (id) => {
    dispacth({ type: AFFICHER_ID_UTILISATEUR, payload: id });
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });

    dispacthVisible({ type: AFFICHER_VUE, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT, payload: false });
    dispacthVisible({ type: AFFICHER_PROFIL_MODIFIER_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_MON_PROFIL, payload: false });
    dispacthVisible({ type: AFFICHER_ACTUALITE, payload: false });
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    dispacthVisible({ type: AFFICHER_PROFIL_UTILISATEUR, payload: true });
  };

  const handleSuppPost = (id) => {
    const URL_SUP = `${process.env.REACT_APP_URL}/api/poster/delete/${id}`;
    axios
      .delete(URL_SUP, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispacth({
            type: AFFICHER_POSTER,
            payload: response.data.AFFICHER_POSTE,
          });
          // return ;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {state.LISTE_UTILISATEUR?.map((user) => {
        if (user._id === post.posterId)
          return (
            <div key={user._id} className="post_contenue_principale">
              <div className="post_contenue">
                <div className="post_photo_utilisateur">
                  <img
                    src={
                      user?.photo_profil
                        ? `${user.photo_profil}`
                        : LOGIN
                    }
                    alt="utilisateur icone"
                  />
                </div>
                <div
                  className="post_pseudo_utilisateur"
                  onClick={() => handlePosteUtilisateur(user._id)}
                >
                  {user.pseudo}
                </div>
              </div>
              <div className="post_fermer">
                {state.UTILISATEUR._id === post.posterId && (
                  <IoMdClose onClick={() => handleSuppPost(post._id)} />
                )}
              </div>
            </div>
          );
      })}
    </>
  );
};

export default PosteUtilisateur;
