import { ChevronDown } from 'lucide-react';

export default function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col h-full font-figtree px-5 pt-6 pb-4">
      {/* Make this section scrollable only on small screens */}
<div className="flex-1 overflow-y-auto sm:overflow-visible scrollbar-hide">
        <h3 className="text-base font-semibold text-gray-800 mb-3">Tell us about your child</h3>

        <form className="space-y-4 text-sm pr-1">
          {/* Name */}
          <div>
            <label className="block font-medium text-[#2E1E5C] mb-1.5 text-sm">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#eee] rounded-xl px-4 py-2.5 text-sm outline-none text-[#2E1E5C] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#F97769]"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium text-[#2E1E5C] mb-1.5 text-sm">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full border border-[#E6E6E6] rounded-xl px-4 py-2.5 pr-12 text-[#2E1E5C] text-sm shadow-sm focus:ring-2 focus:ring-[#F97769] appearance-none bg-white"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2 pointer-events-none">
                <div className="w-px h-5 bg-[#E6E6E6]" />
                <ChevronDown className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block font-medium text-[#2E1E5C] mb-1.5 text-sm">
              Age <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full border border-[#E6E6E6] rounded-xl px-4 py-2.5 pr-12 text-[#2E1E5C] text-sm shadow-sm focus:ring-2 focus:ring-[#F97769] appearance-none bg-white"
              >
                <option value="">Select Age</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2 pointer-events-none">
                <div className="w-px h-5 bg-[#E6E6E6]" />
                <ChevronDown className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Height & Weight */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium text-[#2E1E5C] mb-1.5 text-sm">
                Height (cm) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="120cm"
                className="w-full border border-[#eee] rounded-xl px-4 py-2.5 text-sm outline-none text-[#2E1E5C] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#F97769]"
              />
            </div>

            <div className="flex-1">
              <label className="block font-medium text-[#2E1E5C] mb-1.5 text-sm">
                Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="60kg"
                className="w-full border border-[#eee] rounded-xl px-4 py-2.5 text-sm outline-none text-[#2E1E5C] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#F97769]"
              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-6 pb-2">
            <button
              type="button"
              onClick={onNext}
              className="w-full bg-[#F97769] text-white text-sm font-semibold py-3 rounded-xl shadow-md hover:bg-[#f86555] transition-all"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
