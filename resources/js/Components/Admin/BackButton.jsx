import React from 'react'
import { Link } from '@inertiajs/react';

export default function BackButton(props) {
    return (
        <>
            <div className="flex items-center justify-end">
                <Link
                    className='text-2xl'
                    href={props.href}>
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </Link>
            </div>
        </>
    )
}
