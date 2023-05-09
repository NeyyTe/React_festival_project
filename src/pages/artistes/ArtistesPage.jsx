import React from 'react'
import Header from '../../components/header/Header'
import './artistesPage.css'
import './js.js'



function Artistes() {
  return (
    <>
  <Header/>
  <div class="container containerClips">
           

            <nav class="slideBar">
                <ul>
                    <li><a href="clips.html"><i class="fa-solid fa-hand-holding-heart"></i> Faire un don</a></li>
                    <li><a href="shop.html"><i class="fa-solid fa-cart-shopping"></i> La boutique</a></li>
                    <li><a href="clips.html">Tops</a></li>
                    <li><a href="clips.html">Best of</a></li>
                    <li><a href="clips.html">Tops par streamers</a></li>
                    <li><a href="clips.html">Récents</a></li>
                    <li><a href="clips.html">Streamers</a></li>
                    <li><a href="clips.html">Jeux</a></li>
                </ul>
            </nav>

            <main>
                <div class="filterClips">
                    <button class="buttonSlideBar" aria-label="Afficher/Masquer sidebar"><i class="fa-solid fa-bars fa-2x"></i></button>
                    <button class="buttonTabs activeClips">Tout le week-end</button>
                    <button class="buttonTabs">Vendredi</button>
                    <button class="buttonTabs">Samedi</button>
                    <button class="buttonTabs">Dimanche</button>
                </div>

                <h1>Les plus vues</h1>

                <div class="pagination">
                    <button>1</button>
                </div>

                <div class="clips clipsWeekEnd activeTabs">

                    <a href="https://www.youtube.com" class="card">
                        
                        <video src="" controls></video>
                        
                        <div class="desc">
                            <div><span>1 000 000 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                            <div class="title">
                                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                                <h2>bigard + alien = ALLAALLALALA (+ flop d'étoiles)</h2>
                            </div>
                            <p><span>Nom Streamer</span> - <span>Activité</span></p>
                        </div>
                    </a>

                </div>

                <div class="clips clipsFriday">

                    <a href="https://www.youtube.com" class="card">
                        <div class="video">
                            <video src="" controls></video>
                        </div>
                        <div class="desc">
                            <div><span>1 000 000 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                            <div class="title">
                                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                                <h2>YO</h2>
                            </div>
                            <p><span>Nom Streamer</span> - <span>Activité</span></p>
                        </div>
                    </a>

                </div>

                <div class="clips clipSaturday">

                    <a href="https://www.youtube.com" class="card">
                        <div class="video">
                            <video src="" controls></video>
                        </div>
                        <div class="desc">
                            <div><span>1 000 000 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                            <div class="title">
                                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                                <h2>Titre video</h2>
                            </div>
                            <p><span>Nom Streamer</span> - <span>Activité</span></p>
                        </div>
                    </a>

                </div>

                <div class="clips clipsSunday">

                    <a href="https://www.youtube.com" class="card">
                        <div class="video">
                            <video src="" controls></video>
                        </div>
                        <div class="desc">
                            <div><span>1 000 000 Vues</span><span>01/01/2022 à 01:00:00</span></div>
                            <div class="title">
                                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png" alt=""/>
                                <h2>Titre video</h2>
                            </div>
                            <p><span>Nom Streamer</span> - <span>Activité</span></p>
                        </div>
                    </a>

                </div>

            </main>
            
        </div>
    </>
  )
}

export default Artistes