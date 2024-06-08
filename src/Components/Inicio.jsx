import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/Inicio.css";

function Inicio() {

  const username = localStorage.getItem('username');
  //localStorage.clear();

  return (
    <div className="content-inicio">
          <link href='https://fonts.googleapis.com/css?family=Livvic'rel='stylesheet'></link> 
          <div class="cuadro-texto">
              <h2>¡Bienvenidos a nuestra comunidad sobre multimedia!</h2>
              <p class="text-wrap">
                  Organiza tus series, películas o música favoritos en un solo lugar de forma sencilla. <br></br>
                  Descubre cuáles son los contenidos en tendencia y vota por tu contenido favorito. <br></br>
                  Debate en los diversos foros el último capítulo de tu serie en emisión. <br></br>
              </p>
          </div>
          {username ? (
                    <></>
                ) : (
                  <Link to="/CrearCuenta">
                    <button className="registro">Crear Nueva Cuenta</button>
                  </Link>
                )}
            
      </div>
  );
}

export default Inicio;