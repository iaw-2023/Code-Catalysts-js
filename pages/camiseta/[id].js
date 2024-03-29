import Head from 'next/head';
import NavBar from '../../components/navbar';
import Header from '../../components/header';
import PedidoCamiseta from '../../components/pedidoCamiseta';
import MercadoPago from '../../components/mercadoPago';
import Footer from '../../components/footer';
import Error404 from '../../components/error404';
import { getCamisetaPorID } from "../../data/api";
import { useState, useEffect } from "react";

export default function MostrarCamiseta({camiseta}) {

    const [allProducts, setAllProducts] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);
    const [visibilidadContenido, setVisibilidadContenido] = useState("block");
    const [visibilidadMercadoPago, setVisibilidadMercadoPago] = useState("none");

    //al iniciar la pagina carga en countProducts lo que esta en el cantProducts de localStorage
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
    useEffect(() => {
        const totalInicial = localStorage.getItem('total');
        if (totalInicial) {
            setTotal(Number(totalInicial));
        }
      }, []);
    useEffect(() => {
        localStorage.setItem('total', Number(total));
      }, [total]);
    useEffect(() => {
        const carrito = localStorage.getItem('carrito');
        if (carrito) {
            setAllProducts(JSON.parse(carrito));
        }
    }, []);
    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(allProducts));
    }, [allProducts]);

    if (camiseta != null && camiseta.length > 0) {
      return (
          <div>
            <Head>
                  <title>Camiseta {camiseta[0].descripcion}</title>
                  <link rel="icon" href="https://i.ibb.co/7WBsHrf/Logo.png" />
                  <script  src="/regist_serviceWorker.js"></script> 
                  <link rel="manifest" href="/manifest.json" />
              </Head>
              <NavBar
                setAllProducts={setAllProducts}
                setCountProducts={setCountProducts}
                setTotal={setTotal}
              />
              <div className='contenedorGeneral' style={{ display: visibilidadContenido}}>
                  <Header 
                      titulo={"Comprar Camiseta"}
                      allProducts={allProducts}
                      setAllProducts={setAllProducts}
                      countProducts={countProducts}
                      setCountProducts={setCountProducts}
                      total={total}
                      setTotal={setTotal}
                      setVisibilidadContenido={setVisibilidadContenido}
                      setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                  />
                  <PedidoCamiseta
                    camiseta={camiseta[0]}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    total={total}
                    setTotal={setTotal}
                  />
              </div>
              <div style={{ display: visibilidadMercadoPago}}>
                <MercadoPago
                    total={total}
                    setVisibilidadMercadoPago={setVisibilidadMercadoPago}
                    setVisibilidadContenido={setVisibilidadContenido}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    setTotal={setTotal}
                    setCountProducts={setCountProducts}
                />
              </div>
              <Footer/>
          </div>
      );
    }
    else {
      return <Error404/>;
    }
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    let camiseta;
    if (isNaN(Number(id))) {
      camiseta = null;
    }
    else {
      camiseta = await getCamisetaPorID(id);
    }
    return {
      props: {
        camiseta
      },
    };
}

