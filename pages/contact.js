import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendly from "../components/Calendly";

export default function Contact() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar></Navbar>
      <Calendly></Calendly>

      <Footer></Footer>
    </div>
  );
}
