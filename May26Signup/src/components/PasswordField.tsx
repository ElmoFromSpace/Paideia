import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
export const PasswordField = ({
  name,
  value,
  onChange,
  placeholder,
  required = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return <div className="mb-4 relative">
      <input type={showPassword ? 'text' : 'password'} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1c3663]" />
      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
        {showPassword ? <EyeOffIcon size={20} className="text-gray-500" /> : <EyeIcon size={20} className="text-gray-500" />}
      </button>
    </div>;
};