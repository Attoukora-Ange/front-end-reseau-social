import React, { useContext } from 'react';
import "../../assets/css/tchat.css";
// import { IoMdClose } from "react-icons/io";
// import { VisibleContexte } from '../../reducerVue/Contexte';
// import { AFFICHER_CONVERSATION } from '../../reducerVue/Action';
import CadreTchat from './CadreTchat';
import socketIO from 'socket.io-client';
const socket = socketIO('http://localhost:5000');
socket.on('connect', ()=>{
  socket.emit('entrer_groupe','pharma 36')
})
const Tchat = () => {
  // const {dispacthVisible} = useContext(VisibleContexte)

  // const handleClose =()=>{
  //   dispacthVisible({type: AFFICHER_CONVERSATION, payload: false})
  //   const CONTENUE = document.querySelector(".contenue");
  //   CONTENUE.classList.remove("flou");
  // }
    return (
        <div className="tchat milieu_visible">
        {/* <IoMdClose className="fermer_tchat" onClick={handleClose}/> */}
        <div className="tchat_titre">Tchat</div>
      <div className="tchat_contenue_principale">
        <CadreTchat socket = {socket}/>
      </div>
    </div>
    );
};

export default Tchat;