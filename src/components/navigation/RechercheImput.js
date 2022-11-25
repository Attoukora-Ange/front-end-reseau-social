import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AFFICHER_ID_UTILISATEUR } from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";
import { AFFICHER_ACTUALITE, AFFICHER_CADRE_HAUT, AFFICHER_CONVERSATION, AFFICHER_LISTE_ABONNE, AFFICHER_LISTE_AMIS, AFFICHER_LISTE_SUIVIE, AFFICHER_MODIF_MOT_PASSE, AFFICHER_MON_PROFIL, AFFICHER_PROFIL_MODIFIER_PROFIL, AFFICHER_PROFIL_UTILISATEUR, AFFICHER_RECHERCHE_PSEUDO, AFFICHER_VUE } from "../../reducerVue/Action";
import { VisibleContexte } from "../../reducerVue/Contexte";
import LOGIN from '../../assets/images/loginPersonne.png'
const RechercheImput = () => {
  const {stateVisible, dispacthVisible } = useContext(VisibleContexte);
  const { state, dispacth } = useContext(BASE_CONTEXTE);

  const Filter = state.LISTE_UTILISATEUR?.filter((fil) =>
    fil.pseudo.toLowerCase().includes(stateVisible.VUE_RECHERCHE_PSEUDO?.toLowerCase())
  );

  const handleRechercheChange = (e) => {
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: e.target.value });
  };

  const handleFocus = ()=>{
    dispacthVisible({ type: AFFICHER_CONVERSATION, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_ABONNE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_SUIVIE, payload: false });
    dispacthVisible({ type: AFFICHER_LISTE_AMIS, payload: false });
    dispacthVisible({ type: AFFICHER_MODIF_MOT_PASSE, payload: false });
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  }

  const handleUtilisateur = (id) => {
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
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
    dispacthVisible({ type: AFFICHER_PROFIL_UTILISATEUR, payload: true });
    
  };

  return (
    <div className="champs_recherche">
      <div className="champs_input">
        <input
          type="search"
          placeholder="Rechercher par pseudo..."
          onChange={handleRechercheChange}
          onFocus = {handleFocus}
        />
      </div>
      <div className="champs_icone">
        <FaSearch />
      </div>
      {stateVisible.VUE_RECHERCHE_PSEUDO && (
        <div className="cadre_recherche_principal">
          {Filter.map((user) => (
            <div key={user._id} className="cadre_recherche" onClick={()=>handleUtilisateur(user._id)}>
              <div className="image_utilisateur">
                <img
                  src= {user.photo_profil ? `${user.photo_profil}` : LOGIN} 
                  alt="utilisateur recherché"
                />
              </div>
              <div className="pseudo_utilisateur_recherche">{user.pseudo}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RechercheImput;
