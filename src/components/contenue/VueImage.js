import React, { useContext } from "react";
import { VisibleContexte } from "../../reducerVue/Contexte";

const VueImage = () => {
  const { stateVisible } = useContext(VisibleContexte);
  return (
    <div className="vu_contenue_image">
      <div className="image_vue">
        <img src={stateVisible.VUE_PHOTO_POST && stateVisible.VUE_PHOTO_POST } alt="preview poste" />
      </div>
    </div>
  );
};

export default VueImage;
