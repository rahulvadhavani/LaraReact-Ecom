import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import Input from '@/Components/Input';
import Pagination from '@/Components/Admin/Pagination';
import DeleteModalComponent from '@/Components/Admin/DeleteModalComponent';
import LinkButton from '@/Components/Admin/LinkButton';
import PageHead from '@/Components/PageHead';
import { ToggleSwitch } from 'flowbite-react';
import SortLabel from '@/Components/Admin/SortLabel';
import { toast } from 'react-toastify';

const Index = ({ auth }) => {
    const { products, message, module, breadcrumbs, search, current_page, sortBy, sortOrder } = usePage().props;
    const [deleteUrl, setDeleteUrl] = useState('#');
    const [searchTerm, setSearchTerm] = useState(search);
    const [productData, setProductsData] = useState(products || []);
    const [show, setShow] = useState(false)
    const onClose = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('admin.products.delete', { id }));
        setShow(true);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const query = e.target.value.length > 0 ? `?search=${e.target.value}` : '';
        const newUrl = `${window.location.pathname}${query}`;
        window.history.pushState({}, '', newUrl);
        axios.get(route('admin.products.index'), { params: { search: e.target.value, curren_page: current_page } })
            .then(res => {
                setProductsData(res.data.products)
            })
    }



    const handleSort = (field) => {
        let order = (sortBy == field && sortOrder == 'asc') ? 'desc' : 'asc';
        let query = searchTerm.length > 0
            ? `?search=${searchTerm}&sort_by=${field}&sort_order=${order}`
            : `?sort_by=${field}&sort_order=${order}`;
        const newUrl = `${window.location.pathname}${query}`;
        router.get(newUrl);
    };

    const handleToggle = (id, status) => {
        const updatedData = productData.data.map(row => {
            if (row.id === id) {
                console.log(id, row.id)
                return { ...row, status };
            }
            return row;
        });
        const data = { ...productData, data: updatedData };
        try {
            axios.post(route('admin.products.update_status'), { id, status })
                .then(res => {
                    console.log(res);
                })
        } catch (error) {
            console.log(error);
        }
        setProductsData(data);
    };

    const deleteProps = {
        show,
        deleteUrl,
        onClose
    }

    const handleEdit = (id, field, value) => {
        if (isNaN(value)) {
            toast.warning('Quantity should be valid number');
            return false;
        }
        const updatedData = productData.data.map(row => {
            if (row.id === id) {
                return { ...row, [field]: value };
            }
            return row;
        });
        try {
            axios.post(route('admin.products.update-field'), { [field]: value, id })
                .then(res => {
                    if (res.status == false) {
                        toast.error(res.message)
                    }
                })

        } catch (error) {
            toast.error('Something went wrong!!');
        }
        const data = { ...productData, data: updatedData };
        setProductsData(data);
    };

    return (
        <AdminAuthenticated
            title={module}
            auth={auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div>
                    <section className="container px-5 mx-auto">
                            <div className='flex justify-between'>
                                <div className='w-1/2 flex justify-start'>
                                    <Input
                                        type='text'
                                        id="search"
                                        className="w-5/6 py-2 border-slate-200 shadow-sm"
                                        placeholder="search by name or email"
                                        handleChange={handleChange}
                                        name="search"
                                        value={searchTerm}
                                    />
                                    <Link  href={route('admin.products.index')} preserveScroll={true}>
                                        <i className="hover:text-red-600 ml-6 mt-2 transition-all duration-300 text-2xl fa-solid fa-filter-circle-xmark"></i>
                                    </Link>
                                </div>
                                <LinkButton href={route('admin.products.create')} className="ml-6" preserveScroll={true}>
                                    Create
                                </LinkButton>
                            </div>
                            <div className="flex flex-col mt-3">
                                <div className="overflow-x-auto ">
                                    <div className="inline-block min-w-full py-2 align-middle">
                                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                            <table className="h-auto transition-height duration-300 ease-in-out min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Image</span>
                                                        </th>
                                                        <th onClick={() => handleSort('name')} scope="col" className="cursor-pointer py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <SortLabel {...{ field: "name", sortBy, sortOrder }}></SortLabel>
                                                        </th>
                                                        <th onClick={() => handleSort('price')} scope="col" className="cursor-pointer py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <SortLabel {...{ field: "price", sortBy, sortOrder }}></SortLabel>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Category</span>
                                                        </th>
                                                        <th onClick={() => handleSort('quantity')} scope="col" className="cursor-pointer py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <SortLabel {...{ field: "quantity", sortBy, sortOrder }}></SortLabel>
                                                        </th>
                                                        <th onClick={() => handleSort('status')} scope="col" className="cursor-pointer py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <SortLabel {...{ field: "status", sortBy, sortOrder }}></SortLabel>
                                                        </th>
                                                        <th onClick={() => handleSort('created_at')} scope="col" className="cursor-pointer py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <SortLabel {...{ field: "created_at", sortBy, sortOrder }}></SortLabel>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {productData.data.map((product) => (
                                                        <tr key={product.id}>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <div className="inline-flex items-center gap-x-3">
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={product.thumbnail}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {product.name}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {product.price}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {product.category.name}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 contentEditable={true}
                                                                    suppressContentEditableWarning={true}
                                                                    onBlur={e => handleEdit(product.id, "quantity", e.target.innerText)} className="font-medium text-gray-800 p-2 text-center focus:outline-gray-200 dark:focus:outline-gray-900 dark:text-white ">
                                                                    {product.quantity}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <ToggleSwitch checked={product.status} onChange={() => handleToggle(product.id, (!product.status))} ></ToggleSwitch>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {product.created_at}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 whitespace-nowrap">
                                                                <div className="flex items-center gap-x-6 text-lg">
                                                                    <Link href={route("admin.products.show", product.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-green-500 dark:text-gray-300 hover:text-green-500 focus:outline-none">
                                                                        <i className="fa-solid fa-eye"></i>
                                                                    </Link>
                                                                    <button onClick={() => openModal(product.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                        <i className="fa-solid fa-trash-alt"></i>
                                                                    </button>
                                                                    <Link href={route("admin.products.edit", product.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                        <i className="fa-solid fa-edit"></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {productData.data.length == 0 && (<tr>
                                                        <td colSpan="8" className='p-5 text-center text-gray-300'>
                                                            No Data Found
                                                        </td>
                                                    </tr>)}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination data={productData} ></Pagination>
                        </section>
                    </div>
                </div>
                <DeleteModalComponent {...deleteProps}></DeleteModalComponent>
            </div >
        </AdminAuthenticated >
    );
};

export default Index;