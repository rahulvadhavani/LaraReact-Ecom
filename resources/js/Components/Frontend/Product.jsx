import { Link } from '@inertiajs/react';
import { Tooltip } from 'flowbite-react';
import React from 'react'

export default function Product(props) {
    const { product, handleAddToWishlist, handleAddToCart } = props;
    return (
        <div className="bg-white shadow-lg mt-4 border  overflow-hidden group">
            <div className="relative">
                <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-52 object-contain"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                    <Link
                        href={route('product.detail', { id: product.id })}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product"
                    >
                        <i className="fa-solid fa-magnifying-glass" />
                    </Link>
                    <Link
                        href="#"
                        onClick={() => handleAddToWishlist(product.id)}
                        preserveScroll={true}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist"
                    >
                        <i className="fa-solid fa-heart" />
                    </Link>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <Link href={route('product.detail', { id: product.id })}>
                    <Tooltip content={product.name}>
                        <h4 className="truncate uppercase font-medium text-xl mb-2 text-gray-600 hover:text-gray-900 transition">
                            {product.name}
                        </h4>
                    </Tooltip>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">${product.price}</p>
                    <p className="text-sm text-gray-400 line-through">${product.price}</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
            </div>
            <button
                onClick={() => handleAddToCart(product.id)}
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
                Add to cart
            </button>
        </div>
    )
}
