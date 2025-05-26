import React, { useState } from 'react';
import { SignupPage } from './components/SignupPage';
export function App() {
  return <div className="flex w-full min-h-screen bg-[#e7e4d4] justify-center items-center p-4">
      <SignupPage />
    </div>;
}