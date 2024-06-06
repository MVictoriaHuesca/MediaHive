import React, { useState, useRef, useEffect } from "react";
import "../styles/Ayuda.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

// Importar iconos de Material-UI
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MovieIcon from '@mui/icons-material/Movie';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HiveIcon from '@mui/icons-material/Hive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

//-------------------------------------------------------------//
// Importar imágenes de las secciones
//
import barranav from "../Images/Ayuda/Música/barra.png";
import Ultimosestrenos from "../Images/Ayuda/Música/estrenos.png";
import Maspopulares from "../Images/Ayuda/Música/popu.png";
import Top10 from "../Images/Ayuda/Música/top.png";
// 
import resultados from "../Images/Ayuda/Música/resultados.png";
import artista from "../Images/Ayuda/Música/artista.png";
//
import reproductor from "../Images/Ayuda/Música/repro.png";
import titulo from "../Images/Ayuda/Música/titulo.png";
import artis from "../Images/Ayuda/Música/artis.png";
import valorar from "../Images/Ayuda/Música/valorar.png";
import favoritos from "../Images/Ayuda/Música/fav.png";
import comentarios from "../Images/Ayuda/Música/comen.png";
import vercomentarios from "../Images/Ayuda/Música/coments.png";
//
import barranavpelis from "../Images/Ayuda/Peliculas/barranav.png";
import estrenos from "../Images/Ayuda/Peliculas/estrenos.png";
import guardadas from "../Images/Ayuda/Peliculas/guardadas.png";
import popu from "../Images/Ayuda/Peliculas/popu.png";
import top from "../Images/Ayuda/Peliculas/top.png";
//
import resultadopeli from "../Images/Ayuda/Peliculas/resultadopeli.png";
import coment from "../Images/Ayuda/Peliculas/coment.png";
import coment2 from "../Images/Ayuda/Peliculas/coment2.png";
import fav from "../Images/Ayuda/Peliculas/fav.png";
import pelisimilares from "../Images/Ayuda/Peliculas/pelisimilares.png";
import portadapeli from "../Images/Ayuda/Peliculas/portadapeli.png";
import sinopsis from "../Images/Ayuda/Peliculas/sinopsis.png";
import titulopeli from "../Images/Ayuda/Peliculas/titulopeli.png";
//
import barranavseries from "../Images/Ayuda/Series/barranav.png";
import top10s from "../Images/Ayuda/Series/top10s.png";
import emision from "../Images/Ayuda/Series/emision.png";
import popul from "../Images/Ayuda/Series/popul.png";
import result from "../Images/Ayuda/Series/result.png";
//
import favor from "../Images/Ayuda/Series/favor.png";
import nombre from "../Images/Ayuda/Series/nombre.png";
import portadaser from "../Images/Ayuda/Series/portadaser.png";
import simil from "../Images/Ayuda/Series/simil.png";
import sinop from "../Images/Ayuda/Series/sinop.png";
import escribir from "../Images/Ayuda/Series/escribir.png";
import ver from "../Images/Ayuda/Series/ver.png";
//
import canciones from "../Images/Ayuda/Biblioteca/canciones.png";
import pelis from "../Images/Ayuda/Biblioteca/pelis.png";
import series from "../Images/Ayuda/Biblioteca/series.png";
//
import elegir from "../Images/Ayuda/Perfil/elegir.png";
import fotoinicio from "../Images/Ayuda/Perfil/fotoinicio.png";
import nom from "../Images/Ayuda/Perfil/nom.png";
import elim from "../Images/Ayuda/Perfil/elim.png";


//<-------------------------------------------------------------------------------------------------------->//
//<-------------FUNCIÓN PARA MOSTRAR CUADRO DE ERROR SI EL USARIO NO TIENE CUENTA-------------------------->//
//<-------------------------------------------------------------------------------------------------------->//
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ paddingBottom: '1vh' }}>

                <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '18px', padding: '0', fontWeight: 'bold' }}>
                    ¡Debes iniciar sesión para enviar una sugerencia!
                </Modal.Title>

            </Modal.Header>
            <Modal.Body style={{ paddingTop: '1vh' }}>
                <p style={{ marginBottom: '2vh', }}>Inicia sesión o crea una cuenta nueva para enviar una sugerencia: </p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Link to="/CrearCuenta">
                        <Button className="registro-cancion" style={{ marginLeft: '2vh' }}>Registrarse</Button>
                    </Link>
                    <Link to="/InicioSesion">
                        <Button className="inicioSesion-cancion" >Iniciar Sesion</Button>
                    </Link>
                </div>
            </Modal.Body>

            <Modal.Footer style={{ padding: '0', height: '1px' }}>
                ´{/*<Button onClick={props.onHide} class="cerrar-cancion">Cerrar</Button>*/}
            </Modal.Footer>

        </Modal>
    );
}

