import { Link, usePage } from '@inertiajs/react';
import React from 'react'

export default function Category() {
    const { shared_data } = usePage().props;
    console.log(shared_data.categories);
    return (
        <div>
            <div className="container py-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    shop by category
                </h2>
                <div className="grid grid-cols-3 gap-3">
                    {shared_data.categories.map((category, key) => {

                        return (key < 6) && <div key={category.id} className="h-52 relative rounded-sm overflow-hidden group">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full"
                            />
                            <Link
                                href={route('products', { category: category.id })}
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                            >
                                {category.name}
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
