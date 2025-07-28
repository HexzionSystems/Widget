import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function SmartSizeFinder() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleFinalNext = () => {
    navigate('/recommendation');
  };

  return (
    <motion.div
      className="flex flex-col h-full w-full font-figtree bg-white"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="bg-[#F97769] text-white rounded-t-3xl px-6 py-5 flex items-center justify-between shadow-md">
        <div className="text-white font-bold text-2xl">K</div>
        <h2 className="text-lg font-semibold">Smart Size Finder</h2>
        <div className="w-6" />
      </div>

      {/* Step Progress Bar */}
      <div className="bg-white px-6 pt-8">
        <div className="flex justify-between text-xs font-medium text-gray-500 tracking-tight">
          {['Enter Basic Info', 'Choose Current Size', 'Fit preferences'].map((label, index) => (
            <div key={index} className="flex flex-col items-start w-1/3">
              <span className={`whitespace-nowrap ${step === index + 1 ? 'text-black font-semibold' : ''}`}>
                {label}
              </span>
              <div
                className={`mt-0.5 h-1 w-26 rounded-full ${
                  step >= index + 1 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <Step3 onBack={() => setStep(2)} onNext={handleFinalNext} />}
    </motion.div>
  );
}
