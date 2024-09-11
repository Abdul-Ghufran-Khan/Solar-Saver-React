function Header() {
    return (
        <>
            {/* Header */}
            <header className="text-white bg-stone-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="https://solarsaver.vercel.app/assets/logo-CeUqb7XY.png" width={90} alt="" srcset="" />
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-11 hover:text-orange-500">Pricing</a>
                        <a className="mr-11 hover:text-orange-500">About</a>
                        <a className="mr-11 hover:text-orange-500">Tools</a>
                        <a className="mr-11 hover:text-orange-500">How It Works</a>
                        <a className="mr-11 hover:text-orange-500">Testimonials</a>
                        <a className="mr-11 hover:text-orange-500">FAQ</a>
                    </nav>
                    <button className="inline-flex items-center bg-orange-500 border-0 py-2 focus:outline-none hover:bg-orange-600 rounded text-base px-4 mt-4 md:mt-0 text-white">
                        Calculate Solar
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header