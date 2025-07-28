import { useState } from 'react';

export default function Step3({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const [selectedFit, setSelectedFit] = useState<string | null>(null);

  const fitOptions = [
    {
      label: 'Snug',
      description: 'Fitted, less room to grow.',
    },
    {
      label: 'Regular',
      description: 'Standard fit, some growing room.',
    },
    {
      label: 'Loose',
      description: 'Roomy, Maximum growing room.',
    },
  ];

  return (
    <div className="px-6 py-7 flex flex-col flex-grow justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">How do you prefer the fit?</h3>

        {/* Fit Preference */}
        <div className="mb-6">
          <label className="block font-semibold text-[#2E1E5C] mb-4 text-sm">
            Fit Preference <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            {fitOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setSelectedFit(option.label)}
                className={`rounded-xl border p-4 text-center transition-all focus:outline-none
                  ${
                    selectedFit === option.label
                      ? 'border-[#F97769] bg-white'
                      : 'border-[#E6E6E6] bg-white'
                  }`}
              >
                <div className="font-semibold mb-1 text-sm text-[#F97769]">{option.label}</div>
                <div className="text-[11px] text-[#2E1E5C] leading-tight font-normal">
                  {option.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
