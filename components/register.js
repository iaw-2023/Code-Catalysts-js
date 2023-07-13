import { useState } from "react";
import { register } from "../data/api";

export default function Register({
    setVisibilidadLogin,
    setVisibilidadRegister,
    setVisibilidadCamisetas,
    setVisibilidadFiltrarLiga,
    setTitulo,
    setVisibilidadIniciarSesion,
    setVisibilidadCerrarSesion,
    todasLasCamisetas,
    setCamisetasVisibles
}) {  
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleClickRegistrarse = async () => {
        if (email === '') {
          alert("Por favor ingrese su correo electrónico.");
        } else {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const isValidEmail = emailRegex.test(email);
          if (isValidEmail) {
            if (contraseña === '') {
              alert("Por favor ingrese su contraseña.");
            } else {
              try {
                const validacion = await register(email, contraseña);
                if (validacion.registro) {
                  alert("Usuario registrado correctamente");
                  localStorage.setItem("usuario", email);
                  localStorage.setItem("token", validacion.token);
                  setContraseña('');
                  setEmail('');
                  setVisibilidadLogin("none");
                  setVisibilidadIniciarSesion("none");
                  setVisibilidadCamisetas("block");
                  setVisibilidadFiltrarLiga("block");
                  setTitulo("Todas las camisetas");
                  setVisibilidadRegister("none");
                  setVisibilidadCerrarSesion("block");
                  setCamisetasVisibles(todasLasCamisetas);
                } else {
                  alert("Hay un error en las credenciales.");
                }
              } catch (error) {
                alert("Error al registrar. Por favor, intenta nuevamente.");
              }
            }
          } else {
            alert("Debe ingresar un correo electrónico válido.");
          }
        }
      }
    return ( 
        <form className="formulario">
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Correo electrónico</label>
                <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Constraseña</label>
                <p className="mensajePassword">La contraseña debe contener al menos 8 caracteres y 1 número.</p>
                <input type="password" id="form2Example2" class="form-control" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClickRegistrarse}>Ingresar</button>
        </form>
    );
}