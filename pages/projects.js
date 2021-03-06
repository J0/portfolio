import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className="lg:flex items-center container mx-auto my-auto">
          <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img
              src="https://picsum.photos/id/29/2106/1404"
              alt=""
              className="overflow-hidden"
            ></img>
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                Project 1
              </h3>
              <p className="text-justify">
                The be might what days revellers, which sought to a nor. Land
                from to suits his some. Saw him counsel begun mother though but.
                Ofttimes soils of since mighty pollution.
              </p>
              <div className="mt-5">
                <a
                  href=""
                  className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img
              src="https://picsum.photos/id/247/2106/1404"
              alt=""
              className="overflow-hidden"
            ></img>
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                Project 2{" "}
              </h3>
              <p className="text-justify">
                Rapping wind chamber have was has, is all of thy stood chamber
                his bore. Nameless or as door tapping both thy grew lenore. We
                my still respiterespite lie, with lordly.
              </p>
              <div className="mt-5">
                <a
                  href=""
                  className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
