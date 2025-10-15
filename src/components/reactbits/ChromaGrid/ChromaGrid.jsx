import React from 'react';
import './ChromaGrid.css';

const ChromaGrid = ({ 
  children, 
  className = "", 
  cellSize = 20,
  colors = ['#ff0080', '#00ff80', '#8000ff', '#ff8000'],
  ...props 
}) => {
  return (
    <div 
      className={`chroma-grid ${className}`}
      style={{
        '--cell-size': `${cellSize}px`,
        '--color-1': colors[0] || '#ff0080',
        '--color-2': colors[1] || '#00ff80', 
        '--color-3': colors[2] || '#8000ff',
        '--color-4': colors[3] || '#ff8000',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ChromaGrid;