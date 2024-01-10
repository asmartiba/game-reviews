// components/GameDetail.tsx
import React, { useEffect, useState } from 'react';
import config from './config';

interface GameDetailProps {
  gameId: string;
}

const GameDetail: React.FC<GameDetailProps> = ({ gameId }) => {
  const [game, setGame] = useState<any>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`${config.api}/api/games/${gameId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        if (responseData && responseData.data) {
          setGame(responseData.data);
        } else {
          console.error('Invalid data format:', responseData);
        }
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.attributes.title}</h1>
      <p>Console: {game.attributes.console}</p>
      {/* Add more elements for other attributes, like an image */}
    </div>
  );
};

export default GameDetail;
