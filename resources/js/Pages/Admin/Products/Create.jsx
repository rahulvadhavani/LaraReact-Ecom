import React from 'react';
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FileInput, Label, Select, TextInput } from 'flowbite-react';
import BackButton from '@/Components/Admin/BackButton';
import PageHead from '@/Components/PageHead';
import Button from '@/Components/Button';
import Editor from '@/Components/Admin/Editor';
import Attribute from '@/Components/Admin/Attribute';
import UplaodFiles from '@/Components/UplaodFiles';


export default function Create(props) {

    const { module, breadcrumbs, categories } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: "",
        price: "",
        quantity: "",
        category_id: "",
        thumbnail: "",
        description: "",
        thumbnail_prev: null,
        attributes: [],
        images: []
    });

    function handleChangeImg(event) {
        setData({
            ...data,
            thumbnail_prev: URL.createObjectURL(event.target.files[0]),
            thumbnail: event.target.files[0],
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.products.store"));
    }
    function handleEditorChange(event, editor) {
        const data = editor.getData();
        setData('description', data);
    }
    function getKeyVal(data) {
        data = data.length > 0 && data.filter(item => item.key != '');
        setData('attributes', data);
    }
    function getFiles(data) {
        setData('images', data);
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
                    <BackButton href={route("admin.products.index")}></BackButton>
                    <form className="px-6" name="createForm" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="name"
                                        value="Name"
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
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="price"
                                        value="Price"
                                    />
                                </div>
                                <TextInput
                                    type='number'
                                    name="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                    id="price"
                                    placeholder="Enter price"
                                />
                                <span className="text-red-600">
                                    {errors.price}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="quantity"
                                        value="Stock Quantity"
                                    />
                                </div>
                                <TextInput
                                    type='number'
                                    name="quantity"
                                    value={data.quantity}
                                    onChange={(e) =>
                                        setData("quantity", e.target.value)
                                    }
                                    id="quantity"
                                    placeholder="Enter quantity"
                                />
                                <span className="text-red-600">
                                    {errors.quantity}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="category_id"
                                        value="Category"
                                    />
                                </div>
                                <Select
                                    id="category_id" defaultValue=''
                                    onChange={(e) =>
                                        setData("category_id", e.target.value)
                                    }
                                >
                                    <option className='p-3' value="" disabled>
                                        Select Category
                                    </option>
                                    {categories.map((category) => {
                                        return <option key={category.id} className='p-3' value={category.id}>{category.name}</option>
                                    })}
                                </Select>
                                <span className="text-red-600">
                                    {errors.category_id}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="thumbnail"
                                        value="Thumbnail"
                                    />
                                </div>
                                <FileInput
                                    accept="image/*"
                                    onChange={handleChangeImg}
                                    id="thumbnail"
                                />
                                <span className="text-red-600">
                                    {errors.thumbnail}
                                </span>
                            </div>
                            {data.thumbnail_prev != null ?
                                <div className='mt-6'>
                                    <div className="flex items-center gap-x-2">
                                        <img
                                            className="object-cover w-16 h-16 rounded-lg"
                                            src={data.thumbnail_prev}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                : ""
                            }
                        </div>
                        <div>
                            <div className='my-5'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="attribute"
                                        value="Attributes"
                                    />
                                </div>
                                <div className='bg-gray-100 dark:bg-gray-900 p-5'>
                                    <Attribute getKeyVal={getKeyVal} keyValue={data.attributes}></Attribute>
                                </div>
                                <span className="text-red-600">
                                    {errors.attributes}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className='my-5'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="images"
                                        value="Images"
                                    />
                                </div>
                                <div className='bg-gray-100 dark:bg-gray-900 p-5'>
                                    <UplaodFiles getFiles={getFiles}></UplaodFiles>
                                </div>
                                <span className="text-red-600">
                                    {errors.images}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className='mt-4'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="description"
                                        value="description"
                                    />
                                </div>
                                <Editor handleEditorChange={handleEditorChange} data={data.description}></Editor>
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
                        </div>
                        <div className='mt-5 flex justify-center'>

                            <Button processing={processing} type='submit' name='update' onClick={handleSubmit}>Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminAuthenticated >
    );
}