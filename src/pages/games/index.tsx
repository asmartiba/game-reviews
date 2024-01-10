'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import strapi from './../strapi';
import config from './../config';
import styles from '../../styles/globals.module.css'; 

export interface Game {
  id: number;
  attributes: {
    title: string;
    console: string;
    slug: string;
    thumbnail:string;
  };
}

const GamesPage: React.FC = () => {
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

      console.log('API Response:', responseData);

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
    <div className={styles['games']}>
      <h1>Games</h1>

            {games.map((game) => (
        <div key={game.id} className={styles['gamelist']}>
          <h2>
            <Link href={`/games/${game.id}`}>
              {game.attributes.title}
            </Link>
          </h2>
          {game.attributes.thumbnail && (
            <img
              src={game.attributes.thumbnail}
              alt={game.attributes.title}
              style={{ width: '30%' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default GamesPage;
