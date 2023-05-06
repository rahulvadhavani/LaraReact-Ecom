import React, { useState } from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { Head, usePage } from '@inertiajs/react';
import BackButton from '@/Components/Admin/BackButton';
import PageHead from '@/Components/PageHead';
import Status from '@/Components/Admin/Status';
import { Tabs } from 'flowbite-react';
import ImageSlider from '@/Components/Admin/ImageSlider';
import DeleteModalComponent from '@/Components/Admin/DeleteModalComponent';
import ProductAttribute from '@/Components/ProductAttribute';
import ActionButton from '@/Components/Admin/ActionButton';


export default function Show(props) {

    const { product, module, breadcrumbs, auth } = usePage().props;

    const [deleteUrl, setDeleteUrl] = useState('#');
    const [show, setShow] = useState(false)
    const onClose = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('admin.products.delete', { id }));
        setShow(true);
    }

    const deleteProps = {
        show,
        deleteUrl,
        onClose
    }
    return (
        <AdminAuthenticated
            auth={auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 min-h-[78vh] sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className='flex justify-between align-middle'>
                        <ActionButton openModal={openModal} id={product.id} href={route('admin.products.edit', product.id)}></ActionButton>
                        <BackButton href={route("admin.products.index")}></BackButton>
                    </div>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>
                        <div className="bg-white p-3 border  dark:border-gray-600 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="mx-auto object-center h-72 w-72"
                                src={product.thumbnail}
                                alt="thumbnail"
                            />
                            <div className="flex items-center px-6 py-3 bg-gray-500">
                                <i className="text-yellow-400 fa-solid fa-tag"></i>
                                <h1 className="mx-3 text-lg font-semibold text-white">{product.name ?? '-'}</h1>
                            </div>
                            <div className="px-6 py-4">
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Price : </b>
                                    <h1 className="px-2 text-sm">${product.price || '-'}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Category : </b>
                                    <h1 className="px-2 text-sm">{product.category.name || '-'}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Is Featured : </b>
                                    <h1 className="px-2 text-sm">{product.is_featured == 1 ? 'Yes' : 'No'}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Quantity : </b>
                                    <h1 className="px-2 text-sm">{product.quantity || '0'}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Status : </b>
                                    <h1 className="px-2 text-sm">
                                        {product.status != 'active' ? <Status color='red'>{product.status}</Status> : <Status color='emerald'>{product.status}</Status>}
                                    </h1>
                                </div>
                                <ProductAttribute attributes={product.attributes}></ProductAttribute>
                            </div>
                        </div>
                        <div className="bg-white p-3 lg:col-span-2 border  dark:border-gray-600 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                            <Tabs.Group
                                aria-label="Tabs with underline"
                                style="underline"
                            >
                                <Tabs.Item title="Porudct Images">
                                    <div>
                                        {product.images.length > 0
                                            ? <ImageSlider images={product.images}></ImageSlider>
                                            : <div className='w-full h-{20vh} flex justify-center align-middle text-2xl text-gray-500'>NO Data Found</div>
                                        }
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item title="Porudct Description">
                                    <div className='h-[70vh] overflow-y-auto'>
                                        <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item title="Orders">
                                    <div className='h-42 w-full flex justify-center align-middle text-2xl bold text-gray-500'>NO Data Found</div>
                                </Tabs.Item>
                            </Tabs.Group>
                        </div>
                    </div>
                </div>
                <DeleteModalComponent {...deleteProps}></DeleteModalComponent>
            </div>
        </AdminAuthenticated>
    );
}
