import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head, usePage } from '@inertiajs/react'
import Breadcrumb from '@/Components/Frontend/Breadcrumb'
import Shop from '@/Components/Frontend/Shop'


export default function Products(props) {
    const { module, breadcrumbs, page_data } = usePage().props;
    const { products,categories } = page_data;
    return (
        <>
            <Authenticated
                title={module}
                auth={props.auth}
                header={<></>}
                shareData={{ products:products,categories}}
            >
                <Breadcrumb data={breadcrumbs}></Breadcrumb>
                <Head title="Products" />
                <Shop></Shop>
            </Authenticated>
        </>
    )
}
