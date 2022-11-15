import React from "react";

const CadreUtilDetail = ({user}) => {
  return (
    <div className="cadre_profil_detail">
      <div className="cadre_profil_detail_amis">{user.amis.length} ami(e)s</div>
      <div className="cadre_profil_detail_abonne">{user.abonnes.length} abonn(é)es</div>
      <div className="cadre_profil_detail_suivie">{user.suivies.length} personnes suivie(s)</div>
    </div>
  );
};

export default CadreUtilDetail;
