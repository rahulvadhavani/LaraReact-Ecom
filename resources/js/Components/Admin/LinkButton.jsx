import React from 'react'
import { Link } from '@inertiajs/react';


export default function LinkButton(props) {
    return (
        <>
            <div className="flex items-center">
                <Link
                    preserveScroll={props.preserveScroll || false}
                    className={`className="inline-flex items-center px-3 py-3 bg-gray-800 dark:text-gray-900 dark:bg-gray-100 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 false" ` + props.className}
                    href={props.href || '#'}>
                    {props.children}
                </Link>
            </div >
        </>
    )
}
