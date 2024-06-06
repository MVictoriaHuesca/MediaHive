
import React, { useEffect, useState, useRef } from "react";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "../styles/detallesPeliculasSeries-style.css";

//<-------------------------------------------------------------------------------------------------------->//
//<-------------FUNCIÓN PARA MOSTRAR CUADRO DE ERROR SI EL USARIO NO TIENE CUENTA-------------------------->//
//<-------------------------------------------------------------------------------------------------------->//

/* Función para mostrar cuadro de error si el usuario no tiene cuenta */
/* Función para mostrar cuadro de error si el usuario no tiene cuenta */
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
                    ¡Debes iniciar sesión para añadir un comentario!
                </Modal.Title>

            </Modal.Header>
            <Modal.Body style={{ paddingTop: '1vh' }}>
                <p style={{ marginBottom: '2vh', }}>Inicia sesión o crea una cuenta nueva para añadir comentarios: </p>
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
//<---------------------------------FUNCIONES Y CONSTANTES PARA SERIES------------------------------------->//
//<-------------------------------------------------------------------------------------------------------->//

function detallesSeries() {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const language = 'es-ES';
    const [similarSeries, setSimilarSeries] = useState([]);

    const [modalShowComentarios, setModalShowComentarios] = React.useState(false);
    const [modalShowGuardar, setModalShowGuardar] = React.useState(false);


    //<-------------------------------------------------------------------------------------------------------->//
    //<------------------------------FUNCIONES Y CONSTANTES PARA COMENTARIOS----------------------------------->//
    //<-------------------------------------------------------------------------------------------------------->//

    // Autores de comentarios
    const autores = [
        "John Doe", "Alice Smith", "Michael Johnson", "Emily Brown", "David Lee",
        "Emma Garcia", "Daniel Martinez", "Olivia Wilson", "James Taylor", "Sophia Anderson",
        "William Clark", "Ava Rodriguez", "Benjamin Hernandez", "Mia Moore", "Jacob Perez",
        "Charlotte Davis", "Alexander Gonzalez", "Amelia Martinez", "Ethan Wilson", "Harper Lopez",
        "Liam Thompson", "Isabella Carter", "Christopher Thomas", "Sophia Baker", "Ryan Reed",
        "Madison Young", "Elijah Scott", "Scarlett Evans", "Nathan Morris", "Grace Turner"
    ];

    // Comentarios
    const comentarios = [
        "Una serie de televisión emocionante que te deja al borde de tu asiento en cada episodio. ¡No puedo esperar para ver qué sucede a continuación!",
        "Una obra maestra del entretenimiento televisivo. La trama, los personajes y la cinematografía son absolutamente impresionantes.",
        "Una serie que te hace reflexionar sobre temas profundos mientras te mantiene enganchado con sus giros inesperados. ¡Una verdadera joya!",
        "Una sorpresa agradable que descubrí recientemente. ¡No puedo creer que no haya empezado a verla antes!",
        "Una montaña rusa de emociones. Esta serie te hará reír, llorar y sentirte completamente absorbido en su mundo.",
        "La química entre los personajes es excepcional. Te enamoras de ellos desde el primer episodio.",
        "Una serie que te deja pensando incluso después de que terminen los créditos finales. ¡Simplemente fascinante!",
        "Los efectos visuales son impresionantes. Te hacen creer que estás en otro universo por completo.",
        "Una serie innovadora que desafía las convenciones del género. ¡Definitivamente una de mis favoritas!",
        "La música de la serie es simplemente épica. Añade una capa adicional de emoción a cada escena.",
        "Los giros argumentales te mantienen en vilo en cada episodio. ¡Nunca sabes qué esperar a continuación!",
        "Una serie que te hace cuestionar tus propias creencias y percepciones. ¡Muy poderosa!",
        "Los personajes son tan realistas que sientes que podrían ser tus amigos. ¡Una serie verdaderamente cautivadora!",
        "Una montaña rusa de emociones. Te lleva en un viaje inolvidable a través de cada temporada.",
        "La cinematografía es impresionante. Cada escena es una obra de arte visual en sí misma.",
        "Una serie que te deja reflexionando sobre la vida mucho después de que termina. ¡Absolutamente inolvidable!",
        "Los diálogos son tan afilados que te mantienen pegado a la pantalla. ¡Una delicia para los amantes de la televisión!",
        "Una serie que te hace apreciar la complejidad de la vida humana. ¡Muy conmovedora y reveladora!",
        "La dirección es magistral. Cada episodio está cuidadosamente elaborado para mantener tu atención en todo momento.",
        "Una serie que te sumerge por completo en su mundo desde el primer episodio. ¡Absolutamente adictiva!",
        "Una historia tan relevante para la sociedad actual que te hace pensar profundamente sobre el mundo que nos rodea.",
        "La química entre el elenco es palpable. Te hacen creer en la historia que están contando.",
        "Los efectos especiales son tan realistas que te sumergen por completo en la atmósfera de la serie.",
        "Una serie que desafía tus expectativas y te deja con ganas de más. ¡Una verdadera obra maestra de la televisión contemporánea!",
        "Los temas tratados en esta serie son tan importantes y oportunos. ¡Te hacen reflexionar sobre cuestiones profundas de la sociedad!",
        "Una serie que te hace reír, llorar y emocionarte. ¡Una experiencia de visualización verdaderamente completa!",
        "La actuación es simplemente sobresaliente. Cada actor trae vida y profundidad a su personaje de una manera increíble.",
        "Una serie que te deja con un sentimiento de asombro y admiración. ¡Una verdadera joya del panorama televisivo!",
        "Una serie que demuestra el poder del medio televisivo para contar historias que resuenan profundamente en el corazón humano."
    ];

    // Estado para almacenar los comentarios aleatorios actuales
    const [comentariosAleatorios, setComentariosAleatorios] = useState([]);

    // Estado para almacenar el comentario del usuario
    const [userComment, setUserComment] = useState("");

    // Función para obtener un elemento aleatorio de un array
    const obtenerElementoAleatorio = (array) => {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        return array[indiceAleatorio];
    };

    // Función para generar 5 comentarios aleatorios y únicos
    const generarComentariosAleatorios = () => {
        const comentariosAleatorios = [];
        while (comentariosAleatorios.length < 4) {
            const comentario = obtenerElementoAleatorio(comentarios);
            const autor = obtenerElementoAleatorio(autores);
            if (!comentariosAleatorios.some((com) => com.texto === comentario)) {
                comentariosAleatorios.push({ texto: comentario, autor });
            }
        }
        setComentariosAleatorios(comentariosAleatorios);
    };

    // Función para manejar el envío del comentario del usuario
    const handleUserCommentSubmit = () => {
        if (userComment.trim() !== "") {
            const nuevoComentario = { texto: userComment, autor: localStorage.getItem('username') };
            setComentariosAleatorios((prevComments) => [...prevComments, nuevoComentario]);
            setUserComment(""); // Limpiar el cuadro de texto después de enviar el comentario
        }
    };

    // Función para manejar el cambio en el cuadro de texto del comentario del usuario
    const handleUserCommentChange = (event) => {
        setUserComment(event.target.value); // Actualiza el comentario del usuario
    };

    // Obtener el nombre del usuario
    const usuario = localStorage.getItem('username');

    //<-------------------------------------------------------------------------------------------------------->//

    //Series guardadas en biblioteca
    const [seriesSaved, setSeriesSaved] = useState(() => {
        const savedSeries = localStorage.getItem('seriesSaved');
        return savedSeries ? JSON.parse(savedSeries) : [];
    });

    const handleSerieSave = () => {
        if (seriesSaved.includes(serie.id)) {
            setSeriesSaved(seriesSaved.filter(serieId => serieId !== serie.id));
        } else {
            setSeriesSaved([...seriesSaved, serie.id]);
        }
    };

    // Función que realiza solicitudes a una API para obtener los detalles de una serie de televisión y 
    // una lista de series similares. 
    // También recupera datos guardados previamente del almacenamiento local.
    useEffect(() => {
        const fetchSerie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/tv/${id}?api_key=fd04580a5174281296d7de8867bc1fa0&language=${language}`
            );
            setSerie(data);
        };

        const fetchSimilarSeries = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=fd04580a5174281296d7de8867bc1fa0&language=~${language}`);
            setSimilarSeries(response.data.results);
        };

        const savedSeries = JSON.parse(localStorage.getItem('seriesSaved'));
        if (savedSeries) {
            setSeriesSaved(savedSeries);
        }

        fetchSerie();
        fetchSimilarSeries();
        setComentariosAleatorios([]); // Limpiar los comentarios al cargar una nueva serie
    }, [id]);

    // Función para que los datos se conserven incluso si el usuario actualiza o cierra la página
    useEffect(() => {
        localStorage.setItem('seriesSaved', JSON.stringify(seriesSaved));
    }, [seriesSaved]);

    // Función para generar comentarios aleatorios al cargar la página
    useEffect(() => {
        // Esta función se llamará directamente después de abrir la página
        generarComentariosAleatorios();
    }, []);

    if (!serie) {
        return <div>Cargando...</div>
    }

    // Estrellas de valoración de la serie 
    const fullStars = Math.floor(serie.vote_average / 2);
    const halfStar = serie.vote_average % 2 === 0 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStar;

    //<-------------------------------------------------------------------------------------------------------->//
    return (
        <div id="detallesSeries">
            <div className="mx-auto px-5 py-5 d-flex">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} style={{ height: '400px', width: 'auto', marginLeft: '2vh' }} />
                </div>
                <div className=" px-5 py-3" >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3>{serie.name}</h3>
                        {usuario ? (
                            <button onClick={handleSerieSave} aria-label="Añadir serie" style={{ border: 'none', background: 'transparent' }}>
                                {seriesSaved.includes(serie.id) ?
                                    <div title="Guardada">
                                        <BookmarkAddedIcon className="BookmarkaddedIcon" alt={"Guardado"} style={{ marginLeft: '10px', color: 'black' }} />
                                    </div>
                                    :
                                    <div title="Guardar">
                                        <BookmarkAddIcon className="BookmarkaddIcon" alt={"Guardar"} style={{ marginLeft: '10px', color: 'black' }} />
                                    </div>}
                            </button>
                        ) : (
                            <>
                                <button onClick={() => setModalShowGuardar(true)} style={{ border: 'none', background: 'transparent' }}>
                                    <BookmarkAddIcon
                                        className="BookmarkIcon"
                                        alt={"Guardar"}
                                        style={{ marginLeft: '10px', color: 'black' }}
                                    />
                                </button>
                                <MyVerticallyCenteredModal
                                    show={modalShowGuardar}
                                    onHide={() => setModalShowGuardar(false)}
                                    error='guardar series'
                                />
                            </>
                        )}

                    </div>
                    <div>
                        {'⭐'.repeat(fullStars)}
                        {'☆'.repeat(halfStar)}
                        {'☆'.repeat(emptyStars)}
                        <span style={{ color: 'black' }}> {serie.vote_average}</span>
                    </div>
                    <div className="py-4">
                        <p style={{ fontSize: '20px' }}>{serie.overview}</p>
                    </div>
                </div>

                <div style={{ marginLeft: 'auto' }}>
                    <h3 className="mx-auto py-2" style={{ textAlign: 'center' }}>Series similares</h3>
                    <div className="mx-auto px-5 py-3" style={{ display: 'flex', flexWrap: 'wrap', width: '350px' }}>
                        {similarSeries.slice(0, 4).map(similarSerie => (
                            <div key={similarSerie.id} style={{ width: '50%', padding: '10px' }}>
                                <Link to={`/detallesSeries/${similarSerie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${similarSerie.poster_path}`} alt={similarSerie.name} style={{ width: '85%', height: 'auto' }} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*<---------------------------------COMENTARIOS------------------------------------------------------->*/}

            <div className="container" style={{ marginLeft: '0' }}>
                <div className="row">
                    <div className="col-md-6" style={{ marginLeft: '5vh' }}>
                        <h4 className="CommentTitle">Comentarios:</h4>
                        <div className="tabla">
                            {comentariosAleatorios.map((comment, index) => (
                                <div key={index} className="CommentBox">
                                    <p><strong>{comment.autor}</strong>: {comment.texto}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="contained" color="secondary" className="NextCommentButton" style={{ backgroundColor: '#5d777d', color: 'white', borderRadius: '8px', marginTop: '1vh' }} onClick={generarComentariosAleatorios}>
                            Ver más comentarios
                        </Button>
                    </div>
                    <div className="col-md-4" style={{ marginLeft: '4vh', padding: '1px' }}>
                        <div className="UserInputContainer">
                            {/* Título para el cuadro de texto del comentario del usuario por accesibilidad*/}
                            <label htmlFor="userCommentInput" className="sr-only">Escribe tu comentario</label>

                            {/* Cuadro de texto para la opinión del usuario */}
                            <textarea
                                id="userCommentInput"
                                placeholder="Escribe tu opinión aquí..."
                                value={userComment}
                                onChange={handleUserCommentChange}
                                className="UserOpinion"
                                style={{ width: '95%', height: '95px' }}
                            />
                            {/* Botón para añadir comentario */}

                        </div>
                        {usuario ? (
                            <>
                                <Button variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#009f04', color: 'white', borderRadius: '8px' }} onClick={handleUserCommentSubmit}>
                                    Añadir comentario
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#009f04', color: 'white', borderRadius: '8px' }} onClick={() => setModalShowComentarios(true)}>
                                    Añadir comentario
                                </Button>
                                <MyVerticallyCenteredModal
                                    show={modalShowComentarios}
                                    onHide={() => setModalShowComentarios(false)}
                                    error='añadir comentarios'
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/*<----------------------------------------------------------------------------------------------->*/}
        </div>
    )
}

export default detallesSeries;
