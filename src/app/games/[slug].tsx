// pages/games/[slug].tsx
import React from 'react';
import { useRouter } from 'next/router';
import GameDetail from '../GameDetail'; // Adjust the path as needed

const GamePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  return <GameDetail gameId={slug as string} />;
};

export default GamePage;
