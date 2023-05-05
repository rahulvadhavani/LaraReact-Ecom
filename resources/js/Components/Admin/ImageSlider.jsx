import { Carousel } from 'flowbite-react';
import React from 'react'

export default function ImageSlider(props) {
    const { images } = props;
    return (
        <>
            {
                images.length > 0 &&
                <div className="bg-gray-500 dark:bg:gray:100 h-64 sm:h-80 xl:h-96 2xl:h-96">
                    <Carousel slide={false}>

                        {images.map((image, key) =>
                            <img
                                className='object-contain h-64 sm:h-80 xl:h-96 2xl:h-96'
                                key={key}
                                src={image}
                                alt="Product Image"
                            />
                        )}
                    </Carousel>
                </div>
            }
        </>
    )
}
