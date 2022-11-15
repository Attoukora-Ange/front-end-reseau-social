import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const CadreTchat = ({ socket }) => {
  const { state } = useContext(BASE_CONTEXTE);
  const [message, setMessage] = useState("");
  const [messageRecu, setMessageRecu] = useState([]);

  const groupes = document.querySelectorAll(".champs_groupe_label");
  groupes.forEach((group) => {
    group.addEventListener("click", () => {
      if (!group.classList.contains("active_tchat")) {
        const activeElement = document.querySelector(
          ".champs_groupe_label.active_tchat"
        );
        activeElement.classList.remove("active_tchat");
        group.classList.add("active_tchat");
        socket.emit("sortie_groupe", activeElement.dataset.groupe);
        socket.emit("entrer_groupe", group.dataset.groupe);
        setMessageRecu([]);
      }
    });
  });

  useEffect(() => {
    socket.on("sever_message", (msg) => {
      setMessageRecu((list) => [...list, msg]);
    });
  }, [socket]);

  const room = document.querySelector(".champs_groupe_label.active_tchat")
    ?.dataset.groupe;

  const handleEnvoyer = () => {
    socket.emit("message", {
      message: message,
      id: state.UTILISATEUR._id,
      groupe: room,
      date: Date(),
    });
  };

  return (
    <div className="tchat_contenue">
      <div className="tchat_contenue_utilisateur">
        <div className="tchat_gauche">
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
                className="champs_groupe_label active_tchat"
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
                      alt="tchat utilisateur"
                    />
                  </div>
                  <div className="champs_pseudo">Ali kouakou Elvis</div>
                  <IoMdClose title="Supprimer la tchat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tchat_droit">
        <div className="tchat_droit_champs_texte">
          {/* ****************************** */}

          {messageRecu?.map((item) => {
            return item.id === state.UTILISATEUR._id ? (
              <div className="champs_utilisateur moi">
                {console.log(item)}
                <div className="champs_utilisateur_detail">
                  <div className="champs_photo">
                    <img
                      src="/assets/images/loginPersonne.png"
                      alt="tchat utilisateur"
                    />
                  </div>
                  <div className="champs_message">{item.message}</div>
                </div>
                <div className="champs_utilisateur_heure">{item.date}</div>
              </div>
            ) : (
              <div className="champs_utilisateur">
                <div className="champs_utilisateur_detail">
                  <div className="champs_message">{item.message}</div>
                  <div className="champs_photo">
                    <img
                      src="/assets/images/loginPersonne.png"
                      alt="tchat utilisateur"
                    />
                  </div>
                </div>
                <div className="champs_utilisateur_heure">{item.date}</div>
              </div>
            );
          })}
        </div>
        <div className="tchat_droit_champs_textearea">
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

export default CadreTchat;
