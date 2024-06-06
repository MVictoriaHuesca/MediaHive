
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
    <>
    <div id="musica">
      <br/>
        {/*Barra de buscador*/}
        <form onSubmit={handleSearch} className="formulario d-flex p-12"  style={{alignItems: 'center', justifyContent: 'center' }}>
          <label htmlFor="search" className="visually-hidden">Buscar canción</label>
          <input id="search" type="text" value={cancion} onChange={e => setCancion(e.target.value)} alt={"Buscador de canciones"} style={{
            padding: '10px',
            borderRadius: '5px',
            border: '2px solid #ccc',
            marginRight: '10px',
            fontSize: '16px',
            outline: 'none',
            width: '50%'
          }}
          placeholder="Buscar canción..."
          />
          <button type="submit" 
            class="boton-buscar-musica"
          >Buscar</button>
        </form>
        <br/>
      

        <div className="listaCanciones" style={{ marginLeft: '10px', position: 'relative' }}>
        <div id="populares" className="carousel-container mx-auto px-5 py-3">
          <h3>Últimos estrenos</h3>
          <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/3is7Ej9fnZLhJD9pNOy4cI" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02975fd5bf28d6eb6454b5c3ff" alt="Toki" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>Toki</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/7221xIgOnuakPdLqT0F3nP" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0297306976e3eb8aad53b754eb" alt="I Had Some Help" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>I Had Some Help</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1l66Vx6g2i50WdeH6VU658" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e027e8a331d38946e24647a3df7" alt="PUEBLO DE MEDALLO" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>PUEBLO DE MEDALLO</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/68qjM8nSoUj8YQOJuu6hZ8" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" alt="YO LO SOÑÉ" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>YO LO SOÑÉ</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1IqkIEAKwZknVHpxjT7Vbq" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e026a78a042e38096089d60841a" alt="a new star (2024)" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>a new star (2 0 2 4)</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/33VIvWmmCUgix6Htm1WdOJ" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0244d0e103124e96e727eb54e7" alt="FARDOS" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>FARDOS</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/43PiEypaceH339CSNiggyj" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e025f516e13e1b417769a0a7cdd" alt="BBY BOO - REMIX" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>BBY BOO - REMIX</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/6RqD0fpAaKEZvQd0QrTj7j" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0245e6bba1ac0c5b54a9ee8121" alt="Lo Que Tiene" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>Lo Que Tiene</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/4Dvkj6JhhA12EX05fT7y2e" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e022e8ed79e177ff6011076f5f0" alt="As It Was" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>As It Was</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/0mWVScJbxO3tbXuiZOxYZE" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0208c74a3a99b01a6d3933b169" alt="So Long, London" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>So Long, London</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <h3>Más populares</h3>
          <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/05IRphYcddexv98wve800I" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" alt="LUNA" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center", marginTop:'1vh'}}>LUNA</h5>
                  </Link>                  
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/69vlMrzHwATKzupwNcUPyK" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0" alt="La Santa" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>La Santa</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1dp62fHaXUP0Zh45voegpI" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02420c7ba982f6f92351fc0a2b" alt="Lágrimas desordenadas" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Lágrimas desordenadas</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/0PtLrH95CQ2lKf6pym5LmA" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02531164360cf8cd7c95b6df79" alt="El Patio" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>El Patio</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/3BFh8rR6aMexy7ELu2UQy3" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e021a176de75067ededc26ad96d" alt="Manos Rotas" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Manos Rotas</h5>
                  </Link>                    
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/1kqH58eGh2ZTOHwqBIB2tM" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02d7e3250bc4b38c29a68a8af9" alt="Una Foto Remix" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Una Foto Remix</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/4HnuPc5Cng3tbwunyqSMNi" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e020acf414348b3ca9a6f538690" alt="Espectacular" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Espectacular</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/20CozgjF6bshBw8cLhN23B" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0243eb3794977db60bced5ad16" alt="Nochentera" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Nochentera</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/3k3NWokhRRkEPhCzPmV8TW" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72" alt="Ojitos Lindos" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Ojitos Lindos</h5>
                  </Link>                    
                </div>
                <div className="col d-flex justify-content-center">
                  <Link to="/cancion/2dcFfC6dq4E7jlaSzM6agR" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02fa195c767dc3c14e7261ddec" alt="Diabólica" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Diabólica</h5>
                  </Link>                    
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <h3>Top 10 España</h3>
          <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/3ng8tfwvzR4BBwa9yaMms6" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" alt="BADGYAL" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>BADGYAL</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/5bi0gh89wRuH2OgjdAKFsb" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02f02899736a6ff8dd538ae70b" alt="Santa" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Santa</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/0LZy30mVmxqUpdQmaXKXBd" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02b41f34aa51be675c5cfd3d94" alt="ADIVINO" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>ADIVINO</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/62k8iliO7KTiYp7LWGPa5p" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e025327757614a832374e491778" alt="X'CLUSIVO (REMIX)" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>X'CLUSIVO (REMIX)</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/6XjDF6nds4DE2BBbagZol6" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e021d0777b3259d0bd618f4a1f6" alt="Gata Only" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>Gata Only</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/2bipvepI8ridFvIAImR5Xf" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02cd22e1599ed8847e9463dfc2" alt="El Conjuntito" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>El Conjuntito</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/1NTluDanyn4ET8RTYi0H1I" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e021818c943fc42bfffaa670bea" alt="YO LO SOÑÉ" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>YO LO SOÑÉ</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/7bywjHOc0wSjGGbj04XbVi" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02f1aad814a40ec7419c234242" alt="LUNA" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}} >LUNA</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/54qwF6zeJ0zjjcOxFGICli" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e024a7de707fb21914d8b2cbf3e" alt="La Vida Sin Ti" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>La Vida Sin Ti</h5>
                  </Link>                  
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <Link to="/cancion/6m5pxtjGX5rEzvGS1SUTVt" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <img className="cancion" src="https://i.scdn.co/image/ab67616d00001e02ff85dfac3e0e346580f42910" alt="LA RANGER" style={{ width: '180px', height: '180px' }}/>  
                    <h5 style={{textAlign: "center", marginTop:'1vh'}}>LA RANGER</h5>
                  </Link>                  
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Musica;