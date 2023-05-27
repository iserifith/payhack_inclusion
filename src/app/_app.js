import '@/styles/globals.css';
import Sidebar from '../components/shared/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
