import React from "react";
import '../styles/homestyles.css';

function Home() {

    cambiarTituloPagina("Home");
    const handleClick = (titulo) => {
        navigate("/CrearCuenta.jsx"); // Utiliza navigate en lugar de history.push
    };

    return (
        <>
        <div class="body">
            <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link> 
            <div class="cuadro-texto">
                <h2>¡Bienvenidos a nuestra comunidad sobre multimedia!</h2>
                <p class="text-wrap">
                    Organiza tus series, películas o música favoritos en un solo lugar de forma sencilla. <br></br>
                    Descubre cuáles son los contenidos en tendencia y vota por tu contenido favorito. <br></br>
                    Debate en los diversos foros el últmo capítulo de tu serie en emisión. <br></br>
                </p>
            </div>
            <buttom class="boton-crear-cuenta" onClick={() => handleClick("CrearCuenta")}>CREAR CUENTA</buttom>
        </div>
        </>
    );
}

export default Home;

    