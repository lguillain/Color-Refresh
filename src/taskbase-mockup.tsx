import React, { useState } from 'react';
import { palettes, ExtendedColorPalette } from './palettes';
import GrowthMetricsSlide from './GrowthMetricsSlide';
import QASlide from './QASlide';
import LearningAnalyticsSlide from './LearningAnalyticsSlide';

interface ColorOptionProps {
  title: string;
  colors: ExtendedColorPalette['colors'];
  active: boolean;
  onClick: () => void;
}

const ColorOption = ({ title, colors, active, onClick }: ColorOptionProps) => {
  const { primary, secondary, tertiary, background, text, border } = colors;
  
  return (
    <div 
      className="mb-3 p-3 rounded-lg border-2 transition-all cursor-pointer hover:border-blue-300 palette-selector"
      style={{
        backgroundColor: active ? background.hover : background.card,
        borderColor: active ? primary : border,
      }}
      onClick={onClick}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: primary }}></div>
          <div className="w-6 h-6 rounded" style={{ backgroundColor: secondary }}></div>
          <div className="w-6 h-6 rounded" style={{ backgroundColor: tertiary }}></div>
        </div>
        <div className="text-xs" style={{ color: text.primary }}>
          {title}
        </div>
      </div>
    </div>
  );
};

const TaskbaseMockup = () => {
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectedPalette = palettes[selectedPaletteIndex];
  const { primary, secondary, tertiary, background, text, border, shadow } = selectedPalette.colors;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: background.main }}>
      <div className="flex">
        {/* Color Palette Sidebar */}
        <div className="w-32 h-screen p-4 flex flex-col" style={{ 
          backgroundColor: background.card,
          borderRight: `1px solid ${border}`
        }}>
          <div className="text-sm font-medium mb-4 text-center" style={{ color: text.primary }}>
            Palettes
          </div>
          <div className="space-y-3">
            {palettes.map((palette, index) => (
              <ColorOption
                key={index}
                title={palette.title}
                colors={palette.colors}
                active={selectedPaletteIndex === index}
                onClick={() => setSelectedPaletteIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Slide Navigation */}
          <div className="mb-4 flex space-x-2">
            {['Cover', 'Growth Metrics', 'Q&A', 'Learning Analytics'].map((title, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded transition-colors text-sm"
                style={{
                  backgroundColor: currentSlide === index ? primary : background.hover,
                  color: currentSlide === index ? 'white' : text.primary,
                }}
                onClick={() => setCurrentSlide(index)}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Slide Content */}
          <div className="border rounded-lg overflow-hidden shadow-lg" style={{ 
            borderColor: border,
            boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
          }}>
            {currentSlide === 0 && (
              <div className="aspect-video relative slide-bg"
                style={{ 
                  background: `linear-gradient(135deg, ${primary} 0%, ${tertiary} 100%)`,
                }}
              >
                {/* Cover slide content */}
                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div>
                    <div className="bg-white/20 text-white py-2 px-6 rounded-full inline-block mb-24">
                      <span className="font-medium">Pitch Deck 2025</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-white text-6xl font-bold mb-4">Taskbase</h1>
                    <div className="flex items-center space-x-4">
                      <div className="w-1 h-20 bg-white"></div>
                      <div>
                        <h2 className="text-4xl font-light text-white/90">
                          KI Tutor Builder<br />
                          für Lernexperten
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/90">taskbase.com</span>
                  </div>
                </div>
              </div>
            )}
            {currentSlide === 1 && <GrowthMetricsSlide selectedPalette={selectedPalette} />}
            {currentSlide === 2 && <QASlide selectedPalette={selectedPalette} />}
            {currentSlide === 3 && <LearningAnalyticsSlide selectedPalette={selectedPalette} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskbaseMockup;
