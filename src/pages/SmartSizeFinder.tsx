import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Logo from '../assets/Vector.png'
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
      <div className="bg-[#F97769] text-white rounded-t-3xl px-6 py-4 flex items-center justify-between shadow-md">
          <img src={Logo} alt="Kapes Logo" className="w-4 h-auto" />
        <h2 className="text-base font-semibold">Smart Size Finder</h2>
        <div className="w-6" />
      </div>

      {/* Step Progress Bar */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex justify-between items-center text-[11px] font-medium text-gray-500">
          {['Enter Basic Info', 'Choose Size', 'Fit Preference'].map((label, index) => (
            <div key={index} className="flex-1 px-1 text-center">
              <div className={`${step === index + 1 ? 'text-black font-semibold' : ''}`}>
                {label}
              </div>
              <div
                className={`mt-1 h-1 rounded-full ${
                  step >= index + 1 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 overflow-hidden">
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 onBack={() => setStep(2)} onNext={handleFinalNext} />}
      </div>
    </motion.div>
  );
}
