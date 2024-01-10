import { useRouter } from 'next/router';
import { fetchGame, Game } from '../api';
import Link from 'next/link';
import styles from '../../styles/globals.module.css'; 

interface GamePageProps {
  game: Game | null;
}

const GamePage: React.FC<GamePageProps> = ({ game }) => {
  const router = useRouter();

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['game-container']}>
      <div className={styles['back-link']}>
        <Link href="/">
          <h2>Back</h2>
        </Link>
      </div>
      
      <h1>{game.attributes.title}</h1>


      <img className={styles.thumbnail} src={game.attributes.thumbnail} alt={game.attributes.title} />
      <h2>Description:</h2>
      <p>{game.attributes.description}</p>

      <h2>Review:</h2>
      <p>{game.attributes.review}</p>

      <h2>Console:</h2>
      <p>{game.attributes.console}</p>

      <h2>Screenshots:</h2>
      <div className={styles['screenshots-container']}>
        {game.attributes.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot.url} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
        ))}
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
