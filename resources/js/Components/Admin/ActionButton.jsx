import { Link } from '@inertiajs/react';
import React from 'react'

export default function ActionButton(props) {
    const { openModal, id, href } = props;
    return (
        <div>
            <div className='flex'>
                <button onClick={() => openModal(id)} className="mx-1 flex h-fit items-center bg-red-100 text-red:500 text-red-600 hover:text-red-800 rounded-full p-2 text-md">
                    <i className="fa-solid fa-trash-alt"></i>
                </button>
                <Link href={href} className="mx-1 flex h-fit items-center bg-blue-100 text-blue:500 text-blue-600 hover:text-blue-800 rounded-full p-2 text-md">
                    <i className="fa-solid fa-edit"></i>
                </Link>
            </div>
        </div>
    )
}
