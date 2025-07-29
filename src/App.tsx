import { Routes, Route, useLocation } from 'react-router-dom';
import BottomNavigator from './components/BottomNavigator';
import Home from './pages/Home';
import AddProfile from './pages/AddProfile';
import SmartSizeFinder from './pages/SmartSizeFinder';
import Recommendation from './pages/Recommendation';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex justify-center items-start min-h-screen bg-white px-2 mt-2">
      <div className="w-full max-w-[400px] h-[85vh] rounded-3xl shadow-xl flex flex-col overflow-hidden">
        
        {/* Scrollable content section */}
        <div className="h-full flex-1 overflow-y-auto scrollbar-none">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<AddProfile />} />
              <Route path="/finder" element={<SmartSizeFinder />} />
              <Route path="/recommendation" element={<Recommendation />} />


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
