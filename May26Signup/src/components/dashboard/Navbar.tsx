import React from 'react';
import { UserCircle, GamepadIcon, ClipboardList } from 'lucide-react';
export const Navbar = ({
  activeTab,
  onTabChange
}) => {
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: UserCircle
  }, {
    id: 'games',
    label: 'Games',
    icon: GamepadIcon
  }, {
    id: 'quizzes',
    label: 'Quizzes',
    icon: ClipboardList
  }];
  return <nav className="bg-[#1c3663] text-white p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl">CivicsEd</div>
        <div className="flex space-x-6">
          {tabs.map(({
          id,
          label,
          icon: Icon
        }) => <button key={id} onClick={() => onTabChange(id)} className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors ${activeTab === id ? 'bg-white/20' : 'hover:bg-white/10'}`}>
              <Icon size={20} />
              <span>{label}</span>
            </button>)}
        </div>
      </div>
    </nav>;
};