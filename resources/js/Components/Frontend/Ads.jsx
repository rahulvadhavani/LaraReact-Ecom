import { Link } from '@inertiajs/react'
import React from 'react'

export default function Ads() {
    return (
        <div>
            <div className="container pb-16">
                <Link href={route('products')}>
                    <img src="./assets/images/frontend/offer.jpg" alt="ads" className="w-full" />
                </Link>
            </div>
        </div>
    )
}
