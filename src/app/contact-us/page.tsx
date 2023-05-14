import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <div id="contact" className="container max-w-full mx-auto">
            <div className="flex flex-wrap ">
                <div className="w-full p-0 bg-white">
                    <div className="flex flex-wrap  m-0">
                        <div className="w-full lg:w-1/3 pr-4 pl-4 order-2 lg:order-1 p-0">
                            <div className="wrapper">
                                <p className="font-bold label label-blue">Contact Us</p>
                                <h2 className="font-bold section-title">READY TO CONSULT?! LET’S TALK</h2>
                                <div className="inline">
                                    <h3 className="font-bold m-0">Office</h3>
                                </div>
                                <p>
                                    Santa Modern Market - Blok AKS 77
                                    Jalan Cipaku I, Petogogan,
                                    Jakarta Selatan - Indonesia
                                </p>
                                <div className="inline">
                                    <h3 className="font-bold m-0">+62 812 9172 0267</h3>
                                </div>
                                <div className="inline">
                                    <h3 className="font-bold m-0">mail@labskate.id</h3>
                                </div>
                                <p>
                                    Monday - Friday | 08.00 - 17.00
                                    GMT +7 (Jakarta Time)
                                </p>
                                <div className="flex button-container mt-5">
                                    <a href="https://api.whatsapp.com/send?phone=6281291720267&text=Halo%20LABSKATE%20saya%20mau%20konsultasi%20tentang%20skatepark"
                                        className="inline-block align-middle text-white text-center select-none border font-normal whitespace-no-wrap rounded-none py-3 px-6 leading-normal no-underline btn-whatsapp"
                                        target="_blank">
                                        <span>Chat Now</span>
                                    </a>
                                    <a href="https://www.instagram.com/labskate.id"
                                        className="inline-block align-middle text-white text-center select-none border font-normal whitespace-no-wrap rounded-none py-3 px-6 leading-normal no-underline btn-black"
                                        target="_blank">
                                        <span>Follow Us</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 pr-4 pl-4 order-1 lg:order-2 p-0">
                            <div className="contact-image-container h-full">
                                <Image src="/img/contact-us-cover.jpg" alt="Contact Us Cover" width={800} height={500}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}