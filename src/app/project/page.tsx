import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <div id="project" className="container mx-auto sm:px-4 project-container">
            <div className="flex flex-wrap ">
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 w-full">
                    <p className="font-bold label label-blue">Project</p>
                    <h2 className="font-bold section-title">From Portable Skate Park to Permanent Concrete</h2>
                    <p className="subcaption-section">
                        Our portfolio showcases a range of skatepark projects, from portable setups to custom concrete
                        parks. Each project is tailored to the unique needs and preferences of our clients, and built
                        with expert craftsmanship and attention to detail.
                    </p>
                    <div className="block pt-8 mb-4">
                        <Link href="#" className="button button-black">See More Projects</Link>
                    </div>
                </div>
                <div className="lg:w-3/4 md:w-2/3 pr-4 pl-4 w-full">
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
    )
}