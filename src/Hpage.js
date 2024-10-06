import React, { useState } from 'react';
import EventSection from './EventSection';
import ShowDetails from './ShowDetails';
import './App.css';
import mainpage from './images/mainpage.jpg';
import MarvelS from './images/MarvelS.jpg';
import FastX from './images/FastX.jpg';
import JohnWickChp4 from './images/JohnWickChp4.jpg';
import MissionimpossibleDR from './images/MissionimpossibleDR.jpg';
import Spiderman from './images/Spiderman.jpg';
import Blackpanther from './images/Blackpanther.jpg';
import Topgun from './images/Topgun.jpg';
import Thebatman from './images/Thebatman.jpg';
import Dune from './images/Dune.jpg';
import thematrix from './images/thematrix.jpg';
import avatar from './images/avatar.jpg';
import starwars from './images/starwars.jpg';
import tenet from './images/tenet.jpg';
import bladerunner from './images/bladerunner.jpg';
import interstellar from './images/interstellar.jpg';
import inception from './images/inception.jpg';
import thepursuit from './images/thepursuit.jpg';
import astar from './images/astar.jpg';
import forrestgump from './images/forrestgump.jpg';
import godfather from './images/godfather.jpg';
import twelveyears from './images/twelveyears.jpg';
import socialnetwork from './images/socialnetwork.jpg';
import parasite from './images/parasite.jpg';
import conjuring from './images/conjuring.jpg';
import Hereditary from './images/heriditary.jpg';
import IT from './images/IT.jpg';
import quietplace from './images/quietplace.jpg';
import getout from './images/getout.jpg';
import exorcist from './images/exorcist.jpg';
import badadook from './images/badadook.jpg';
import lastdance from './images/lastdance.jpg';
import planetearth from './images/planetearth.jpg';
import makingamurder from './images/makingamurder.jpg';
import neighbor from './images/neighbor.jpg';
import thirteenth from './images/thirteenth.jpg';
import freesolo from './images/freesolo.jpg';
import marvel from './videos/marvel.mp4';

