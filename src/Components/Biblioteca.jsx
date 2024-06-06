import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Biblioteca.css";
import { Link } from 'react-router-dom';

//<-------------------------------------------------------------------------------------------------------->//
//<----------------------------------FUNCIÓN BIBLIOTECA---------------------------------------------------->//
//<-------------------------------------------------------------------------------------------------------->//
function Biblioteca() {
    // Referencia al carrusel, posiblemente para una interfaz gráfica
    const carouselRef = useRef(null);

    // Constantes para la API de The Movie Database y configuraciones generales
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'fd04580a5174281296d7de8867bc1fa0';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
    const language = "es-ES";

    // Estados para almacenar las películas y series guardadas
    const [moviesSaved, setMoviesSaved] = useState([]);
    const [seriesSaved, setSeriesSaved] = useState([]);

    // Función asíncrona para obtener los detalles de una película
    const fetchMovieDetails = async (movieId) => {
        const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`);
        const movieDetails = await response.json();
        return movieDetails;
    };

    // Función asíncrona para obtener los detalles de una serie
    const fetchSerieDetails = async (serieId) => {
        const response = await fetch(`${API_URL}/tv/${serieId}?api_key=${API_KEY}&language=${language}`);
        const serieDetails = await response.json();
        return serieDetails;
    };

    // useEffect para cargar datos desde localStorage cuando el componente se monta
    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('moviesSaved'));
        const savedSeries = JSON.parse(localStorage.getItem('seriesSaved'));

        if (savedMovies) {
            setMoviesSaved(savedMovies);
            console.log(savedMovies);
        }

        if (savedSeries) {
            setSeriesSaved(savedSeries);
        }

        console.log(savedSeries);
        console.log(savedMovies);
    }, []);

    // useEffect para obtener y actualizar detalles de películas y series guardadas
    useEffect(() => {
        const fetchSavedMovies = async () => {
            const savedMovies = JSON.parse(localStorage.getItem('moviesSaved'));
            if (savedMovies) {
                const movieDetailsPromises = savedMovies.map(fetchMovieDetails);
                const movieDetails = await Promise.all(movieDetailsPromises);
                setMoviesSaved(movieDetails);
            }
        };

        const fetchSavedSeries = async () => {
            const savedSeries = JSON.parse(localStorage.getItem('seriesSaved'));
            if (savedSeries) {
                const serieDetailsPromises = savedSeries.map(fetchSerieDetails);
                const serieDetails = await Promise.all(serieDetailsPromises);
                setSeriesSaved(serieDetails);
            }
        };

        fetchSavedMovies();
        fetchSavedSeries();
    }, []);

    // Estado para almacenar canciones guardadas
    const [canciones, setCanciones] = useState([]);

    // Opciones para la API de Spotify utilizando RapidAPI
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '733197fdcamsh9fd898d4b4b0d10p1493cdjsn7aa3fb3dcb4d',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    // Función asíncrona para obtener detalles de una canción específica
    const getDatosCanciones = async (id) => {
        let url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`;
        let data = await fetch(url, options);
        let res = await data.json();
        return {
            id: res.tracks[0].id,
            titulo: res.tracks[0].name,
            imagen: res.tracks[0].album.images[0].url
        };
    };

    // useEffect para cargar datos de canciones guardadas cuando el componente se monta
    useEffect(() => {
        const getCancionesSaved = async () => {
            const cancionesSaved = JSON.parse(localStorage.getItem('cancionesSaved'));
            if (cancionesSaved) {
                const datosCancionesPromises = cancionesSaved.map(getDatosCanciones);
                const datosCanciones = await Promise.all(datosCancionesPromises);
                setCanciones(datosCanciones);
            }
        };

        getCancionesSaved();
    }, []);

return (
    <div className="biblioteca-container">
        <div className="biblio">
            <div className="encabezado" style={{ marginTop: '5vh' }}>
                <h1>Bienvenido a tu biblioteca</h1>
                <h3>Aquí podrás ver tus canciones, series y películas que hayas guardado.</h3>
            </div>
            <div className="canciones" style={{ marginLeft: '1vw', position: 'relative' }}>
                <div className="carousel-container mx-auto px-3 py-3">
                    <h2 id="h2titulo">Canciones</h2>
                    <div>
                        <Carousel ref={carouselRef} interval={null} indicators={false}>
                            {Array(Math.ceil(canciones.length / 3)).fill().map((_, i) => (
                                <Carousel.Item key={i}>
                                    <div className="carousel-item-content row align-items-center py-2">
                                        {canciones.slice(i * 3, i * 3 + 3).map((cancion, index) => (
                                            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center align-items-center" key={index}>
                                                <Link to={`/cancion/${cancion.id}`} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                                    <img src={cancion.imagen} className="img-fluid" alt={cancion.titulo} style={{ maxWidth: '180px', maxHeight: '180px' }} />
                                                    <h5 style={{ color: 'black' }}>{cancion.titulo}</h5>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    <h2 style={{ marginTop: '5vh' }}>Series</h2>
                    <div className="series">
                        <Carousel ref={carouselRef} interval={null} indicators={false}>
                            {
                                // Dividir el array 'seriesSaved' en subarrays de 5 elementos cada uno
                                [...Array(Math.ceil(seriesSaved.length / 5))].map((_, i) => {
                                    const start = i * 5;
                                    const end = start + 5;
                                    const slice = seriesSaved.slice(start, end);

                                    // Retornar un 'Carousel.Item' para cada subarray
                                    return (
                                        <Carousel.Item key={i}>
                                            <div className="carousel-item-content row align-items-center py-2">
                                                {slice.map((serie) => (
                                                    // Retornar el elemento de imagen para cada serie
                                                    <div key={serie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                                                        <Link to={`/detallesSeries/${serie.id}`}>
                                                            <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} className="img-fluid" style={{ maxHeight: '200px' }} />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    );
                                })
                            }
                        </Carousel>
                    </div>

                    <h2 style={{ marginTop: '5vh' }}>Películas</h2>
                    <div className="peliculas">
                        <Carousel ref={carouselRef} interval={null} indicators={false}>
                            {
                                // Dividir el array 'moviesSaved' en subarrays de 5 elementos cada uno
                                [...Array(Math.ceil(moviesSaved.length / 5))].map((_, i) => {
                                    const start = i * 5;
                                    const end = start + 5;
                                    const slice = moviesSaved.slice(start, end);

                                    // Retornar un 'Carousel.Item' para cada subarray
                                    return (
                                        <Carousel.Item key={i}>
                                            <div className="carousel-item-content row align-items-center py-2">
                                                {slice.map((movie) => (
                                                    // Retornar el elemento de imagen para cada pelicula
                                                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                                                        <Link to={`/detallesPeliculas/${movie.id}`}>
                                                            <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} className="img-fluid" style={{ maxHeight: '200px' }} />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default Biblioteca;
