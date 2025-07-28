import { ChevronDown } from 'lucide-react';

export default function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="px-6 py-7 flex flex-col flex-grow justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tell us about your child</h3>

        <form className="space-y-4 text-sm">
          {/* Name */}
          <div>
            <label className="block font-semibold text-[#2E1E5C] mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#eee] rounded-xl px-4 py-3 outline-none text-[#2E1E5C] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#F97769]"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold text-[#2E1E5C] mb-2 text-sm">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full border border-[#E6E6E6] rounded-xl px-4 py-3 pr-12 text-[#2E1E5C] text-sm shadow-sm focus:ring-2 focus:ring-[#F97769] appearance-none bg-white"
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
            <label className="block font-semibold text-[#2E1E5C] mb-2 text-sm">
              Age <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full border border-[#E6E6E6] rounded-xl px-4 py-3 pr-12 text-[#2E1E5C] text-sm shadow-sm focus:ring-2 focus:ring-[#F97769] appearance-none bg-white"
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
          <div className="flex gap-4 mt-3">
            {/* Height */}
            <div className="flex-1">
              <label className="block font-semibold text-[#2E1E5C] mb-2">
                Height (cm) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="120cm"
                className="w-full border border-[#eee] rounded-xl px-4 py-3 outline-none text-[#2E1E5C] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#F97769]"
              />
            </div>

            {/* Weight */}
            <div className="flex-1">
              <label className="block font-semibold text-[#2E1E5C] mb-2">
                Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="60kg"
                className="w-full border border-[#eee] rounded-xl px-4 py-3 outline-none text-[#2E1E5C] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#F97769]"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Continue Button */}
      <div className="pt-6">
        <button
          type="button"
          onClick={onNext}
          className="w-full bg-[#F97769] text-white text-sm font-semibold py-3 rounded-xl shadow-md hover:bg-[#f86555] transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
