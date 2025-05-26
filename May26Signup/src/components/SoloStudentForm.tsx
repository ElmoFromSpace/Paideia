import React from 'react';
import { FormField } from './FormField';
import { PasswordField } from './PasswordField';
import { ArrowLeftIcon } from 'lucide-react';
export const SoloStudentForm = ({
  formData,
  onChange,
  onSubmit,
  onBack
}) => {
  const grades = ['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  return <form onSubmit={onSubmit} className="w-full">
      <div className="flex items-center mb-4">
        <button type="button" onClick={onBack} className="mr-2">
          <ArrowLeftIcon size={16} />
        </button>
        <h3 className="text-xl font-semibold">Solo Student Signup</h3>
      </div>
      <FormField name="username" value={formData.username} onChange={onChange} placeholder="Username" required />
      <FormField name="email" type="email" value={formData.email} onChange={onChange} placeholder="Email" required />
      <div className="mb-4">
        <select name="grade" value={formData.grade} onChange={onChange} required className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c3663]">
          <option value="">Select Grade</option>
          {grades.map(grade => <option key={grade} value={grade}>
              {grade}
            </option>)}
        </select>
      </div>
      <PasswordField name="password" value={formData.password} onChange={onChange} placeholder="Password" required />
      <PasswordField name="confirmPassword" value={formData.confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
      <div className="mt-6 flex justify-center">
        <button type="submit" className="bg-[#1c3663] text-white py-2 px-10 rounded-full hover:bg-[#2a4a85] transition-colors">
          SIGN UP
        </button>
      </div>
    </form>;
};