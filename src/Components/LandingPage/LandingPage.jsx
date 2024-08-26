import React from 'react'
import './Landingpage.css'

import animanga_outline from '../Assets/animanga-outline.png'
import collab_anime from '../Assets/collab-anime.png'

export const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="container">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logoname">
            AniManga
          </a>
        </div>
        <div className="navbar-center">
          <ul className="navbar-list">
            <li>
              Home
            </li>
            <li>
              Features
            </li>
            <li>
              Downloads
            </li>
            <li>
              Updates
            </li>
            </ul>
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="content-left">
          <div className="title">
            <p>Discover a New World of Manga with AniManga!</p>
          </div>
          <div className="desc-container">
            <div className="desc">
              <p>Welcome to AniManga, your ultimate gateway to the captivating universe
              of manga! Dive into an endless library of stories that span every genre
              imaginable from heartwarming romances and action-packed adventures to
              mind-bending sci-fi and thrilling mysteries. Whether you're a seasoned
              manga enthusiast or a newcomer eager to explore, AniManga offers a seamless,
              immersive reading experience tailored just for you.</p>
            </div>
          </div>
          <div className="get-container">
            <div className="getbutton">Get Application</div>
          </div>
        </div>
        <div className="content-right">
          <div className="ani-manga">
            <img src={animanga_outline} alt="manga-outline" className="img-animanga"/>
          </div>
      </div>    
      </div>
      <div className="collab-feature">
      <div className="collab-anime">
        <img src={collab_anime} alt="Anime Collab" className='collab_animes' />
      </div>
      <div className="animanga-features">
        <div className="title-feature">
          <p>AniManga Features</p>
        </div>
        <div className="features-number">
          <div className="features-header">
          <p className='numb'>1</p>
          <p className='anima-feature'>Vast Manga Library</p>
        
        </div>
        <div className="features-desc">
          <p>Provide users with access to a vast library of manga titles, spanning various genres and demographics, ensuring there is something for everyone.</p>
        </div>
        </div>
        <div className="features-number">
          <div className="features-header">
          <p className='numb'>2</p>
          <p className='anima-feature'>Personalized Recommendation</p>
          </div>
        <div className="features-desc">
          <p>Utilize algorithms to offer personalized recommendations based on users' reading history, preferences, and favorite genres, helping them discover new series they might enjoy.</p>
        </div>
        </div>
        <div className="features-number">
          <div className="features-header">
          <p className='numb'>3</p>
        <p className='anima-feature'>Offline Reading</p>
          </div>
        <div className="features-desc">
          <p>Allow users to download manga chapters for offline reading, enabling them to enjoy their favorite series even when they don't have an internet connection.</p>
        </div>
        </div>
        <div className="features-number">
          <div className="features-header">
          <p className='numb'>4</p>
        <p className='anima-feature'>Bookmarking and Reading Lists</p>
          </div>
        <div className="features-desc">
          <p>Enable users to bookmark manga series they are currently reading or create reading lists to keep track of titles they plan to read in the future.</p>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    
  )
}
