import { useState, createContext, useEffect } from 'react'
import Navbar from '@/Components/Admin/Navbar/Navbar'
import Sidebar from '@/Components/Admin/Sidebar/Sidebar'
import PageFooter from '@/Components/PageFooter'
import { Head, usePage } from '@inertiajs/react'
import { useDarkMode } from '@/Hooks'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminGlobalContext = createContext()
export default ({ auth, header, children, title }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024)
    const [isSidebarHovered, setSidebarHovered] = useState(false)
    const [isScrollDown, setScrollDown] = useState(false)
    const [isScrollUp, setScrollUp] = useState(false)
    const [isDark, setDarkMode] = useDarkMode();
    const { flash_message } = usePage().props;

    const handleSidebarHover = (value) => {
        setSidebarHovered(value)
    }

    const handleWindowResize = () => {
        if (window.innerWidth <= 1024) {
            setSidebarOpen(false)
        } else {
            setSidebarOpen(true)
        }
    }

    let lastScrollTop = 0

    const handleScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop
        if (st > lastScrollTop) {
            // downscroll
            setScrollDown(true)
            setScrollUp(false)
        } else {
            // upscroll
            setScrollDown(false)
            setScrollUp(true)
            if (st == 0) {
                //  reset
                setScrollDown(false)
                setScrollUp(true)
            }
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    }

    useEffect(() => {
        if (flash_message) {
            flash_message.status ? toast.success(flash_message.message) : toast.error(flash_message.message);
        }
        window.addEventListener('resize', handleWindowResize)
        document.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
            document.removeEventListener('scroll', handleScroll)
        }
    }, [flash_message])

    const ContextData = {
        isSidebarOpen,
        isSidebarHovered,
        isScrollDown,
        isScrollUp,
        setSidebarOpen,
        setSidebarHovered,
        setScrollDown,
        setScrollUp,
        handleSidebarHover,
        isDark,
        setDarkMode,
    };

    return (
        <AdminGlobalContext.Provider
            value={ContextData}
        >
            <Head title={title} />

            <div className="min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-eval-0 dark:text-gray-100">
                <Sidebar />

                <div
                    style={{
                        transitionProperty: 'margin',
                        transitionDuration: '150ms',
                    }}
                    className={`flex flex-col min-h-screen ${isSidebarOpen ? 'lg:ml-64' : 'md:ml-16'
                        }`}
                >
                    <Navbar auth={auth} />

                    {header && <header className="p-3 sm:py-4 sm:px-6">{header}</header>}

                    <main className="flex-1 px-4 sm:px-6">{children}</main>

                    <PageFooter />
                </div>
            </div>
            <ToastContainer theme={isDark ? 'light' : 'dark'} />
        </AdminGlobalContext.Provider>
    )
}
