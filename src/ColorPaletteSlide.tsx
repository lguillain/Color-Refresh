import React from 'react';
import { ExtendedColorPalette } from './palettes';

interface ColorPaletteSlideProps {
  selectedPalette: ExtendedColorPalette;
}

const ColorPaletteSlide: React.FC<ColorPaletteSlideProps> = ({ selectedPalette }) => {
  const { colors } = selectedPalette;
  
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Color System</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{selectedPalette.title}</h2>
          
          {/* Primary Colors with Applied Examples */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24" style={{ backgroundColor: colors.primary }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Primary</span>
                    <span className="text-xs text-gray-500">{colors.primary}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="px-3 py-1 rounded-md text-white text-sm" style={{ backgroundColor: colors.primary }}>Button</div>
                    <div className="px-3 py-1 rounded-md text-sm border" style={{ borderColor: colors.primary, color: colors.primary }}>Outline</div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24" style={{ backgroundColor: colors.secondary }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Secondary</span>
                    <span className="text-xs text-gray-500">{colors.secondary}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="px-3 py-1 rounded-md text-white text-sm" style={{ backgroundColor: colors.secondary }}>Button</div>
                    <div className="px-3 py-1 rounded-md text-sm border" style={{ borderColor: colors.secondary, color: colors.secondary }}>Outline</div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24" style={{ backgroundColor: colors.tertiary }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Tertiary</span>
                    <span className="text-xs text-gray-500">{colors.tertiary}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="px-3 py-1 rounded-md text-white text-sm" style={{ backgroundColor: colors.tertiary }}>Button</div>
                    <div className="px-3 py-1 rounded-md text-sm border" style={{ borderColor: colors.tertiary, color: colors.tertiary }}>Outline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Colors */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Background Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(colors.background).map(([key, value]) => (
                <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-20" style={{ backgroundColor: value }}></div>
                  <div className="p-3 bg-white">
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">{key}</span>
                      <span className="text-xs text-gray-500">{value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Text Colors with Typography Examples */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Text Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="mb-3 flex justify-between">
                  <span className="font-medium">Primary Text</span>
                  <span className="text-xs text-gray-500">{colors.text.primary}</span>
                </div>
                <h4 className="text-2xl font-bold mb-2" style={{ color: colors.text.primary }}>
                  Heading Text
                </h4>
                <p className="text-base" style={{ color: colors.text.primary }}>
                  This is how your primary text will look in paragraphs and content areas throughout the application.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="mb-3 flex justify-between">
                  <span className="font-medium">Secondary Text</span>
                  <span className="text-xs text-gray-500">{colors.text.secondary}</span>
                </div>
                <h4 className="text-xl font-medium mb-2" style={{ color: colors.text.secondary }}>
                  Subheading Text
                </h4>
                <p className="text-base" style={{ color: colors.text.secondary }}>
                  Secondary text is often used for subheadings, descriptions, and supporting information.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="mb-3 flex justify-between">
                  <span className="font-medium">Muted Text</span>
                  <span className="text-xs text-gray-500">{colors.text.muted}</span>
                </div>
                <h4 className="text-lg font-medium mb-2" style={{ color: colors.text.muted }}>
                  Muted Information
                </h4>
                <p className="text-sm" style={{ color: colors.text.muted }}>
                  Muted text is used for less important information, hints, and metadata that doesn't need to stand out.
                </p>
              </div>
            </div>
          </div>
          
          {/* Status Colors with Context */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Status Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-3" style={{ backgroundColor: colors.status.success }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Success</span>
                    <span className="text-xs text-gray-500">{colors.status.success}</span>
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2" style={{ backgroundColor: `${colors.status.success}20`, color: colors.status.success }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.status.success }}></div>
                    <span className="text-sm font-medium">Operation completed</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-3" style={{ backgroundColor: colors.status.error }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Error</span>
                    <span className="text-xs text-gray-500">{colors.status.error}</span>
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2" style={{ backgroundColor: `${colors.status.error}20`, color: colors.status.error }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.status.error }}></div>
                    <span className="text-sm font-medium">Connection failed</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-3" style={{ backgroundColor: colors.status.warning }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Warning</span>
                    <span className="text-xs text-gray-500">{colors.status.warning}</span>
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2" style={{ backgroundColor: `${colors.status.warning}20`, color: colors.status.warning }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.status.warning }}></div>
                    <span className="text-sm font-medium">Low disk space</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-3" style={{ backgroundColor: colors.status.info }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Info</span>
                    <span className="text-xs text-gray-500">{colors.status.info}</span>
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2" style={{ backgroundColor: `${colors.status.info}20`, color: colors.status.info }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.status.info }}></div>
                    <span className="text-sm font-medium">Updates available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Graph Colors */}
          {colors.graph && (
            <div className="space-y-10">
              {/* Sequential Colors with Gradient Example */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Sequential Colors</h3>
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <div className="h-12 w-full" style={{ 
                    background: `linear-gradient(to right, ${colors.graph.sequential.join(', ')})` 
                  }}></div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {colors.graph.sequential.map((color, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-md mb-1" style={{ backgroundColor: color }}></div>
                          <span className="text-xs text-gray-500 break-all">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Categorical Colors with Bar Example */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Categorical Colors</h3>
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <div className="p-4">
                    <div className="h-12 w-full flex">
                      {colors.graph.categorical.map((color, index) => (
                        <div 
                          key={index} 
                          className="h-full" 
                          style={{ 
                            backgroundColor: color,
                            width: `${100 / colors.graph.categorical.length}%`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-3">
                      {colors.graph.categorical.map((color, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-md" style={{ backgroundColor: color }}></div>
                          <div>
                            <div className="text-xs text-gray-900">Category {index + 1}</div>
                            <div className="text-xs text-gray-500">{color}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Diverging Colors with Example */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Diverging Colors</h3>
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <div className="h-12 w-full" style={{ 
                    background: `linear-gradient(to right, ${colors.graph.diverging.join(', ')})` 
                  }}></div>
                  <div className="p-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Negative</span>
                      <span>Neutral</span>
                      <span>Positive</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 mt-3">
                      {colors.graph.diverging.map((color, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-md mb-1" style={{ backgroundColor: color }}></div>
                          <span className="text-xs text-gray-500 break-all">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Accent Colors */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Accent Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {colors.graph.accent.map((color, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 overflow-hidden">
                      <div className="h-24" style={{ backgroundColor: color }}></div>
                      <div className="p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Accent {index + 1}</span>
                          <span className="text-xs text-gray-500">{color}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteSlide;