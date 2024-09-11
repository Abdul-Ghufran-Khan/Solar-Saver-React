function Hero() {
    return (
        <>
            {/* Hero */}
            <section className="text-white bg-stone-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-7xl text-2xl font-bold text-center title-font text-white mb-4">
                            <span className='text-orange-500'>Does Your Home</span> Need Quality<br />
                            Solar Panel Installation?
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Trust our experienced solar power experts to customize the solution for your home.
                        </p>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded text-lg">
                        Calculate Solar
                    </button>
                    <a className="flex text-white place-content-center img">
                        <img src="https://solarsaver.vercel.app/assets/cover-C4PYW05n.webp" alt="" srcset="" />
                    </a>

                    {/* cards */}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                                TRANSPARENT PRICING
                            </h1>
                        </div>
                        <div className="flex flex-wrap -m-4">

                            <div className="p-4 xl:w-1/3 md:w-1/2 w-ful">
                                <div className="h-full p-6 rounded-lg bg-stone-950 flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
                                    />
                                    <h1 className="text-4xl text-white pb-4 mb-4 font-bold">
                                        <span className='text-orange-500'>STANDARD</span><br /> PLAN
                                    </h1>
                                    <p className='flex items-center font-medium text-white mb-6'>
                                        Efficient and affordable solar solutions for every Household. Perfect for Residential use. Tehe perfect example of solar system
                                    </p>
                                    <br />
                                    <p className='flex items-center font-bold text-white mb-6'>
                                        $1.50 / watt
                                    </p>
                                    <button className="flex mx-auto mt-6  text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                        Calculate Solar
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full p-6 rounded-lg  bg-stone-950 flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500" width={10} height={10}
                                        src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
                                    />
                                    <h1 className="text-4xl text-white pb-4 mb-4 font-bold">
                                        <span className='text-orange-500'>PREMIUM</span><br /> PLAN
                                    </h1>
                                    <p className='flex items-center font-medium text-white mb-6'>
                                        Advanced solar technology designed for maximum energy savings. Ideal for larger Homes and Estates.
                                    </p>
                                    <br />
                                    <p className='flex items-center font-bold text-white mb-6'>
                                        $1.75 / watt
                                    </p>
                                    <button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                        Calculate Solar
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full p-6 rounded-lg  bg-stone-950 flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500" width={10} height={10}
                                        src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
                                    />
                                    <h1 className="text-4xl text-white pb-4 mb-4 font-bold">
                                        <span className='text-orange-500'>COMMERCIAL</span> PLAN
                                    </h1>
                                    <p className='flex items-center font-medium text-white mb-6'>
                                        High-capacity solar systems tailored for Businesses and Enterprises. Reliable and Robust solutions.
                                    </p>
                                    <p className='flex items-center font-bold text-white mb-6'>
                                        $2.00 / watt
                                    </p>
                                    <button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                        Calculate Solar
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* about */}

                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <span className='text-orange-500 sm:text-4xl text-3xl mb-4 font-normal'>About us</span><br />
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                            SOLAR SAVER
                        </h1><br />
                        <p className="mb-8 leading-relaxed font-medium text-gray-500">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                            cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                        </p><br />
                        <p className="mb-8 text-orange-500 ont-medium">
                            Solar Saver also offers innovative battery solutions and flexible financing options, making solar energy more accessible and affordable.
                        </p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://solarsaver.vercel.app/assets/about-img-CpwndtbG.webp"
                        />
                    </div>
                </div>
                <br /><br />

                {/* Solar save tool */}

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-7xl text-5xl font-medium title-font mb-2 text-white">
                            <span className='text-orange-500'> SOLAR</span> SAVER TOOLS
                        </h1><br /><br />
                        <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                            There are many variations of Solar Saver tools available, but the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-stone-950 border-opacity-75 p-6 rounded-3xl">
                                <div className="h-full p-2 rounded-lg flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/png1-CHwXHQYP.svg"
                                    />
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Real-time, accurate<br />
                                    production estimates.
                                </h2>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className=" bg-stone-950  border-opacity-75 p-6 rounded-3xl">
                                <div className="h-full p-2 rounded-lg flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/png2-BdZxoh61.svg"
                                    />
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Minimal training time for<br />
                                    new sales representatives.
                                </h2>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className=" bg-stone-950  border-opacity-75 p-6 rounded-3xl">
                                <div className="h-full p-2 rounded-lg flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/png3-DQyZYqFR.svg"
                                    />
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Homeowner-focused<br />
                                    proposal design for clarity.
                                </h2>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className=" bg-stone-950  border-opacity-75 p-6 rounded-3xl">
                                <div className="h-full p-2 rounded-lg flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/png4-DtkWNZzq.svg"
                                    />
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Customizable solar sales<br />
                                    tools for each representative.
                                </h2>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className=" bg-stone-950  border-opacity-75 p-6 rounded-3xl">
                                <div className="h-full p-2 rounded-lg flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/png5-BhXUQqOL.svg"
                                    />
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Quick and accurate<br />
                                    solar sales proposals.
                                </h2>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className=" bg-stone-950  border-opacity-75 p-6 rounded-3xl">
                                <div className="h-full p-2 rounded-lg flex flex-col relative overflow-hidden">
                                    <img
                                        alt="testimonial"
                                        className="w-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-600 bg-orange-500"
                                        src="https://solarsaver.vercel.app/assets/png6-K1TI4P5r.svg"
                                    />
                                </div>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Smart management features for<br />
                                    effective team coordination.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>


                <section>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                            <h1 className="sm:text-7xl text-5xl font-bold title-font mb-2 text-white">
                                <span className='text-orange-500'>BEST</span> EQUIPMENT IN THE INDUSTRY
                            </h1><br />
                            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                                Solar Saver uses the highest quality solar panels and inverters. Trust our cutting-edge technology for superior performance and durability.
                            </p>
                        </div>

                        <section className="text-gray-400 bg-stone-900 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 px-1">


                                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img
                                                alt="content"
                                                className="object-cover object-center h-3/4 w-3/2"
                                                src="https://solarsaver.vercel.app/assets/industry-icon-1-CAZCYVe-.svg"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-bold title-font text-white">
                                            PANELS
                                        </h2>
                                        <p className="text-base leading-relaxed mt-2 text-white">
                                            Solar Saver offers industry-leading solar panels. Experience unparalleled efficiency and durability with our advanced technology.
                                        </p>
                                    </div>


                                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img
                                                alt="content"
                                                className="object-cover object-center h-3/4 w-3/2"
                                                src="https://solarsaver.vercel.app/assets/industry-icon-1-CAZCYVe-.svg"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-bold title-font text-white">
                                            INVERTERS
                                        </h2>
                                        <p className="text-base leading-relaxed mt-2  text-white">
                                            Solar Saver supplies high-performance inverters. Our inverters ensure maximum energy conversion and system reliability.
                                        </p>
                                    </div>


                                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img
                                                alt="content"
                                                className="object-cover object-center h-3/4 w-3/2"
                                                src="https://solarsaver.vercel.app/assets/industry-icon-1-CAZCYVe-.svg"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-bold  title-font text-white">
                                            BATTERIES
                                        </h2>
                                        <p className="text-base leading-relaxed mt-2  text-white">
                                            Solar Saver provides state-of-the-art batteries. Enjoy consistent and long lasting energy storage with our premium solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>


                {/* map */}

                <section className="text-white bg-stone-900 body-font">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-7xl text-5xl font-bold title-font mb-2 text-white">
                            <span className='text-orange-500'>WE'VE</span> GOT YOU COVERED
                        </h1><br />
                        <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                            Explore solar potential in your area. See how Solar Saver can help you.
                        </p>
                        <div className="flex mx-auto border-2 border-orange-500 rounded overflow-hidden mt-6">
                            <button className="py-1 px-4 bg-orange-500 text-white focus:outline-none">
                                Full Install
                            </button>
                            <button className="py-1 px-4 text-gray-300 focus:outline-none">
                                Map
                            </button>
                        </div>
                    </div>


                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img
                            className="lg:w-full md:w-3/2 w-3/2 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src="https://solarsaver.vercel.app/assets/map-img1-DR_uFjwz.webp/"
                        />
                    </div>

                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
                                STEP <span className='text-orange-500 font-semibold text-9xl'>01</span>
                            </h1>
                            <p className="mb-8 leading-relaxed text-2xl">
                                Our team will conduct a comprehensive site assessment to evaluate your roof's condition, orientation, and shading. We use this data to create a customized solar panel layout that maximizes energy production


                            </p>

                        </div>
                        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="https://solarsaver.vercel.app/assets/step-img1-BlunsBST.webp"
                            />
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}

export default Hero