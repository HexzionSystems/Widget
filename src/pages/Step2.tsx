import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL'];

  return (
    <div className="px-5 pt-6 pb-4 flex flex-col flex-grow font-figtree">
      <div className="flex-1 overflow-y-auto pr-1">
        <h3 className="text-base font-semibold text-gray-800 mb-4">What size do they currently wear?</h3>

        {/* Brand Select */}
        <div className="mb-5">
          <label className="block font-medium text-[#2E1E5C] mb-1.5 text-sm">
            Brand <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              className="w-full rounded-2xl border border-[#E6E6E6] bg-white text-[#2E1E5C] text-sm px-4 py-2.5 pr-12 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F97769]"
            >
              <option value="">Select Brand</option>
              <option value="next">Next</option>
              <option value="hm">H&M</option>
              <option value="zara">Zara</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <div className="w-px h-5 bg-[#E6E6E6]" />
              <ChevronDown className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <label className="block font-medium text-[#2E1E5C] mb-2 text-sm">
            Current Size <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 rounded-xl border text-sm font-medium transition-all
                  ${
                    selectedSize === size
                      ? 'bg-[#F97769] text-white border-[#F97769]'
                      : 'bg-white text-[#2E1E5C] border-[#E6E6E6]'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Back & Continue Buttons */}
      <div className="pt-4 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 bg-white border border-[#E6E6E6] text-[#2E1E5C] text-sm font-semibold py-3 rounded-xl shadow-sm hover:bg-gray-50 transition-all"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-1/2 bg-[#F97769] text-white text-sm font-semibold py-3 rounded-xl shadow-md hover:bg-[#f86555] transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
