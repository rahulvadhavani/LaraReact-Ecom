import Authenticated from '@/Layouts/Authenticated'

export default (props) => {
    return (
        <Authenticated
            title="Dashboard"
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-xl font-semibold leading-tight">
                        Dashboard
                    </h2>
                </div>
            }
        >
            <div className="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
                You're logged in!
            </div>
        </Authenticated>
    )
}
