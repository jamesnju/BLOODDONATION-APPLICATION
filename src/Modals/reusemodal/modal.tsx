import React from 'react';

const modal = ({ onClose, isOpen, onSubmit }: { onClose: any; isOpen: any; onSubmit: any; }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data:');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
            <div
                className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"
                onClick={onClose}
            />
            <div
                id="crud-modal"
                aria-hidden="true"
                className="relative w-full max-w-2xl mx-4 my-8 bg-white rounded-lg shadow-lg z-50"
            >
                <div className="relative p-6">
                    <div className="flex items-center justify-between border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Select Unit to Register
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                            onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* content here */}
                </div>
            </div>
        </div>
    );
};

export default modal;
