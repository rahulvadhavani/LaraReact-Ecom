import PerfectScrollbar from '@/Components/PerfectScrollbar'
import {
    SidebarLink,
} from '@/Components/Admin/Sidebar/Sidebar'


export default () => {
    return (
        <PerfectScrollbar
            tag="nav"
            className="flex text-xl flex-col flex-1 max-h-full gap-4 px-3"
        >
            <SidebarLink
                title={'Dashboard'}
                href={route('admin.dashboard')}
                active={route().current('admin.dashboard')}
                icon={
                    <i className="fa-solid fa-tachometer-alt"></i>
                }
            />
            <SidebarLink
                title={'Users'}
                href={route('admin.users.index')}
                active={route().current('admin.users.*')}
                icon={<i className="fa-solid fa-users"></i>}
            />
            <SidebarLink
                title={'Categories'}
                href={route('admin.categories.index')}
                active={route().current('admin.categories.*')}
                icon={<i className="fa-solid fa-shapes"></i>}
            />
            <SidebarLink
                title={'Products'}
                href={route('admin.products.index')}
                active={route().current('admin.products.*')}
                icon={<i className="fa-solid fa-shopping-cart"></i>}
            />
            <SidebarLink
                title={'Profile'}
                href={route('admin.profile.edit')}
                active={route().current('admin.profile.*')}
                icon={<i className="fa-solid fa-user"></i>}
            />
            {/* <SidebarCollapsible
                title="Posts"
                icon={<TemplateIcon aria-hidden="true" className="w-6 h-6" />}
            >
                <SidebarCollapsibleItem
                    href="#"
                    title="Posts"
                    active="#"
                />
            </SidebarCollapsible> */}

        </PerfectScrollbar>

    )
}


