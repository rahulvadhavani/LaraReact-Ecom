import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/Layouts/Authenticated';
import Product from './Product';
import Pagination from '../Frontend/Pagination';
import ProductFilter from '../Frontend/ProductFilter';

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
    const filterData = Object.keys(shareData.filterData).length > 0 ? shareData.filterData : {};
    const { category: selected_category = [], page = '', min_price: minPrice = '', max_price: maxPrice = '', sort: sortBy = '' } = filterData;
    const [checkedValuesFlag, setCheckedValuesFlag] = useState();
    const [checkedValues, setCheckedValues] = useState(selected_category);
    const [min_price, setMinPrice] = useState(minPrice);
    const [max_price, setMaxPrice] = useState(maxPrice);
    const [sort, setSort] = useState(sortBy);
    const [pageUrl, setPageUrl] = useState(page);

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
            query.page = pageUrl;
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
    const resetFilter = () => {
        setCheckedValues([])
        setMinPrice('');
        setMaxPrice('')
        setSort('');
        setPageUrl('');
        setCheckedValuesFlag();
    }

    useEffect(() => {
        handleFetchProducts();
    }, []);
    useEffect(() => {
        handleFetchProducts();
    }, [checkedValuesFlag, pageUrl]);

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
                <ProductFilter {...{ handleCheckboxChange, handleFilterChange, checkedValues, min_price, max_price }}></ProductFilter>
                <div className="col-span-3">
                    <div className="flex items-center mb-4">
                        <select
                            value={sort}
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

                            <div onClick={resetFilter} className="border border-primary w-10 h-9 flex items-center justify-center text-red-500 bg-primary rounded cursor-pointer">
                                <i className="fa-solid fa-filter-circle-xmark" />
                            </div>
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
                        <Pagination onUpdatePageState={(url) => setPageUrl(url)} data={productData} ></Pagination>
                    </div>
                </div>
            </div>
        </>
    )
}
