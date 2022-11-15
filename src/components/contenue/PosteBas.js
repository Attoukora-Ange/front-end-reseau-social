import React, { useContext } from "react";
import { BsHeart, BsShare, BsFillHeartFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { AFFICHER_RECHERCHE_PSEUDO } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import axios from "axios";
import { AFFICHER_POSTER } from "../../reducer/Action";

const PosteBas = ({ vuePostBas }) => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state, dispacth } = useContext(BASE_CONTEXTE);

  const handleCommentaireToggle = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    vuePostBas.setVisibleCommentaire(!vuePostBas.visibleCommentaire);
  };
  const handlePostBasToggle = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
    vuePostBas.setVisibleLike(!vuePostBas.visibleLike);
  };
  const handlePartagerToggle = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: "" });
  };

  const handleUnlike = (id) => {
    const URL_UNL = `${process.env.REACT_APP_URL}/api/poster/unlike/${id}`;
    axios
      .put(
        URL_UNL,
        {},
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
            payload: response.data.POSTER_AFFICHE,
          });

          // return;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleLike = (id) => {
    const URL_LIK = `${process.env.REACT_APP_URL}/api/poster/like/${id}`;
    axios
      .put(
        URL_LIK,
        {},
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
            payload: response.data.POSTER_AFFICHE,
          });

          // return;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bas_poste">
      <div className="like_unlike">
        <div className="like_icone" onClick={handlePostBasToggle}>
          {vuePostBas.post.postNombreLike.includes(state.UTILISATEUR._id) ? (
           <BsFillHeartFill onClick={()=>handleUnlike(vuePostBas.post._id)} />
          ) : (
            <BsHeart onClick={() => handleLike(vuePostBas.post._id)} />
            
          )}
        </div>
        <div className="nombre_like">
          {vuePostBas.post.postNombreLike.length}
        </div>
      </div>
      <div className="commentaire">
        <div className="commentaire_icone">
          <GoComment onClick={handleCommentaireToggle} />
        </div>
        <div className="nombre_commentaire">
          {vuePostBas.post.postCommentaire.length}
        </div>
      </div>
      <div className="partager">
        <div className="partager_icone">
          <BsShare onClick={handlePartagerToggle} />
        </div>
      </div>
    </div>
  );
};

export default PosteBas;
