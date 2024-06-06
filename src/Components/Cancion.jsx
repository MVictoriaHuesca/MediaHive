import React, { useEffect, useState } from "react";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import StarIcon from '@mui/icons-material/Star';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import '../styles/Cancion.css';
import { useParams } from "react-router-dom";

/* Función para mostrar cuadro de error si el usuario no tiene cuenta */
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ¡Debes iniciar sesión para {`${props.error}`}!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Inicia sesión en tu cuenta o crea una nueva para {`${props.error}`}</h4>
        <div style={{ textAlign: "center" }}>
          <h5>
            <Link to="/CrearCuenta">
              <Button className="registro-cancion" >Registrarse</Button>
            </Link>
          </h5>
          <h5>
            <Link to="/InicioSesion">
              <Button className="inicioSesion-cancion" >Iniciar Sesion</Button>
            </Link>
          </h5>
        </div>
      </Modal.Body>

    </Modal>
  );
}

function Cancion() {
  const [modalShowComentarios, setModalShowComentarios] = React.useState(false);
  const [modalShowGuardar, setModalShowGuardar] = React.useState(false);

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
    "¡Qué gran canción!",
    "Me encanta esta melodía",
    "La letra es realmente inspiradora",
    "No puedo dejar de escuchar esta canción",
    "Este ritmo me hace bailar",
    "La peor canción que he escuchado en mi vida",
    "No entiendo por qué esta canción es tan popular",
    "La letra no tiene sentido",
    "No me gusta el ritmo de esta canción",
    "Es aburrida y monótona",
    "Simplemente genial",
    "Increíblemente hermosa",
    "Me hace sentir emociones que no puedo describir",
    "Es la mejor canción que he escuchado en mucho tiempo",
    "La recomendaría a todo el mundo",
    "No puedo parar de escucharla",
    "Cada vez que la escucho, descubro algo nuevo",
    "Una obra maestra",
    "Me inspira a ser mejor cada día",
    "Simplemente horrible",
    "No me esperaba menos de esta canción",
    "Una decepción total",
    "Le falta algo",
    "No me hace sentir nada",
    "Podría mejorar",
    "Me deja indiferente",
    "Más de lo mismo",
    "No la recomendaría",
    "No es para mí",
    "Una sorpresa agradable"
  ];

  // Estado para almacenar los comentarios aleatorios actuales
  const [comentariosAleatorios, setComentariosAleatorios] = useState([]);

  // Estado para almacenar el comentario del usuario
  const [userComment, setUserComment] = useState("");

  // Estado para rastrear las estrellas resaltadas y seleccionadas
  const [highlightedStars, setHighlightedStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  // Función para manejar el evento onMouseOver de las estrellas
  const handleStarHover = (index) => {
    setHighlightedStars(index); // Resalta hasta el índice especificado
  };

  // Función para manejar el evento onMouseOut de las estrellas
  const handleStarMouseOut = () => {
    setHighlightedStars(selectedStars); // Restaura el resaltado según las estrellas seleccionadas
  };

  // Función para manejar el clic en una estrella
  const handleStarClick = (index) => {
    setSelectedStars(index); // Establece las estrellas seleccionadas
    setHighlightedStars(index); // Resalta hasta el índice especificado
  };

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

  let { id } = useParams();
  const [titulo, setTitulo] = useState('')
  const [artista, setArtista] = useState('')
  const [imagen, setImagen] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a8e49a3adcmsh7aab7090d88bff5p17d687jsn80c93f71f7e8',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong() {
    try {
      let url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`;
      let data = await fetch(url, options);
      let res = await data.json();
      setTitulo(res.tracks[0].name);
      getArtist(res.tracks[0].artists[0].id);
      console.log(res);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  async function getArtist(idArtista) {
    try {
      let url2 = `https://spotify23.p.rapidapi.com/artists/?ids=${idArtista}`;
      let data2 = await fetch(url2, options);
      let res2 = await data2.json();
      setArtista(res2.artists[0].name);
      setImagen(res2.artists[0].images[0].url);
      console.log(res2);

    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  const cancionesGuardadas = localStorage.getItem('cancionesSaved') === null ? [] : JSON.parse(localStorage.getItem('cancionesSaved'));
  const [guardado, setGuardado] = useState(cancionesGuardadas.includes(id));

  // Obtener el nombre del usuario
  const usuario = localStorage.getItem('username');

  /* Función para guardar la canción */
  const handleCancionSave = () => {
    if (localStorage.getItem('cancionesSaved') === null) {
      localStorage.setItem('cancionesSaved', JSON.stringify([id]));
    } else {
      let cancionesSaved = JSON.parse(localStorage.getItem('cancionesSaved'));
      if (!cancionesSaved.includes(id)) {
        cancionesSaved.push(id);
        localStorage.setItem('cancionesSaved', JSON.stringify(cancionesSaved));
        setGuardado(true);
      } else {
        cancionesSaved = cancionesSaved.filter((cancion) => cancion !== id);
        localStorage.setItem('cancionesSaved', JSON.stringify(cancionesSaved));
        setGuardado(false);
      }
    }
  }

  useEffect(() => {
    // Esta función se llamará directamente después de abrir la página
    getSong();
    generarComentariosAleatorios();
  }, []);

  return (
    <div className="parent-container-cancion">
      <div>
        <div className="row">
          <div className="MusicaContainer col-md-7">
            {/* Contenedor de la canción */}
            <iframe
              src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
              width="80%"
              height="400px"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-5" style={{ paddingTop: '30px' }}>
            {/* Contenedor del título y la información */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              {/* Título de la canción con emoticono */}
              <div>
                <h3 className="SongTitle">
                  {titulo}
                  {usuario ? (
                    <button onClick={handleCancionSave} style={{ border: 'none', background: 'transparent' }}>
                      {guardado ?
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
                        error='guardar canciones'
                      />
                    </>
                  )}

                </h3>
              </div>
              {/* Estrellas */}
              <div className="StarContainer">
                {[1, 2, 3, 4, 5].map((index) => (
                  <StarIcon
                    key={index}
                    onMouseOver={() => handleStarHover(index)}
                    onMouseOut={handleStarMouseOut}
                    onClick={() => handleStarClick(index)}
                    className="StarIcon"
                    style={{ color: index <= highlightedStars ? 'yellow' : 'inherit' }}
                    alt={index + "estrellas "}
                  />
                ))}
              </div>
              {/* Contenedor de la imagen y el artista */}
              <div className="Artista">
                <img src={imagen} alt={"Imagen del artista: " + { artista }} />
                <h3>{artista}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-comentarios">
        <div className="row" id="row-cancion">
          <div className="col-md-6" id="comentarios-cancion">
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
          <div className="col-md-4">
            <div className="UserInputContainer">
              {/* Cuadro de texto para la opinión del usuario */}
              <textarea
                placeholder="Escribe tu opinión aquí..."
                value={userComment}
                onChange={handleUserCommentChange}
                className="UserOpinion"
                style={{ width: '100%', height: '95px' }}
              />
              {/* Botón para añadir comentario */}

            </div>
            {usuario ? (
              <>
                <Button variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#5d777d', color: 'white', borderRadius: '8px' }} onClick={handleUserCommentSubmit}>
                  Añadir comentario
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" color="primary" className="CommentButton" style={{ backgroundColor: '#5d777d', color: 'white' }} onClick={() => setModalShowComentarios(true)}>
                  Añadir comentario
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShowComentarios}
                  onHide={() => setModalShowComentarios(false)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancion;