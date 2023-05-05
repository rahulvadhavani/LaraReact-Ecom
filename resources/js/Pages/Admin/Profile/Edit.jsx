import AdminAuthenticated from '@/Layouts/AdminAuthenticated'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import DeleteUserForm from './Partials/DeleteUserForm'
import PageHead from '@/Components/PageHead'
import { Head, usePage } from '@inertiajs/react'

export default function Edit({ auth, mustVerifyEmail, status }) {
    const { module, breadcrumbs } = usePage().props;
    return (

        <AdminAuthenticated
            title="Profile"
            auth={auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>
            </div>
        </AdminAuthenticated>
    )
}
