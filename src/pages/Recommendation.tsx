import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Circle from '../assets/star.png';

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
    <div className="relative w-10 h-10">
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
        <div className="text-[9px] font-semibold text-[#1A1A1A]">{progress}%</div>
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
      className="flex flex-col h-full w-full bg-white font-figtree"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="bg-[#F97769] text-white rounded-t-3xl px-6 py-4 flex items-center justify-between shadow-md">
        <div className="text-white font-bold text-xl">K</div>
        <h2 className="text-base font-semibold">Smart Size Finder</h2>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden px-8 pt-10 pb-4 space-y-3">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="bg-[#3DD598] px-3 py-1.5 rounded-xl inline-flex items-center space-x-2 shadow-sm">
            <img src={Circle} alt="Kapes Icon" className="w-4 h-4" />
            <span className="text-white text-[11px] font-medium tracking-tight">
              Recommended Size: Age 8–9
            </span>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="flex flex-col items-center">
          <CircularProgress progress={recommendedProgress} color="#3DD598" />
          <div className="text-center mt-1.5">
            <div className="text-[13px] font-semibold text-black">Confidence Score</div>
            <div className="text-[11px] text-gray-500 leading-tight">
              Based on measurements & similar<br />
              children’s fit data
            </div>
          </div>
        </div>

        {/* Alternate Options */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-black mb-1">Alternate Options</h3>

          {/* Option 1 */}
          <div
            onClick={() => setSelectedOption('7-8')}
            className={`flex items-center justify-between bg-white rounded-xl p-2 shadow-sm border ${
              selectedOption === '7-8' ? 'border-[#F97769]' : 'border-gray-100'
            } cursor-pointer`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-full bg-[#F97769] flex items-center justify-center text-white font-bold text-[10px]">
                K
              </div>
              <div>
                <div className="text-xs font-semibold text-black">Age 7–8</div>
                <div className="text-[10px] text-gray-500">If you prefer a snugger fit</div>
              </div>
            </div>
            <CircularProgress progress={92} color="#3DD598" />
          </div>

          {/* Option 2 */}
          <div
            onClick={() => setSelectedOption('9-10')}
            className={`flex items-center justify-between bg-white rounded-xl p-2 shadow-sm border ${
              selectedOption === '9-10' ? 'border-[#F97769]' : 'border-gray-100'
            } cursor-pointer`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-full bg-[#F97769] flex items-center justify-center text-white font-bold text-[10px]">
                K
              </div>
              <div>
                <div className="text-xs font-semibold text-black">Age 9–10</div>
                <div className="text-[10px] text-gray-500">For growing room</div>
              </div>
            </div>
            <CircularProgress progress={20} color="#F7645B" />
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Quantity</h3>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-base"
            >
              –
            </button>
            <div className="text-sm font-bold">{quantity}</div>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-base"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-2 pt-1">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#F97769] hover:bg-[#e26257] transition text-white text-sm font-medium py-2 rounded-lg"
          >
            Add Size 8–9 to cart
          </button>
          <button
            onClick={() => navigate('/finder')}
            className="w-full border border-gray-200 hover:border-gray-400 transition text-black text-sm font-medium py-2 rounded-lg"
          >
            Start Over
          </button>
        </div>
      </div>
    </motion.div>
  );
}
