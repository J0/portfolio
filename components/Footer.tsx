const Footer = () => {
    return (
        <footer>
            <div className="sm:flex mb-4 p-8">

                <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                    <div className="font-bold mb-2">Social Links</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-blue text-grey-darker">Twitter</li>
                        <li className="hover:text-blue text-grey-darker">Two</li>
                        <li className="hover:text-blue text-grey-darker">Three</li>
                    </ul>
                </div>
                <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                    <div className="font-bold mb-2">Blog Posts</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-green-dark text-grey-darker">Elixir</li>
                        <li className="hover:text-green-dark text-grey-darker">React</li>
                        <li className="hover:text-green-dark text-grey-darker">Misc</li>
                    </ul>
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                    <div className="font-bold mb-2">Newsletter</div>
                    <p className="text-grey-darker leading-normal">Sign up here(Coming Soon) </p>
                    <div className="mt-4 flex">
                        <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address"></input>
                        <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                    </div>
                </div>
            </div>

            <p
                className="italic p-8"
            >
                Copyright Joel Lee 2021
            </p>

        </footer>
    )
}
export default Footer