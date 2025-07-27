// src/components/BottomNavigator.tsx
import { NavLink } from 'react-router-dom';
import { Home, User } from 'lucide-react';

export default function BottomNavigator() {
  const iconClass = "w-5 h-5 mb-1";

  return (
    <div className="w-full bg-white py-2 flex justify-around">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? 'text-[#F97769]' : 'text-gray-500'}`
        }
      >
        <Home className={iconClass} />
        Home
      </NavLink>

      <NavLink
        to="/profiles"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? 'text-[#F97769]' : 'text-gray-500'}`
        }
      >
        <User className={iconClass} />
        Profiles
      </NavLink>
    </div>
  );
}
