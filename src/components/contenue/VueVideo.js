import React, { useContext } from "react";
import { VisibleContexte } from "../../reducerVue/Contexte";
const VueVideo = () => {
  const { stateVisible } = useContext(VisibleContexte);
  return (
    <div className="vu_contenue_video">
      <video src={stateVisible.CONTENUE_VIDEO_CADRE_HAUT}
      width="100%" height="100%"  muted controls
      ></video>
    </div>
  );
};

export default VueVideo;
