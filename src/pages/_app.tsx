import ThemeProviderBind from "@/providers/ThemeProviderBind";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderBind>
      <Component {...pageProps} />
    </ThemeProviderBind>
  );
}
