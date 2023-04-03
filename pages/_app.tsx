import '@/styles/globals.css';
import "@/styles/_colors.scss";
import "@/styles/HotelCarousel.scss";
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}