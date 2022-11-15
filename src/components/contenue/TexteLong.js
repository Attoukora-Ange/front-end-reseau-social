import React, { useContext, useState } from "react";
import { AFFICHER_RECHERCHE_PSEUDO } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";

const TexteLong = ({ PosterTexte }) => {
    const { dispacthVisible } = useContext(VisibleContexte);
  const [afficheTexte, setAfficheTexte] = useState(false);
  const TexteCouper = PosterTexte.slice(0, 200);
 const AffichagePlus = ()=>{
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    setAfficheTexte(true)
}
 
  return (
    <>
      {afficheTexte ? (
        <div className="texte">{ PosterTexte }</div>
      ) : (
        <div className="texte">
          {TexteCouper}...
          <span onClick={AffichagePlus}>Voir plus</span>
        </div>
      )}
    </>
  );
};

export default TexteLong;
