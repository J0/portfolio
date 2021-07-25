import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import UnderConstruction from '../components/UnderConstruction'



export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar></Navbar>
      <main className={styles.main}>
        <div className="flex space-x-4">
          <p> A paragraph</p>
          <p>Another paragraph</p>
        </div>
        <h1 className={styles.title}>
          Welcome to Joel's Site!
        </h1>
        <UnderConstruction></UnderConstruction>
      </main>

      <Footer></Footer>
   </div>
  )
}
