import { Carousel } from 'flowbite-react'
import React, { useContext } from 'react'
import ThemeButton from './ThemeButton'
import { GlobalContext } from '@/Layouts/Authenticated'

export default function Banner() {
    const { shareData } = useContext(GlobalContext)
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false} className='bg-gray-400'>
                    {shareData.banners.map((banner) => {
                        return (
                            <div key={banner.id} className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] dark:bg-gray-700 dark:text-white">
                                <div
                                    className="bg-cover bg-no-repeat bg-center py-36"
                                    style={{ backgroundImage: `url(${banner.banner})`, }}
                                >
                                    <div className='p-16'>
                                        <h1 className="text-6xl font-medium mb-4 capitalize">
                                            {banner.data.title || ''}
                                        </h1>
                                        <p>
                                            {banner.data.description || ''}
                                        </p>
                                        <div className="mt-12">
                                            <ThemeButton className="" href={banner.data.link || '#'}>Shop Now</ThemeButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}
