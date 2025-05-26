import React from 'react';
export const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false
}) => {
  return <div className="mb-4">
      {label && <label className="block text-sm mb-1">{label}</label>}
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c3663]" />
    </div>;
};