import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL'];

  return (
    <div className="px-6 py-7 flex flex-col flex-grow justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-6">What size do they currently wear?</h3>

        {/* Brand Select Field */}
        <div className="mb-6">
          <label className="block font-semibold text-[#2E1E5C] mb-2 text-sm">
            Brand <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              className="w-full rounded-2xl border border-[#E6E6E6] bg-white text-[#2E1E5C] text-sm px-4 py-3 pr-12 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F97769]"
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

        {/* Current Size Selection */}
        <div className="mb-7">
          <label className="block font-semibold text-[#2E1E5C] mb-3 text-sm">
            Current Size <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-x-4 gap-y-5">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-4 rounded-xl border text-sm font-medium transition-all
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
            {/* Back & Continue Buttons */}

        <div className="flex gap-4">
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


    </div>
  );
}
