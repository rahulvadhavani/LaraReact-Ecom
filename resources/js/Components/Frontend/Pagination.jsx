import { Link } from '@inertiajs/react';
import React from 'react'

export default function Pagination(props) {
    const paginationData = props.data;
    return (
        <>
            {paginationData.data.length > 0 && (
                <div className="flex items-center justify-between my-6">
                    <p>Showing {paginationData.from} to {paginationData.to} of {paginationData.total} records</p>
                    <div className="items-center lg:flex gap-x-1">
                        {paginationData.links.map((link, index) => (
                            <div key={index}>
                                {link.url != null ?
                                    <Link preserveScroll={true} dangerouslySetInnerHTML={{ __html: link.label }} className={`transition duration-500 hover: bg-gray-200  border-gray-200 rounded-md border px-3 shadow-md py-1 ${link.active ? 'text-gray-100 border-purple-500 bg-purple-500 hover:bg-purple-600' : 'bg-gray-100'} `} href={link.url}>
                                    </Link>
                                    : <label className='transition duration-500 hover:bg-gray-200 border-gray-200 rounded-md border px-3 shadow-md py-1  text-gray-400 cursor-not-allowed' dangerouslySetInnerHTML={{ __html: link.label }}></label>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}