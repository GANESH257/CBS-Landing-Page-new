import { Inter } from 'next/font/google';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chesterfield Bariatric Surgery | Weight Loss Solutions',
  description: 'Expert bariatric surgery services in Chesterfield, MO. Specializing in gastric sleeve, gastric bypass, and other weight loss procedures with Dr. Deepu Sudhakaran.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Chesterfield Bariatric Surgery | Expert Surgical Care</title>
        <meta name="description" content="Chesterfield Bariatric Surgery provides expert surgical care with a personalized approach. Schedule a consultation today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9QWSJQN');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9QWSJQN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
