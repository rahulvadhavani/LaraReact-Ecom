import React from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FileInput, Label, TextInput, Textarea } from 'flowbite-react';
import BackButton from '@/Components/Admin/BackButton';
import PageHead from '@/Components/PageHead';
import Button from '@/Components/Button';

export default function Create(props) {

    const { module, breadcrumbs } = usePage().props;
    const { data, setData, errors, post } = useForm({
        name: "",
        image: "",
        image_preview: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        let res = post(route("admin.categories.store"));
    }

    function handleChangeImg(event) {
        setData({
            ...data,
            image_preview: URL.createObjectURL(event.target.files[0]),
            image: event.target.files[0],
        });
    }


    return (
        <AdminAuthenticated
            auth={props.auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <BackButton href={route("admin.categories.index")}></BackButton>
                    <form className="px-6" name="createForm" onSubmit={handleSubmit}>

                        <div className='mt-3'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="name"
                                />
                            </div>
                            <TextInput
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                id="name"
                                placeholder="Enter name"
                            />
                            <span className="text-red-600">
                                {errors.name}
                            </span>
                        </div>
                        <div className='grid gap-4 grid-cols-2'>

                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="image"
                                        value="image"
                                    />
                                </div>
                                <FileInput
                                    accept="image/*"
                                    onChange={handleChangeImg}
                                    id="image"
                                />
                                <span className="text-red-600">
                                    {errors.image}
                                </span>
                            </div>
                            {data.image_preview != null ?
                                <div className='mt-6'>
                                    <div className="flex items-center gap-x-2">
                                        <img
                                            className="object-cover w-16 h-16 rounded-lg"
                                            src={data.image_preview}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                : ""
                            }
                        </div>

                        <div className='mt-5 flex justify-center'>
                            <Button type='submit' name='save' onClick={handleSubmit}>Save</Button>
                        </div>

                    </form>

                </div>

            </div>
        </AdminAuthenticated>
    );
}