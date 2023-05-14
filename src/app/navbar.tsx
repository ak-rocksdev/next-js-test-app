import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className="relative flex flex-wrap justify-evenly items-center content-between py-3 px-4 sticky-top  text-black bg-gray-100">
            <div className="container flex justify-evenly items-center mx-auto sm:px-4">
                <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap" href="#">
                    <Image src="/img/lab-skate-logo.png" alt="Logo" height={32} width={100} />
                </a>

                <div className="flex-grow items-center justify-center" id="navbarNav">
                    <ul className="flex flex-wrap justify-center list-reset pl-0 mb-0">
                        <li className="">
                            <Link href="#" className="text-black inline-block py-2 px-4 no-underline"
                                >Home</Link>
                        </li>
                        <li className="">
                            <Link href="/project" className="text-black inline-block py-2 px-4 no-underline">Projects</Link>
                        </li>
                        <li className="">
                            <Link href="#" className="text-black inline-block py-2 px-4 no-underline">About Us</Link>
                        </li>
                        <li className="">
                            <Link href="#" className="text-black inline-block py-2 px-4 no-underline">What We Do</Link>
                        </li>
                        <li className="">
                            <Link href="/contact-us" className="text-black inline-block py-2 px-4 no-underline">Contact Us</Link>
                        </li>
                    </ul>

                    
                    <div className="relative lg:hidden">
                        <button className="btn-dropdown" type="button" id="languageDropdown" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="fas fa-globe"></i><span className="ms-2">EN</span>
                        </button>
                        <ul className="list-reset py-2 mt-1 text-base bg-white border border-gray-300 rounded  absolute left-0 z-50 float-left hidden list-reset slide-down"
                            aria-labelledby="languageDropdown">
                            <li><div className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0">English</div></li>
                            <li><div className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0">Indonesia</div></li>
                        </ul>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <button className="btn-dropdown" type="button" id="languageDropdown" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="fa-solid fa-globe"></i><span className="ms-2">EN</span>
                    </button>
                    <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-left slide-down"
                        aria-labelledby="languageDropdown">
                        <li><a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                                href="#">English</a></li>
                        <li><a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                                href="#">Indonesia</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
