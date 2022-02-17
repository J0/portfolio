import Link from 'next/link';
const Navbar = (props: any) => {

  return (
    <div className="flex flex-col max-w-screen-xl p-4 mx-auto md:items-center md:justify-between md:flex-row px-2 sm:px-6 lg:px-8">
      <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"></img>
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"></img>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link href="/">
              <a href="/" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            </Link>
            <Link href="/projects">
              <a href="/projects" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
