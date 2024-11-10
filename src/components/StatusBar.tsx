"use client";
import React, { useState } from "react";
import Image from "next/image";
import AlertNext from "@/components/AlertNext";

const StatusBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Open" },
    { label: "Impact Assessment" },
    { label: "Approved" },
    { label: "Completed" },
  ];

  const getColorClass = (index: number) => {
    if (index < activeStep) return "bg-green-500";
    if (index === activeStep) return "bg-blue-500";
    return "bg-gray-400";
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="px-4 py-4 flex flex-col items-end gap-4">
      <div>
        <AlertNext onContinue={handleNextStep} />
      </div>
      <div className="bg-gray-400 h-6 rounded-full grid grid-cols-4 overflow-hidden w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`col-span-1 text-center text-white ${getColorClass(
              index
            )} relative`}
          >
            <div className="h-full flex items-center justify-center">
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <Image
                src="/assets/rightaeropng.png"
                width={40}
                height={40}
                alt="right arrow"
                className="absolute -right-[22px] top-1/2 -translate-y-1/2 w-12 z-10"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;