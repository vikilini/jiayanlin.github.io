import React from 'react';

const NeuralTranslationAnimation = () => {
  return (
    <div className="w-full max-w-xl mx-auto h-64 flex items-center justify-center relative p-4 bg-slate-50 rounded-lg">
      {/* Human Side */}
      <div className="relative">
        {/* Brain Activity Representation */}
        <div className="absolute -top-8 -left-8 w-32 h-32">
          {/* Neural Nodes */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-stone-600 rounded-full animate-[ping_2s_infinite]" />
          <div className="absolute top-8 left-12 w-2 h-2 bg-stone-600 rounded-full animate-[ping_1.5s_infinite]" />
          <div className="absolute top-16 left-4 w-2 h-2 bg-stone-600 rounded-full animate-[ping_2.5s_infinite]" />
          
          {/* Neural Connections */}
          <div className="absolute top-3 left-3 w-12 h-0.5 bg-stone-400 rotate-45 opacity-30" />
          <div className="absolute top-9 left-5 w-12 h-0.5 bg-stone-400 -rotate-12 opacity-30" />
        </div>
        
        {/* Human Element */}
        <div className="w-16 h-16 bg-stone-600 rounded-full animate-[pulse_2s_infinite] relative">
          {/* Thought Waves */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-stone-400 rounded-full opacity-0 animate-[ping_3s_infinite]" />
        </div>
      </div>

      {/* Connection Bridge */}
      <div className="mx-8 relative">
        <div className="w-32 h-0.5 bg-gradient-to-r from-stone-600 to-green-700 opacity-70">
          {/* Signal Pulses */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-[bounce_1s_infinite] opacity-50" />
        </div>
      </div>

      {/* Tech Side */}
      <div className="relative">
        {/* Digital Processing Representation */}
        <div className="absolute -top-8 -right-8 w-32 h-32">
          {/* Binary Nodes */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-green-700 animate-[ping_1.8s_infinite]" />
          <div className="absolute top-12 right-12 w-2 h-2 bg-green-700 animate-[ping_2.2s_infinite]" />
          <div className="absolute top-16 right-6 w-2 h-2 bg-green-700 animate-[ping_1.6s_infinite]" />
          
          {/* Digital Connections */}
          <div className="absolute top-5 right-5 w-12 h-0.5 bg-green-600 -rotate-45 opacity-30" />
          <div className="absolute top-13 right-7 w-12 h-0.5 bg-green-600 rotate-12 opacity-30" />
        </div>

        {/* Tech Element */}
        <div className="w-16 h-16 bg-green-700 animate-[spin_4s_linear_infinite]">
          {/* Processing Pulses */}
          <div className="absolute inset-0 bg-green-500 opacity-30 animate-[pulse_2s_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default NeuralTranslationAnimation;