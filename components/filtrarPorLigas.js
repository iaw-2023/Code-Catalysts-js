import { getCamisetasPorLiga } from "../data/api";
import { getEquiposPorLiga } from "../data/api";

export default function FiltrarPorLigas({
  ligas, 
  setVisibilidadFiltrarLiga, 
  setCamisetasVisibles, 
  setVisibilidadFiltrarEquipo, 
  setEquiposVisibles, 
  setTitulo,
  setIdLiga,
  setBusquedaChatGPT,
  setRespuestaChatGPT,
  setVisibilidadChatGPT
}) {

  async function handleClickLigas (liga){
    let camisetas = await getCamisetasPorLiga(liga.id_liga);
    let equipos = await getEquiposPorLiga(liga.id_liga);
    setCamisetasVisibles(camisetas);
    setVisibilidadFiltrarLiga("none");
    setVisibilidadFiltrarEquipo("block");
    setEquiposVisibles(equipos);
    setIdLiga(liga.id_liga);
    setTitulo("Camisetas de "+liga.nombre);
    setBusquedaChatGPT(liga.nombre);
    setRespuestaChatGPT('');
    setVisibilidadChatGPT("block");
  }

  return (
    <div className="contenedorFiltrar">
      <h4>Filtrar por ligas</h4>
      {ligas.map((liga) => (
        <a className="items">
          <p onClick={() => handleClickLigas(liga)}> {liga.nombre} </p>
        </a>
      ))}
    </div>
  );
}
