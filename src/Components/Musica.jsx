
import React, { useRef, useState } from "react";
import {Link, useNavigate} from "react-router-dom";

import {Carousel} from "react-bootstrap";
import "../styles/Musica.css";

function Musica() {

  const [cancion, setCancion] = useState('')
  const carouselRef = useRef(null);

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if(cancion.trim() === ''){
      alert('Debes ingresar una canción');
      return;
    }

    navigate(`/musica/${cancion}`)
    console.log(cancion);
    setCancion("");

  }


  return (
    <div className="pantalla">

    <div className="row" >
      <div id="barra de busqueda">
        <div className="col-md-12" tabIndex="0">
          <form onSubmit={handleSearch} className="formulario d-flex p-12"  style={{alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                  <input type="text" value={cancion} onChange={e => setCancion(e.target.value)} style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '2px solid #ccc',
                    marginRight: '10px',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                  placeholder="Buscar canción..."
                  />
                  <button type="submit" style={{
                      padding: '5px',
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
        </div>
      </div>
    </div>

    <div className="row">
      <div id="Ultimos estrenos" className="col-md-6 carousel-container mx-auto" aria-label='Últimos estrenos'>
        <h3>Últimos estrenos</h3>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/3is7Ej9fnZLhJD9pNOy4cI" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: TOKI"} /*aria-label='Título de la canción: Toki'*/>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02975fd5bf28d6eb6454b5c3ff" />  
                    <h5 className="tituloCancion">Toki</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/7221xIgOnuakPdLqT0F3nP" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: I Had Some Help"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0297306976e3eb8aad53b754eb" />  
                  <h5 className="tituloCancion">I Had Some Help</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1l66Vx6g2i50WdeH6VU658" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Pueblo de Medallo"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e027e8a331d38946e24647a3df7" />  
                  <h5 className="tituloCancion">Pueblo de Medallo</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/68qjM8nSoUj8YQOJuu6hZ8" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Yo lo soñé"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" />  
                  <h5 className="tituloCancion">Yo lo soñé</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1IqkIEAKwZknVHpxjT7Vbq" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: A new star (2 0 2 4)"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e026a78a042e38096089d60841a" />  
                  <h5 className="tituloCancion">A new star (2 0 2 4)</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/33VIvWmmCUgix6Htm1WdOJ" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Fardos"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0244d0e103124e96e727eb54e7" />  
                  <h5 className="tituloCancion">Fardos</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/43PiEypaceH339CSNiggyj" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: BBY BOO - Remix"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e025f516e13e1b417769a0a7cdd" />  
                  <h5 className="tituloCancion">BBY BOO - Remix</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/6RqD0fpAaKEZvQd0QrTj7j" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Lo que tiene"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0245e6bba1ac0c5b54a9ee8121" />  
                  <h5 className="tituloCancion">Lo que tiene</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/4Dvkj6JhhA12EX05fT7y2e" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: As it was"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e022e8ed79e177ff6011076f5f0" />  
                  <h5 className="tituloCancion">As it was</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/0mWVScJbxO3tbXuiZOxYZE" style={{ textDecoration: 'none'}} alt={"Titulo de la canción: So long, London"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0208c74a3a99b01a6d3933b169"/>  
                  <h5 className="tituloCancion">So long, London</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>
        </Carousel>
      </div>
    </div>

    <div className="row">
      <div id="Mas populares" className="col-md-6 carousel-container mx-auto">
        <h3>Más populares</h3>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/7bywjHOc0wSjGGbj04XbVi" style={{ textDecoration: 'none'}} alt={"Titulo de la canción: Luna"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" />  
                  <h5 className="tituloCancion">Luna</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/69vlMrzHwATKzupwNcUPyK" style={{ textDecoration: 'none'}} alt={"Titulo de la canción: La santa"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0" />  
                    <h5 className="tituloCancion">La santa</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1dp62fHaXUP0Zh45voegpI" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Lágrimas desordenadas"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02420c7ba982f6f92351fc0a2b" />  
                    <h5 className="tituloCancion">Lágrimas desordenadas</h5>
                  </Link>                    
                </div>
                
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/0PtLrH95CQ2lKf6pym5LmA" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: El patio"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02531164360cf8cd7c95b6df79" />  
                    <h5 className="tituloCancion">El patio</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/3BFh8rR6aMexy7ELu2UQy3" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Manos rotas"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e021a176de75067ededc26ad96d" />  
                    <h5 className="tituloCancion">Manos rotas</h5>
                  </Link>                    
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1kqH58eGh2ZTOHwqBIB2tM" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Una foto Remix"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02d7e3250bc4b38c29a68a8af9" />  
                    <h5 className="tituloCancion">Una foto Remix</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/4HnuPc5Cng3tbwunyqSMNi" style={{ textDecoration: 'none'}} alt={"Titulo de la canción: Espectacular"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e020acf414348b3ca9a6f538690" />  
                    <h5 className="tituloCancion">Espectacular</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/20CozgjF6bshBw8cLhN23B" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Nochentera"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0243eb3794977db60bced5ad16 " />  
                    <h5 className="tituloCancion">Nochentera</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/3k3NWokhRRkEPhCzPmV8TW" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Ojitos lindos"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72  " />  
                    <h5 className="tituloCancion">Ojitos lindos</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/2dcFfC6dq4E7jlaSzM6agR" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Diabólica"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02fa195c767dc3c14e7261ddec  " />  
                    <h5 className="tituloCancion">Diabólica</h5>
                  </Link>                    
                </div>
              </div>
            </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
    <div className="row">
      <div id="Top 10 España" className="col-md-6 carousel-container mx-auto">
        <h3>Top 10 España</h3>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/3ng8tfwvzR4BBwa9yaMms6" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: BadGyal"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" />  
                    <h5 className="tituloCancion">BadGyal</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/5bi0gh89wRuH2OgjdAKFsb" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Santa"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02f02899736a6ff8dd538ae70b" />  
                    <h5 className="tituloCancion">Santa</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/0LZy30mVmxqUpdQmaXKXBd" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Adivino"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02b41f34aa51be675c5cfd3d94" />  
                    <h5 className="tituloCancion">Adivino</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/62k8iliO7KTiYp7LWGPa5p" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: X'clusivo (Remix)"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e025327757614a832374e491778" />  
                    <h5 className="tituloCancion">X'clusivo (Remix)</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/6XjDF6nds4DE2BBbagZol6" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Gata only"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e021d0777b3259d0bd618f4a1f6" />  
                    <h5 className="tituloCancion">Gata only</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/2bipvepI8ridFvIAImR5Xf" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: El conjuntito"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02cd22e1599ed8847e9463dfc2" />  
                    <h5 className="tituloCancion">El conjuntito</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/1NTluDanyn4ET8RTYi0H1I" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Yo lo soñé"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e021818c943fc42bfffaa670bea" />  
                    <h5 className="tituloCancion">Yo lo soñé</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/7bywjHOc0wSjGGbj04XbVi" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: Luna"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02f1aad814a40ec7419c234242" />  
                    <h5 className="tituloCancion">Luna</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/54qwF6zeJ0zjjcOxFGICli" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: La vida sin ti"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e024a7de707fb21914d8b2cbf3e" />  
                    <h5 className="tituloCancion">La vida sin ti</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/6m5pxtjGX5rEzvGS1SUTVt" style={{ textDecoration: 'none' }} alt={"Titulo de la canción: La ranger"}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02ff85dfac3e0e346580f42910" />  
                    <h5 className="tituloCancion">La ranger</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>
        </Carousel>
    </div>
        

          
    </div>

    </div>
    
  );
}

export default Musica;