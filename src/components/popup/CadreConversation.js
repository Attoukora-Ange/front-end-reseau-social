import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
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
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const CadreConversation = ({ socket }) => {
 
  const { dispacthVisible } = useContext(VisibleContexte);
  const { state } = useContext(BASE_CONTEXTE);
  const [message, setMessage] = useState("");
  // const [messageRecu, setMessageRecu] = useState({})
  const [tabMessageRecu, setTabMessageRecu] = useState([]);

  const groupes = document.querySelectorAll(".champs_groupe_label");
  groupes.forEach((group) => {
    group.addEventListener("click", () => {
      if (!group.classList.contains("active_conversation")) {
        const activeElement = document.querySelector(
          ".champs_groupe_label.active_conversation"
        );
        activeElement.classList.remove("active_conversation");
        group.classList.add("active_conversation");
        socket.emit("sortie_groupe", activeElement.dataset.groupe);
        socket.emit("entrer_groupe", group.dataset.groupe);
        setTabMessageRecu([]);
      }
    });
  });

  const handleAmisConversation = () => {
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

    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  };
  useEffect(() => {
    socket.on("sever_message", (msg) => {
      setTabMessageRecu((list) => [...list, msg]);
    });
  }, [socket]);
  console.log(tabMessageRecu)

  const room = document.querySelector(
    ".champs_groupe_label.active_conversation"
  )?.dataset.groupe;
  const handleEnvoyer = () => {
    socket.emit("message", {
      message: message,
      id: state.UTILISATEUR._id,
      groupe: room,
      date: Date(),
    });
    setMessage('')
  };

  return (
    <div className="conversation_contenue">
      <div className="conversation_contenue_utilisateur">
        <div className="conversation_gauche">
          <div className="champs_recherche">
            <div className="champs_input">
              <input type="text" placeholder="Rechercher par pseudo..." />
            </div>
            <div className="champs_icone">
              <FaSearch />
            </div>
          </div>
          <div className="champs_gauche">
            <div className="en_tete_champs_groupe">Discusion groupes</div>
            <div className="champs_gauche_groupe">
              <div
                className="champs_groupe_label active_conversation"
                data-groupe="pharma 36"
              >
                #Pharma_36
              </div>
              <div className="champs_groupe_label" data-groupe="conseil">
                #Conseil
              </div>
              <div className="champs_groupe_label" data-groupe="politique">
                #Politique
              </div>
              <div className="champs_groupe_label" data-groupe="autre">
                #Autre
              </div>
            </div>
            <div className="champs_gauche_utilisateur_principal">
              <div className="en_tete_champs_utilisateur">
                Discusion instantanée
              </div>
              <div className="champs_gauche_utilisateur">
                <div className="champs_gauche_utilisateur_cadre">
                  <div className="champs_photo">
                    <img
                      src="/assets/images/loginPersonne.png"
                      alt="conversation utilisateur"
                    />
                  </div>
                  <div
                    className="champs_pseudo"
                    onClick={handleAmisConversation}
                  >
                    Ali kouakou Elvis
                  </div>
                  <IoMdClose title="Supprimer la conversation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conversation_droit">
        <div className="conversation_droit_champs_texte">
          {/* ****************************** */}
          {tabMessageRecu.map((tabM, i) =>
            tabM.id === state.UTILISATEUR._id ? (
              <div key={i} className="champs_utilisateur moi">
                <div className="champs_utilisateur_detail">
                  <div className="champs_photo">
                    <img
                      src="/assets/images/loginPersonne.png"
                      alt="conversation utilisateur"
                    />
                  </div>
                  <div className="champs_message">{tabM.message}</div>
                </div>
                <div className="champs_utilisateur_heure">{tabM?.date}</div>
              </div>
            ) : (
              <div key={i} className="champs_utilisateur">
                <div className="champs_utilisateur_detail">
                  <div className="champs_message">{tabM.message}</div>
                  <div className="champs_photo">
                    <img
                      src="/assets/images/loginPersonne.png"
                      alt="conversation utilisateur"
                    />
                  </div>
                </div>
                <div className="champs_utilisateur_heure">{tabM.date}</div>
              </div>
            )
          )}

          {/* *************** */}
          {/* <div className="champs_utilisateur">
            <div className="champs_utilisateur_detail">
            <div className="champs_message">
                Bonjour cest ma premiere fois d'utilisaer ce site de rencontre Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error accusamus nostrum repellat, nisi, iste minus enim dicta veniam quia animi a, impedit consequatur! Maiores tempore debitis quisquam iure tempora autem corporis asperiores eaque nisi eum necessitatibus non quas veniam inventore, sequi quae suscipit, vitae ab consequatur eveniet veritatis! Nobis!
              </div>
              <div className="champs_photo">
                <img
                  src="/assets/images/loginPersonne.png"
                  alt="conversation utilisateur"
                />
              </div>
             
            </div>
            <div className="champs_utilisateur_heure">13h23min</div>
          </div> */}

          {/* ********************************** */}
        </div>
        <div className="conversation_droit_champs_textearea">
          <div className="message_textarea">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Ecrirez vos messages..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="message_envoyer">
            <FiSend onClick={handleEnvoyer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadreConversation;
