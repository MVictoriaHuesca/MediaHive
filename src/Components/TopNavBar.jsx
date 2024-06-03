import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import imagen from "../Images/MediaHive_icon.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import '../styles/TopNavBar.css';

function TopNavBar(props) {
    const username = localStorage.getItem('username');
    const profileImage = localStorage.getItem('profileImage');

    return (
        <div className="container-topnav">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={2}>
                        <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web"/>
                    </Col>
                    <Col xs={4}>
                        <h2 className="nombre">MediaHive</h2>
                    </Col>
                    <Col xs={4}>
                        <h3 className="tituloPagina">{props.name}</h3>
                    </Col>
                    <Col xs={2}>
                        {username ? (
                            <Link to="/Perfil">
                                <div className="usuario-container-topnav">
                                    {profileImage ? (  
                                        <img src={profileImage} className="imagenPerfil-topnav"/>  
                                    ) : (
                                        <AccountBoxIcon style={{fill: "white", width: '6.5vh', height: '6.5vh', marginTop: '0.5vh'}} />
                                    )}
                                    <h5 className="username-topnav">{username}</h5>
                                </div>
                            </Link>
                        ) : (
                            <>
                                <h5>
                                    <Link to="/CrearCuenta">
                                        <button className="registro">Registrarse</button>
                                    </Link>
                                </h5>
                                <h5>
                                    <Link to="/InicioSesion">
                                        <button className="inicioSesion">Iniciar Sesión</button>
                                    </Link>
                                </h5>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopNavBar;


