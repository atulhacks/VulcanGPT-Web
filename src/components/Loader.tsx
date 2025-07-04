import React from 'react';
import { Cpu } from 'lucide-react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <Cpu className="w-16 h-16 text-red-500 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto">
            <div className="w-full h-full border-2 border-red-500/30 rounded-full animate-spin border-t-red-500"></div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-red-500">Vulcan</span>
          <span className="text-white">GPT</span>
        </h1>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
        </div>
        
        <p className="text-gray-400 mt-4 animate-pulse">
          Initializing AI Framework...
        </p>
      </div>
    </div>
  );
};