
import { useState } from "react";
import classNames from "classnames";


const UplaodFiles = (props) => {
    let intialData = props.images_preview != undefined || props.images_preview != null ? props.images_preview : [];
    const [images, setImages] = useState(intialData);
    const [previewImages, setPreviewImages] = useState(intialData);

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = [...images];
        const newPreviewImages = [...previewImages];
        for (const file of files) {
            const previewImage = URL.createObjectURL(file);
            newPreviewImages.push(previewImage);
            newImages.push(file);
        }
        setPreviewImages(newPreviewImages);
        setImages(newImages);
        props.getFiles(newImages)
    };

    const handleRemoveClick = (index) => {
        const newImages = [...images];
        const newPreviewImages = [...previewImages];
        newImages.splice(index, 1);
        newPreviewImages.splice(index, 1);
        setImages(newImages);
        setPreviewImages(newPreviewImages);
        props.getFiles(newImages)
    };

    return (
        <>
            <div className={classNames("flex flex-col items-center space-y-4", props.className || '')}>
                <div className="w-full">
                    <div>
                        <label
                            htmlFor="images"
                            className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                        >
                            <i className="text-2xl text-gray-500 dark:text-gray-400 fa-solid fa-cloud-arrow-up"></i>
                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                                Upalod File
                            </h2>
                            <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                Upload or darg &amp; drop your file SVG, PNG, JPG or GIF.{" "}
                            </p>
                            <input
                                type="file"
                                id="images"
                                className="hidden"
                                multiple={props.allowMultiple || true}
                                accept="image/*"
                                onChange={handleFileInputChange}
                            />
                        </label>
                    </div>

                    <div className="mt-6 flex flex-wrap">
                        {previewImages.map((image, index) => (
                            <div key={image} className="shadow-sm rounded relative w-24 h-24 mx-4 mb-2">
                                <button
                                    className="absolute top-0 right-0  text-red-500 hover:text-red-600 text-gray-800  p-1"
                                    onClick={() => handleRemoveClick(index)}
                                >
                                    <i className="text-xl fa-solid fa-times-circle"></i>
                                </button>
                                <img
                                    src={image}
                                    className="h-full w-full object-cover rounded-md"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UplaodFiles;