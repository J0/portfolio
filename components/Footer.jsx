const Footer = () => {
    return (
        <footer>
            <div class="sm:flex mb-4">

                <div className="sm:w-1/4 h-auto">
                    <div className="text-orange mb-2">Orange</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-orange text-grey-darker">One</li>
                        <li className="hover:text-orange text-grey-darker">Two</li>
                        <li className="hover:text-orange text-grey-darker">Three</li>
                        <li className="hover:text-orange text-grey-darker">Four</li>
                        <li className="hover:text-orange text-grey-darker">Five</li>
                        <li className="hover:text-orange text-grey-darker">Eight</li>
                    </ul>
                </div>
                <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                    <div className="text-blue mb-2">Blue</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-blue text-grey-darker">One</li>
                        <li className="hover:text-blue text-grey-darker">Two</li>
                        <li className="hover:text-blue text-grey-darker">Three</li>
                    </ul>

                    <div className="text-blue-light mb-2 mt-4">Blue-light</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-blue-light text-grey-darker">One</li>
                        <li className="hover:text-blue-light text-grey-darker">Two</li>
                        <li className="hover:text-blue-light text-grey-darker">Three</li>
                    </ul>

                </div>
                <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                    <div className="text-green-dark mb-2">Green-dark</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-green-dark text-grey-darker">One</li>
                        <li className="hover:text-green-dark text-grey-darker">Two</li>
                        <li className="hover:text-green-dark text-grey-darker">Three</li>
                    </ul>

                    <div className="text-green-light mb-2 mt-4">Green-light</div>
                    <ul className="list-reset leading-normal">
                        <li className="hover:text-green-light text-grey-darker">One</li>
                        <li className="hover:text-green-light text-grey-darker">Two</li>
                        <li className="hover:text-green-light text-grey-darker">Three</li>
                    </ul>

                </div>
                <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                    <div class="text-red-light mb-2">Newsletter</div>
                    <p class="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
                    <div class="mt-4 flex">
                        <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address"></input>
                        <button class="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                    </div>
                </div>
            </div>

            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className="h-4" />
            </a>








        </footer>
    )
}
export default Footer