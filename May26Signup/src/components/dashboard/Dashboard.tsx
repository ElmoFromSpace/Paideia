import React, { useState } from 'react';
import { Navbar } from './Navbar';
export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  return <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'profile' && <h2 className="text-2xl font-bold">Profile</h2>}
          {activeTab === 'games' && <h2 className="text-2xl font-bold">Games</h2>}
          {activeTab === 'quizzes' && <h2 className="text-2xl font-bold">Quizzes</h2>}
        </div>
      </main>
    </div>;
};