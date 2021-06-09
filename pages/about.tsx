import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p>Welcome to my page</p>
                <p>Here are some facts you may wish to know about me</p>
                <ol>
                    <li>I like ice cream</li>
                    <li>and polar bears</li>
                    <li>And santa claus</li>
                </ol>
            </div>
            <Footer></Footer>
        </div>

    )

}