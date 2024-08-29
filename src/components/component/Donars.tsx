"use client";
import React, { useState } from 'react';
import { DonarColunms} from './DonarColunms';
import AddDonarModal from '@/Modals/AddDonarModal';
import { DataTable } from '@/Datatable/DataTable';

const Donars = ({allDonars}:{allDonars:any}) => {
  // Initial state is set to false to keep the modal closed by default
  const [newModal, setNewModal] = useState(false);

  // Toggle function to open/close the modal
  const handleModal = () => {
    setNewModal(prev => !prev);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-end mx-10">
          <button onClick={handleModal} className='bg-[#1e6096] text-white text-lg  p-2 rounded-md font-bold'>Add Donar</button>
        </div>
          <div className="">
          {/* <DataTable columns={DonorColunms} data={allDonor} /> */}
          <DataTable
            data={allDonars}
            columns={DonarColunms}
            showActions={true}
            actions={{
                edit: true,
                delete: true,
            }}
        />
          </div>
      </div>

      <AddDonarModal
        isOpen={newModal}
        onClose={handleModal}
        onSubmit={undefined}  // Handle submission logic if needed
      />
    </>
  );
};

export default Donars;
