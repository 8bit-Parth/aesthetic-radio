import React from 'react';

interface AudioVisualizerProps {
  accentColor?: string;
  isCompact?: boolean;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  accentColor = '#e07a5f',
  isCompact = false
}) => {
  return (
    <div className={`flex items-end space-x-1 ${isCompact ? 'h-4' : 'h-6'}`}>
      <div
        className="w-1 bg-current rounded-t animate-eq-1"
        style={{ color: accentColor }}
      />
      <div
        className="w-1 bg-current rounded-t animate-eq-2"
        style={{ color: accentColor }}
      />
      <div
        className="w-1 bg-current rounded-t animate-eq-3"
        style={{ color: accentColor }}
      />
      <div
        className="w-1 bg-current rounded-t animate-eq-4"
        style={{ color: accentColor }}
      />
    </div>
  );
};
