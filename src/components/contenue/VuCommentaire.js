import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
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
  AFFICHER_VUE,
} from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import LOGIN from "../../assets/images/loginPersonne.png";
import axios from "axios";
import { AFFICHER_ID_UTILISATEUR, AFFICHER_POSTER } from "../../reducer/Action";
const VuCommentaire = ({ comment }) => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state, dispacth } = useContext(BASE_CONTEXTE);
  const [postCommentaireId, setPostCommentaireId] = useState(
    comment.comment._id
  );

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
    dispacthVisible({ type: AFFICHER_PROFIL_UTILISATEUR, payload: true });
  };

  const handleSuppCommentaire = (id) => {
    const URL_COM = `${process.env.REACT_APP_URL}/api/poster/delete/commentaire/${id}`;
    axios
      .put(
        URL_COM,
        { postCommentaireId },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispacth({
            type: AFFICHER_POSTER,
            payload: response.data.AFFICHER_POSTE,
          });
          // return;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      {state.LISTE_UTILISATEUR?.map((user) => {
        if (user._id === comment.comment.post_commentaire_id_utilisateur)
          return (
            <div key={comment.comment._id} className="commentaire_utilisateur">
              <div className="vu_commentaire">
                <div className="vu_commentaire_utilisateur_ferme">
                  <div className="vu_commentaire_photo">
                    <div className="image_post">
                      <img
                        src={
                          user?.photo_profil
                            ? `${user.photo_profil}`
                            : LOGIN
                        }
                        alt="poste"
                      />
                    </div>
                    <div
                      className="vu_commentaire_pseudo"
                      onClick={()=>handlePosteUtilisateur(user._id)}
                    >
                      {user.pseudo}
                    </div>
                  </div>
                  <div className="vu_commentaire_ferme">
                    {state.UTILISATEUR._id ===
                      comment.comment.post_commentaire_id_utilisateur && (
                      <IoMdClose
                        onClick={() => handleSuppCommentaire(comment.post._id)}
                      />
                    )}
                  </div>
                </div>
                <div className="vu_commentaire_texte">
                  {comment.comment.post_commentaire_utilisateur_texte}
                </div>
              </div>
            </div>
          );
      })}
    </>
  );
};

export default VuCommentaire;
