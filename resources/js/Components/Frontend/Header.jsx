import React from 'react'
import Navbar from './Navbar'
import { Link } from '@inertiajs/react'
import logoImg from '../../../../public/assets/images/frontend/logo.svg';

export default function Header(props) {
    return (
        <>
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link preserveScroll={true} href={route('home')} >
                        <img src={logoImg} alt="Logo" className="w-32" />
                    </Link>
                    <div className="w-full max-w-xl relative flex">
                        <span className="absolute left-4 top-3 text-lg text-gray-400">
                            <i className="fa-solid fa-magnifying-glass" />
                        </span>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                            placeholder="search"
                        />
                        <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link preserveScroll={true} href={route('wishlist')} className="text-center text-gray-700 hover:text-primary transition relative" >
                            <div className="text-2xl">
                                <i className="fa-regular fa-heart" />
                            </div>
                            <div className="text-xs leading-3">Wishlist</div>
                            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                0
                            </div>
                        </Link>
                        <Link
                            preserveScroll={true} href={route('cart')}
                            className="text-center text-gray-700 hover:text-primary transition relative"
                        >
                            <div className="text-2xl">
                                <i className="fa-solid fa-bag-shopping" />
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                0
                            </div>
                        </Link>
                        {/* <Link
                            preserveScroll={true} href={route('account')}
                            className="text-center text-gray-700 hover:text-primary transition relative"
                        >
                            <div className="text-2xl">
                                <i className="fa-regular fa-user" />
                            </div>
                            <div className="text-xs leading-3">Account</div>
                        </Link> */}
                    </div>
                </div>
            </header>
            <Navbar></Navbar>
        </>
    )
}
