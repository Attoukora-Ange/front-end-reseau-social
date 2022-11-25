import axios from "axios";
import React, { useContext, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { AFFICHER_POSTER } from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostCommentaire = ({ post }) => {
  const [postCommentaire, setPostCommentaire] = useState("");
  const { dispacth } = useContext(BASE_CONTEXTE);

  const handleCommentaire = (id) => {
    const URL_COM = `${process.env.REACT_APP_URL}/api/poster/commentaire/${id}`;
    axios
      .put(
        URL_COM,
        { postCommentaire },
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
          setPostCommentaire("");
          // return;
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err.response.status === 401) {
            return err.response.data.erreur_validation.forEach((element) => {
              toast(element.msg);
            });
          }
      });
  };
  return (
    <div className="commentaire_input">
        <ToastContainer />
      <div className="champs_commentaire">
        <textarea
          cols="30"
          rows="10"
          value={postCommentaire}
          onChange={(e) => setPostCommentaire(e.target.value)}
          placeholder="Ecrire votre commentaire..."
        ></textarea>
      </div>
      <div className="commentaire_envoye">
        <RiSendPlaneLine onClick={() => handleCommentaire(post._id)} />
      </div>
    </div>
  );
};

export default PostCommentaire;
