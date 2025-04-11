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
      className={`mb-3 p-3 rounded-lg border-2 transition-all cursor-pointer hover:border-blue-300 palette-selector`}
      style={{
        backgroundColor: active ? background.hover : background.card,
        borderColor: active ? primary : border,
      }}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium" style={{ color: text.primary }}>{title}</h3>
        {active && (
          <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: primary }}>
            Selected
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <div className="w-10 h-6 rounded" style={{ backgroundColor: primary }}></div>
        <div className="w-10 h-6 rounded" style={{ backgroundColor: secondary }}></div>
        <div className="w-10 h-6 rounded" style={{ backgroundColor: tertiary }}></div>
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
      <div className="p-6 slide-container">
        <style dangerouslySetInnerHTML={{__html: `
          .slide-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255, 255, 255, 0.1)'/%3E%3C/svg%3E");
            background-size: 20px 20px;
          }
        `}} />
        
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-4" style={{ color: text.primary }}>
            Choose a color palette for your Taskbase slide:
          </h1>
          <div className="space-y-4 mt-8">
            {palettes.map((palette, index) => (
              <div key={index}>
                <ColorOption
                  title={palette.title}
                  colors={palette.colors}
                  active={selectedPaletteIndex === index}
                  onClick={() => setSelectedPaletteIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Slide Navigation */}
        <div className="mb-4 flex space-x-4">
          <button 
            className="px-4 py-2 rounded transition-colors"
            style={{
              backgroundColor: currentSlide === 0 ? primary : background.main,
              color: currentSlide === 0 ? 'white' : text.primary,
            }}
            onClick={() => setCurrentSlide(0)}
          >
            Slide 1: Title
          </button>
          <button 
            className="px-4 py-2 rounded transition-colors"
            style={{
              backgroundColor: currentSlide === 1 ? primary : background.main,
              color: currentSlide === 1 ? 'white' : text.primary,
            }}
            onClick={() => setCurrentSlide(1)}
          >
            Slide 2: Growth Metrics
          </button>
          <button 
            className="px-4 py-2 rounded transition-colors"
            style={{
              backgroundColor: currentSlide === 2 ? primary : background.main,
              color: currentSlide === 2 ? 'white' : text.primary,
            }}
            onClick={() => setCurrentSlide(2)}
          >
            Slide 3: Q&A
          </button>
          <button 
            className="px-4 py-2 rounded transition-colors"
            style={{
              backgroundColor: currentSlide === 3 ? primary : background.main,
              color: currentSlide === 3 ? 'white' : text.primary,
            }}
            onClick={() => setCurrentSlide(3)}
          >
            Slide 4: Learning Analytics
          </button>
        </div>
        
        {/* The Slides */}
        {currentSlide === 0 && (
          <div className="mb-6 border rounded-lg overflow-hidden shadow-lg" style={{ borderColor: border }}>
            <div 
              className="w-full aspect-video relative slide-bg"
              style={{ 
                background: `linear-gradient(135deg, ${primary} 0%, ${tertiary} 100%)`,
              }}
            >
              {/* Content Overlay with Dots */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between">
                {/* Top */}
                <div>
                  <div className="bg-white/20 text-white py-2 px-6 rounded-full inline-block mb-24">
                    <span className="font-medium">Pitch Deck 2025</span>
                  </div>
                </div>
                
                {/* Center */}
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
                
                {/* Bottom */}
                <div>
                  <span className="text-white/90">taskbase.com</span>
                </div>
                
                {/* UI Mockup */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 w-1/3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 mb-6">
                    <div className="rounded-lg bg-white overflow-hidden shadow-sm">
                      <div className="bg-gray-50 p-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 mr-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-xs text-gray-500">Find another exercise</div>
                        </div>
                        
                        <div className="mt-2">
                          <div className="flex items-center p-1.5 bg-white rounded shadow-sm mb-1">
                            <div className="w-5 h-5 flex items-center justify-center mr-2 text-gray-400">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                                <path d="M15 10L11 14L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="text-xs">Help a lost tourist</div>
                          </div>
                          
                          <div className="flex items-center p-1.5 rounded mb-1">
                            <div className="w-5 h-5 flex items-center justify-center mr-2 text-gray-400">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </div>
                            <div className="text-xs text-gray-500">Order your family's dinner</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3">
                        <div className="text-sm font-medium mb-3">Help a lost tourist</div>
                        <div className="text-xs text-gray-500 mb-4">
                          A tourist named Andy is visiting Zürich for the first time and needs help finding the Grossmünster from the Zürich main train station. Please direct him to this famous landmark.
                        </div>
                        
                        <div className="flex mb-3">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs mr-2">A</div>
                          <div className="bg-gray-100 rounded-lg p-2 text-xs max-w-xs">
                            Hello! Can you please help me find the famous landmark, the Grossmünster?
                          </div>
                        </div>
                        
                        <div className="flex mb-2 justify-end">
                          <div className="bg-blue-50 rounded-lg p-2 text-xs max-w-xs">
                            Yes! First, leave the station from the Bahnhofquai exit and walk...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12L15 15" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="border-b pb-3 mb-3">
                        <div className="flex justify-center mb-1">
                          <div className="text-xs font-medium">Begin</div>
                        </div>
                        <div className="flex justify-center">
                          <div className="border-l-2 border-dashed border-gray-300 h-8"></div>
                        </div>
                      </div>
                      
                      <div className="border-b pb-3 mb-3">
                        <div className="flex justify-center mb-1">
                          <div className="text-xs font-medium">Greeting</div>
                        </div>
                        <div className="flex justify-center">
                          <div className="border-l-2 border-dashed border-gray-300 h-8"></div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-center mb-1">
                          <div className="text-xs font-medium">Ask for specific objective</div>
                        </div>
                        <div className="flex justify-center">
                          <div className="border-l-2 border-dashed border-gray-300 h-8"></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <div className="px-2 py-1 rounded-md text-xs text-white" style={{ backgroundColor: primary }}>
                          Semantic feedback
                        </div>
                        <div className="px-2 py-1 rounded-md text-xs text-white" style={{ backgroundColor: primary }}>
                          Technical accuracy
                        </div>
                        <div className="px-2 py-1 rounded-md text-xs text-white" style={{ backgroundColor: primary }}>
                          Vocabulary practice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentSlide === 1 && (
          <div className="mb-6 border rounded-lg overflow-hidden shadow-lg" style={{ 
            borderColor: border,
            boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
          }}>
            <GrowthMetricsSlide selectedPalette={selectedPalette} />
          </div>
        )}
        
        {currentSlide === 2 && (
          <div className="mb-6 border rounded-lg overflow-hidden shadow-lg" style={{ 
            borderColor: border,
            boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
          }}>
            <QASlide selectedPalette={selectedPalette} />
          </div>
        )}

        {currentSlide === 3 && (
          <div className="mb-6 border rounded-lg overflow-hidden shadow-lg" style={{ 
            borderColor: border,
            boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
          }}>
            <LearningAnalyticsSlide selectedPalette={selectedPalette} />
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="text-sm" style={{ color: text.muted }}>
            Selected palette: {selectedPalette.title}
          </div>
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: primary }}></div>
            <div className="w-4 h-4 rounded" style={{ backgroundColor: secondary }}></div>
            <div className="w-4 h-4 rounded" style={{ backgroundColor: tertiary }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskbaseMockup;
