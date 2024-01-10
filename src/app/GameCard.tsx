// GameCard.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface GameCardProps {
  title: string;
  console: string;
  slug: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, console, slug }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    router.push('/games/[slug]', `/games/${slug}`);
  };

  return (
    <div
      style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', cursor: 'pointer' }}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>Console: {console}</p>
    </div>
  );
};

export default GameCard;
