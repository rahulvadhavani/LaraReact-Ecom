import { Link } from '@inertiajs/react';
import React from 'react'

export default function Pagination(props) {
    const productData = props.data;
    const handleClick = (url) => {
        const searchParams = new URL(url).searchParams;
        let page = searchParams.get('page');
        props.onUpdatePageState(page);
    };

    return (
        <>
            {productData.data != undefined && productData.data.length > 0 && (
                <div className="flex items-center justify-between my-6">
                    <p>Showing {productData.from} to {productData.to} of {productData.total} records</p>
                    <div className="items-center lg:flex gap-x-1">
                        {productData.links.map((link, index) => (
                            <div key={index}>
                                {link.url != null ?
                                    <button onClick={() => handleClick(link.url)} dangerouslySetInnerHTML={{ __html: link.label }} className={`transition duration-500 hover: bg-gray-200  border-gray-200 rounded-md border px-3 shadow-md py-1 ${link.active ? 'text-gray-100 border-purple-500 bg-purple-500 hover:bg-purple-600' : 'bg-gray-100'} `} href='#' >
                                    </button>
                                    : <label className='transition duration-500 hover:bg-gray-200 border-gray-200 rounded-md border px-3 shadow-md py-1  text-gray-400 cursor-not-allowed' dangerouslySetInnerHTML={{ __html: link.label }}></label>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}