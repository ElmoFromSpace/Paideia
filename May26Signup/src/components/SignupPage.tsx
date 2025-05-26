import React, { useState } from 'react';
import { FacebookIcon, LinkedinIcon } from 'lucide-react';
import { UserTypeSelection } from './UserTypeSelection';
import { SoloStudentForm } from './SoloStudentForm';
import { SchoolStudentForm } from './SchoolStudentForm';
import { TeacherForm } from './TeacherForm';
import { ParentForm } from './ParentForm';
import { SpeedPreference } from './onboarding/SpeedPreference';
import { ExperienceLevel } from './onboarding/ExperienceLevel';
import { Dashboard } from './dashboard/Dashboard';
export const SignupPage = () => {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    grade: '',
    classCode: '',
    className: ''
  });
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    speed: '',
    experience: ''
  });
  const handleUserTypeSelect = type => {
    setUserType(type);
    setStep(1);
  };
  const handleFormChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOnboardingStep(1); // Move to speed preference after signup
  };
  const handleSpeedSelect = speed => {
    setOnboardingData(prev => ({
      ...prev,
      speed
    }));
    setOnboardingStep(2);
  };
  const handleExperienceSelect = experience => {
    setOnboardingData(prev => ({
      ...prev,
      experience
    }));
    setOnboardingStep(3);
  };
  const handleBackToSelection = () => {
    setStep(0);
    setUserType('');
  };
  const renderForm = () => {
    if (step === 0) {
      return <UserTypeSelection onSelect={handleUserTypeSelect} />;
    }
    switch (userType) {
      case 'soloStudent':
        return <SoloStudentForm formData={formData} onChange={handleFormChange} onSubmit={handleSubmit} onBack={handleBackToSelection} />;
      case 'schoolStudent':
        return <SchoolStudentForm formData={formData} onChange={handleFormChange} onSubmit={handleSubmit} onBack={handleBackToSelection} />;
      case 'teacher':
        return <TeacherForm formData={formData} onChange={handleFormChange} onSubmit={handleSubmit} onBack={handleBackToSelection} />;
      case 'parent':
        return <ParentForm formData={formData} onChange={handleFormChange} onSubmit={handleSubmit} onBack={handleBackToSelection} />;
      default:
        return null;
    }
  };
  // Show dashboard if onboarding is complete
  if (onboardingStep === 3) {
    return <Dashboard />;
  }
  // Show onboarding steps after signup
  if (onboardingStep > 0) {
    return onboardingStep === 1 ? <SpeedPreference onSelect={handleSpeedSelect} /> : <ExperienceLevel onSelect={handleExperienceSelect} />;
  }
  return <div className="flex w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">
      {/* Left Panel */}
      <div className="w-2/5 bg-[#1c3663] text-white p-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Hello!</h1>
        <p className="text-center mb-8">
          Enter your personal details and start journey with us
        </p>
        <button onClick={() => {}} className="border-2 border-white rounded-full px-8 py-2 hover:bg-white hover:text-[#1c3663] transition-colors">
          SIGN IN
        </button>
      </div>
      {/* Right Panel */}
      <div className="w-3/5 bg-[#f1eedf] p-12 flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        {step === 0 ? <>
            <div className="flex justify-center space-x-4 mb-6">
              <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                <FacebookIcon size={16} />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                G+
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                <LinkedinIcon size={16} />
              </button>
            </div>
            <p className="text-center text-sm mb-6">
              or use your email for registration
            </p>
          </> : null}
        {renderForm()}
      </div>
    </div>;
};