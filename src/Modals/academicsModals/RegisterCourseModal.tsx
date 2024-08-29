import React from 'react';

const RegisterCourseModal = ({ onClose, isOpen, onSubmit }: { onClose: any; isOpen: any; onSubmit: any; }) => {

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
                className="relative max-w-3xl w-full mx-4 my-2 bg-white rounded-lg shadow-lg z-50"
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

                    <div className="flex flex-col mb-2">
                        <i className='my-2 text-gray-700'>Bachelor of Business and Information Technology</i>
                        <form className='flex'>
                            <div className="flex gap-8 mb-1">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="program" className='font-bold mb-2'>Program</label>
                                    <select id="program" className='w-full border rounded-md p-2' disabled>
                                        <option value="">Bachelor of Business and Information Technology</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="units" className='font-bold mb-2'>Units</label>
                                    <select id="units" className='w-full border rounded-md p-2' disabled>
                                        <option value="">Database System 1</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className='underline font-bold mb-4 text-xl'>Course Registration List</p>
                    <table className="w-full border-collapse">
                        <thead className='bg-gray-200'>
                            <tr className="text-sm text-gray-700">
                                <th className="px-4 py-2 border">Program</th>
                                <th className="px-4 py-2 border">Unit</th>
                                <th className="px-4 py-2 border">Unit Description</th>
                                <th className="px-4 py-2 border">School Name</th>
                                <th className="px-4 py-2 border">Study Mode</th>
                                <th className="px-4 py-2 border">Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">BOBIT</td>
                                <td className="px-4 py-2 border">
                                    <button className="text-blue-500">Math</button>
                                </td>
                                <td className="px-4 py-2 border">Database System 1</td>
                                <td className="px-4 py-2 border">St. Paul’s</td>
                                <td className="px-4 py-2 border">Regular</td>
                                <td className="px-4 py-2 border">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RegisterCourseModal;
