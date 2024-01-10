import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import styles from '../styles/globals.module.css';
import logo from '../images/logo.png';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <Image src={logo} width="150" height="150" alt='logo' />
            <Link href="/"><h1>Game Reviews Directory </h1></Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Component {...pageProps} key={router.route} />
      </main>

      <footer className={styles.footer}>
        <div>
          <p>© 2024 Game Reviews</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
