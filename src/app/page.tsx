'use client';
// HomePage.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import GameCard from './GameCard';
import strapi from '../../services/strapi';
import config from './config';

interface Game {
  id: number;
  attributes: {
    title: string;
    console: string;
    slug: string;
  };
}

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async () => {
    try {
      const reqOptions = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
      };

      const response = await fetch(`${config.api}/api/games`, reqOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData && responseData.data && Array.isArray(responseData.data)) {
        setGames(responseData.data);
      } else {
        console.error('Invalid data format:', responseData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Games</h1>

      {games.map((game) => (
        <div key={game.id}>
          <GameCard title={game.attributes.title} console={game.attributes.console} slug={game.attributes.slug} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
