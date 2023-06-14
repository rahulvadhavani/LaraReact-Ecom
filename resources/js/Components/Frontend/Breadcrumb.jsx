import React from 'react'

export default function Breadcrumb(data) {
    return (
        <div>
            <div className="container py-4 flex items-center gap-3">
                {data.data.map((item, key) => {
                   
                        return item == 'Home'
                        ? <a key={key} href="/" className="text-primary text-base">
                            <i className="fa-solid fa-house" />
                        </a>
                        :
                        <span  key={key} className='inline-flex'>
                        <span className="text-sm text-gray-400">
                            <i className="fa-solid fa-chevron-right" />
                        </span>
                        <p className="pl-2 text-gray-600 font-medium">{item}</p>
                        </span>;

                })}
            </div>
        </div>
    )
}
