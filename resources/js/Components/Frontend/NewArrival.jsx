import { GlobalContext } from '@/Layouts/Authenticated'
import React, { useContext } from 'react'
import Product from '../../Components/Frontend/Product';
import LinkButton from '../Admin/LinkButton';
import { Link } from '@inertiajs/react';
import productImg from '../../images/all-prouduct.jpg'

export default function NewArrival() {
    const { shareData } = useContext(GlobalContext)
    const handleAddToWishlist = (event, id) => {
        console.log(id);
        console.log(event);
    }
    const handleAddToCart = (event, id) => {
        console.log(id);
        console.log(event);
    }
    return (
        <div>
            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    top new arrival
                </h2>
                <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {shareData.products.map((product, key) => {
                        return key < 7 && <div key={product.id}>
                            <Product product={product} handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist} ></Product>
                        </div>
                    })}
                    {shareData.products.length > 0 &&
                        // <div style={{ backgroundImage: `url(${productImg})` }} className="bg-opacity-40 shadow-lg mt-4 border flex items-center justify-center">
                        <div style={{ backgroundImage: `url(${productImg})`, backgroundRepeat: 'no-Repeat', backgroundSize: 'auto' }} className="bg-black bg-opacity-40 hover:bg-opacity-70 shadow-lg mt-4 border flex items-center justify-center">
                            <div>
                                <Link className="text-2xl text-sky-500 hover:text-sky-700" href={route('products')}><i class="fa-solid fa-circle-arrow-right"></i></Link>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
