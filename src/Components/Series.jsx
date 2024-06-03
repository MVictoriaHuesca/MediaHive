import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'

import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import "../styles/Series.css";

function Series({ cambiarTituloPagina }) {
  //cambiarTituloPagina("Series"); // Cambia el título de la página al cargar este componente

  // Ref para el carrusel
  const carouselRef = useRef(null);

  //constantes para peticiones a api
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fd04580a5174281296d7de8867bc1fa0';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const language = "es-ES"

  //constantes para guardar las peliculas
  const [series, setSeries] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [upcomingSeries, setUpcomingSeries] = useState([]);

  //constantes para el buscador
  const [searchKey, setSearchKey] = useState("");
  const [searchedSeries, setSearchedSeries] = useState([]);

  //constante para peliculas guardadas
  const [seriesSaved, setSeriesSaved] = useState([]);

  //funcion para obtener las series populares
  const fetchSeries = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: language,
      },
    });

    localStorage.setItem('series', JSON.stringify(results));
    setSeries(results);
  };

  //funcion para realizar peticion de top 10 peliculas a la api
  const fetchTopSeries = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: language,
        page: 1,
      },
    });

    const sortedResults = results.sort((a, b) => b.vote_average - a.vote_average);

    localStorage.setItem('topSeries', JSON.stringify(sortedResults));
    setTopSeries(sortedResults);
  };

  //funcion para peticion de series guardadas en biblioteca
  const fetchSavedSeries = async () => {
    const savedSeries = JSON.parse(localStorage.getItem('seriesSaved'));
    if (savedSeries) {
      const serieDetailsPromises = savedSeries.map(fetchSerieDetails);
      const serieDetails = await Promise.all(serieDetailsPromises);
      setSeriesSaved(serieDetails);
    }
  };

  const fetchSerieDetails = async (serieId) => {
    const response = await fetch(`${API_URL}/tv/${serieId}?api_key=${API_KEY}&language=${language}`);
    const serieDetails = await response.json();
    return serieDetails;
  };

  //funcion para realizar peticion de estrenos a la api
  const fetchUpcomingSeries = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/tv/on_the_air`, {
      params: {
        api_key: API_KEY,
        language: language,
      },
    });

    localStorage.setItem('upcomingSeries', JSON.stringify(results));
    setUpcomingSeries(results);
  };

  //funcion para el buscador
  const searchSeries = async (event) => {
    event.preventDefault();

    const response = await axios.get(`${API_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        language: language,
        query: searchKey,
      },
    });

    setSearchedSeries(response.data.results);
  };

  useEffect(() => {
    const cachedSeries = localStorage.getItem('series')
    const cachedTopSeries = localStorage.getItem('top')
    const cachedUpcomingSeries = localStorage.getItem('upcoming')

    if (cachedSeries) {
      setSeries(JSON.parse(cachedSeries))
    } else {
      fetchSeries();
    }

    if (cachedTopSeries) {
      setTopSeries(JSON.parse(cachedTopSeries))
    } else {
      fetchTopSeries();
    }

    fetchSavedSeries();

    if (cachedUpcomingSeries) {
      setUpcomingSeries(JSON.parse(cachedUpcomingSeries))
    }
    else {
      fetchUpcomingSeries();
    }

  }, []);

  return (
    <div id="series" className="d-flex flex-column flex-grow-1">
      <h1 className="visually-hidden">Página de Series</h1>

      {/*Formulario para buscar series*/}
      <br />
      <form onSubmit={searchSeries} className="formulario d-flex p-12" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <input type="text" onChange={e => setSearchKey(e.target.value)} alt={"Buscador de series"} style={{
          padding: '10px',
          borderRadius: '5px',
          border: '2px solid #ccc',
          marginRight: '10px',
          fontSize: '16px',
          outline: 'none',
        }}
          placeholder="Buscar serie..."
        />
        <button type="submit" alt={"Buscar Serie"} style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#455559',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        >Buscar</button>
      </form>
      <br />

      {/*Contenedor para el resultado de búsqueda*/}
      <div className="search-results d-flex justify-content-center align-items-center flex-wrap">
        {searchedSeries.slice(0, 5).map((serie) => (
          <div key={serie.id} className="m-3 d-flex flex-column align-items-center">
            <Link to={`/detallesSeries/${serie.id}`}>
              <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} class="imagen-serie" />
            </Link>
          </div>
        ))}
      </div>

      {/* Carrusel de series populares*/}
      <div id="populares" className="carousel-container mx-auto px-5 py-3">
        <h2>Populares</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          {
            // Dividir el array 'series' en subarrays de 5 elementos cada uno
            [...Array(Math.ceil(series.length / 5))].map((_, i) => {
              const start = i * 5;
              const end = start + 5;
              const slice = series.slice(start, end);

              // Retornar un 'Carousel.Item' para cada subarray
              return (
                <Carousel.Item key={i}>
                  <div className="carousel-item-content row align-items-center py-2">
                    {slice.map((serie) => (
                      // Retornar el elemento de imagen para cada serie
                      <div key={serie.id} className="col d-flex justify-content-center">
                        <Link to={`/detallesSeries/${serie.id}`}>
                          <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} class="imagen-serie" />
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

      {/* Carrusel de top 10 series*/}
      <div id="top10" className="carousel-container mx-auto px-5 py-3">
        <h2>Top 10 series</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          {
            // Dividir el array 'topSeries' en subarrays de 5 elementos cada uno
            [...Array(Math.ceil(topSeries.length / 5))].map((_, i) => {
              const start = i * 5;
              const end = start + 5;
              const slice = topSeries.slice(start, end);

              // Retornar un 'Carousel.Item' para cada subarray
              return (
                <Carousel.Item key={i}>
                  <div className="carousel-item-content row align-items-center py-2">
                    {slice.map((serie) => (
                      // Retornar el elemento de imagen para cada serie
                      <div key={serie.id} className="col d-flex justify-content-center">
                        <Link to={`/detallesSeries/${serie.id}`}>
                          <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} class="imagen-serie" />
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

      {/* Carrusel de guardadas*/}
      <div id="guardadas" className="carousel-container mx-auto px-5 py-3">
        <h2>Guardadas</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          {
            // Dividir el array 'guardadas' en subarrays de 5 elementos cada uno
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
                          <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} class="imagen-serie" />
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
        <h2>En emisión</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          {
            // Dividir el array 'upcomingSeries' en subarrays de 5 elementos cada uno
            [...Array(Math.ceil(upcomingSeries.length / 5))].map((_, i) => {
              const start = i * 5;
              const end = start + 5;
              const slice = upcomingSeries.slice(start, end);

              // Retornar un 'Carousel.Item' para cada subarray
              return (
                <Carousel.Item key={i}>
                  <div className="carousel-item-content row align-items-center py-2">
                    {slice.map((serie) => (
                      // Retornar el elemento de imagen para cada serie
                      <div key={serie.id} className="col d-flex justify-content-center">
                        <Link to={`/detallesSeries/${serie.id}`}>
                          <img src={`${URL_IMAGE + serie.poster_path}`} alt={serie.name} class="imagen-serie" />
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
  );
}

export default Series;