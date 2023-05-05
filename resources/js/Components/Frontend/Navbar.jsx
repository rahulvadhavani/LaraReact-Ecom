import React from 'react'
import CategoryList from './CategoryList'
import { Link } from '@inertiajs/react'

export default function Navbar(props) {
    return (
        <>
            <nav className="bg-sky-700">
                <div className="container flex">
                    <CategoryList></CategoryList>
                    <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link href={route('home')} className={"text-gray-200 hover:text-white transition " + (route().current('home') ? 'text-gray-200 font-bold' : 'text-gray-200')}>
                                Home
                            </Link>
                            <Link href={route('products')} className={"text-gray-200 hover:text-white transition " + (route().current('products') ? 'text-gray-200 font-bold' : 'text-gray-200')}>
                                Shop
                            </Link>
                            <Link href={route('about-us')} className={"text-gray-200 hover:text-white transition " + (route().current('about-us') ? 'text-gray-200 font-bold' : 'text-gray-200')}>
                                About us
                            </Link>
                            <Link href={route('contact-us')} className={"text-gray-200 hover:text-white transition " + (route().current('contact-us') ? 'text-gray-200 font-bold' : 'text-gray-200')}>
                                Contact us
                            </Link>
                        </div>
                        <Link href={route('login')} className={"text-gray-200 hover:text-white transition " + (false ? 'text-gray-200 font-bold' : 'text-gray-200')}>
                            Login
                        </Link>
                    </div>
                </div>
            </nav >
        </>
    )
}
