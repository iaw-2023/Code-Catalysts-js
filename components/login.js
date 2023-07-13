import { useState } from "react";
import { login} from "../data/api";

export default function Login({
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
    const [email, setEmail] = useState(null);
    const [contraseña, setContraseña] = useState(null);

    const handleClickIniciarSesion = async () => {
        if (email == null) {
          alert("Por favor ingrese su correo electrónico.");
        } else {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const isValidEmail = emailRegex.test(email);
          if (isValidEmail) {
            if (contraseña == null) {
              alert("Por favor ingrese su contraseña.");
            } else {
              
              try {
                const validacion = await login(email, contraseña);
      
                if (validacion.login) {
                  alert("Ha iniciado sesión correctamente como " + email);
                  localStorage.setItem("usuario", email);
                  localStorage.setItem("token", validacion.token);
      
                  setVisibilidadLogin("none");
                  setVisibilidadCamisetas("block");
                  setVisibilidadFiltrarLiga("block");
                  setTitulo("Todas las camisetas");
                  setVisibilidadIniciarSesion("none");
                  setVisibilidadCerrarSesion("block");
                  setCamisetasVisibles(todasLasCamisetas);
                } else {
                  alert("Credenciales inválidas");
                }
              } catch (error) {
                console.error("Ocurrió un error en la solicitud:", error);
                alert("Error al iniciar sesión");
              }
            }
          } else {
            alert("Debe ingresar un correo electrónico válido.");
          }
        }
        setEmail(null);
        setContraseña(null);
    };

    const handleClickRegistrarse = () => {
        setVisibilidadLogin("none");
        setTitulo("Registrarse");
        setVisibilidadRegister("block");
    }
    return ( 
        <div>
            <form className="formulario">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">Correo electrónico</label>
                    <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Constraseña</label>
                    <input type="password" id="form2Example2" class="form-control" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClickIniciarSesion}>Ingresar</button>
            </form>
            <div class="text-center">
                <p>¿No tienes un usuario?</p>
                <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClickRegistrarse}>Registrate</button>
            </div>
        </div>
    );
}