//<-------------------------------------------------------------------------------------------------------->//



//<-------------------------------------------------------------------------------------------------------->//
//<------------------------------------------FUNCIÓN AYUDA------------------------------------------------->//
//<-------------------------------------------------------------------------------------------------------->//
function Ayuda() {

    // Estado para almacenar el comentario del usuario
    const [userComment, setUserComment] = useState("");

    const [modalShow, setModalShow] = React.useState(false);

    // Obtener el nombre del usuario
    const usuario = localStorage.getItem('username');

    // Función para manejar el cambio en el cuadro de texto del comentario del usuario
    const handleUserCommentChange = (event) => {
        setUserComment(event.target.value); // Actualiza el comentario del usuario
    };

    // Función para manejar el envío del comentario del usuario
    const handleUserCommentSubmit = () => {
        if (userComment.trim() !== "") {
            setUserComment(""); // Limpiar el cuadro de texto después de enviar el comentario
        }
    };

    const [show, setShow] = useState(false);
    const target = useRef(null);

    {/*------------------------------------------------QUIENES-SOMOS--------------------------------------------------------------- */ }
    return (
        <div class="container-menu">
            <Accordion defaultActiveKey="0" flush className="items">
                <Accordion.Item eventKey="1" className="quienes-somos">
                    <Accordion.Header>
                        <GroupsIcon id="icono-grupo" />
                        <strong>¿Quiénes somos?</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        ¡Hola a todos!<br /><br />
                        Somos un grupo de estudiantes de la Escuela Técnica Superior de Ingenieros Informáticos (ETSII) en la Universidad de Málaga (UMA).<br />
                        Con mucho entusiasmo y dedicación hemos desarrollado nuestra primera aplicación web llamada MediaHive
                        que tiene como objetivo ofrecer a los usuarios una plataforma donde puedan disfrutar de música, películas y series.<br />
                        Estamos comprometidos a seguir mejorando MediaHive, añadiendo nuevas funcionalidades y escuchando el feedback de nuestros usuarios para adaptarnos a sus necesidades. <br />
                        Este es solo el comienzo de nuestro viaje en el mundo del desarrollo de software, y estamos emocionados por lo que el futuro nos depara.<br /><br />
                        ¡Gracias por acompañarnos en esta presentación y esperamos que disfruten usando MediaHive tanto como nosotros hemos disfrutado creándola!<br />
                    </Accordion.Body>
                </Accordion.Item>

                {/*------------------------------------------------MUSICA--------------------------------------------------------------- */}

                <Accordion.Item eventKey="2" className="musica">
                    <Accordion.Header>
                        <AudiotrackIcon id="icono-musica" />
                        <strong>Sección Música</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <strong>¿Qué aparece al inicio de la seccion?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    En nuestra sección de música podrás encontrar las últimas novedades, los temas más populares y el top 10 de España.
                                    Además, podrás buscar tus canciones favoritas y escucharlas online o reproducirlas en Spotify.

                                    <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Barra de navegación</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={barranav} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt="ayuda barra de búsqueda de cancion"/>
                                                En la barra de navegación podrás buscar la canción que desees.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Últimos estrenos</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={Ultimosestrenos} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt="ayuda últimos estrenos de canciones"/>
                                                Aquí podrás descubrir las últimas canciones que se han lanzado.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <strong>Más populares</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={Maspopulares} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt="ayuda canciones más escuchadas"/>
                                                Aquí podrás ver las canciones más escuchadas del momento.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <strong>Top 10 España</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={Top10} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt="ayuda top 10 canciones más escuchadas"/>
                                                Aquí podrás ver las 10 canciones más escuchadas en España.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <strong>Buscar una canción</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Podrás buscar una canción por título o por artista.
                                    <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Buscar una canción por título</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={resultados} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt="ayuda resultados buscar canción"/>
                                                <strong>1.</strong> Cuando buscas el título de una canción, aparecerán los resultados de la búsqueda.
                                                El primer resultado será la canción que buscas, y los demás serán canciones relacionadas.<br />
                                                <strong>2.</strong> Puedes escuchar la canción online o abrirla en Spotify.<br />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Buscar una canción por artista</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={artista} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt="ayuda resultados buscar artista"/>
                                                Cuando buscas un artista, aparecerán sus canciones más populares y podrás escucharlas online o abrirlas en Spotify.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <strong>¿Qué veo cuando busco una canción?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Reproductor de la canción online</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={reproductor} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} alt=""/>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Título de la canción</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={titulo} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <strong>Artista</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={artis} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <strong>Valorar la canción</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={valorar} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <strong>Guardar en favoritos</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={favoritos} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <strong>Escribir comentarios</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={comentarios} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                <strong>Ver los comentarios</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={vercomentarios} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>

                {/*------------------------------------------------PELICULAS--------------------------------------------------------------- */}

                <Accordion.Item eventKey="3" className="peliculas">
                    <Accordion.Header>
                        <MovieIcon id="icono-peliculas" />
                        <strong>Sección Películas</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="0" flush className="sub-items-pelicula">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <strong>¿Qué aparece al inicio de la seccion?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    En nuestra sección de películas podrás encontrar las películas más populares, el top 10, tus películas guardadas y los últimos estrenos.
                                    Además, podrás buscar tus películas favoritas, añadirlas a favoritos, darles una valoración, poner comentarios y ver los comentarios de otros usuarios.
                                    <Accordion defaultActiveKey="0" flush className="sub-items-pelicula">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Barra de navegación</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={barranavpelis} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                En la barra de navegación podrás buscar la película que desees.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Películas populares</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={popu} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás descubrir las últimas películas más populares del momento.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <strong>Top 10 películas</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={top} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás ver un top de películas.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <strong>Películas guardadas</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={guardadas} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás ver las películas que has guardado en favoritos.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <strong>Últimos estrenos</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={estrenos} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás ver las películas que se han estrenado recientemente.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <strong>Buscar una película</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Podrás buscar una película por su título.
                                    <Accordion defaultActiveKey="0" flush className="sub-items-pelicula">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Buscar una película por título</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={resultadopeli} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Cuando buscas el título de una película, aparecerán los resultados de la búsqueda.
                                                Aparecerán varias portadas de títulos relacionados.<br />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <strong>¿Qué veo cuando busco una película?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-pelicula">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Portada de la película</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={portadapeli} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Título de la película</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={titulopeli} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <strong>Películas similares</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={pelisimilares} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <strong>Sinopsis</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={sinopsis} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <strong>Guardar en favoritos</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={fav} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <strong>Escribir comentarios</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={coment} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                <strong>Ver los comentarios</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={coment2} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>

                {/*------------------------------------------------SERIES--------------------------------------------------------------- */}

                <Accordion.Item eventKey="4" className="series">
                    <Accordion.Header>
                        <SlideshowIcon id="icono-series" />
                        <strong>Sección Series</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="0" flush className="sub-items-series">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <strong>¿Qué aparece al inicio de la seccion?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    En nuestra sección de series podrás encontrar las series más populares, el top 10, tus series guardadas y los últimos estrenos.
                                    Además, podrás buscar tus series favoritas, añadirlas a favoritos, darles una valoración, poner comentarios y ver los comentarios de otros usuarios.
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Barra de navegación</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={barranavseries} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                En la barra de navegación podrás buscar la serie que desees.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Series populares</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={popul} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás descubrir las últimas series más populares del momento.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <strong>Top 10 Series</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={top10s} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás ver un top de series.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <strong>Series guardadas</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={guardadas} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás ver las series que has guardado en favoritos.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <strong>En emisión</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={emision} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Aquí podrás ver las series que están en emisión actualmente.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <strong>Buscar una serie</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Podrás buscar una serie por su título.
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Buscar una serie por título</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={result} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                                Cuando buscas el título de una serie, aparecerán los resultados de la búsqueda.
                                                Aparecerán varias portadas de títulos relacionados.<br />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <strong>¿Qué veo cuando busco una serie?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <strong>Portada de la serie</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={portadaser} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <strong>Título de la serie</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={nombre} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <strong>Series similares</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={simil} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <strong>Sinopsis</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={sinop} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <strong>Guardar en favoritos</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={favor} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <strong>Escribir comentarios</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={escribir} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                <strong>Ver los comentarios</strong>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <img src={ver} style={{
                                                    width: '1000px', height: '500px',
                                                    display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                                }} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>

                {/*------------------------------------------------BIBLIOTECA--------------------------------------------------------------- */}

                <Accordion.Item eventKey="5" className="biblioteca">
                    <Accordion.Header>
                        <HiveIcon id="icono-biblioteca" />
                        <strong>Tu Biblioteca</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        Tienes una biblioteca donde podrás ver todas las canciones, películas y series que has guardado en favoritos.
                        <Accordion defaultActiveKey="0" flush className="sub-items-series">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <strong>Tus Canciones</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img src={canciones} style={{
                                            width: '1000px', height: '500px',
                                            display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                        }} />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <strong>Tus Películas</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img src={pelis} style={{
                                            width: '1000px', height: '500px',
                                            display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                        }} />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <strong>Tus Series</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img src={series} style={{
                                            width: '1000px', height: '500px',
                                            display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                        }} />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>

                {/*------------------------------------------------PERFIL--------------------------------------------------------------- */}

                <Accordion.Item eventKey="6" className="perfil">
                    <Accordion.Header>
                        <AccountBoxIcon id="icono-perfil" />
                        <strong>Tu Perfil</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        En tu perfil podrás ver tus datos personales, cambiar tu nombre o tu foto de perfil y cerrar sesión.
                        <Accordion defaultActiveKey="0" flush className="sub-items-series">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <strong>¿Cómo accedo a Mi Perfil?</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img alt="Para acceder a tu perfil, haz clic en tu foto de perfil en la esquina superior derecha de la pantalla"
                                            src={fotoinicio} style={{
                                                width: '1000px', height: '500px',
                                                display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                            }} />
                                        <br />Para acceder a tu perfil, haz clic en tu foto de perfil en la esquina superior derecha de la pantalla.<br />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <strong>Cambiar foto de perfil</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img src={elegir} style={{
                                            width: '1000px', height: '500px',
                                            display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                        }} />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <strong>Eliminar la foto de perfil </strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img src={elim} style={{
                                            width: '1000px', height: '500px',
                                            display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                        }} />
                                        Esta acción deja a tu foto de perfil en blanco.<br />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <strong>Cambiar tu nombre de usuario </strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="0" flush className="sub-items-series">
                                        <img src={nom} style={{
                                            width: '1000px', height: '500px',
                                            display: 'flex', marginLeft: '1rem', marginBottom: '25px'
                                        }} />
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/*------------------------------------------------SUGERENCIAS--------------------------------------------------------------- */}

            <div className="container-sugerencia">

                <h2 style={{marginLeft: '2vh', marginTop: '12vh', marginBottom:'3vh'}}>¿Te gustaría enviarnos una sugerencia?</h2>
                <div>
                    {/* Cuadro de texto para la opinión del usuario */}
                    <textarea
                        placeholder="Escribe tu sugerencia aquí..."
                        value={userComment}
                        onChange={handleUserCommentChange}
                        className="UserOpinion"
                        style={{ width: '40%', height: '18vh', marginLeft: '2vh', marginBottom: '1.5vh'}}
                    />
                    {/* Botón para añadir comentario */}

                </div>
                {usuario ? (
                    <>
                        <Button alt="Enviar sugerencia" variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#009f04', color: 'white', marginLeft:'2vh' }} ref={target} onClick={() => { handleUserCommentSubmit(); setShow(!show) }} >
                            Enviar sugerencia
                        </Button>
                        <Overlay target={target.current} show={show} placement="right">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    ¡Gracias!
                                </Tooltip>
                            )}
                        </Overlay>
                    </>
                ) : (
                    <>
                        <Button alt="Enviar sugerencia" variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#009f04', color: 'white', marginLeft:'2vh' }} onClick={() => setModalShow(true)} >
                            Enviar sugerencia
                        </Button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Ayuda;

