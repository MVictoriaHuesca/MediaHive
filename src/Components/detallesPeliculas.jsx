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
        <Modal.Header closeButton style={{paddingBottom:'1vh'}}>
          
          <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '18px', padding: '0', fontWeight:'bold' }}>
            ¡Debes iniciar sesión para añadir un comentario!
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body style={{paddingTop:'1vh'}}>
          <p style={{ marginBottom: '2vh',  }}>Inicia sesión o crea una cuenta nueva para añadir comentarios: </p>
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

function detallesPeliculas() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const language = 'es-ES';
    const [similarMovies, setSimilarMovies] = useState([]);

    const [modalShowComentarios, setModalShowComentarios] = React.useState(false);
    const [modalShowGuardar, setModalShowGuardar] = React.useState(false);

//<-------------------------------------------------------------------------------------------------------->//
//<------------------------------FUNCIONES Y CONSTANTES PARA COMENTARIOS----------------------------------->//
//<-------------------------------------------------------------------------------------------------------->//

    const [comments, setComments] = useState([]);

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
        "Una experiencia cinematográfica asombrosa! Esta película me dejó sin aliento de principio a fin.",
        "Una obra maestra del cine. La dirección, la actuación y la narrativa son impecables.",
        "Una película que te hace reflexionar sobre la vida y el propósito. ¡Absolutamente conmovedora!",
        "Una joya oculta que merece más reconocimiento. ¡No puedo creer que no la haya visto antes!",
        "¡Qué increíble viaje emocional! Esta película me hizo reír, llorar y reflexionar sobre la vida.",
        "Una mezcla perfecta de acción y drama. Nunca un momento aburrido.",
        "La química entre los personajes es palpable. Te sumerges por completo en su mundo.",
        "Una película que te deja en suspenso hasta el último segundo. ¡No puedo esperar a ver la secuela!",
        "Un clásico moderno que nunca pasará de moda. ¡Una verdadera obra de arte!",
        "Los efectos visuales son impresionantes. Te transportan a otro universo por completo.",
        "Una película que desafía las convenciones y rompe barreras. ¡Definitivamente una de mis favoritas!",
        "La banda sonora es simplemente épica. Añade una capa adicional de emoción a cada escena.",
        "Los giros argumentales te mantienen en vilo. ¡Nunca sabes qué esperar a continuación!",
        "Una película que te hace cuestionar tus propias creencias y percepciones. ¡Muy poderosa!",
        "Los personajes son tan realistas que sientes que podrían ser tus amigos. ¡Una película verdaderamente cautivadora!",
        "Una montaña rusa de emociones. ¡Te lleva en un viaje inolvidable!",
        "La cinematografía es impresionante. Cada cuadro es una obra de arte en sí mismo.",
        "Una película que te deja reflexionando mucho después de que terminen los créditos. ¡Absolutamente inolvidable!",
        "Los diálogos son tan afilados que te mantienen pegado a la pantalla. ¡Una delicia para los amantes del cine!",
        "Una película que te hace apreciar la belleza de las pequeñas cosas de la vida. ¡Muy conmovedora!",
        "La dirección es magistral. Cada escena está cuidadosamente elaborada para transmitir una emoción única.",
        "Una historia que se queda contigo mucho después de que termina. ¡Realmente te hace reflexionar sobre tu propia vida!",
        "La química entre el elenco es palpable. Te hacen creer en la historia que están contando.",
        "Los efectos especiales son tan realistas que te sumergen por completo en el mundo de la película.",
        "Una película que desafía tus expectativas y te deja con ganas de más. ¡Una verdadera obra maestra del cine contemporáneo!",
        "Los temas tratados en esta película son tan relevantes para la sociedad actual. ¡Realmente te hacen pensar!",
        "Una película que te hace reír, llorar y emocionarte. ¡Una montaña rusa de emociones!",
        "La actuación es simplemente sobresaliente. Cada actor trae algo único al personaje que interpreta.",
        "Una película que te deja con un sentimiento de esperanza y optimismo. ¡Una verdadera joya del cine!"
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

