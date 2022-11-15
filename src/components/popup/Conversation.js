import React, { useContext, useEffect } from 'react';
import "../../assets/css/conversation.css";
import { IoMdClose } from "react-icons/io";
import CadreConversation from './CadreConversation';
import { VisibleContexte } from '../../reducerVue/Contexte';
import { AFFICHER_CONVERSATION } from '../../reducerVue/Action';
import { BASE_CONTEXTE } from '../../reducer/Contexte';


const Conversation = ({socket}) => {
 
  const {state} = useContext(BASE_CONTEXTE)
  const {dispacthVisible} = useContext(VisibleContexte)
  
useEffect(()=>{

  socket.on('connect', ()=>{
    socket.emit('entrer_groupe','pharma 36')
  })

 socket.emit('user_connect', {
    id : state.UTILISATEUR._id
  })
  socket.on('server_user_connect', (msg)=>{
    console.log(msg)
  })
}, [])
 

  const handleClose =()=>{
    dispacthVisible({type: AFFICHER_CONVERSATION, payload: false})
    const CONTENUE = document.querySelector(".contenue");
    CONTENUE.classList.remove("flou");
  }
    return (
        <div className="conversation milieu_visible">
        <IoMdClose className="fermer_conversation" onClick={handleClose}/>
        <div className="conversation_titre">Conversation</div>
      <div className="conversation_contenue_principale">
        <CadreConversation socket = {socket}/>
      </div>
    </div>
    );
};

export default Conversation;