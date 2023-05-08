import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import Input from '@/Components/Input';
import Pagination from '@/Components/Admin/Pagination';
import DeleteModalComponent from '@/Components/Admin/DeleteModalComponent';
import LinkButton from '@/Components/Admin/LinkButton';
import PageHead from '@/Components/PageHead';
import { Badge, ToggleSwitch } from 'flowbite-react';

const Index = ({ auth }) => {
    const { categories, module, breadcrumbs, search, current_page } = usePage().props;
    const [deleteUrl, setDeleteUrl] = useState('#');
    const [searchTerm, setSearchTerm] = useState(search);
    const [categoriesData, setCategoriesData] = useState(categories || []);
    const [show, setShow] = useState(false)
    const onClose = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('admin.categories.delete', { id }));
        setShow(true);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const query = e.target.value.length > 0 ? `?search=${e.target.value}` : '';
        const newUrl = `${window.location.pathname}${query}`;
        window.history.pushState({}, '', newUrl);
        const delayDebounceFn = setTimeout(() => {
            axios.get(route('admin.categories.index'), { params: { search: e.target.value, curren_page: current_page } })
                .then(res => {
                    setCategoriesData(res.data.categories)
                })
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }

    const handleToggle = (id, status) => {
        const updatedData = categoriesData.data.map(row => {
            if (row.id === id) {
                console.log(id, row.id)
                return { ...row, status };
            }
            return row;
        });
        const data = { ...categoriesData, data: updatedData };
        try {
            axios.post(route('admin.categories.update_status'), { id, status })
                .then(res => {
                    console.log(res);
                })
        } catch (error) {
            console.log(error);
        }
        setCategoriesData(data);
    };

    const deleteProps = {
        show,
        deleteUrl,
        onClose
    }

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
                        <section className="container px-4 mx-auto">
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
                                    <Link  href={route('admin.categories.index')} preserveScroll={true}>
                                        <i className="hover:text-red-600 ml-6 mt-2 transition-all duration-300 text-2xl fa-solid fa-filter-circle-xmark"></i>
                                    </Link>
                                </div>
                                <LinkButton href={route('admin.categories.create')} className="ml-6" preserveScroll={true}>
                                    Create
                                </LinkButton>
                            </div>
                            <div className="flex flex-col mt-3">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Image</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Name</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Products Count</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Status</span>
                                                        </th><th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Created at</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {categoriesData.data.map((category) => (
                                                        <tr key={category.id}>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <div className="inline-flex items-center gap-x-3">
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={category.image}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="p-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {category.name}
                                                                </h2>
                                                            </td>
                                                            <td className="p-4 flex text-sm font-medium text-gray-700">
                                                                <Badge color="indigo" size="lg">
                                                                    {category.products_count}
                                                                </Badge>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <ToggleSwitch checked={category.status} onChange={() => handleToggle(category.id, (!category.status))} ></ToggleSwitch>
                                                            </td>
                                                            <td className="p-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {category.created_at}
                                                                </h2>
                                                            </td>
                                                            <td className="p-4 text-sm whitespace-nowrap">
                                                                <div className="flex items-center gap-x-6 text-lg">
                                                                    <button onClick={() => openModal(category.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                        <i className="fa-solid fa-trash-alt"></i>
                                                                    </button>
                                                                    <Link href={route("admin.categories.edit", category.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                        <i className="fa-solid fa-edit"></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {categoriesData.data.length == 0 && (<tr>
                                                        <td colspan="4" className='p-5 text-center text-gray-300'>
                                                            No Data Found
                                                        </td>
                                                    </tr>)}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination data={categoriesData} ></Pagination>
                        </section>
                    </div>
                </div>
                <DeleteModalComponent {...deleteProps}></DeleteModalComponent>
            </div>
        </AdminAuthenticated>
    );
};

export default Index;