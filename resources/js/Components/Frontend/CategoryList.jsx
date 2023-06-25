import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function CategoryList() {
    const { shared_data } = usePage().props;
    return (
        <div className="z-50 px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
            <span className="capitalize ml-2 text-white">
                All Categories
            </span>
            <div className="grid grid-cols-2 gap-2  absolute w-[500px] left-0 top-full bg-white shadow-md py-3 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                {(shared_data.categories != undefined || shared_data.categories != null)
                    ?
                    shared_data.categories.map(item => {
                        return <Link key={item.id} href={route('products', { category: item.slug })} className="border-b-2 border-gray-100 border-dotted flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img
                                src={item.image}
                                alt="sofa"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="ml-6 text-gray-600 text-sm">{item.name}</span>
                        </Link>
                    })
                    :
                    <>No data</>
                }
            </div>
        </div>
    )
}
