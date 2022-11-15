import React, { useContext, useRef } from "react";
import "../../assets/css/haut.css";
import { VscTextSize } from "react-icons/vsc";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { VisibleContexte } from "../../reducerVue/Contexte";
import {
  AFFICHER_CADRE_HAUT_PHOTO,
  AFFICHER_CADRE_HAUT_TEXTE,
  AFFICHER_CADRE_HAUT_VIDEO,
  AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
  AFFICHER_CARDRE_HAUT_INPUT_TEXTE,
  AFFICHER_PHOTO_POST,
  AFFICHER_POST_PHOTO_POSTER,
  AFFICHER_POST_VIDEO_POSTER,
  AFFICHER_RECHERCHE_PSEUDO,
  AFFICHER_VUE,
  AFFICHER_VUE_CADRE_COMPLET,
} from "../../reducerVue/Action";
const Haut = () => {
  const { dispacthVisible } = useContext(VisibleContexte);
  const photo_post_ref = useRef();
  const video_post_ref = useRef();

  const handleClickPhotoPost = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    photo_post_ref.current.click();
  };
  const handleClickVideoPost = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    video_post_ref.current.click();
  };

  const handleChangePhotoPost = (e) => {
    const PHOTO_POST = e.target.files[0];
    const PHOTO_POST_URL_NAME = URL.createObjectURL(PHOTO_POST);

    dispacthVisible({ type: AFFICHER_VUE_CADRE_COMPLET, payload: true });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_TEXTE, payload: true });
   
    dispacthVisible({ type: AFFICHER_VUE, payload: true });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_PHOTO, payload: true });
    dispacthVisible({ type: AFFICHER_PHOTO_POST, payload: true });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_VIDEO, payload: false });
    dispacthVisible({
      type: AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
      payload: null,
    });
    dispacthVisible({
      type: AFFICHER_PHOTO_POST,
      payload: PHOTO_POST_URL_NAME,
    });
    dispacthVisible({ type: AFFICHER_POST_PHOTO_POSTER, payload: PHOTO_POST });
    dispacthVisible({ type: AFFICHER_POST_VIDEO_POSTER, payload: false });
  };
  const handleChangeVideoPost = (e) => {
    const VIDEO_POST = e.target.files[0];
    const VIDEO_POST_URL_NAME = URL.createObjectURL(VIDEO_POST);

    dispacthVisible({ type: AFFICHER_VUE_CADRE_COMPLET, payload: true });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_TEXTE, payload: true });

    dispacthVisible({ type: AFFICHER_VUE, payload: true });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_PHOTO, payload: false });
    dispacthVisible({ type: AFFICHER_PHOTO_POST, payload: false });
    dispacthVisible({ type: AFFICHER_CADRE_HAUT_VIDEO, payload: true });
    dispacthVisible({
      type: AFFICHER_PHOTO_POST,
      payload: null,
    });
    dispacthVisible({
      type: AFFICHER_CADRE_HAUT_VIDEO_CONTENUE,
      payload: VIDEO_POST_URL_NAME,
    });
    dispacthVisible({ type: AFFICHER_POST_PHOTO_POSTER, payload: false });
    dispacthVisible({ type: AFFICHER_POST_VIDEO_POSTER, payload: VIDEO_POST });
  };

  const handleTexte = () => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    dispacthVisible({ type: AFFICHER_VUE, payload: true });
    dispacthVisible({ type: AFFICHER_CARDRE_HAUT_INPUT_TEXTE, payload: true });
  };
  return (
    <div className="haut">
      <div className="haut_principal">
        <div className="haut_image texte">
          <VscTextSize onClick={handleTexte} />
        </div>
        <div className="haut_image photo">
          <input
            ref={photo_post_ref}
            type="file"
            name=""
            id=""
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChangePhotoPost}
          />
          <FaPhotoVideo onClick={handleClickPhotoPost} />
        </div>
        <div className="haut_image video">
          <input
            ref={video_post_ref}
            type="file"
            name=""
            id=""
            accept="video/*"
            style={{ display: "none" }}
            onChange={handleChangeVideoPost}
          />
          <FaVideo onClick={handleClickVideoPost} />
        </div>
      </div>
    </div>
  );
};

export default Haut;
