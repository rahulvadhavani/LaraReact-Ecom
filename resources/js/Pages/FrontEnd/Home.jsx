import Ads from '@/Components/Frontend/Ads'
import Banner from '@/Components/Frontend/Banner'
import Category from '@/Components/Frontend/Category'
import Features from '@/Components/Frontend/Features'
import NewArrival from '@/Components/Frontend/NewArrival'
import Products from '@/Components/Frontend/Products'
import Authenticated from '@/Layouts/Authenticated'
import { Link, Head, usePage } from '@inertiajs/react'


export default (props) => {
    const { module, page_data } = usePage().props;
    return (
        <>
            <Authenticated
                title={module}
                auth={props.auth}
                header={<></>}
                shareData={{ banners: page_data.banners, products: page_data.products }}
            >
                <Banner></Banner>
                <Features></Features>
                <Category></Category>
                <NewArrival></NewArrival>
                <Ads></Ads>
                <Products></Products>
            </Authenticated>
        </>
    )
}
