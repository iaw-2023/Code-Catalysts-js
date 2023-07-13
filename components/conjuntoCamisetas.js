import React from 'react';
import Camiseta from '../components/camiseta';

const ConjuntoCamisetas = ({
    camisetas,
    setCamisetaActual,
    setVisibilidadCamisetas,
    setVisibilidadFiltrarEquipo,
    setVisibilidadFiltrarLiga,
    setVisibilidadCamisetaActual,
    setTitulo,
    setVisibilidadAtrasLiga,
    setVisibilidadAtrasEquipo,
    setTituloLiga,
    setTituloEquipo,
    setIdLiga,
    setIdEquipo,
    setVisibilidadChatGPT
}) => {
  
  async function handleClickCambiarCamiseta (camiseta){
    setVisibilidadCamisetas("none");
    setVisibilidadFiltrarEquipo("none");
    setVisibilidadFiltrarLiga("none");
    setVisibilidadCamisetaActual("block");
    setCamisetaActual(camiseta);
    setTitulo("Comprar camiseta");
    setVisibilidadAtrasLiga("block")
    setVisibilidadAtrasEquipo("block");
    setTituloLiga(camiseta.liga);
    setTituloEquipo(camiseta.equipo);
    setIdLiga(camiseta.id_liga);
    setIdEquipo(camiseta.id_equipo);
    setVisibilidadChatGPT("none");
  }
  
  if (camisetas != null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          {camisetas.length === 0 ? (
            <p>No hay camisetas disponibles en este momento.</p>
          ) : (
            <div>
              {camisetas.map((camiseta) => (
                <a onClick={() => handleClickCambiarCamiseta(camiseta)} >
                  <Camiseta 
                    descripcion={camiseta.descripcion}
                    precio={camiseta.precio}
                    imagen={camiseta.imagen}

                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ConjuntoCamisetas;