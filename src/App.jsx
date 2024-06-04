import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';


import LeftToolBar from "./Components/LeftToolBar";
import TopNavBar from "./Components/TopNavBar";

import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import MusicaResultados from "./Components/MusicaResultados";
import Peliculas from "./Components/Peliculas";
import DetallesPeliculas from "./Components/detallesPeliculas";
import Series from "./Components/Series";
import DetallesSeries from "./Components/detallesSeries";
import Biblioteca from "./Components/Biblioteca";
import Cancion from "./Components/Cancion";
import InicioSesion from "./Components/InicioSesion";
import CrearCuenta from "./Components/CrearCuenta";
import Perfil from "./Components/Perfil";
import Ayuda from "./Components/Ayuda";


import "./styles/App.css"

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={
          <>
            <TopNavBar name="Inicio"/>
            <div style={{display: "flex"}}>
              <LeftToolBar altura="100"/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/inicio' element={
          <>
            <TopNavBar name="Inicio"/>
            <div style={{display: "flex"}}>
              <LeftToolBar altura="100"/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/inicio/:nombreUsuario' element={
          <>
            <TopNavBar name="Inicio"/>
            <div style={{display: "flex"}}>
              <LeftToolBar altura="100"/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/InicioSesion' element={
          <>
            <TopNavBar name="Inicio de Sesión"/>
            <div style={{display: "flex"}}>
              <LeftToolBar altura="100"/>
              <div className="contenido">
                <InicioSesion />
              </div>
            </div>
          </>
        }/>
        <Route path='/CrearCuenta' element={
          <>
            <TopNavBar name="Cuenta Nueva"/>
            <div style={{display: "flex"}}>
              <LeftToolBar altura="100"/>
              <div className="contenido">
                <CrearCuenta />
              </div>
            </div>
          </>
        }/>
        <Route path='/perfil' element={
          <>
            <TopNavBar name="Tu Perfil"/>
            <div style={{display: "flex"}}>
              <LeftToolBar altura="100"/>
              <div className="contenido">
                <Perfil />
              </div>
            </div>
          </>
        }/>
        <Route path='/musica' element={
          <>
            <TopNavBar name="Música"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="127"/>
                  <div className="contenido">
                    <Musica />
                  </div>
              </div>
          </>
        }/>
        <Route path='/musica/:busqueda' element={
          <>
            <TopNavBar name="Resultados"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="100"/>
                  <div className="contenido">
                    <MusicaResultados />
                  </div>
              </div>
          </>
        }/>
        <Route path='/peliculas' element={
          <>
            <TopNavBar name="Películas"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="154"/>
                  <div className="contenido">
                    <Peliculas />
                  </div>
              </div>
          </>
        }/>
        <Route path='/detallesPeliculas/:id' element={
          <>
            <TopNavBar name="Película"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="111"/>
                  <div className="contenido">
                    <DetallesPeliculas />
                  </div>
              </div>
          </>
        }/>
        <Route path='/series' element={
          <>
            <TopNavBar name="Series"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="154"/>
                  <div className="contenido">
                    <Series />
                  </div>
              </div>
          </>
        }/>
        <Route path='/detallesSeries/:id' element={
          <>
            <TopNavBar name="Serie"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="120"/>
                  <div className="contenido">
                    <DetallesSeries />
                  </div>
              </div>
          </>
        }/>
        <Route path='/biblioteca' element={
          <>
            <TopNavBar name="Biblioteca"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="120"/>
                  <div className="contenido">
                    <Biblioteca />
                  </div>
              </div>
          </>
        }/>
        <Route path='/ayuda' element={
          <>
            <TopNavBar name="Ayuda"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="100"/>
                  <div className="contenido">
                    <Ayuda />
                  </div>
              </div>
          </>
        }/>
        <Route path='/cancion/:id' element={
          <>
            <TopNavBar name="Canción"/>
              <div style={{display: "flex"}}>
                <LeftToolBar altura="100"/>
                  <div className="contenido">
                    <Cancion />
                  </div>
              </div>
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;