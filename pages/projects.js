import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <p className="text-xl">This is the Projects page</p>
       <main className={styles.main}>
       <div class="lg:flex items-center container mx-auto my-auto">
       <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
        <img src="https://picsum.photos/id/29/2106/1404" alt=""class="overflow-hidden"></img>
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Project 1</h3>
          <p class="text-justify">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
          <div class="mt-5">
            <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
          </div>
        </div>
      </div>
      <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
        <img src="https://picsum.photos/id/247/2106/1404" alt=""class="overflow-hidden"></img>
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Project 2 </h3>
          <p class="text-justify">Rapping wind chamber have was has, is all of thy stood chamber his bore. Nameless or as door tapping both thy grew lenore. We my still respiterespite lie, with lordly.</p>
          <div class="mt-5">
            <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
          </div>
        </div>
      </div>
       </div>
       </main>


            <Footer></Footer>
        </div>

    )

}