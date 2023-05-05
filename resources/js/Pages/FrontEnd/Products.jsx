import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head, usePage } from '@inertiajs/react'
import Breadcrumb from '@/Components/Frontend/Breadcrumb'
import Shop from '@/Components/Frontend/Shop'


export default function Products(props) {
    const { module, breadcrumbs, page_data } = usePage().props;
    return (
        <>
            <Authenticated
                title={module}
                auth={props.auth}
                header={<></>}
                shareData={{ banners: page_data.banners }}
            >
                <Breadcrumb></Breadcrumb>
                <Head title="Products" />
                <Shop></Shop>
            </Authenticated>
        </>
    )
}