const eventsData = {
  action: [
    { id: 1, title: 'The Marvels', date: 'Sept 20, 2024', image: MarvelS, description: 'An action-packed adventure of superheroes joining forces to save the universe.', duration: '2h 30m', genre: 'Action, Superhero', cast: ['Brie Larson', 'Teyonah Parris', 'Iman Vellani'], video: marvel },
    { id: 2, title: 'Fast & Furious 10', date: 'May 19, 2023', image: FastX, description: 'The ultimate street racing crew faces their toughest challenge yet.', duration: '2h 10m', genre: 'Action, Thriller', cast: ['Vin Diesel', 'Michelle Rodriguez', 'Tyrese Gibson'], video: marvel },
    { id: 3, title: 'John Wick: Chapter 4', date: 'March 24, 2023', image: JohnWickChp4, description: 'John Wick uncovers a path to defeating the High Table, but faces powerful enemies.', duration: '2h 49m', genre: 'Action, Crime', cast: ['Keanu Reeves', 'Laurence Fishburne', 'Donnie Yen'], video: marvel },
    { id: 4, title: 'Mission Impossible: Dead Reckoning', date: 'July 14, 2023', image: MissionimpossibleDR, description: 'Ethan Hunt and his team embark on a race to stop a mysterious force.', duration: '2h 43m', genre: 'Action, Thriller', cast: ['Tom Cruise', 'Rebecca Ferguson', 'Simon Pegg'],video: marvel },
    { id: 5, title: 'Black Panther: Wakanda Forever', date: 'Nov 11, 2022', image: Blackpanther, description: 'The people of Wakanda fight to protect their kingdom in the wake of King T’Challa’s death.', duration: '2h 41m', genre: 'Action, Drama', cast: ['Letitia Wright', 'Lupita Nyong\'o', 'Danai Gurira'], video: marvel },
    { id: 6, title: 'Top Gun: Maverick', date: 'May 27, 2022', image: Topgun, description: 'After 30 years, Maverick returns to train a new generation of fighter pilots.', duration: '2h 11m', genre: 'Action, Drama', cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'], video: marvel },
    { id: 7, title: 'The Batman', date: 'March 4, 2022', image: Thebatman, description: 'Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind cryptic clues.', duration: '2h 56m', genre: 'Action, Crime', cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'], video: marvel },
    { id: 8, title: 'Spider-Man: No Way Home', date: 'Dec 17, 2021', image: Spiderman, description: 'Peter Parker seeks help to undo the multiverse havoc caused by his secret being revealed.', duration: '2h 28m', genre: 'Action, Superhero', cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'], video: marvel }
  ],

  sciFi: [
    { id: 1, title: 'Dune', date: 'Oct 22, 2021', image: Dune, description: 'A young nobleman embarks on a dangerous journey to a desert planet to protect his family’s legacy.', duration: '2h 35m', genre: 'Sci-Fi, Adventure', cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'], video: marvel },
    { id: 2, title: 'The Matrix Resurrections', date: 'Dec 22, 2021', image: thematrix, description: 'Neo returns to a familiar reality, where he must confront new dangers in the virtual world.', duration: '2h 28m', genre: 'Sci-Fi, Action', cast: ['Keanu Reeves', 'Carrie-Anne Moss', 'Yahya Abdul-Mateen II'], video: marvel },
    { id: 3, title: 'Avatar: The Way of Water', date: 'Dec 16, 2022', image: avatar, description: 'Jake Sully and Neytiri embark on a new journey as they face threats to their family and home on Pandora.', duration: '3h 12m', genre: 'Sci-Fi, Fantasy', cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'], video: marvel },
    { id: 4, title: 'Star Wars: The Rise of Skywalker', date: 'Dec 20, 2019', image: starwars, description: 'The final battle between the Resistance and the First Order, bringing the Skywalker saga to a close.', duration: '2h 22m', genre: 'Sci-Fi, Adventure', cast: ['Daisy Ridley', 'Adam Driver', 'Oscar Isaac'], video: marvel },
    { id: 5, title: 'Tenet', date: 'Sept 3, 2020', image: tenet, description: 'A secret agent manipulates time in order to prevent World War III in a mind-bending mission.', duration: '2h 30m', genre: 'Sci-Fi, Thriller', cast: ['John David Washington', 'Robert Pattinson', 'Elizabeth Debicki'], video: marvel },
    { id: 6, title: 'Blade Runner 2049', date: 'Oct 6, 2017', image: bladerunner, description: 'A young blade runner uncovers a long-buried secret that could plunge what’s left of society into chaos.', duration: '2h 44m', genre: 'Sci-Fi, Thriller', cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'], video: marvel },
    { id: 7, title: 'Interstellar', date: 'Nov 7, 2014', image: interstellar, description: 'A group of astronauts travels through a wormhole in search of a new home for humanity.', duration: '2h 49m', genre: 'Sci-Fi, Drama', cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'], video: marvel },
    { id: 8, title: 'Inception', date: 'July 16, 2010', image: inception, description: 'A skilled thief enters the dreams of others to steal secrets but faces the ultimate heist challenge.', duration: '2h 28m', genre: 'Sci-Fi, Thriller', cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'], video: marvel }
  ],

  drama: [
    { id: 1, title: 'The Pursuit of Happyness', date: 'Dec 15, 2006', image: thepursuit, description: 'A struggling salesman takes on life’s challenges while raising his son, striving for a better future.', duration: '2h 25m', genre: 'Drama', cast: ['Will Smith', 'Jaden Smith', 'Thandie Newton'], video: marvel },
    { id: 2, title: 'A Star is Born', date: 'Oct 5, 2018', image: astar, description: 'A musician helps a young singer find fame, even as age and alcoholism send his own career into a downward spiral.', duration: '2h 16m', genre: 'Drama, Romance', cast: ['Bradley Cooper', 'Lady Gaga', 'Sam Elliott'], video: marvel },
    { id: 3, title: 'Forrest Gump', date: 'July 6, 1994', image: forrestgump, description: 'A man with low intelligence lives a life full of extraordinary experiences and unknowingly influences historical events.', duration: '2h 22m', genre: 'Drama, Romance', cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'], video: marvel },
    { id: 4, title: 'The Godfather', date: 'March 24, 1972', image: godfather, description: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.', duration: '2h 55m', genre: 'Drama, Crime', cast: ['Marlon Brando', 'Al Pacino', 'James Caan'], video: marvel },
    { id: 5, title: '12 Years a Slave', date: 'Oct 18, 2013', image: twelveyears, description: 'A free African-American man is kidnapped and sold into slavery, enduring twelve years of cruelty.', duration: '2h 14m', genre: 'Drama, Biography', cast: ['Chiwetel Ejiofor', 'Michael Fassbender', 'Lupita Nyong\'o'], video: marvel },
    { id: 6, title: 'The Social Network', date: 'Oct 1, 2010', image: socialnetwork, description: 'The story of Facebook’s founding and the legal battles that followed its rise to global dominance.', duration: '2h 1m', genre: 'Drama, Biography', cast: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake'], video: marvel },
    { id: 7, title: 'Parasite', date: 'Nov 8, 2019', image: parasite, description: 'A poor family schemes to become employed by a wealthy household, only to face unforeseen complications.', duration: '2h 12m', genre: 'Drama, Thriller', cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'], video: marvel },
  ],
  
  horror: [
    { id: 1, title: 'The Conjuring', date: 'July 19, 2013', image: conjuring, description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.', duration: '1h 52m', genre: 'Horror, Supernatural', cast: ['Patrick Wilson', 'Vera Farmiga', 'Lili Taylor'], video: marvel },
    { id: 2, title: 'Hereditary', date: 'June 8, 2018', image: Hereditary, description: 'A grieving family is haunted by tragic and disturbing occurrences that unravel dark secrets.', duration: '2h 7m', genre: 'Horror, Thriller', cast: ['Toni Collette', 'Alex Wolff', 'Milly Shapiro'], video: marvel },
    { id: 3, title: 'IT', date: 'Sept 8, 2017', image: IT, description: 'A group of bullied kids bands together to destroy a shape-shifting monster that disguises itself as a clown.', duration: '2h 15m', genre: 'Horror, Supernatural', cast: ['Bill Skarsgård', 'Jaeden Martell', 'Finn Wolfhard'], video: marvel },
    { id: 4, title: 'A Quiet Place', date: 'April 6, 2018', image: quietplace, description: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.', duration: '1h 30m', genre: 'Horror, Sci-Fi', cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds'], video: marvel },
    { id: 5, title: 'Get Out', date: 'Feb 24, 2017', image: getout, description: 'A young African-American man visits his white girlfriend’s parents for the weekend, where his discomfort leads to horrifying discoveries.', duration: '1h 44m', genre: 'Horror, Thriller', cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'], video: marvel },
    { id: 6, title: 'The Exorcist', date: 'Dec 26, 1973', image: exorcist, description: 'When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.', duration: '2h 12m', genre: 'Horror, Supernatural', cast: ['Linda Blair', 'Ellen Burstyn', 'Max von Sydow'], video: marvel },
    { id: 7, title: 'The Babadook', date: 'Nov 28, 2014', image: badadook, description: 'A single mother and her son fall into a deep well of paranoia when an eerie children’s book manifests terrifying presences.', duration: '1h 34m', genre: 'Horror, Psychological', cast: ['Essie Davis', 'Noah Wiseman', 'Daniel Henshall'], video: marvel }
],

  
    documentaries: [
      { id: 1, title: 'The Last Dance', date: 'April 19, 2020', image: lastdance, description: 'An in-depth look at the career of Michael Jordan and the 1990s Chicago Bulls.', duration: '10 episodes (50m each)', genre: 'Sports, Biography', cast: ['Michael Jordan', 'Scottie Pippen', 'Dennis Rodman', 'Phil Jackson'], video: marvel },
      { id: 2, title: 'Planet Earth II', date: 'Nov 6, 2016', image: planetearth, description: 'A breathtaking journey showcasing wildlife and natural beauty across the globe.', duration: '6 episodes (1h each)', genre: 'Nature, Documentary', cast: ['David Attenborough (Narrator)'], video: marvel },
      { id: 3, title: 'Making a Murderer', date: 'Dec 18, 2015', image: makingamurder, description: 'A real-life thriller following the case of Steven Avery, who was wrongly convicted of a crime.', duration: '10 episodes (1h each)', genre: 'Crime, Documentary', cast: ['Steven Avery', 'Brendan Dassey'], video: marvel },
      { id: 4, title: 'Won’t You Be My Neighbor?', date: 'June 8, 2018', image: neighbor, description: 'A tribute to Fred Rogers, focusing on the legacy of his children’s TV show, Mr. Rogers’ Neighborhood.', duration: '1h 34m', genre: 'Biography, Documentary', cast: ['Fred Rogers'], video: marvel },
      { id: 5, title: '13th', date: 'Oct 7, 2016', image: thirteenth, description: 'Explores the history of racial inequality in the U.S., with a focus on the nation’s prisons.', duration: '1h 40m', genre: 'History, Documentary', cast: ['Angela Davis', 'Michelle Alexander', 'Bryan Stevenson'], video: marvel },
      { id: 6, title: 'Free Solo', date: 'Sept 28, 2018', image: freesolo, description: 'The story of rock climber Alex Honnold’s journey to climb Yosemite’s El Capitan without ropes.', duration: '1h 40m', genre: 'Adventure, Documentary', cast: ['Alex Honnold'], video: marvel }
    ],
    
};

const Hpage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleWatchNow = (event) => {
    setSelectedEvent(event);
    setCurrentPage('showDetails');
  };

  const handleGoBack = () => {
    setSelectedEvent(null);
    setCurrentPage('home');
  };

  return (
    <div className="app-container">
    {currentPage === 'home' && (
      <>
         <div className="main-image-container">
            <img src={mainpage} alt="Main Page" className="main-image" />
          </div>
      </>
    )}

    {currentPage === 'home' && (
      <>
        <EventSection sectionTitle="Action" events={eventsData.action} onWatchNow={handleWatchNow} />
        <EventSection sectionTitle="Sci-Fi" events={eventsData.sciFi} onWatchNow={handleWatchNow} />
        <EventSection sectionTitle="Drama" events={eventsData.drama} onWatchNow={handleWatchNow} />
        <EventSection sectionTitle="Horror" events={eventsData.horror} onWatchNow={handleWatchNow} />
        <EventSection sectionTitle="Documentaries" events={eventsData.documentaries} onWatchNow={handleWatchNow} />

      </>
    )}

    {currentPage === 'showDetails' && selectedEvent && (
      <ShowDetails event={selectedEvent} onGoBack={handleGoBack} />
    )}
  </div>
);
};

export default Hpage;
