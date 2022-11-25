import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  AFFICHER_LISTE_UTILISATEUR,
  AFFICHER_UTILISATEUR,
} from "../../reducer/Action";
import { BASE_CONTEXTE } from "../../reducer/Contexte";

const CadreBouton = ({ user }) => {
  const { state, dispacth } = useContext(BASE_CONTEXTE);
  const [is, setIs] = useState(false);

  useEffect(() => {
    const URL_JWT = `${process.env.REACT_APP_URL}/api/utilisateur/profil`;
    axios
      .get(URL_JWT, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return dispacth({
            type: AFFICHER_UTILISATEUR,
            payload: response.data.UTILISATEU_CONNTECT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }, [is, setIs]);
  useEffect(() => {
    const URL_JWT = `${process.env.REACT_APP_URL}/api/liste/utilisateur`;
    axios
      .get(URL_JWT, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return dispacth({
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }, []);

  const handleInvitation = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/envoyer/invitation/${id}`;
    axios
      .patch(
        URL_INV,
        {},
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
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
          setIs(!is);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAnnulerInvitation = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/annuler/invitation/${id}`;
    axios
      .patch(
        URL_INV,
        {},
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
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
          setIs(!is);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSuivie = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/suivre/${id}`;
    axios
      .patch(
        URL_INV,
        {},
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
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
          setIs(!is);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleNePlusSuivie = (id) => {
    const URL_INV = `${process.env.REACT_APP_URL}/api/annuler/suivre/${id}`;
    axios
      .patch(
        URL_INV,
        {},
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
            type: AFFICHER_LISTE_UTILISATEUR,
            payload: response.data.LISTE_UTILISATEUR,
          });
          setIs(!is);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cadre_profil_detail boutton">
      {state.UTILISATEUR.attenteAmis.includes(user._id) ? (
        <div
          className="cadre_profil_detail_amis"
          onClick={() => handleAnnulerInvitation(user._id)}
        >
          Annuler invitation
        </div>
      ) : (
        <>
          {!state.UTILISATEUR.amis.includes(user._id) && (
            <div
              className="cadre_profil_detail_amis"
              onClick={() => handleInvitation(user._id)}
            >
              Invitation
            </div>
          )}
        </>
      )}

      {state.UTILISATEUR.suivies.includes(user._id) ? (
        <div
          className="cadre_profil_detail_suivie"
          onClick={() => handleNePlusSuivie(user._id)}
        >
          Ne plus Suivre
        </div>
      ) : (
        <div
          className="cadre_profil_detail_suivie"
          onClick={() => handleSuivie(user._id)}
        >
          Suivre
        </div>
      )}
    </div>
  );
};

export default CadreBouton;
