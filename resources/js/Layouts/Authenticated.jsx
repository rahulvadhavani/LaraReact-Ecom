import { createContext } from 'react'
import { Head } from '@inertiajs/react'
import Header from '@/Components/Frontend/Header';
import Footer from '@/Components/Frontend/Footer';
import '../../css/main.css';

export const GlobalContext = createContext()

export default ({ auth, header, shareData, children, title }) => {
    const contextData = { auth, shareData, title }
    return (
        <>
            <GlobalContext.Provider value={contextData}>
                <Head title={title} />
                <Header shareData={shareData || null}></Header>
                <main>{children}</main>
                <Footer></Footer>
            </GlobalContext.Provider>
        </>
    )
}
