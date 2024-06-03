import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Biblioteca.css";
import { Link } from 'react-router-dom';

function Biblioteca() {
    const carouselRef = useRef(null);

    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'fd04580a5174281296d7de8867bc1fa0';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
    const language = "es-ES";

    const [moviesSaved, setMoviesSaved] = useState([]);
    const [seriesSaved, setSeriesSaved] = useState([]);

    const fetchMovieDetails = async (movieId) => {
        const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`);
        const movieDetails = await response.json();
        return movieDetails;
    };

    const fetchSerieDetails = async (serieId) => {
        const response = await fetch(`${API_URL}/tv/${serieId}?api_key=${API_KEY}&language=${language}`);
        const serieDetails = await response.json();
        return serieDetails;
    };

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

    const [canciones, setCanciones] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6adaeb3733msh28bad337ffcb004p16abdajsn136b9a1b8458',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

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
                <div className="encabezado">
                    <h1>Bienvenido a tu biblioteca</h1>
                    <h3>Aquí podrás ver tus canciones, series y películas que hayas guardado.</h3>
                </div>
                <div className="canciones" style={{ marginLeft: '10px', position: 'relative' }}>
                    <div className="carousel-container mx-auto px-5 py-3">
                        <h2 id="h2titulo">Canciones</h2>
                        <div>
                            <Carousel ref={carouselRef} interval={null} indicators={false}>
                                {Array(Math.ceil(canciones.length / 3)).fill().map((_, i) => (
                                    <Carousel.Item key={i}>
                                        <div className="carousel-item-content row align-items-center py-2">
                                            {canciones.slice(i * 3, i * 3 + 3).map((cancion, index) => (
                                                <div className="col d-flex flex-column justify-content-center align-items-center" key={index}>
                                                    <Link to={`/cancion/${cancion.id}`} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                                        <img src={cancion.imagen} style={{ width: '180px', height: '180px'}}/>  
                                                        <h5 style={{color: 'black'}}>{cancion.titulo}</h5>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <h2>Series</h2>
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
                                                    <div key={serie.id} className="col d-flex justify-content-center">
                                                        <Link to={`/detallesSeries/${serie.id}`}>
                                                            <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} style={{ height: '200px', width: 'auto' }} />
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


                    <h2 style={{ marginTop: '100px' }}>Películas</h2>
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
                                                    <div key={movie.id} className="col d-flex justify-content-center">
                                                        <Link to={`/detallesPeliculas/${movie.id}`}>
                                                            <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} style={{ height: '200px', width: 'auto' }} />
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
