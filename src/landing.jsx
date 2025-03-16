import React from 'react'
import Register from './pages/register'
import Login from './pages/login'

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to CricReelz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Register />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing