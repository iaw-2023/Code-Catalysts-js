import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';
import { registrarPedido } from "../data/api";

export default function MercadoPago({
    total,
    setVisibilidadMercadoPago,
    setVisibilidadContenido,
    allProducts,
    setAllProducts,
    setTotal,
    setCountProducts
}) {
    initMercadoPago('TEST-d9fbc7c1-c76a-4e0a-bcd0-2a74330f9401');
    const initialization = {
        amount: total
    };

    const vaciarCarrito = () => {
		setAllProducts([]);
		setCountProducts(0);
        setTotal(0);
	};

    const guardarPedido = async () => {
        const usuario = localStorage.getItem("usuario");
        const token = localStorage.getItem("token");
    
        let json = '';
    
        allProducts.forEach((producto, index) => {
            if (index === 0) {
                json = '{"id_camiseta": ' + producto.id + ',"talle": "' + producto.talle + '"}';
            } else {
                json = json + ',{"id_camiseta": ' + producto.id + ',"talle": "' + producto.talle + '"}';
            }
        });
        const pedido = await registrarPedido(json, usuario, token);
    }

    const onSubmit = async (formData) => {
    return new Promise((resolve, reject) => {
        fetch("https://garcia-sanchez-laravel-genaro08.vercel.app/rest/process_payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.status !== null && response.status == "approved"){
                alert("El pago se realizó correctamente.");
                guardarPedido();
                vaciarCarrito();
            }else{
                alert("El pago no pudo realizarse, intentelo mas tarde");
            }
            setVisibilidadContenido("block");
            setVisibilidadMercadoPago("none");
        })
        .catch((error) => {
            console.log("ERROR: "+error);
            // manejar la respuesta de error al intentar crear el pago
            alert("Error al realizar el pago, intentelo mas");
        });
    });
    };
    const onError = async (error) => {
        // callback llamado para todos los casos de error de Brick
        console.log("ERROR: "+error);
    };
    const onReady = async () => {
        
    };
    return (
        <div>  
            <CardPayment
                    initialization={initialization}
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                />
        </div>
  );
}