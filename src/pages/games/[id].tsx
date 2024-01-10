// pages/games/[id].tsx
import { useRouter } from 'next/router';
import { fetchGame, Game } from '../api';
import Link from 'next/link';

interface GamePageProps {
  game: Game | null;
}

const GamePage: React.FC<GamePageProps> = ({ game }) => {
  const router = useRouter();

  console.log('Router Query:', router.query);
  console.log('Game:', game);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.attributes.title}</h1>

      <img src={game.attributes.thumbnail} alt={game.attributes.title} />
      <p>{game.attributes.description}</p>

      <h2>Review</h2>
      <p>{game.attributes.review}</p>

      <h2>Console</h2>
      <p>{game.attributes.console}</p>

      <h3>Screenshots:</h3>
      <div>
        {game.attributes.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot.url} alt={`Screenshot ${index + 1}`} />
        ))}
      </div>

      <div>
        <Link href="/">
          <h2>Back</h2>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  console.log('ID:', id);
  
  const game = await fetchGame(id);
  console.log('Fetched Game:', game);

  return {
    props: {
      game,
    },
  };
}

export default GamePage;
