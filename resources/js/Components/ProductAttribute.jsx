import { Badge } from 'flowbite-react';
import React from 'react'

export default function ProductAttribute(props) {
    const attributes = props.attributes;

    return (
        <>
            {Object.keys(attributes).length > 0 &&
                <div>
                    <h3 className="text-sm font-medium text-gray-900"></h3>
                    <div className="mt-4">
                        {Object.keys(attributes).map((item) => {
                            return <>

                                <div key={item} className='mt-3 mb-1 p-3 bg-gray-100 dark:bg-gray-700 rounded-md'>
                                    <span className='bold text-gray-800 dark:text-gray-200 capitalize'>{item}</span>
                                    <div className="flex flex-wrap mt-2">
                                        {attributes[item].map((value, itemkey) => {
                                            return (item.toLowerCase() == 'color')
                                                ? <Badge size="lg" className='m-2 shadow-md capitalize' style={{ color: value }} color="green">{value}</Badge>
                                                : <Badge size="lg" color="green" className='m-2 shadow-md capitalize'>{value}</Badge>
                                        }
                                        )}
                                    </div>
                                </div >
                            </>
                        })}

                    </div>
                </div >
            }
        </>
    )
}
