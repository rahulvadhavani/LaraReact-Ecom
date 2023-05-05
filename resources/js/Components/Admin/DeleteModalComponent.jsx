import React from 'react'
import { Link } from '@inertiajs/react';
import { Modal, Button } from 'flowbite-react';

export default function DeleteModalComponent(props) {
    return (
        <>
            <Modal
                show={props.show}
                size="md"
                popup={true}
                onClose={props.onClose}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this item?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Link
                                preserveScroll={true}
                                tabIndex="1"
                                className="border-transparent rounded-md mt-1 mr-1 bg-red-600 hover:bg-red-700 inline-flex items-center px-3 py-2 text-white"
                                href={props.deleteUrl}
                            >
                                Yes, I'm sure
                            </Link>
                            <Button
                                color="gray"
                                onClick={props.onClose}
                            >
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
