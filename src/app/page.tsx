import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LAB Skate - Skatepark Builder',
    description: 'Design and Build your skatepark imaginations',
};

export default function Home() {
    return (
        <>
            <main className="container max-w-full mx-auto relative">
                <div className="flex flex-wrap">
                    <div className="w-full p-0 home-section">
                        <div className="h-full">
                            <div className="container-jumbotron bg-blue h-full">
                                <div className="half-left-banner">
                                    <div className="wrapper">
                                        <header className='text-black'>
                                            <h1 className="leadingTitle">We Turn the Wildest Skatepark Imagination Into Reality</h1>
                                            <p>From design to Build!</p>
                                        </header>
                                        <div className="block mb-4">
                                            <Link href="#project" className="button button-black">See Our Projects</Link>
                                        </div>
                                        <Image
                                            src="/img/kis-certificate-logo.png"
                                            alt="KIS Logo"
                                            className="block max-w-full h-auto"
                                            width={200}
                                            height={200}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="half-right-banner relative">
                                    <figure>
                                        <Image src="/img/bg-banner.jpg" alt="Big Skatepark Image" className="max-w-full h-auto" width={900} height={900}/>
                                        <figcaption>
                                            <p>Wibawa Mukti International Skatepark</p>
                                            <p className="subcaption">Bekasi, Cikarang - West Java</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full clients">
                        <div className="flex justify-evenly py-4 items-center client-wrapper">
                            <Image src="/img/clients/client-1.png" alt="Client Logo" className="client-logo max-w-full" 
                            width={400} // height auto
                            height={70}
                            />
                            <Image src="/img/clients/client-2.png" alt="Client Logo" className="client-logo max-w-full" width={300} height={70}/>
                            <Image src="/img/clients/client-3.png" alt="Client Logo" className="client-logo max-w-full" width={300} height={70}/>
                            <Image src="/img/clients/client-4.png" alt="Client Logo" className="client-logo max-w-full" width={300} height={70}/>
                            <Image src="/img/clients/client-5.png" alt="Client Logo" className="client-logo max-w-full" width={300} height={70}/>
                        </div>
                    </div>
                </div>
            </main>
            
            <div id="project" className="container mx-auto sm:px-4 project-container">
                <div className="flex flex-wrap ">
                    <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4 w-full">
                        <p className="font-bold label label-blue">Project</p>
                        <h2 className="font-bold section-title">From Portable Skate Park to Permanent Concrete</h2>
                        <p className="subcaption-section">
                            Our portfolio showcases a range of skatepark projects, from portable setups to custom concrete
                            parks. Each project is tailored to the unique needs and preferences of our clients, and built
                            with expert craftsmanship and attention to detail.
                        </p>
                        <div className="block mt-8 mb-4">
                            <Link href="#" className="button button-black">See More Projects</Link>
                        </div>
                    </div>
                    <div className="lg:w-3/4 pr-4 pl-4 md:w-2/3 pr-4 pl-4 w-full">
                        <div className="flex justify-between">
                            <p className="font-bold label label-grey">Filter</p>
                            <div className="nav-obstacle flex justify-between mb-4">
                                <span className="nav-obstacle-item active">All</span>
                                <span className="nav-obstacle-item">Concrete</span>
                                <span className="nav-obstacle-item">Portable</span>
                            </div>
                        </div>
                        <div className="overflow-auto">
                            <div className="flex flex-no-wrap gap-4">
                                <div className="w-4/5 md:w-2/3 pr-4 pl-4 relative lg:flex-grow lg:flex-1">
                                    <Link href="/project" className="card-skatepark">
                                        <Image src="/img/skatepark-thumb.jpg" alt="" height={400} width={100}/>
                                        <div className="caption">
                                            <h2 className="font-bold">Pasar Rebo Skatepark</h2>
                                            <p>Jakarta Timur</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="w-4/5 md:w-2/3 pr-4 pl-4 relative lg:flex-grow lg:flex-1">
                                    <Link href="/project" className="card-skatepark">
                                        <Image src="/img/skatepark-thumb.jpg" alt="" height={400} width={100}/>
                                        <div className="caption">
                                            <h2 className="font-bold">Pasar Rebo Skatepark</h2>
                                            <p>Jakarta Timur</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="w-4/5 md:w-2/3 pr-4 pl-4 relative lg:flex-grow lg:flex-1">
                                    <Link href="/project" className="card-skatepark">
                                        <Image src="/img/skatepark-thumb.jpg" alt="" height={400} width={100}/>
                                        <div className="caption">
                                            <h2 className="font-bold">Pasar Rebo Skatepark</h2>
                                            <p>Jakarta Timur</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
