import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Seo from "../components/Seo";

// Analytics and ads live here, not in <Seo />. Pages render <Seo /> a second
// time to override the title, which loaded these twice and double-counted every
// analytics event. They stay in <Head> rather than next/script so they ship in
// the server-rendered HTML and do not depend on hydration completing.
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FXZ35BV5QG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FXZ35BV5QG');`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4942977426656768"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
