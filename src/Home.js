import React from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  const Category = "Homepage";

  const DirectorsFilms = "Directors Films";
  const ColorPairs = "Color Pairs";
  const OldMatches = "Old Matches";
  const Ahrefs = "Ahrefs / Since 2016";
  const Phobia = "Claustrophobia / 2016";
  const Lebedev = "Art. Lebedev Studio / 2010–2016";
  const Email = "Email / fokinf@gmail.com";
  const Facebook = "Facebook / fokinf";
  const Instagram = "Instagram / fedose";

  const HandleColorPairs = () => {
    ReactGA.event({
      category: Category.toString(),
      action: ColorPairs.toString()
    })
  }

  const HandleOldMatches = () => {
    ReactGA.event({
      category: Category.toString(),
      action: OldMatches.toString()
    })
  }

  const HandleAhrefs = () => {
    ReactGA.event({
      category: Category.toString(),
      action: Ahrefs.toString()
    })
  }
  const HandlePhobia = () => {
    ReactGA.event({
      category: Category.toString(),
      action: Phobia.toString()
    })
  }

  const HandleLebedev = () => {
    ReactGA.event({
      category: Category.toString(),
      action: Lebedev.toString()
    })
  }

  const HandleEmail = () => {
    ReactGA.event({
      category: Category.toString(),
      action: Email.toString()
    })
  }

  const HandleFacebook = () => {
    ReactGA.event({
      category: Category.toString(),
      action: Facebook.toString()
    })
  }

  const HandleInstagram = () => {
    ReactGA.event({
      category: Category.toString(),
      action: Instagram.toString()
    })
  }

  return (
    <div className="pattern">
      <main>
        <Helmet>
          <title>Fedor Fokin</title>
          <meta charset="utf-8" />
          <meta name="description" content="Interaction designer" />
          <meta property="og:title" content="Fedor Fokin" />
          <meta 
            name="viewport" 
            content="width=device-width, initial-scale=1" 
          />
        </Helmet>
        <header>
          <h1>Fedor Fokin</h1>
          Interaction designer<br />
        </header>
        <section>
          <h2>Projects</h2>
          <ul>
            <li onClick={HandleOldMatches}><a href="https://directorsfilms.com" target="_blank">{DirectorsFilms}</a></li>
            <li onClick={HandleColorPairs}><Link to="/color-pairs">{ColorPairs}</Link></li>
            <li onClick={HandleOldMatches}><a href="https://www.instagram.com/oldmatches/" target="_blank">{OldMatches}</a></li>
          </ul>
        </section>
        <section>
          <h2>Work</h2>
          <ul>
            <li onClick={HandleAhrefs}><a href="https://ahrefs.com" target="_blank">{Ahrefs}</a></li>
            <li onClick={HandlePhobia}><a href="https://claustrophobia.com/" target="_blank">{Phobia}</a></li>
            <li onClick={HandleLebedev}><a href="https://www.artlebedev.ru/fedose/" target="_blank">{Lebedev}</a></li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <ul>
            <li onClick={HandleEmail}><a href="mailto:fokinf@gmail.com">{Email}</a></li>
            <li onClick={HandleFacebook}><a href="https://www.facebook.com/fokinf" target="_blank">{Facebook}</a></li>
            <li onClick={HandleInstagram}><a href="https://www.instagram.com/fedose" target="_blank">{Instagram}</a></li>
          </ul>
        </section>
        <footer>
          2010–2024
        </footer>
      </main>
    </div>
  )
}

export default Home;