//<-------------------------------------------------------------------------------------------------------->//
//<---------------------------------FUNCIONES Y CONSTANTES PARA PELÍCULAS---------------------------------->//
//<-------------------------------------------------------------------------------------------------------->//

    //Peliculas guardadas en biblioteca
    const [moviesSaved, setMoviesSaved] = useState(() => {
        const savedMovies = localStorage.getItem('moviesSaved');
        return savedMovies ? JSON.parse(savedMovies) : [];
    });

    const handleMovieSave = () => {
        if (moviesSaved.includes(movie.id)) {
            setMoviesSaved(moviesSaved.filter(movieId => movieId !== movie.id));
        } else {
            setMoviesSaved([...moviesSaved, movie.id]);
        }
    };

    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=fd04580a5174281296d7de8867bc1fa0&language=${language}`
            );
            setMovie(data);
        };

        const fetchSimilarMovies = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=fd04580a5174281296d7de8867bc1fa0&language=~${language}`);
            setSimilarMovies(response.data.results);
        };

        const savedMovies = JSON.parse(localStorage.getItem('moviesSaved'));
        if (savedMovies) {
            setMoviesSaved(savedMovies);
        }
        
        fetchMovie();
        fetchSimilarMovies();
        setComentariosAleatorios([]);
    }, [id]);

    useEffect(() => {
        localStorage.setItem('moviesSaved', JSON.stringify(moviesSaved));
        console.log(moviesSaved);
    }, [moviesSaved]);

    useEffect(() => {
        // Esta función se llamará directamente después de abrir la página
        generarComentariosAleatorios();
    }, []);


    if (!movie) {
        return <div>Cargando...</div>
    }

    const fullStars = Math.floor(movie.vote_average / 2);
    const halfStar = movie.vote_average % 2 === 0 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStar;

//<-------------------------------------------------------------------------------------------------------->//

    return (
        <div id="detallesPeliculas">
            <div className="mx-auto px-5 py-5 d-flex align-items-start">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ height: '400px', width: 'auto', marginLeft:'1.5vh' }} />
                </div>
                <div className="mx-auto px-5 py-3">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3>{movie.title}</h3>
                        {usuario ? (
                            <button onClick={handleMovieSave} style={{ border: 'none', background: 'transparent' }}>
                            {moviesSaved.includes(movie.id) ? 
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
                                    error='guardar películas'
                                />
                            </>
                        )}
                    </div>
                    <div>
                        {'⭐'.repeat(fullStars)}
                        {'☆'.repeat(halfStar)}
                        {'☆'.repeat(emptyStars)}
                        <span style={{ color: 'black' }}> {movie.vote_average}</span>
                    </div>
                    <div className="py-4">
                        <p style={{ fontSize: '20px' }}>{movie.overview}</p>
                    </div>
                </div>
                <div>
                    <h3 className="mx-auto py-3" style={{ textAlign: 'center' }}>Películas similares</h3>
                    <div className="mx-auto px-5 py-3" style={{ display: 'flex', flexWrap: 'wrap', width: '300px' }}>
                        {similarMovies.slice(0, 4).map(similarMovie => (
                            <div key={similarMovie.id} style={{ width: '50%', padding: '10px' }}>
                                <Link to={`/detallesPeliculas/${similarMovie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`} alt={similarMovie.title} style={{ width: '100%', height: 'auto' }} />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

{/*<---------------------------------COMENTARIOS------------------------------------------------------->*/}

            <div className="container" style={{marginLeft:'0'}}>
                <div className="row" >
                    <div className="col-md-6" style={{marginLeft:'4.5vh'}}>
                        <h4 className="CommentTitle">Comentarios:</h4>
                        <div className="tabla">
                            {comentariosAleatorios.map((comment, index) => (
                                <div key={index} className="CommentBox">
                                <p><strong>{comment.autor}</strong>: {comment.texto}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="contained" color="secondary" className="NextCommentButton" style={{ backgroundColor: '#5d777d', color: 'white', borderRadius: '8px', marginTop:'1.5vh' }} onClick={generarComentariosAleatorios}>
                        Ver más comentarios
                        </Button>
                    </div>
                    <div className="col-md-4" style={{marginLeft:'5vh'}}>
                        <div className="UserInputContainer">
                            {/* Cuadro de texto para la opinión del usuario */}
                            <textarea
                            placeholder="Escribe tu opinión aquí..."
                            value={userComment}
                            onChange={handleUserCommentChange}
                            className="UserOpinion"
                            style={{ width: '100%', height: '98px' }}
                            />
                            {/* Botón para añadir comentario */}
                            
                        </div>
                        {usuario ? (
                            <>
                            <Button variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#009f04', color: 'white' , borderRadius: '8px'}} onClick={handleUserCommentSubmit}>
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


export default detallesPeliculas;