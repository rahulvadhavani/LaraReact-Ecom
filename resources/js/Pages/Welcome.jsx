import Ads from '@/Components/Frontend/Ads'
import Banner from '@/Components/Frontend/Banner'
import Category from '@/Components/Frontend/Category'
import Features from '@/Components/Frontend/Features'
import NewArrival from '@/Components/Frontend/NewArrival'
import Products from '@/Components/Frontend/Products'
import PageHead from '@/Components/PageHead'
import Authenticated from '@/Layouts/Authenticated'
import { Link, Head } from '@inertiajs/react'


export default (props) => {
    return (
        <>
            <Authenticated
                title='home'
                auth={[]}
                header={
                    <PageHead breadcrumbs={[]} module='Home' ></PageHead>
                }
            >
                <Head title="Home" />
                {/*  */}
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
