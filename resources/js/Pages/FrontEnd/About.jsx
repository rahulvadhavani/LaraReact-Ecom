import PageHead from '@/Components/PageHead'
import Authenticated from '@/Layouts/Authenticated'
import { Head, Link } from '@inertiajs/react'


export default (props) => {
    return (
        <>
            <Authenticated
                title='home'
                auth={[]}
                header={
                    <PageHead breadcrumbs={[]} module='Home' ></PageHead>
                }
            >
                <Head title="Home" />
                <>

                    <div className="relative">
                        <img
                            className="w-full object-cover brightness-50 filter lg:h-[500px]"
                            src="https://tailwind-ecommerce-demo.vercel.app/assets/images/contact-bg.png"
                            alt="Iphone with Macbook image"
                        />
                        <div className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
                            <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
                            <p className="mx-auto pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
                                aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum ducimus
                                pariatur eaque labore.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        <Link preserveScroll={true} href={route('home')} >
                            <img src="./assets/images/frontend/logo.svg" alt="Logo" className="mx-auto w-[200px]" />
                        </Link>
                        <p className="text-center text-sm">Since 1999</p>
                    </div>
                    <div className="mx-auto my-10 flex max-w-[600px] flex-col items-center justify-center px-5">
                        <h2 className="w-full text-left text-xl font-bold">Our Mission:</h2>
                        <p className="py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat odit,
                            est eum dolorem esse totam iusto necessitatibus eligendi illo doloribus vero
                            aperiam atque tempora repudiandae molestiae nemo distinctio quisquam!
                        </p>
                        <div className="grid sm:grid-cols-1 gap-3 lg:grid-cols-3">
                            <img
                                className="object-cover"
                                src="https://tailwind-ecommerce-demo.vercel.app/assets/images/mission-family.jpg"
                                alt="Family in living room"
                            />
                            <img
                                className="object-cover"
                                src="https://tailwind-ecommerce-demo.vercel.app/assets/images/mission-interior.jpg"
                                alt="Interior"
                            />
                            <img
                                className="object-cover"
                                src="https://tailwind-ecommerce-demo.vercel.app/assets/images/mission-materials.jpg"
                                alt="Materials"
                            />
                        </div>
                        <p className="py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat odit,
                            est eum dolorem esse totam iusto necessitatibus eligendi illo doloribus vero
                            aperiam atque tempora repudiandae molestiae nemo distinctio quisquam!
                        </p>
                        <h2 className="mt-3 w-full text-left text-xl font-bold">Our Vision:</h2>
                        <p className="py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat odit,
                            est eum dolorem esse totam iusto necessitatibus eligendi illo doloribus vero
                            aperiam atque tempora repudiandae molestiae nemo distinctio quisquam!
                        </p>
                        <h2 className="mt-3 w-full text-left text-xl font-bold">Our Values:</h2>
                        <p className="py-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat odit,
                            est eum dolorem esse totam iusto necessitatibus eligendi illo doloribus vero
                            aperiam atque tempora repudiandae molestiae nemo distinctio quisquam!
                        </p>
                        <div className="grid sm:grid-cols-1 gap-3 lg:grid-cols-3">
                            <img
                                className="object-cover"
                                src="https://tailwind-ecommerce-demo.vercel.app/assets/images/mission-family.jpg"
                                alt="Family in living room"
                            />
                            <img
                                className="object-cover"
                                src="https://tailwind-ecommerce-demo.vercel.app/assets/images/mission-interior.jpg"
                                alt="Interior"
                            />
                            <img
                                className="object-cover"
                                src="https://tailwind-ecommerce-demo.vercel.app/assets/images/mission-materials.jpg"
                                alt="Materials"
                            />
                        </div>
                    </div>


                </>
            </Authenticated>
        </>
    )
}
