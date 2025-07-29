import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Classroom from '../assets/Screenshot (8).png';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import Icon from '../assets/icon(orange).png'

function Home() {
  const navigate = useNavigate();

  return (
      <motion.div
      className="flex flex-col h-full w-full font-figtree"
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ duration: 0.4 }}
    >
    <div className="flex flex-col h-full w-full font-figtree">
      {/* Gradient Top Half */}
      <div className="relative h-[450px] bg-gradient-to-b from-[#F97769] via-[#F97769] to-[#fff]">
        {/* Logo + Avatars */}
        <div className="flex justify-between items-center px-6 pt-10">
          <img src={Logo} alt="Kapes Logo" className="w-28 h-auto" />
          <div className="flex -space-x-2">
            <img src={Classroom} className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={Classroom} className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={Classroom} className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
        </div>

        {/* Heading Text */}
        <div className="px-6 pt-26">
          <h2 className="text-white text-3xl font-semibold opacity-60">Hello there.</h2>
          <h2 className="text-white text-4xl font-bold">How can we help?</h2>
        </div>

        {/* Profile Cards */}
        <div className="px-6 pt-6 space-y-4">
          {/* Recent Profile Box */}
          <div
            onClick={() => navigate('/recommendation')}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 border border-[#F97769] cursor-pointer hover:shadow-lg transition"
          >
            <p className="text-sm font-semibold text-gray-800">Recent Profile</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 text-red-600 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  E
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">Emily Rose</p>
                  <p className="text-xs text-gray-500">Kapes · 1h ago</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#F97769]" />
            </div>
          </div>

          {/* Add New Profile Box */}
          <div
            onClick={() => navigate('/profiles')}
            className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between cursor-pointer hover:shadow-lg transition"
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">Add New Profile</p>
              <p className="text-xs text-gray-500">Create a Profile to Move Forward</p>
            </div>
          <img src={Icon} alt="Kapes Logo" />
          </div>
        </div>

        {/* Image Sections */}
        <div className="px-6 pt-5">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-3">
            <img src={Classroom} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
             <div className="px-2 py-5">
      <p className="text-sm font-bold text-black mb-1">
        Get 50% OFF on all school uniforms.
      </p>
      <p className="text-xs text-gray-600 leading-snug">
        Perfect fit. Premium quality. Unbeatable price. <br />
        Let us know your child’s age and size, and we’ll take care of the rest!
      </p>
    </div>
          </div>
        </div>

        <div className="px-6 pt-5 pb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-3">
            <img src={Classroom} alt="Preview" className="w-full h-40 object-cover rounded-lg" />

             <div className="px-2 py-5">
      <p className="text-sm font-bold text-black mb-1">
        Get 50% OFF on all school uniforms.
      </p>
      <p className="text-xs text-gray-600 leading-snug">
        Perfect fit. Premium quality. Unbeatable price. <br />
        Let us know your child’s age and size, and we’ll take care of the rest!
      </p>
    </div>
          </div>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="flex-1 bg-white pb" />
    </div>
    </motion.div>
  );
}

export default Home;
