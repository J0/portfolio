import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <p className="text-xl">This is the about page</p>
            <div>
                <p>Some text</p>
                <p>Worth considering</p>
            </div>
            <Footer></Footer>
        </div>

    )

}