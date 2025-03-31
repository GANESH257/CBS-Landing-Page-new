import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Chesterfield Bariatric Surgery | Expert Surgical Care</title>
        <meta name="description" content="Chesterfield Bariatric Surgery provides expert surgical care with a personalized approach. Schedule a consultation today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
