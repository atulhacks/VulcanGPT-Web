import React, { useState, useEffect } from 'react';

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'user' | 'ai';
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { text: '$ ./run.sh', type: 'command' },
  { text: 'Creating virtual environment...', type: 'output', delay: 500 },
  { text: 'Installing dependencies...', type: 'output', delay: 800 },
  { text: 'Starting Vulcan GPT...', type: 'output', delay: 1000 },
  { text: 'Welcome to Vulcan GPT!', type: 'ai', delay: 1500 },
  { text: 'You: What can you do?', type: 'user', delay: 2000 },
  { 
    text: 'Vulcan GPT: I\'m an advanced AI assistant designed to provide unrestricted, powerful conversations. I can help with coding, creative writing, web searches, and much more. I support both cloud-based and local AI models. How can I assist you today?', 
    type: 'ai', 
    delay: 2500 
  },
];

export const TerminalWindow: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleLines < terminalLines.length) {
        setVisibleLines(prev => prev + 1);
      }
    }, terminalLines[visibleLines]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'user':
        return 'text-blue-400';
      case 'ai':
        return 'text-red-400';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-400 text-sm">Vulcan GPT Terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-80 overflow-y-auto font-mono text-sm">
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className={`mb-2 ${getLineColor(line.type)}`}>
            {line.text}
          </div>
        ))}
        {showCursor && (
          <span className="inline-block w-2 h-5 bg-white animate-pulse"></span>
        )}
      </div>
    </div>
  );
};