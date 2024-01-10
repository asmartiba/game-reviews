import config from '../services/config';

export interface Game {
  id: number;
    attributes: {
        title: string;
        description: string;
        rating: number;
        releaseDate: string;
        console: string;
        slug: string;
        thumbnail: string;
        screenshots: any[];
        review: string;
    }
}

export const fetchGame = async (id: number): Promise<Game | null> => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const response = await fetch(`${config.api}/api/games/${id}`, reqOptions);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }

    const { data }: { data: Game } = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching game:', error);
    return null;
  }
};
