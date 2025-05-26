import React from 'react';
import { GraduationCapIcon, UsersIcon, BookOpenIcon, UserIcon } from 'lucide-react';
export const UserTypeSelection = ({
  onSelect
}) => {
  return <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-6">I am a:</h3>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <button onClick={() => onSelect('soloStudent')} className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-100">
          <GraduationCapIcon size={32} className="mb-2" />
          <span>Solo Student</span>
        </button>
        <button onClick={() => onSelect('schoolStudent')} className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-100">
          <UsersIcon size={32} className="mb-2" />
          <span>School Student</span>
        </button>
        <button onClick={() => onSelect('teacher')} className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-100">
          <BookOpenIcon size={32} className="mb-2" />
          <span>Teacher</span>
        </button>
        <button onClick={() => onSelect('parent')} className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-100">
          <UserIcon size={32} className="mb-2" />
          <span>Parent</span>
        </button>
      </div>
    </div>;
};