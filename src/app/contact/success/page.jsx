"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white rounded-lg p-8 shadow-2xl flex flex-col items-center w-[80%] md:w-[40%] mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Form Submitted Successfully!
        </h2>
        <p className="mb-6">Thank you for submitting your information.</p>
        <button
          className="bg-green text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleRedirect}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
