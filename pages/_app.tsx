import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Script
        src="https://kit.fontawesome.com/6781ca40f0.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  );
}

export default MyApp;
