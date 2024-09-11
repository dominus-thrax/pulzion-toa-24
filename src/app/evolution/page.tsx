"use client"
import React from 'react';
import Image from 'next/image';
import GameCard from '@/components/Gamecard'; // Import the generalized game component

const games = [
  { year: 1958, title: 'Tennis for Two', description: 'The first game ever created.', imageUrl: '/Game-Evolution/tennis42.jpg',marquee:'/Game-Evolution/pacman-gaming.gif'},
  { year: 1972, title: 'Pong', description: 'One of the first arcade video games.', imageUrl: '/Game-Evolution/pong.gif',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 1978, title: 'Space Invaders', description: 'A pioneering game in the shooter genre.', imageUrl: '/Game-Evolution/space-invader.gif',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 1980, title: 'PACMAN', description: 'A pioneering game in the shooter genre.', imageUrl: '/Game-Evolution/pacman.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 1985, title: 'Super Mario Bros', description: 'A pioneering game in the shooter genre.', imageUrl: '/Game-Evolution/mario.png',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 1986, title: 'The Legend of Zelda-Nintendo', description: 'The first game ever created.', imageUrl: '/Game-Evolution/zelda.webp',marquee:'/Game-Evolution/pacman-gaming.gif' },  
  { year: 2010, title: 'Red Dead Redemption', description: 'The first game ever created.', imageUrl: '/Game-Evolution/Red-Dead-Redemption.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2011, title: 'Minecraft', description: 'The first game ever created.', imageUrl: '/Game-Evolution/minecraft.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2012, title: 'Angry Birds', description: 'The first game ever created.', imageUrl: '/Game-Evolution/angry-birds.webp',marquee:'/Game-Evolution/angry-bird.png' },
  { year: 2012, title: 'Clash of Clans', description: 'The first game ever created.', imageUrl: '/Game-Evolution/coc.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2013, title: 'GTA V', description: 'The first game ever created.', imageUrl: '/Game-Evolution/gtav.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2017, title: 'Fortnite', description: 'The first game ever created.', imageUrl: '/Game-Evolution/fortnite.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2018, title: 'PUBG Mobile', description: 'The first game ever created.', imageUrl: '/Game-Evolution/pubg.jpg',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2018, title: 'Beat Saber - AR & VR', description: 'The first game ever created.', imageUrl: '/Game-Evolution/beat-saber.png',marquee:'/Game-Evolution/pacman-gaming.gif' },
  { year: 2024, title: 'Black Myth Wukong', description: 'The first game ever created.', imageUrl: '/Game-Evolution/wukong.jpeg',marquee:'/Game-Evolution/pacman-gaming.gif' },
];

const GameEvo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
      <div className="flex justify-center items-center h-96 bg-black text-white">
        <Image 
        src='/Game-Evolution/GameEvolution.png'
        alt='game evolution'
        width={850}
        height={50}
        />
      </div>
      {/* Game Cards Section */}
      <div className="space-y-10 p-10 bg-black">
        {games.map((game, index) => (
          <GameCard 
            key={index}
            year={game.year}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
            isReversed={index % 2 === 1}  // Reverse layout for odd indices
            marquee={game.marquee}
          />
        ))}
      </div>
    </div>
  );
}

export default GameEvo;
