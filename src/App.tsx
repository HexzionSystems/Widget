import { Routes, Route, useLocation } from 'react-router-dom';
import BottomNavigator from './components/BottomNavigator';
import Home from './pages/Home';
import AddProfile from './pages/AddProfile';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-2">
      <div className="w-full max-w-[400px] h-[90vh] rounded-3xl shadow-xl flex flex-col overflow-hidden">
        
        {/* Scrollable content section */}
        <div className="h-full flex-1 overflow-y-auto scrollbar-none">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<AddProfile />} />
          </Routes>
        </div>

        {/* Fixed Bottom Navigation */}
        <div className="h-[60px]">
          <BottomNavigator />
        </div>
      </div>
    </div>
  );
}
