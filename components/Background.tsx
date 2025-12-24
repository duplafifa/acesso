
import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Abstract Neon Glows mimicking the logo's shield and colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-red-600/10 rounded-full blur-[100px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      {/* Large Blurred Watermark of the Brand Shield Shape */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <div className="w-[800px] h-[800px] border-[40px] border-orange-500/50 rounded-[150px] rotate-[15deg] blur-3xl"></div>
      </div>

      {/* Secondary accent for the logo's 'tips' green */}
      <div className="absolute bottom-[20%] left-[15%] w-1 h-1 bg-green-400 rounded-full shadow-[0_0_20px_5px_rgba(74,222,128,0.5)]"></div>
      <div className="absolute top-[40%] right-[25%] w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_20px_5px_rgba(250,204,21,0.5)]"></div>
    </div>
  );
};
