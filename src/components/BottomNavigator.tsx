import { NavLink, useLocation } from 'react-router-dom';
import { Home, User } from 'lucide-react';

export default function BottomNavigator() {
  const iconClass = "w-5 h-5 mb-1";
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isProfile = location.pathname.startsWith("/profiles") || location.pathname.startsWith("/finder")  || location.pathname.startsWith("/recommendation");

  return (
    <div className="w-full bg-white py-2 flex justify-around">
      {/* Home */}
      <NavLink
        to="/"
        className={`flex flex-col items-center text-xs ${isHome ? 'text-[#F97769]' : 'text-gray-500'}`}
      >
        <Home className={iconClass} />
        Home
      </NavLink>

      {/* Profiles */}
      <NavLink
        to="/profiles"
        className={`flex flex-col items-center text-xs ${isProfile ? 'text-[#F97769]' : 'text-gray-500'}`}
      >
        <User className={iconClass} />
        Profiles
      </NavLink>
    </div>
  );
}
