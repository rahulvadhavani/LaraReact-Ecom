import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import Input from '@/Components/Input';
import Pagination from '@/Components/Admin/Pagination';
import DeleteModalComponent from '@/Components/Admin/DeleteModalComponent';
import LinkButton from '@/Components/Admin/LinkButton';
import PageHead from '@/Components/PageHead';
import Status from '@/Components/Admin/Status';
import { ToggleSwitch } from 'flowbite-react';

const Index = ({ auth }) => {
    const { users, module, breadcrumbs, search, current_page } = usePage().props;
    const [deleteUrl, setDeleteUrl] = useState('#');
    const [searchTerm, setSearchTerm] = useState(search);
    const [usersData, setusersData] = useState(users || []);
    const [show, setShow] = useState(false);

    const onClose = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('admin.users.delete', { id }));
        setShow(true);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const query = e.target.value.length > 0 ? `?search=${e.target.value}` : '';
        const newUrl = `${window.location.pathname}${query}`;
        window.history.pushState({}, '', newUrl);
        const delayDebounceFn = setTimeout(() => {
            axios.get(route('admin.users.index'), { params: { search: e.target.value, curren_page: current_page } })
                .then(res => {
                    setusersData(res.data.users)
                })
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }

    const handleToggle = (id, status) => {
        const updatedData = usersData.data.map(row => {
            if (row.id === id) {
                console.log(id, row.id)
                return { ...row, status };
            }
            return row;
        });
        const data = { ...usersData, data: updatedData };
        try {
            axios.post(route('admin.users.update_status'), { id, status })
                .then(res => {
                    console.log(res);
                })
        } catch (error) {
            console.log(error);
        }
        setusersData(data);
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
                                    <LinkButton href={route('admin.users.index')} className="ml-6" preserveScroll={true}>
                                        <i className="fa-solid fa-undo-alt"></i>
                                    </LinkButton>
                                </div>
                                <LinkButton href={route('admin.users.create')} className="ml-6" preserveScroll={true}>
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
                                                            <span>Avatar</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>First Name</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Last Name</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Email</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Email Verified</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Status</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Created at</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {usersData.data.map((user) => (
                                                        <tr key={user.id}>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <div className="inline-flex items-center gap-x-3">
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={user.avatar}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {user.first_name}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {user.last_name}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                {user.email}
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                {user.email_verified_at != null ? <Status color='red'>Unverified</Status> : <Status color='emerald'>Verified</Status>}
                                                            </td>
                                                            <td>
                                                                <ToggleSwitch checked={user.status} onChange={() => handleToggle(user.id, (!user.status))} ></ToggleSwitch>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                {user.created_at}
                                                            </td>
                                                            <td className="px-4 py-2 whitespace-nowrap">
                                                                <div className="flex items-center gap-x-6 text-lg">
                                                                    <Link href={route("admin.users.show", user.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-green-500 dark:text-gray-300 hover:text-green-500 focus:outline-none">
                                                                        <i className="fa-solid fa-eye"></i>
                                                                    </Link>
                                                                    <button onClick={() => openModal(user.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                        <i className="fa-solid fa-trash-alt"></i>
                                                                    </button>
                                                                    <Link href={route("admin.users.edit", user.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                        <i className="fa-solid fa-edit"></i>
                                                                    </Link>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {usersData.data.length == 0 && (<tr>
                                                        <td colspan="8" className='p-5 text-center text-gray-300'>
                                                            No Data Found
                                                        </td>
                                                    </tr>)}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination data={usersData} ></Pagination>
                        </section>
                    </div>
                </div>
                <DeleteModalComponent {...deleteProps}></DeleteModalComponent>
            </div>
        </AdminAuthenticated>
    );
};

export default Index;