/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Header from '../../components/header';
import "../../styles/global.scss";
import Script from 'next/script';
import Footer from '../../components/footer';
import FooterContact from '../../components/footerContact';

export const metadata: Metadata = {
  title: 'Romy hugens',
  description: 'healthy coaching',

}

export default function RootLayout({
  children, isContactPage
}: {
  children: React.ReactNode;
  isContactPage: boolean;
}) {
  return (
    <html lang="nl" id='html'>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.2/js/bootstrap.min.js" />

        {/* <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
          defer
        /> */}
      </body>
    </html>
  );
}

