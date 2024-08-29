"use client"; // This is for Next.js 13+ to indicate the component is a client-side component

import React from 'react';
import { toast } from 'react-toastify';

const Test = () => {
    const handleButtonClick = () => {
        toast.success('You did it!'); // Displays a success message
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Show Success Toast</button>
        </div>
    );
};

export default Test;
