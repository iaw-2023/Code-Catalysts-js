import Head from 'next/head';
import Header from '../components/header';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carouselPrincipal';
import ConjuntoCamisetas from '../components/conjuntoCamisetas';
import FiltrarPorLigas from '../components/filtrarPorLigas';
import FiltrarPorEquipos from '../components/filtrarPorEquipos';
import Camiseta from '../components/pedidoCamiseta';
import Login from '../components/login';
import Register from '../components/register';
import Pedidos from '../components/pedidos';
import MercadoPago from '../components/mercadoPago';
import ChatGPT from '../components/chatGPT';
import { getCamisetas } from "../data/api";
import { getLigas } from "../data/api";
import { useState } from "react";
import { useEffect } from 'react';


export default function FirstPost({camisetas,ligas}) {
    
    const [busquedaChatGPT, setBusquedaChatGPT] = useState('');
    const [respuestaChatGPT, setRespuestaChatGPT] = useState('');
    const [allProducts, setAllProducts] = useState([]);
	const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);
    const [camisetaActual, setCamisetaActual] = useState(null);
    const [camisetasVisibles, setCamisetasVisibles] = useState(camisetas);
    const [equiposVisibles, setEquiposVisibles] = useState(null);
    const [titulo, setTitulo] = useState("Todas las camisetas");
    const [tituloLiga, setTituloLiga] = useState("");
    const [tituloEquipo, setTituloEquipo] = useState("");
    const [idLiga, setIdLiga] = useState("");
    const [idEquipo, setIdEquipo] = useState("");
    const [pedidos, setPedidos] = useState("");
    const [talle, setTalle] = useState(null);
    const [mensajeTalle, setMensajeTalle] = useState("Selecciona un talle");

    const [visibilidadChatGPT, setVisibilidadChatGPT] = useState("none");
    const [visibilidadCarrusel, setVisibilidadCarrusel] = useState("block");
    const [visibilidadMercadoPago, setVisibilidadMercadoPago] = useState("none");
    const [visibilidadLogin, setVisibilidadLogin] = useState("none");
    const [visibilidadRegister, setVisibilidadRegister] = useState("none");
    const [visibilidadTitulo, setVisibilidadTitulo] = useState("none");
    const [visibilidadFiltrarLiga, setVisibilidadFiltrarLiga] = useState("none");
    const [visibilidadFiltrarEquipo, setVisibilidadFiltrarEquipo] = useState("none");
    const [visibilidadCamisetas, setVisibilidadCamisetas] = useState("none");
    const [visibilidadCamisetaActual, setVisibilidadCamisetaActual] = useState("none");
    const [visibilidadCarrito, setVisibilidadCarrito] = useState("none");
    const [visibilidadAtrasLiga, setVisibilidadAtrasLiga] = useState("none");
    const [visibilidadAtrasEquipo, setVisibilidadAtrasEquipo] = useState("none");
    const [visibilidadIniciarSesion, setVisibilidadIniciarSesion] = useState("block");
    const [visibilidadCerrarSesion, setVisibilidadCerrarSesion] = useState("none");
    const [visibilidadPedidos, setVisibilidadPedidos] = useState("none");

    //al iniciar la pagina carga en allProduct lo que esta en el carrito de localStorage
    useEffect(() => {
        const cant = localStorage.getItem('cantProducts');
        if (cant) {
            setCountProducts(Number(cant));
        }
      }, []);

    //cada vez que countProduct se actualiza, su contenido se guarda en el cantProducts de localStorage
    useEffect(() => {
        localStorage.setItem('cantProducts', Number(countProducts));
        }, [countProducts]);

    //al iniciar la pagina carga en total lo que esta en el total de localStorage
    useEffect(() => {
        const totalInicial = localStorage.getItem('total');
        if (totalInicial) {
            setTotal(Number(totalInicial));
        }
        }, []);

    //cada vez que total se actualiza, su contenido se guarda en el total de localStorage
    useEffect(() => {
        localStorage.setItem('total', Number(total));
        }, [total]);
        

    //al iniciar la pagina carga en allProduct lo que esta en el carrito de localStorage
    useEffect(() => {
        const carrito = localStorage.getItem('carrito');
        if (carrito) {
            setAllProducts(JSON.parse(carrito));
        }
      }, []);
    
    //cada vez que allProduct se actualiza, su contenido se guarda en el carrito de localStorage
    useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(allProducts));
    }, [allProducts]);

    return (
        <div>
            <Head>
                <title>La Camiseta No Se Mancha</title>
                <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                <script  src="/regist_serviceWorker.js"></script> 
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <NavBar 
                setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga} 
                setVisibilidadCarrusel={setVisibilidadCarrusel} 
                setVisibilidadCamisetas={setVisibilidadCamisetas} 
                setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                setCamisetasVisibles={setCamisetasVisibles}
                setVisibilidadCamisetaActual={setVisibilidadCamisetaActual} 
                setVisibilidadTitulo={setVisibilidadTitulo} 
                setTitulo={setTitulo}
                setVisibilidadCarrito={setVisibilidadCarrito}
                todasLasCamisetas={camisetas} 
                visibilidadAtrasLiga={visibilidadAtrasLiga}
                visibilidadAtrasEquipo={visibilidadAtrasEquipo}
                tituloLiga={tituloLiga}
                tituloEquipo={tituloEquipo}
                idLiga={idLiga}
                idEquipo={idEquipo}
                setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                setVisibilidadAtrasEquipo={setVisibilidadAtrasEquipo}
                setEquiposVisibles={setEquiposVisibles}
                visibilidadCerrarSesion={visibilidadCerrarSesion}
                visibilidadIniciarSesion={visibilidadIniciarSesion}
                setVisibilidadLogin={setVisibilidadLogin}
                setVisibilidadRegister={setVisibilidadRegister}
                setVisibilidadCerrarSesion={setVisibilidadCerrarSesion}
                setVisibilidadIniciarSesion={setVisibilidadIniciarSesion}
                setVisibilidadPedidos={setVisibilidadPedidos}
                visibilidadPedidos={visibilidadPedidos} 
                setPedidos={setPedidos}
                setAllProducts={setAllProducts}
                setCountProducts={setCountProducts}
                setTotal={setTotal}
                setTalle={setTalle}
                setMensajeTalle={setMensajeTalle}
                setVisibilidadChatGPT={setVisibilidadChatGPT}
                setRespuestaChatGPT={setRespuestaChatGPT}
                setBusquedaChatGPT={setBusquedaChatGPT}
                setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                />
            <div className='contenedorBody'>
                <div style={{ display: visibilidadMercadoPago}}>
                    <MercadoPago
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                        setVisibilidadCamisetas={setVisibilidadCamisetas}
                        setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga}
                        setTitulo={setTitulo}
                        setVisibilidadCarrito={setVisibilidadCarrito}
                        setTotal={setTotal}
                        setCountProducts={setCountProducts}
                        setVisibilidadAtrasEquipo={setVisibilidadAtrasEquipo}
                        setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                    />
                </div>
                <div style={{ display: visibilidadCarrito}}>
                    <Header 
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        total={total}
                        setTotal={setTotal}
                        titulo={titulo}
                        visibilidadTitulo={visibilidadTitulo}
                        setVisibilidadMercadoPago={setVisibilidadMercadoPago} 
                        setVisibilidadCamisetaActual={setVisibilidadCamisetaActual}
                        setVisibilidadCamisetas={setVisibilidadCamisetas}
                        setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga}
                        setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo}
                        setTitulo={setTitulo}
                        setVisibilidadCarrito={setVisibilidadCarrito}
                        setVisibilidadChatGPT={setVisibilidadChatGPT}
                        setRespuestaChatGPT={setRespuestaChatGPT} />
                </div>
                    <div style={{ display: visibilidadLogin}}>
                        <Login
                            setVisibilidadLogin={setVisibilidadLogin}
                            setVisibilidadRegister={setVisibilidadRegister}
                            setVisibilidadCamisetas={setVisibilidadCamisetas}
                            setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga}
                            setTitulo={setTitulo}
                            setVisibilidadIniciarSesion={setVisibilidadIniciarSesion}
                            setVisibilidadCerrarSesion={setVisibilidadCerrarSesion}
                            todasLasCamisetas={camisetas}
                            setCamisetasVisibles={setCamisetasVisibles}  />
                    </div>
                    <div style={{ display: visibilidadRegister}}>
                        <Register
                            setVisibilidadLogin={setVisibilidadLogin}
                            setVisibilidadRegister={setVisibilidadRegister}
                            setVisibilidadCamisetas={setVisibilidadCamisetas}
                            setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga}
                            setTitulo={setTitulo}
                            setVisibilidadIniciarSesion={setVisibilidadIniciarSesion}
                            setVisibilidadCerrarSesion={setVisibilidadCerrarSesion}
                            todasLasCamisetas={camisetas}
                            setCamisetasVisibles={setCamisetasVisibles}  />
                    </div>
                    <div style={{ display: visibilidadPedidos}}>
                        <Pedidos  
                            pedidos={pedidos}/>
                    </div>
                    <div style={{ display: visibilidadCarrusel}}>
                        <Carousel/>
                    </div>
                    <div style={{ display: visibilidadChatGPT}}>
                        <ChatGPT
                            busquedaChatGPT={busquedaChatGPT}
                            respuestaChatGPT={respuestaChatGPT}
                            setRespuestaChatGPT={setRespuestaChatGPT}/>
                    </div>
                    <div style={{ display: visibilidadFiltrarLiga }}>
                        <FiltrarPorLigas 
                            ligas={ligas} 
                            setVisibilidadFiltrarLiga={setVisibilidadFiltrarLiga} 
                            setCamisetasVisibles={setCamisetasVisibles} 
                            setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                            setEquiposVisibles={setEquiposVisibles} 
                            setTitulo={setTitulo} 
                            setIdLiga={setIdLiga}
                            setBusquedaChatGPT={setBusquedaChatGPT}
                            setRespuestaChatGPT={setRespuestaChatGPT}
                            setVisibilidadChatGPT={setVisibilidadChatGPT} />
                    </div>
                    <div style={{ display: visibilidadFiltrarEquipo }}>
                        <FiltrarPorEquipos  
                            equipos={equiposVisibles} 
                            setCamisetasVisibles={setCamisetasVisibles} 
                            setVisibilidadFiltrarEquipo={setVisibilidadFiltrarEquipo} 
                            setTitulo={setTitulo}
                            setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                            setTituloLiga={setTituloLiga}
                            setBusquedaChatGPT={setBusquedaChatGPT}
                            setRespuestaChatGPT={setRespuestaChatGPT} />
                    </div>
                    <div style={{ display: visibilidadCamisetas }} >
                        <ConjuntoCamisetas 
                            camisetas={camisetasVisibles}
                            setCamisetaActual={setCamisetaActual} 
                            setVisibilidadCamisetas={setVisibilidadCamisetas}
                            setVisibilidadFiltrarEquipo = {setVisibilidadFiltrarEquipo} 
                            setVisibilidadFiltrarLiga = {setVisibilidadFiltrarLiga}
                            setVisibilidadCamisetaActual={setVisibilidadCamisetaActual}
                            setTitulo={setTitulo}
                            setVisibilidadAtrasLiga={setVisibilidadAtrasLiga}
                            setVisibilidadAtrasEquipo={setVisibilidadAtrasEquipo}
                            setTituloLiga={setTituloLiga} 
                            setTituloEquipo={setTituloEquipo}
                            setIdLiga={setIdLiga}
                            setIdEquipo={setIdEquipo}
                            setVisibilidadChatGPT={setVisibilidadChatGPT} />
                    </div>
                    <div style={{ display: visibilidadCamisetaActual }}>
                        <Camiseta 
                            camiseta={camisetaActual}
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                            total={total}
                            setTotal={setTotal}
                            talle={talle}
                            setTalle={setTalle}
                            mensajeTalle={mensajeTalle}
                            setMensajeTalle={setMensajeTalle}
                        />
                </div>
            </div>
            <Footer/>
        </div>
    );
  }

  export async function getServerSideProps() {
    let camisetas = await getCamisetas();
    let ligas = await getLigas();
    return {
      props: {
        camisetas,
        ligas,
      },
    };
  }