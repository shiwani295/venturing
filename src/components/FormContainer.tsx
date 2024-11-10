"use client";
import React, { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = () => {
    const branchNameRef = useRef();
    const branchLocationRef = useRef();
    const branchLogoRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const branchName = branchNameRef.current.value;
        const branchLocation = branchLocationRef.current.value;
        const branchLogo = branchLogoRef.current.files[0];  

        if (!branchName || !branchLocation || !branchLogo) {
            toast.error("All fields are required"); 
            return;
        }

        const formData = new FormData();
        formData.append("branchName", branchName);
        formData.append("branchLocation", branchLocation);
        formData.append("branchLogo", branchLogo); 

        try {
            const response = await axios.post('https://ayanexcrm-backend.onrender.com/api/createBranch', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success("Form submitted successfully"); 
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit form. Please try again.");
        }
    };

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Name</label>
                <input
                    type="text"
                    ref={branchNameRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Enter your branch name"
                    required
                />
            </div>
            
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Branch Location</label>
                <input
                    type="text"
                    ref={branchLocationRef}
                    placeholder="Enter your branch location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                />
            </div>

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Branch Logo</label>
                <input
                    type="file"
                    ref={branchLogoRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    accept="image/*"
                    required
                />
            </div>

            <button
                type="submit"
                className="text-white bg-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    );
};

export default FormContainer;
