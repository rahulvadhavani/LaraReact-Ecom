import { Link } from '@inertiajs/react'
import React from 'react'

export default function ThemeButton(props) {
    return (
        <>
            <div className="flex items-center">
                <Link
                    preserveScroll={props.preserveScroll || true}
                    className={`className="inline-flex items-center px-3 py-3 hover:text-gray-800 hover:border-gray-500 outline-none bg-gray-900 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-200 focus:bg-gray-200 transition ease-in-out duration-150 false" ` + props.className}
                    href={props.href || '#'}>
                    {props.children}
                </Link>
            </div >
        </>
    )
}
