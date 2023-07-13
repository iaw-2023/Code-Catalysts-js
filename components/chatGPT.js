import React, { useState } from 'react';

import { obtenerRespuestaChatGPT } from "../data/api";

const ChatGPT = ({busquedaChatGPT,respuestaChatGPT,setRespuestaChatGPT}) => {

  const enviarMensaje = async () => {
    let respuesta;
    if (busquedaChatGPT == "Liga Profesional de Fútbol") {
      respuesta = await obtenerRespuestaChatGPT("Información muy pequeña sobre la Primera División de Fútbol de Argentina");
    } 
    else {
      respuesta = await obtenerRespuestaChatGPT("Información muy pequeña sobre fútbol" +busquedaChatGPT);
    }
    setRespuestaChatGPT(respuesta);
  };

  return (
    <div className='contenedorChatGPT'>
      <h1 class='tituloChatGPT'>Información de ChatGPT sobre {busquedaChatGPT}</h1>
      {respuestaChatGPT !== '' && (
        <p className='respuestaChatGPT'>{respuestaChatGPT}</p>
      )}
      {respuestaChatGPT === '' && (
        <button className='botonChatGPT' onClick={enviarMensaje}>Obtener</button>
      )}
    </div>
  );
};

export default ChatGPT;