import React from 'react'

export default function Breadcrumb() {
    return (
        <div>
            <div className="container py-4 flex items-center gap-3">
                <a href="../index.html" className="text-primary text-base">
                    <i className="fa-solid fa-house" />
                </a>
                <span className="text-sm text-gray-400">
                    <i className="fa-solid fa-chevron-right" />
                </span>
                <p className="text-gray-600 font-medium">Shop</p>
            </div>
        </div>
    )
}
