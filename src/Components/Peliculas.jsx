import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'

import { Carousel } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import "../styles/peliculas-styles.css";

function Peliculas() {
  //cambiarTituloPagina("Películas");

  // Ref para el carrusel
  const carouselRef = useRef(null);

  //constantes para peticiones a api
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fd04580a5174281296d7de8867bc1fa0';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const language = "es-ES"

  //constantes para guardar las peliculas
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  //constantes para el buscador
  const [searchKey, setSearchKey] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  //constante para peliculas guardadas
  const [moviesSaved, setMoviesSaved] = useState([]);

  //funcion para realizar peticion de peliculas populares a la api
  const fetchMovies = async () => {
    const { data: { results },
    } = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language: language,
        sort_by: 'popularity.desc',
      },
    })

    localStorage.setItem('movies', JSON.stringify(results))
    setMovies(results)
  }

  //funcion para realizar peticion de top 10 peliculas a la api
  const fetchTopMovies = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: language,
        page: 1,
      },
    });

    const sortedResults = results.sort((a, b) => b.vote_average - a.vote_average);

    localStorage.setItem('topMovies', JSON.stringify(sortedResults));
    setTopMovies(sortedResults);
  };

  //funcion para peticion de peliculas guardadas en biblioteca
  const fetchSavedMovies = async () => {
    const savedMovies = JSON.parse(localStorage.getItem('moviesSaved'));
    if (savedMovies) {
      const movieDetailsPromises = savedMovies.map(fetchMovieDetails);
      const movieDetails = await Promise.all(movieDetailsPromises);
      setMoviesSaved(movieDetails);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`);
    const movieDetails = await response.json();
    return movieDetails;
  };

  //funcion para realizar peticion de estrenos a la api
  const fetchUpcomingMovies = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        language: language,
      },
    });

    localStorage.setItem('upcomingMovies', JSON.stringify(results));
    setUpcomingMovies(results);
  };

  //funcion para el buscador
  const searchMovies = async (event) => {
    event.preventDefault();

    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: language,
        query: searchKey,
      },
    });

    setSearchedMovies(response.data.results);
  };


  useEffect(() => {
    const cachedMovies = localStorage.getItem('movies')
    const cachedUpcomingMovies = localStorage.getItem('upcomingMovies')
    const cachedTopMovies = localStorage.getItem('topMovies')

    if (cachedMovies) {
      setMovies(JSON.parse(cachedMovies))
    } else {
      fetchMovies();
    }

    if (cachedTopMovies) {
      setTopMovies(JSON.parse(cachedTopMovies))
    } else {
      fetchTopMovies();
    }

    fetchSavedMovies();

    if (cachedUpcomingMovies) {
      setUpcomingMovies(JSON.parse(cachedUpcomingMovies))
    } else {
      fetchUpcomingMovies();
    }

  }, [])

  return (
    <div id="peliculas" className="d-flex flex-column flex-grow-1">
      <h1 className="visually-hidden">Página de Películas</h1>

      {/*Formulario para buscar peliculas*/}
      <br />
      <form onSubmit={searchMovies} className="formulario d-flex p-12" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <input type="text" onChange={e => setSearchKey(e.target.value)} alt={"Buscador de peliculas"} style={{
          padding: '10px',
          borderRadius: '5px',
          border: '2px solid #ccc',
          marginRight: '10px',
          fontSize: '16px',
          outline: 'none',
          width: '50%',
        }}
          placeholder="Buscar pelicula..."
        />
        <button type="submit" alt={"Buscar Pelicula"}  className="boton-buscar-pelicula"
        >Buscar</button>
      </form>
      <br />

      {/*Contenedor para el resultado de búsqueda*/}
      <div className="search-results d-flex justify-content-center align-items-center flex-wrap">
        {searchedMovies.slice(0, 5).map((movie) => (
          <div key={movie.id} className="m-3 d-flex flex-column align-items-center">
            <Link to={`/detallesPeliculas/${movie.id}`}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} style={{ height: '200px', width: 'auto' }} />
            </Link>
          </div>
        ))}
      </div>

      {/* Carrusel de peliculas populares*/}
      <div id="populares" className="carousel-container mx-auto px-5 py-3">
        <h2>Populares</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          {
            // Dividir el array 'movies' en subarrays de 5 elementos cada uno
            [...Array(Math.ceil(movies.length / 5))].map((_, i) => {
              const start = i * 5;
              const end = start + 5;
              const slice = movies.slice(start, end);

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

      {/* Carrusel de top 10 peliculas*/}
      <div id="top10" className="carousel-container mx-auto px-5 py-3">
        <h2>Top 10 peliculas</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {topMovies.length > 0 && (
                <>
                  {topMovies.slice(0, 5).map((movie, index) => (
                    <div key={movie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesPeliculas/${movie.id}`}>
                        <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {topMovies.length > 0 && (
                <>
                  {topMovies.slice(5, 10).map((movie, index) => (
                    <div key={movie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesPeliculas/${movie.id}`}>
                        <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Carrusel de guardadas*/}
      <div id="guardadas" className="carousel-container mx-auto px-5 py-3">
        <h2>Guardadas</h2>
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

      {/* Carrusel de estrenos*/}
      <div id="estrenos" className="carousel-container mx-auto px-5 py-3">
        <h2>Estrenos</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          {
            // Dividir el array 'upcomingMovies' en subarrays de 5 elementos cada uno
            [...Array(Math.ceil(upcomingMovies.length / 5))].map((_, i) => {
              const start = i * 5;
              const end = start + 5;
              const slice = upcomingMovies.slice(start, end);

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
  )
}

export default Peliculas;