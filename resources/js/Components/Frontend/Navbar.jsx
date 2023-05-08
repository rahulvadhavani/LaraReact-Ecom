import React from 'react'
import CategoryList from './CategoryList'
import { Link, usePage } from '@inertiajs/react'
import { Dropdown } from 'flowbite-react';

export default function Navbar(props) {
    const { auth } = usePage().props;
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
                        {auth.user
                            ?
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                title="Log Out"
                                className='text-xl text-red-700 hover:text-red-800 transition-all'
                            >
                                <i className="fa-solid fa-power-off"></i></Link>
                            :
                            <Link href={route('login')} className={"text-gray-200 hover:text-white transition " + (false ? 'text-gray-200 font-bold' : 'text-gray-200')}>
                                Login
                            </Link>
                        }
                    </div>
                </div>
            </nav >
        </>
    )
}
