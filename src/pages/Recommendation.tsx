import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Circle from '../assets/star.png'
function CircularProgress({ progress, color }: { progress: number; color: string }) {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const [animatedOffset, setAnimatedOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedOffset(offset), 100);
    return () => clearTimeout(timer);
  }, [offset]);

  return (
    <div className="relative w-12 h-12">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3.8"
        />
        <motion.path
          d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"
          fill="none"
          stroke={color}
          strokeWidth="3.8"
          strokeDasharray={circumference}
          strokeDashoffset={animatedOffset}
          strokeLinecap="round"
          style={{ transform: 'rotate(0deg)', transformOrigin: '50% 50%' }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <div className="text-[10px] font-semibold text-[#1A1A1A]">{progress}%</div>
          <div className="text-[8px] text-[#1A1A1A]">Match</div>
        </div>
      </div>
    </div>
  );
}

export default function Recommendation() {
  const recommendedProgress = 92;
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('8-9');
  const navigate = useNavigate();

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

      {/* Badge */}
      <div className="flex justify-center pt-4">
        <div className="bg-[#3DD598] px-3 py-2 rounded-xl inline-flex items-center space-x-2 shadow-sm">
                    <img src={Circle} alt="Kapes Logo"  />

          <span className="text-white text-xs font-medium tracking-tight">
            Recommended Size: Age 8–9
          </span>
        </div>
      </div>

      {/* Confidence Score */}
      <div className="flex flex-col items-center mt-5 px-6">
        <CircularProgress progress={recommendedProgress} color="#3DD598" />
        <div className="text-center mt-2">
          <div className="text-sm font-semibold text-black">Confidence Score</div>
          <div className="text-[12px] text-gray-500 leading-tight mt-0.5">
            Based on measurements & similar<br />
            children’s fit data
          </div>
        </div>
      </div>

      {/* Alternate Options */}
      <div className="px-6 mt-6">
        <h3 className="text-sm font-semibold text-black mb-3">Alternate Options</h3>
        <div className="space-y-2">
          {/* Option 1 */}
          <div
            onClick={() => setSelectedOption('7-8')}
            className={`flex items-center justify-between bg-white rounded-xl p-2.5 shadow-sm border ${
              selectedOption === '7-8' ? 'border-[#F97769]' : 'border-gray-100'
            } cursor-pointer`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#F97769] flex items-center justify-center text-white font-bold text-[10px]">
                K
              </div>
              <div>
                <div className="text-xs font-semibold text-black">Age 7–8</div>
                <div className="text-[11px] text-gray-500">If you prefer a snugger fit</div>
              </div>
            </div>
            <CircularProgress progress={92} color="#3DD598" />
          </div>

          {/* Option 2 */}
          <div
            onClick={() => setSelectedOption('9-10')}
            className={`flex items-center justify-between bg-white rounded-xl p-2.5 shadow-sm border ${
              selectedOption === '9-10' ? 'border-[#F97769]' : 'border-gray-100'
            } cursor-pointer`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#F97769] flex items-center justify-center text-white font-bold text-[10px]">
                K
              </div>
              <div>
                <div className="text-xs font-semibold text-black">Age 9–10</div>
                <div className="text-[11px] text-gray-500">For Growing room</div>
              </div>
            </div>
            <CircularProgress progress={20} color="#F7645B" />
          </div>
        </div>
      </div>

      {/* Quantity + Buttons */}
      <div className="px-6 mt-6 pb-10">
        <h3 className="text-sm font-semibold text-black mb-2">Quantity</h3>
        <div className="flex items-center space-x-3 mb-5">
          <button
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xl font-light"
          >
            –
          </button>
          <div className="text-sm font-bold">{quantity}</div>
          <button
            onClick={() => setQuantity(prev => prev + 1)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xl font-light"
          >
            +
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#F97769] hover:bg-[#e26257] transition text-white text-sm font-medium py-2 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Add Size 8–9 to cart
          </button>
          <button
            onClick={() => navigate('/finder')}
            className="w-full border border-gray-200 hover:border-gray-400 transition text-black text-sm font-medium py-2 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Start Over
          </button>
        </div>
      </div>
    </motion.div>
  );
}
