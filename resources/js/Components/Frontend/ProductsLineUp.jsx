import React, { useContext } from 'react'
import Product from '../../Components/Frontend/Product';
import { Link } from '@inertiajs/react';
import productImg from '../../images/all-prouduct.jpg'

export default function ProductsLineUp(props) {
    const {title, products} = props;
    const handleAddToWishlist = (event, id) => {
        console.log(id);
        console.log(event);
    }
    const handleAddToCart = (event, id) => {
        console.log(id);
        console.log(event);
    }
    return (
        <div className='my-4'>
            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    {title}
                </h2>
                <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, key) => {
                        return key < 7 && <Product key={product.id} product={product} handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist} ></Product>
                    })}
                    {products.length > 0 &&
                        <div style={{ backgroundImage: `url(${productImg})`, backgroundRepeat: 'no-Repeat', backgroundSize: 'cover' }} className="bg-black bg-opacity-40 hover:bg-opacity-70 shadow-lg mt-4 border flex items-center justify-center">
                            <div className='flex justify-end align-bottom pt-20'>
                                <Link className='md:text-2xl sm:text-2xl bold text-white rounded p-3 bg-yellow-500' href={route('products')}>Explore All</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
