import PageHead from '@/Components/PageHead';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { module, breadcrumbs, statistics } = usePage().props;
    return (
        <AdminAuthenticated
            title={module}
            auth={auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 sm:p-3 sm:rounded-lg">
                    <div className="">
                        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {statistics.map((statistic, key) => {
                                return <div key={key} className='bg-white dark:bg-gray-700 dark:text-gray-200 shadow rounded-lg'>
                                    <div className="flex items-center p-8 ">
                                        <div className={`inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-${statistic.color}-600 bg-${statistic.color}-100 rounded-full mr-6`}>
                                            <i className={'text-xl fa-solid ' + statistic.class}></i>
                                        </div>
                                        <div>
                                            <span className="block text-2xl font-bold">{statistic.count}</span>
                                            <span className="block text-gray-500">{statistic.module}</span>
                                        </div>
                                    </div>
                                    <div className='w-100 h-auto p-2 flex justify-center align-middle'>
                                        <Link className='text-gray-400 text-2xl hover:text-blue-400' href={statistic.route}><i className="fa-solid fa-circle-arrow-right"></i></Link>
                                    </div>
                                </div>
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </AdminAuthenticated>
    );
}