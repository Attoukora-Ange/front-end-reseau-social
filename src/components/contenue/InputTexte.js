import React, { useContext} from 'react';
import { AFFICHER_CADRE_HAUT_TEXTE, AFFICHER_CADRE_HAUT_TEXTE_CONTENUE, AFFICHER_RECHERCHE_PSEUDO } from '../../reducerVue/Action';
import { VisibleContexte } from '../../reducerVue/Contexte';

const InputTexte = () => {
  const {stateVisible, dispacthVisible } = useContext(VisibleContexte);
  
  const handleChangeTextArea = (e)=>{
    dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' });
      // dispacthVisible({type: AFFICHER_VUE_CADRE_COMPLET, payload: true})
      dispacthVisible({type: AFFICHER_CADRE_HAUT_TEXTE, payload: true})
      dispacthVisible({type: AFFICHER_CADRE_HAUT_TEXTE_CONTENUE, payload: e.target.value})   
  }
    return (
        <div className="input_contenue_texte">
      <div className="texte_input">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={stateVisible.TEXTE_CADRE_HAUT_CONTENUE}
          placeholder="Ecrivez votre post..." onChange={handleChangeTextArea} onFocus={()=>dispacthVisible({ type: AFFICHER_RECHERCHE_PSEUDO, payload: '' })}
        ></textarea>
      </div>
    </div>
    );
};

export default InputTexte;