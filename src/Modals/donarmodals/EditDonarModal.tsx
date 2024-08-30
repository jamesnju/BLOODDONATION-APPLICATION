import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Revalidate } from '@/Redux/revalidateActions/Revalidate';
import { DonarsDetails, updateDonar } from '../../../actions/Donar/Donar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { activeAction, editAction, openAction } from '@/Redux/slice/EditSlice';

const EditDonarModal = () => {
    const [loading, setLoading] = useState(false);
    const editData = useSelector((state: RootState) => state.editdata.Editdata);
    const isOpen = useSelector((state: RootState) => state.editdata.isOpen);
    const dispatch = useDispatch();
    // console.log(editData, "editData");
    

    const closeModal = () => {
        dispatch(openAction());
        dispatch(activeAction(""));
        dispatch(editAction({}));
    };

    const updateMutation = useMutation({
        mutationFn: async (data: DonarsDetails) => {
            const res = await updateDonar(data);
            return res;
        },
        onSuccess: (data) => {
            Revalidate('getdonars');
            setLoading(false);
            closeModal();
            if (!data?.error) {
                toast.success(<div className="flex">{data.message || "Donor updated successfully"}</div>);
            } else {
                toast.error(<div className="flex"><span className='text-red-600'>{data?.message || "Error updating donor"}</span></div>);
            }
        },
        onError: (error) => {
            toast.error(
                <div className="flex items-center justify-start gap-2">
                    <div className="p-1 bg-red-600 rounded-full"></div>
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
            age: Yup.number().required('Age is required').min(20, 'Age must be greater than 20'),
            bloodGroup: Yup.string().required('Blood Group is required'),
            phoneNumber: Yup.string().required('Phone Number is required'),
            address: Yup.string().required('Address is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: async (values: DonarsDetails) => {
            setLoading(true);
            console.log(values, "editvalues")
            updateMutation.mutate(values);
        },
    });

    useEffect(()=>{
        if(isOpen && editData){
            formik.setValues(
                {
                    id: editData.id,
                    fullName: editData.fullName,
                    age: editData.age,
                    bloodGroup: editData.bloodGroup,
                    phoneNumber: editData.phoneNumber,
                    address: editData.address,
                    email: editData.email,
                }
            );
        }
    },[isOpen, editData])

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
            <div
                className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"
                onClick={closeModal}
            />
            <div
                id="crud-modal"
                aria-hidden="true"
                className="relative w-full max-w-xl mx-2 my-2 bg-white rounded-lg shadow-lg z-50"
            >
                <div className="relative p-6">
                    <div className="flex items-center justify-between border-b">
                        <h2 className="text-2xl font-bold mb-6 text-center">Edit Donor</h2>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                            onClick={closeModal}
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
                                <div className="col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        disabled={loading}
                                    >
                                        {loading ? "Updating..." : "Update Donor"}
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

export default EditDonarModal;
