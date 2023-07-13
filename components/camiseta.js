import styles from './camiseta.module.css';

export default function Camiseta(props) {
    let descripcion = props.descripcion;
    let precio = props.precio;
    let imagen = props.imagen;

    return (
        <div className={styles.contenedor}>  
            <img                
                src={"data:image/jpg;base64," + imagen}
                width={100}
                height={100}
                alt={'Camiseta ' + descripcion}
            />
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
        </div>
  );
}