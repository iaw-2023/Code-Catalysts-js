import styles from './pedidoCamiseta.module.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {FormGroup, Label, Input} from 'reactstrap';
import { useEffect } from 'react';

export default function Camiseta({
    camiseta,
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
    total,
    setTotal,
    talle,
    setTalle,
    mensajeTalle,
    setMensajeTalle
}) {

    let id,imagen,descripcion,precio,talles; 

    const [key, setKey] = useState(0);

    //al iniciar la pagina carga en key lo que esta en el key de localStorage
    useEffect(() => {
        const keyObtenida = localStorage.getItem('key');
        if (keyObtenida) {
            setKey(Number(keyObtenida));
        }
      }, []);

    //cada vez que key se actualiza, su contenido se guarda en el key de localStorage
    useEffect(() => {
        localStorage.setItem('key', Number(key));
        }, [key]);
    

    if(camiseta != null){
        id = camiseta.id_camiseta;
        descripcion = camiseta.descripcion;
        imagen = camiseta.imagen;
        precio = camiseta.precio;
        talles = camiseta.talles.split(' ');
    }
    const cambioTalle=e=>{
        setTalle(e.target.value);
        setMensajeTalle("Talle seleccionado: "+e.target.value);
        
    }

    function agregarAlCarrito() {
        if (talle == null) {
            alert("Por favor seleccione un talle de la camiseta.");
        }
        else {
            let producto = {
                key: key,
                id: id,
                descripcion: descripcion,
                talle: talle,
                precio: precio 
            };
            setKey(key + 1);
            setAllProducts([...allProducts,producto]);
            setCountProducts(countProducts + 1);
            setTotal(total + Number(precio));
            alert("La camiseta "+descripcion+" fue agregada a su carrito.");
            setTalle(null);
            setMensajeTalle("Selecciona un talle");
        }
    };

    if(camiseta !== null){
        return (
            <div className={styles.contenedorPrincipal}>
                <img
                    className={styles.imagen}
                    src={"data:image/jpg;base64," + imagen}
                    width={400}
                    height={400}
                    alt={'Camiseta ' + descripcion}
                />
                <div className={styles.contenedorSecundario}>
                    <h2 className={styles.descripcion}>{descripcion}</h2>
                    <h2 className={styles.precio}>${precio}</h2>
                    <FormGroup>
                        <h4>
                            {mensajeTalle}
                        </h4>
                        <FormGroup className={styles.formGroupRadios}>
                            {talles.map((talle,index) => (
                                <FormGroup>
                                    <Input
                                        className={styles.input}
                                        id={"radio"+index}
                                        type="radio"
                                        value={talle}
                                        checked={talle == {talle} ? true : false}
                                        onChange={cambioTalle}
                                    />
                                    <Label className={styles.label} for={"radio"+index}>
                                        {talle}
                                    </Label>
                                </FormGroup>
                            ))}
                        </FormGroup>
                    </FormGroup>
                    <button 
                        onClick={() => agregarAlCarrito()}
                        className={styles.boton}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        );
    }
}