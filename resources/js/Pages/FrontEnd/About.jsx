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

                    <section className="text-gray-700 body-font">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                    Before they sold out
                                    <br className="hidden lg:inline-block" />
                                    readymade gluten
                                </h1>
                                <p className="mb-8 leading-relaxed">
                                    Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                                    plant cold-pressed tacos poke beard tote bag. Heirloom echo park
                                    mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
                                    try-hard chambray.
                                </p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        Button
                                    </button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                                        Button
                                    </button>
                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img
                                    className="object-cover object-center rounded"
                                    alt="hero"
                                    src="https://dummyimage.com/720x600/edf2f7/a5afbd"
                                />
                            </div>
                        </div>
                    </section>
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
                    <section className="text-gray-700 body-font border-t border-gray-200">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                    Our Team
                                </h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                                    gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                                    heard of them.
                                </p>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/80x80/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Holden Caulfield
                                            </h2>
                                            <p className="text-gray-500">UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/84x84/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Henry Letham
                                            </h2>
                                            <p className="text-gray-500">CTO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/88x88/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Oskar Blinde
                                            </h2>
                                            <p className="text-gray-500">Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/90x90/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                                            <p className="text-gray-500">DevOps</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/94x94/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Martin Eden
                                            </h2>
                                            <p className="text-gray-500">Software Engineer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/98x98/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Boris Kitua
                                            </h2>
                                            <p className="text-gray-500">UX Researcher</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/100x90/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Atticus Finch
                                            </h2>
                                            <p className="text-gray-500">QA Engineer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/104x94/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Alper Kamu
                                            </h2>
                                            <p className="text-gray-500">System</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img
                                            alt="team"
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            src="https://dummyimage.com/108x98/edf2f7/a5afbd"
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">
                                                Rodrigo Monchi
                                            </h2>
                                            <p className="text-gray-500">Product Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-gray-700 body-font border-t border-gray-200">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                                    viewBox="0 0 975.036 975.036"
                                >
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                                </svg>
                                <p className="leading-relaxed text-lg">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                                    taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware. Man bun next level coloring book skateboard four
                                    loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo
                                    juice before they sold out gentrify plaid gastropub normcore XOXO 90's
                                    pickled cindigo jean shorts. Slow-carb next level shoindigoitch
                                    ethical authentic, yr scenester sriracha forage franzen organic
                                    drinking vinegar.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section>
                </>
            </Authenticated>
        </>
    )
}
