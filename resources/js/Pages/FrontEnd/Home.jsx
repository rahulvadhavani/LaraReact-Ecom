import Ads from '@/Components/Frontend/Ads'
import Banner from '@/Components/Frontend/Banner'
import Category from '@/Components/Frontend/Category'
import Features from '@/Components/Frontend/Features'
import ProductsLineUp from '@/Components/Frontend/ProductsLineUp'
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
                <ProductsLineUp title='New arrival' products={page_data.products}></ProductsLineUp>
                <Ads></Ads>
                <ProductsLineUp title='Recomended for you'  products={page_data.recomendedProducts}></ProductsLineUp>
            </Authenticated>
        </>
    )
}
