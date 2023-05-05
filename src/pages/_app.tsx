import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SEOProvider from "@/providers/SEOProvider";
import ThemeProviderBind from "@/providers/ThemeProviderBind";
import { SEOProps } from "@/providers/providers";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { SEO }: { SEO: SEOProps } = pageProps;
  return (
    <>
      <SEOProvider {...SEO} />
      <ThemeProviderBind>
        <Container maxWidth="xl" disableGutters>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProviderBind>
    </>
  );
}
