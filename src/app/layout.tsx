import type { Metadata } from 'next';
import Header from '../../components/header';
import "../../styles/global.scss";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Romy hugens',
  description: 'healthy coaching',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.2/js/bootstrap.min.js" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
