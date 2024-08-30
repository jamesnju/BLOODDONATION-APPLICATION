import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Revalidate } from '@/Redux/revalidateActions/Revalidate';
import { deleteDonar } from '../../../actions/Donar/Donar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { deleteAction, isActiveAction, isOpenAction } from '@/Redux/slice/DeleteSlice';

const DeleteDonarModal = () => {

  const deletedata = useSelector((state: RootState) => state.delete.delete);
  const isOpen = useSelector((state: RootState) => state.delete.isOpen);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Closes the modal and resets state
  const onClose = () => {
    dispatch(isOpenAction());
    dispatch(deleteAction({}));
    dispatch(isActiveAction(""));
  };

  // Mutation for deleting the donor
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await deleteDonar(deletedata?.id);
      return res;
    },
    onSuccess: (data) => {
      Revalidate('getdonars');
      setLoading(false);
      onClose();
      if (!data?.error) {
        toast.success(<div className="flex">{data?.message}</div>);
      } else {
        toast.error(<div className="flex"><span className='text-red-600'>{data?.message}</span></div>);
      }
    },
    onError: (error) => {
      toast.error(<div className="flex items-center justify-start gap-2"><div className="p-1 bg-red-600 rounded-full"></div>{`${error}`}</div>);
      setLoading(false);
    }
  });

  // Handles the delete action
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLoading(true);
    deleteMutation.mutate();
  };

  // Render nothing if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50" onClick={onClose} />
      <div id="crud-modal" aria-hidden="true" className="relative w-full max-w-xl mx-2 my-2 bg-white rounded-lg shadow-lg z-50">
        <div className="relative p-6">
          <div className="flex items-center justify-between border-b">
            <h2 className="text-2xl font-bold mb-6 text-center">Delete Donor</h2>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
              onClick={onClose}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-1 rounded shadow-md w-full max-w-md">
              <p>Are you sure you want to delete the donor?</p>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleDelete}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
                <button
                  onClick={onClose}
                  className="w-full ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDonarModal;
