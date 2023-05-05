import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Footer() {
    const { app_name } = usePage().props
    return (
        <>
            <footer className="bg-sky-700 text-white relative bg-blueGray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">
                                Let's keep in touch!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <span className='inline-block mr-2'>
                                    <Link
                                        className="h-12 w-12 bg-white shadow-md hover:shadow-xl border border-gray-100 text-blue-400 flex justify-center items-center rounded-full transition hover:text-gray-800 cursor-pointer"
                                        href="#" preserveScroll={true}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Link>
                                </span>
                                <span className='inline-block mr-2'>
                                    <Link
                                        className="h-12 w-12 bg-white shadow-md hover:shadow-xl border border-gray-100 text-blue-600 flex justify-center items-center rounded-full transition hover:text-gray-800 cursor-pointer"
                                        href="#" preserveScroll={true}
                                    >
                                        <i className="fab fa-facebook-square" />
                                    </Link>
                                </span>
                                <span className='inline-block mr-2'>
                                    <Link
                                        className="h-12 w-12 bg-white shadow-md hover:shadow-xl border border-gray-100 text-pink-700  inline-flex justify-center items-center rounded-full transition hover:text-gray-800 cursor-pointer"
                                        href="#" preserveScroll={true}
                                    >
                                        <i className="fab fa-dribbble" />
                                    </Link>
                                </span>
                                <span className='inline-block mr-2'>
                                    <Link
                                        className="h-12 w-12 bg-white shadow-md hover:shadow-xl border border-gray-100 text-black flex justify-center items-center rounded-full transition hover:text-gray-800 cursor-pointer"
                                        href="#" preserveScroll={true}
                                    >
                                        <i className="fab fa-github" />
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                href={route('about-us')}
                                                className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route('about-us')}
                                                className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                                            >
                                                Blog
                                            </Link>
                                        </li>

                                        <li>
                                            <a
                                                href={route('products')}
                                                className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                                            >
                                                Products
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                href={route('contact-us')}
                                                className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                                            >
                                                Terms &amp; Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route('about-us')}
                                                className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route('contact-us')}
                                                className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span>{new Date().getFullYear()} </span>
                                <Link
                                    href={route('home')}
                                    className="text-gray-100 hover:text-blue-100"
                                    target="_blank"
                                >
                                    {app_name}
                                </Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
