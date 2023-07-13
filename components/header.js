import { useState } from "react";

export default function Header ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
    total,
    setTotal,
    titulo,
    visibilidadTitulo,
    setVisibilidadMercadoPago,
    setVisibilidadCamisetaActual,
    setVisibilidadCamisetas,
    setVisibilidadFiltrarLiga,
    setVisibilidadFiltrarEquipo,
    setTitulo,
    setVisibilidadCarrito,
    setVisibilidadChatGPT,
    setRespuestaChatGPT
}) {    
    const [active, setActive] = useState(false);
    
    const eliminarCamiseta = product => {
		const results = allProducts.filter(
			item => item.key !== product.key
		);

		setCountProducts(countProducts - 1);
		setAllProducts(results);
        setTotal(total - Number(product.precio));
	};

    const vaciarCarrito = () => {
		setAllProducts([]);
		setCountProducts(0);
        setTotal(0);
	};

    const finalizarCompra = async () => {
        const usuario = localStorage.getItem("usuario");
        if (usuario == '' || usuario == null) {
            alert("Antes de finalizar la compra debe iniciar sesion.");
        }
        else {
            // Mostrar solo mp
            setVisibilidadMercadoPago("block")
            setVisibilidadCamisetaActual("none");
            setVisibilidadCamisetas("none");
            setVisibilidadFiltrarLiga("none");
            setTitulo("");
            setVisibilidadFiltrarEquipo("none");
            setVisibilidadCarrito("none");
            setVisibilidadChatGPT("none");
            setRespuestaChatGPT('');
            /*const pedido = await registrarPedido(json,usuario,token);
            if (pedido == null) {
                alert("Ocurrió un error al finalizar la compra.")
            }
            else {
                vaciarCarrito();
                alert("Su compra se ha realizado con éxito.");
            }*/
        }
	};

    return (
        <header>
            <h1 className="titulo" style={{ display: visibilidadTitulo }}> {titulo} </h1>
            <div className='container-icon'>
                <div
                    className='container-cart-icon'
                    onClick={() => setActive(!active)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon-cart'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                        />
                    </svg>
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>

                <div
                    className={`container-cart-products ${
                        active ? '' : 'hidden-cart'
                    }`}
                >
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product' key={product.id}>
                                        <div className='info-cart-product'>
                                            <span className='titulo-producto-carrito'>
                                                {product.descripcion}
                                            </span>
                                            <p className='titulo-producto-carrito'>
                                                {product.talle}
                                            </p>
                                            <span className='precio-producto-carrito'>
												${product.precio}
											</span>
                                        </div>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='currentColor'
                                            className='icon-close'
                                            onClick={() => eliminarCamiseta(product)}
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>
                            <button className='btn-clear-all' onClick={vaciarCarrito}>
                                Vaciar Carrito
                            </button>
                            <button className='btn-clear-all' onClick={finalizarCompra}>
                                Finalizar compra
                            </button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
}