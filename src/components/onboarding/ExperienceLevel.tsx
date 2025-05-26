import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
export const ExperienceLevel = ({
  onSelect
}) => {
  return <div className="w-full max-w-4xl mx-auto p-8 bg-[#f1eedf] rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        What's Your Civics Experience?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <button onClick={() => onSelect('new')} className="flex flex-col items-center p-8 border rounded-lg hover:bg-white transition-colors">
          <BookOpen size={48} className="text-[#1c3663] mb-4" />
          <h3 className="font-semibold text-xl mb-2">
            New to civics education
          </h3>
          <p className="text-gray-600 text-center">
            Start with the fundamentals
          </p>
        </button>
        <button onClick={() => onSelect('familiar')} className="flex flex-col items-center p-8 border rounded-lg hover:bg-white transition-colors">
          <GraduationCap size={48} className="text-[#1c3663] mb-4" />
          <h3 className="font-semibold text-xl mb-2">
            Already familiar with civics
          </h3>
          <p className="text-gray-600 text-center">
            Jump into advanced content
          </p>
        </button>
      </div>
    </div>;
};