import React, { useState } from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { Head, usePage } from '@inertiajs/react';
import BackButton from '@/Components/Admin/BackButton';
import PageHead from '@/Components/PageHead';
import Status from '@/Components/Admin/Status';
import ActionButton from '@/Components/Admin/ActionButton';
import DeleteModalComponent from '@/Components/Admin/DeleteModalComponent';


export default function Show(props) {
    const { user, module, breadcrumbs } = usePage().props;
    const [deleteUrl, setDeleteUrl] = useState('#');
    const [show, setShow] = useState(false)
    const onClose = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('admin.users.delete', { id }));
        setShow(true);
    }

    const deleteProps = {
        show,
        deleteUrl,
        onClose
    }
    return (
        <AdminAuthenticated
            auth={props.auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 min-h-[78vh] sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className='flex justify-between align-middle'>
                        <ActionButton openModal={openModal} id={user.id} href={route('admin.users.edit', user.id)}></ActionButton>
                        <BackButton href={route("admin.users.index")}></BackButton>
                    </div>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>
                        <div className="bg-white p-3 border dark:border-gray-600 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="object-center mx-auto     h-64 h-64"
                                src={user.avatar}
                                alt="avatar"
                            />
                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <i className='text-xl text-white fill-current fa-solid fa-at'></i>
                                <h1 className="mx-3 text-lg font-semibold text-white">{user.email ?? '-'}</h1>
                            </div>
                            <div className="px-6 py-4">
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">First Name : </b>
                                    <h1 className="px-2 text-sm">{user.first_name}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Last Name : </b>
                                    <h1 className="px-2 text-sm">{user.last_name}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Role : </b>
                                    <h1 className="px-2 text-sm">{user.role}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Mobile Number : </b>
                                    <h1 className="px-2 text-sm">{user.mobile_number || '-'}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Status : </b>
                                    <h1 className="px-2 text-sm">
                                        {user.email_verified_at == null ? <Status color='red'>Unverified</Status> : <Status color='emerald'>Verified</Status>}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-3 lg:col-span-2 border dark:border-gray-600 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                            <h1 className='text-3xl text-gray-400'>No Data Available</h1>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteModalComponent {...deleteProps}></DeleteModalComponent>

        </AdminAuthenticated>
    );
}
