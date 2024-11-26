import "@styles/globals.scss";
import { Poppins, Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <>
      <Head>
        <title>EGC Group</title>
      </Head>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </>
    // </LocalizationProvider>
  );
}
