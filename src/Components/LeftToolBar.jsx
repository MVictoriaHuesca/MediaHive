import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MovieIcon from "@mui/icons-material/Movie";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HiveIcon from "@mui/icons-material/Hive";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import '../styles/LeftToolBar.css';

function LeftToolBar() {
    const [seccionSeleccionada, setSeccionSeleccionada] = useState(null);

    const handleClick = (seccion) => {
        setSeccionSeleccionada(seccion);
    };

return (
  <div className="parent-container-leftnav">
    <Container fluid>
      <Row>
        <Col>
          <div id="leftnav" className="d-flex flex-column">
            {/* Barra lateral */}
            <ul id="barraLateral" className="nav nav-flush flex-column mb-auto text-center">
              {/* Elemento de la barra lateral: Home */}
              <Link to="/inicio">
                <li className={`nav-link py-3 ${seccionSeleccionada === 'Inicio' ? 'active' : ''}`} onClick={() => handleClick("Inicio")}>
                  <button id="seccionInicio">
                    <span>
                      <HomeIcon className="HomeIcon mr-2" />
                    </span>
                    <span>Inicio</span>
                  </button>
                </li>
              </Link>
              {/* Elemento de la barra lateral: Musica */}
              <Link to="/musica">
                  <li className={`nav-link py-3 ${seccionSeleccionada === 'Música' ? 'active' : ''}`} onClick={() => handleClick("Música")}>
                      <button id="seccionMusica">
                          <span>
                              <AudiotrackIcon className="AudiotrackIcon mr-2" />
                          </span>
                          <span>Música</span>  
                      </button>              
                  </li>
              </Link>
              {/* Elemento de la barra lateral: Peliculas */}
              <Link to="/peliculas">
                  <li className={`nav-link py-3 ${seccionSeleccionada === 'Films' ? 'active' : ''}`} onClick={() => handleClick('Films')}>
                      <button id="seccionPeliculas">
                          <span>
                              <MovieIcon className="MovieIcon mr-2" />
                          </span>
                          <span>Películas</span>
                      </button>
                  </li>
              </Link>
              {/* Elemento de la barra lateral: Series */}
              <Link to="/series">
                  <li className={`nav-link py-3 ${seccionSeleccionada === 'Series' ? 'active' : ''}`} onClick={() => handleClick('Series')}>
                      <button id="seccionSeries">
                          <span>
                              <SlideshowIcon className="SlideshowIcon mr-2" />
                          </span>
                          <span>Series</span>
                      </button>
                  </li>
              </Link>
              {/* Elemento de la barra lateral: Biblioteca */}
              <Link to="/biblioteca">
                  <li className={`nav-link py-3 ${seccionSeleccionada === 'Hive' ? 'active' : ''}`} onClick={() => handleClick('Hive')}>
                      <button id="seccionBiblioteca">
                          <span>
                              <HiveIcon className="HiveIcon mr-2" />
                          </span>
                          <span><br/>Hive</span>
                      </button>
                  </li>
              </Link>
              {/* Elemento de la barra lateral: Help */}
              <Link to="/ayuda">
                  <li className={`nav-link py-3 mt-auto ${seccionSeleccionada === 'Help' ? 'active' : ''}`} onClick={() => handleClick('Help')}>
                      <button id="seccionAyuda">
                          <span>
                              <HelpOutlineIcon className="HelpOutIcon mr-2" />
                          </span>
                          <span>Ayuda</span>
                      </button>
                  </li>
              </Link>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
}
export default LeftToolBar;
