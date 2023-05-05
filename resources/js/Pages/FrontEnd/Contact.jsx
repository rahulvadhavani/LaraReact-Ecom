import PageHead from '@/Components/PageHead'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/react'


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
                    <section className="text-gray-700 body-font border-t border-gray-200">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Pitchfork Kickstarter Taxidermy
                                </h1>
                                <p className="lg:w-1/2 w-full leading-relaxed text-base">
                                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                                    gentrify, subway tile poke farm-to-table.
                                </p>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-300 p-6 rounded-lg">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            Shooting Stars
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Fingerstache flexitarian street art 8-bit waist co, subway tile
                                            poke farm.
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-300 p-6 rounded-lg">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle cx={6} cy={6} r={3} />
                                                <circle cx={6} cy={18} r={3} />
                                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            The Catalyzer
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Fingerstache flexitarian street art 8-bit waist co, subway tile
                                            poke farm.
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-300 p-6 rounded-lg">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            Neptune
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Fingerstache flexitarian street art 8-bit waist co, subway tile
                                            poke farm.
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-300 p-6 rounded-lg">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            Melanchole
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Fingerstache flexitarian street art 8-bit waist co, subway tile
                                            poke farm.
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-300 p-6 rounded-lg">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            Bunker
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Fingerstache flexitarian street art 8-bit waist co, subway tile
                                            poke farm.
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-300 p-6 rounded-lg">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            Ramona Falls
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Fingerstache flexitarian street art 8-bit waist co, subway tile
                                            poke farm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Button
                            </button>
                        </div>
                    </section>
                    <section className="text-gray-700 body-font relative">
                        <div className="absolute inset-0 bg-gray-300">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}
                                title="map"
                                scrolling="no"
                                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                            />
                        </div>
                        <div className="container px-5 py-24 mx-auto flex">
                            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                                    Feedback
                                </h2>
                                <p className="leading-relaxed mb-5 text-gray-600">
                                    Post-ironic portland shabby chic echo park, banjo fashion axe
                                </p>
                                <input
                                    className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                                    placeholder="Email"
                                    type="email"
                                />
                                <textarea
                                    className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                                    placeholder="Message"
                                    defaultValue={""}
                                />
                                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Button
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    Chicharrones blog helvetica normcore iceland tousled brook viral
                                    artisan.
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            </Authenticated>
        </>
    )
}
