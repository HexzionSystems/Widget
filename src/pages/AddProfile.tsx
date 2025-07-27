import { ChevronRight, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AddProfile() {
  const profiles = [
    { name: 'Emily Rose', size: '8-9' },
    { name: 'Emily Rose', size: '8-9' },
  ];

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
        <h2 className="text-lg font-semibold">Multiple Profiles</h2>
        <div className="w-6" />
      </div>

      {/* Scrollable Profile List + Button at bottom */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {/* Profiles */}
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-[#F2F2F2] pb-3 w-full"
          >
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-600 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {profile.name[0]}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-800">{profile.name}</p>
                <p className="text-xs text-gray-500">Recommended Size: {profile.size}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#F97769]" />
          </div>
        ))}

        {/* Add New Profile Button — inside scroll area, below profiles */}
        <div className="pt-35 flex justify-center">
  <button className="max-w-[200px] bg-[#F97769] text-white text-sm font-medium py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-md">
            Add New Profile
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
