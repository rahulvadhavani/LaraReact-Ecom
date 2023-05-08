import PageHead from '@/Components/PageHead'
import Authenticated from '@/Layouts/Authenticated'
import { Head, Link, usePage } from '@inertiajs/react'
import { Badge } from 'flowbite-react';
import { useState } from 'react';


export default (props) => {
    const { module, breadcrumbs, page_data } = usePage().props;
    const { product } = page_data;
    const [thumbnail, setThumbnail] = useState(product.thumbnail);
    const handleImageZoom = (event) => {
        setThumbnail(event.target.src);
    }
    return (
        <>
            <Authenticated
                title={module}
                auth={props.auth}
                header={<></>}
            >
                <Head title={module} />
                <>
                    <div className="py-10 container grid grid-cols-2 gap-6">
                        <div>
                            <img
                                src={thumbnail}
                                alt="product"
                                className="w-full"
                            />
                            <div className="grid grid-cols-5 gap-4 mt-4">
                                {product.images && product.images.map((image, key) => {
                                    return <img
                                        onClick={handleImageZoom}
                                        key={key}
                                        src={image}
                                        alt={product.name}
                                        className="w-full cursor-pointer border"
                                    />
                                })}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium uppercase mb-2">
                                {product.name}
                            </h2>
                            <div className="flex items-center mb-4">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span>
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star" />
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-800 font-semibold space-x-2">
                                    <span>Availability: </span>
                                    <span className={page_data.quantity > 0 ? 'text-green-600' : 'text-red-600'}>{page_data.quantity > 0 ? 'In Stock' : 'Out Of Stock'}</span>
                                </p>
                                <p className="space-x-2">
                                    <span className="text-gray-800 font-semibold">Brand: </span>
                                    <span className="text-gray-600">Apex</span>
                                </p>
                                <p className="space-x-2">
                                    <span className="text-gray-800 font-semibold">Category: </span>
                                    <span className="text-gray-600">{product.category.name}</span>
                                </p>
                                <p className="space-x-2">
                                    <span className="text-gray-800 font-semibold">SKU: </span>
                                    <span className="text-gray-600">{product.sku}</span>
                                </p>
                            </div>
                            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                                <p className="text-xl text-primary font-semibold">${product.price}</p>
                                <p className="text-base text-gray-400 line-through">${product.price}</p>
                            </div>
                            <p className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: product.description }}>
                            </p>
                            {product.attributes != null && Object.keys(product.attributes).length > 0 &&
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900"></h3>
                                    <div className="mt-4">
                                        {Object.keys(product.attributes).map((item) => {
                                            return <>

                                                {/*  */}
                                                <div key={item} className="pt-4">
                                                    <h3 className="text-sm text-gray-800 uppercase mb-1">{item}</h3>
                                                    <div className="flex items-center gap-2">
                                                        {product.attributes[item].map((value, itemkey) => {
                                                            return ((item.toLowerCase() == 'color')
                                                                ?
                                                                <div className="color-selector">
                                                                    <input type="radio" name={item} id={(item + value)} className="hidden" />
                                                                    <label
                                                                        htmlFor={(item + value)}
                                                                        className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                                                        style={{ backgroundColor: value }}
                                                                    />
                                                                </div>
                                                                :
                                                                <div className="size-selector">
                                                                    <input type="radio" name={item} id={(item + value)} className="hidden" />
                                                                    <label
                                                                        htmlFor={item + value}
                                                                        className="text-xs border uppercase font-bold border-gray-300 rounded-sm h-6 w-8 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                                                                    >
                                                                        {value}
                                                                    </label>
                                                                </div>
                                                            )
                                                        }
                                                        )}

                                                    </div>
                                                </div>
                                                {/*  */}

                                            </>
                                        })}

                                    </div>
                                </div >
                            }

                            <div className="mt-4">
                                <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                                        -
                                    </div>
                                    <div className="h-8 w-8 text-base flex items-center justify-center">
                                        4
                                    </div>
                                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                                <a
                                    href="#"
                                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                                >
                                    <i className="fa-solid fa-bag-shopping" /> Add to cart
                                </a>
                                <a
                                    href="#"
                                    className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
                                >
                                    <i className="fa-solid fa-heart" /> Wishlist
                                </a>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                                >
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                                >
                                    <i className="fa-brands fa-twitter" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                                >
                                    <i className="fa-brands fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container pb-16">
                        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                            Product details
                        </h3>
                        <div className="w-3/5 pt-6">
                            <div className="text-gray-600">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                                    necessitatibus deleniti natus dolore cum maiores suscipit optio itaque
                                    voluptatibus veritatis tempora iste facilis non aut sapiente dolor
                                    quisquam, ex ab.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae
                                    accusantium voluptatem blanditiis sapiente voluptatum. Autem ab,
                                    dolorum assumenda earum veniam eius illo fugiat possimus illum dolor
                                    totam, ducimus excepturi.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
                                    modi ut expedita! Iure molestiae labore cumque nobis quasi fuga,
                                    quibusdam rem? Temporibus consectetur corrupti rerum veritatis numquam
                                    labore amet.
                                </p>
                            </div>
                            <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                                <tbody>
                                    <tr>
                                        <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                            Color
                                        </th>
                                        <th className="py-2 px-4 border border-gray-300 ">
                                            Blank, Brown, Red
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                            Material
                                        </th>
                                        <th className="py-2 px-4 border border-gray-300 ">Latex</th>
                                    </tr>
                                    <tr>
                                        <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                            Weight
                                        </th>
                                        <th className="py-2 px-4 border border-gray-300 ">55kg</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="container pb-16">
                        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                            Related products
                        </h2>
                        <div className="grid grid-cols-4 gap-6">
                            <div className="bg-white shadow rounded overflow-hidden group">
                                <div className="relative">
                                    <img
                                        src="../assets/images/products/product1.jpg"
                                        alt="product 1"
                                        className="w-full"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="view product"
                                        >
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="add to wishlist"
                                        >
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                            Guyer Chair
                                        </h4>
                                    </a>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-primary font-semibold">$45.00</p>
                                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                                >
                                    Add to cart
                                </a>
                            </div>
                            <div className="bg-white shadow rounded overflow-hidden group">
                                <div className="relative">
                                    <img
                                        src="../assets/images/products/product4.jpg"
                                        alt="product 1"
                                        className="w-full"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="view product"
                                        >
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="add to wishlist"
                                        >
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                            Bed King Size
                                        </h4>
                                    </a>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-primary font-semibold">$45.00</p>
                                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                                >
                                    Add to cart
                                </a>
                            </div>
                            <div className="bg-white shadow rounded overflow-hidden group">
                                <div className="relative">
                                    <img
                                        src="../assets/images/products/product2.jpg"
                                        alt="product 1"
                                        className="w-full"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="view product"
                                        >
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="add to wishlist"
                                        >
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                            Couple Sofa
                                        </h4>
                                    </a>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-primary font-semibold">$45.00</p>
                                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                                >
                                    Add to cart
                                </a>
                            </div>
                            <div className="bg-white shadow rounded overflow-hidden group">
                                <div className="relative">
                                    <img
                                        src="../assets/images/products/product3.jpg"
                                        alt="product 1"
                                        className="w-full"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="view product"
                                        >
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                            title="add to wishlist"
                                        >
                                            <i className="fa-solid fa-heart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pt-4 pb-3 px-4">
                                    <a href="#">
                                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                            Mattrass X
                                        </h4>
                                    </a>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-primary font-semibold">$45.00</p>
                                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex gap-1 text-sm text-yellow-400">
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star" />
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div> */}
                </>

            </Authenticated>
        </>
    )
}
