import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <div>
      <header>
    
        <nav>
          <div>
            <img src="/logo.png" width="150" height="150" alt={''} />
            <Link href="/">Game Reviews </Link>
          </div>
        </nav>
      </header>

      <main>
        <Component {...pageProps} key={router.route}/>
      </main>

      <footer>
        <div>
          <p>© 2024 Game Reviews</p>
        </div>
      </footer>
    </div>
  );
}

export default App;