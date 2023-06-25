import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/Layouts/Authenticated';
import Product from './Product';
import Pagination from '../Frontend/Pagination';

export default function Shop() {

    const { shareData } = useContext(GlobalContext);

    const handleAddToWishlist = (event, id) => {
        console.log(id);
        console.log(event);
    }
    const handleAddToCart = (event, id) => {
        console.log(id);
        console.log(event);
    }
    // 
    const [checkedValuesFlag, setCheckedValuesFlag] = useState();
    const checkedCategory = shareData.filterData.category ?? [];
    const [checkedValues, setCheckedValues] = useState(checkedCategory);
    const [min_price, setMinPrice] = useState();
    const [max_price, setMaxPrice] = useState();
    const [sort, setSort] = useState();
    const [pageUrl, setPageUrl] = useState();

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedValues((prevValues) => [...prevValues, value]);
        } else {
            setCheckedValues((prevValues) =>
                prevValues.filter((item) => item !== value)
            );
        }
        setCheckedValuesFlag(!checkedValuesFlag);
    };

    const handleFilterChange = (event) => {
        const { value, name } = event.target;
        if (name == 'min_price') {
            setMinPrice(value);
        } else if (name == 'max_price') {
            setMaxPrice(value);
        } else if (name == 'sort') {
            setSort(value);
        }
        setCheckedValuesFlag(!checkedValuesFlag);
    };

    const handleFetchProducts = (event = '') => {
        var query = new Object();

        if (pageUrl != undefined && pageUrl.length > 0) {
            const searchParams = new URL(pageUrl).searchParams;
            const page = searchParams.get('page');
            query.page = page;
        }
        if (checkedValues != undefined && checkedValues.length > 0) {
            query.category = checkedValues;
        }
        if (min_price != undefined && min_price.length > 0) {
            query.min_price = min_price;
        }
        if (max_price != undefined && max_price.length > 0) {
            query.max_price = max_price;
        }
        if (sort != undefined && sort.length > 0) {
            query.sort = sort;
        }

        const searchParams = new URLSearchParams(query).toString();
        const newUrl = `${window.location.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;
        window.history.pushState({}, '', newUrl);
        axios.get(route('products-filter', query))
            .then(res => {
                let resdata = res.data.data.products;
                setProductsData(res.data.data.products);
                if (resdata.total <= resdata.per_page) {
                    setPageUrl('');
                }
            })
    }

    useEffect(() => {
        handleFetchProducts();
    }, []);
    useEffect(() => {
        handleFetchProducts();
    }, [checkedValuesFlag, pageUrl]);

    // 
    const [productData, setProductsData] = useState([]);

    return (
        <>
            <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
                <div className="text-center md:hidden">
                    <button
                        className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
                        type="button"
                        data-drawer-target="drawer-example"
                        data-drawer-show="drawer-example"
                        aria-controls="drawer-example"
                    >
                        <ion-icon name="grid-outline" />
                    </button>
                </div>
                {/* mobile  */}
                <div
                    id="drawer-example"
                    className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
                    tabIndex={-1}
                    aria-labelledby="drawer-label"
                >
                    <h5
                        id="drawer-label"
                        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Info
                    </h5>
                    <button
                        type="button"
                        data-drawer-hide="drawer-example"
                        aria-controls="drawer-example"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="divide-y divide-gray-200 space-y-5">
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                                Categories
                            </h3>
                            <div className="space-y-2">
                                {shareData.categories.map((category, key) => {
                                    return <div key={key} className="flex items-center">
                                        <input
                                            checked={checkedValues.includes(category.slug)}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            value={category.slug}
                                            id={category.id}
                                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                        />
                                        <label
                                            htmlFor={category.id}
                                            className="text-gray-600 ml-3 cusror-pointer"
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Learn more
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Get access{" "}
                            <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                {/*  */}
                {/* ./sidebar */}
                <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
                    <div className="divide-y divide-gray-200 space-y-5">
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                                Categories
                            </h3>
                            <div className="space-y-2">
                                {shareData.categories.map((category, key) => {
                                    return <div key={key} className="flex items-center">
                                        <input
                                            checked={checkedValues.includes(category.slug)}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            value={category.slug}
                                            id={'cat' + category.id}
                                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                        />
                                        <label
                                            htmlFor={'cat' + category.id}
                                            className="text-gray-600 ml-3 cusror-pointer"
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                                Price
                            </h3>
                            <div className="mt-4 flex items-center">
                                <input
                                    type="number"
                                    onChange={handleFilterChange}
                                    name="min_price"
                                    min={0}
                                    id="min"
                                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                    placeholder="min"
                                />
                                <span className="mx-3 text-gray-500">-</span>
                                <input
                                    type="number"
                                    onChange={handleFilterChange}
                                    name="max_price"
                                    min={0}
                                    id="max"
                                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                    placeholder="max"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* products */}
                <div className="col-span-3">
                    <div className="flex items-center mb-4">
                        <select
                            onChange={handleFilterChange}
                            name="sort"
                            id="sort"
                            className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
                        >
                            <option value="">Default sorting</option>
                            <option value="price-low-to-high">Price low to high</option>
                            <option value="price-high-to-low">Price high to low</option>
                            <option value="latest">Latest product</option>
                        </select>
                        <div className="flex gap-2 ml-auto">
                            <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                                <i className="fa-solid fa-grip-vertical" />
                            </div>
                            <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                                <i className="fa-solid fa-list" />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
                        {productData.data != undefined && productData.data.map((product, key) => {
                            return key < 7 && <Product key={product.id} product={product} handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist} ></Product>
                        })}
                    </div>
                    <div className='mt-8'>
                        {productData.data != undefined && productData.data.length > 0 && (
                            <div className="flex items-center justify-between my-6">
                                {console.log(productData.links)}
                                <p>Showing {productData.from} to {productData.to} of {productData.total} records</p>
                                <div className="items-center lg:flex gap-x-1">
                                    {productData.links.map((link, index) => (
                                        <div key={index}>
                                            {link.url != null ?
                                                <button onClick={() => setPageUrl(link.url)} dangerouslySetInnerHTML={{ __html: link.label }} className={`transition duration-500 hover: bg-gray-200  border-gray-200 rounded-md border px-3 shadow-md py-1 ${link.active ? 'text-gray-100 border-purple-500 bg-purple-500 hover:bg-purple-600' : 'bg-gray-100'} `} href='#' >
                                                </button>
                                                : <label className='transition duration-500 hover:bg-gray-200 border-gray-200 rounded-md border px-3 shadow-md py-1  text-gray-400 cursor-not-allowed' dangerouslySetInnerHTML={{ __html: link.label }}></label>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* <Pagination handleFetchProducts={handleFetchProducts} data={productData} ></Pagination> */}
                    </div>
                </div>
            </div>
        </>
    )
}
