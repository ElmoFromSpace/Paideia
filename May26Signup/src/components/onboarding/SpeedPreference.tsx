import React from 'react';
import { Zap, Clock, Target, Flame } from 'lucide-react';
const SPEED_OPTIONS = [{
  id: 'casual',
  title: 'Casual',
  description: 'Learn at a relaxed pace',
  icon: Clock
}, {
  id: 'regular',
  title: 'Regular',
  description: 'Steady and consistent progress',
  icon: Target
}, {
  id: 'serious',
  title: 'Serious',
  description: 'Dedicated daily learning',
  icon: Zap
}, {
  id: 'intense',
  title: 'Intense',
  description: 'Accelerated learning path',
  icon: Flame
}];
export const SpeedPreference = ({
  onSelect
}) => {
  return <div className="w-full max-w-4xl mx-auto p-8 bg-[#f1eedf] rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        Choose Your Learning Speed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SPEED_OPTIONS.map(({
        id,
        title,
        description,
        icon: Icon
      }) => <button key={id} onClick={() => onSelect(id)} className="flex items-center p-6 border rounded-lg hover:bg-white transition-colors">
            <Icon size={24} className="text-[#1c3663] mr-4" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </button>)}
      </div>
    </div>;
};