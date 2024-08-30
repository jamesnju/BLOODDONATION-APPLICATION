import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createDonar, DonarsDetails } from '../../../actions/Donar/Donar';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Revalidate } from '@/Redux/revalidateActions/Revalidate';

const AddDonarModal = ({ onClose, isOpen, onSubmit }:
    { onClose: () => void; isOpen: boolean; onSubmit: () => void; }) => {
    const [loading, setLoading] = useState(false);

    const createMutation = useMutation({
        mutationFn: async (data: DonarsDetails) => {
            const res = await createDonar(data);
            return res;
        },
        onSuccess: (data) => {
            Revalidate('getdonars');
            setLoading(false);
            onSubmit();
            formik.resetForm();
            onClose();
            if (!data?.error) {
                toast.success(
                    <div className="flex">
                        {data?.message}
                    </div>
                )
            } else {
                toast.error(
                    <div className="flex">
                        <span className='text-red-600'>{data?.message}</span>
                    </div>)
            }
        },
        onError: (error) => {
            toast.error(
                <div className="flex items-center justify-start gap-2">
                    <div className="p-1 bg-red-600 rounded-full">
                    </div>
                    {`${error}`}
                </div>
            );
            setLoading(false);
        }
    });

    const formik = useFormik({
        initialValues: {
            id: 0,
            fullName: '',
            age: 0,
            bloodGroup: '',
            phoneNumber: '',
            address: '',
            email: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            age: Yup.number().required('Age is required').min(20, 'Age must be a greater than 20'),
            bloodGroup: Yup.string().required('Blood Group is required'),
            phoneNumber: Yup.string().required('Phone Number is required'),
            address: Yup.string().required('Address is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: async (values: DonarsDetails) => {
            setLoading(true);
            //console.log(values, "baff");
            createMutation.mutate(values);
        },
    });

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
                className="relative w-full max-w-xl mx-2 my-2 bg-white rounded-lg shadow-lg z-50"
            >
                <div className="relative p-6">
                    <div className="flex items-center justify-between border-b">
                        <h2 className="text-2xl font-bold mb-6 text-center">Donor Form</h2>
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
                    <div className="flex items-center justify-center">
                        <div className="bg-white p-1 rounded shadow-md w-full max-w-md">
                            <form onSubmit={formik.handleSubmit} className='grid grid-cols-2 gap-1'>
                                <div className="mb-4">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.fullName}
                                    />
                                    {formik.touched.fullName && formik.errors.fullName ? (
                                        <div className="text-red-600 text-sm">{formik.errors.fullName}</div>
                                    ) : null}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                        Age
                                    </label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.age}
                                    />
                                    {formik.touched.age && formik.errors.age ? (
                                        <div className="text-red-600 text-sm">{formik.errors.age}</div>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                                        Blood Group
                                    </label>
                                    <input
                                        id="bloodGroup"
                                        name="bloodGroup"
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.bloodGroup}
                                    />
                                    {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                                        <div className="text-red-600 text-sm">{formik.errors.bloodGroup}</div>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phoneNumber}
                                    />
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                        <div className="text-red-600 text-sm">{formik.errors.phoneNumber}</div>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address}
                                    />
                                    {formik.touched.address && formik.errors.address ? (
                                        <div className="text-red-600 text-sm">{formik.errors.address}</div>
                                    ) : null}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-600 text-sm">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="mt-6 col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDonarModal;
