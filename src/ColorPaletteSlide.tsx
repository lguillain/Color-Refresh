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
          
          {/* Core Colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Primary Colors</h3>
              <div className="space-y-2">
                <ColorSwatch name="Primary" color={colors.primary} />
                <ColorSwatch name="Secondary" color={colors.secondary} />
                <ColorSwatch name="Tertiary" color={colors.tertiary} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Background</h3>
              <div className="space-y-2">
                <ColorSwatch name="Main" color={colors.background.main} />
                <ColorSwatch name="Light" color={colors.background.light} />
                <ColorSwatch name="Card" color={colors.background.card} />
                <ColorSwatch name="Hover" color={colors.background.hover} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Text</h3>
              <div className="space-y-2">
                <ColorSwatch name="Primary" color={colors.text.primary} />
                <ColorSwatch name="Secondary" color={colors.text.secondary} />
                <ColorSwatch name="Muted" color={colors.text.muted} />
              </div>
            </div>
          </div>
          
          {/* Status Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Status Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="Success" color={colors.status.success} />
              <ColorSwatch name="Error" color={colors.status.error} />
              <ColorSwatch name="Warning" color={colors.status.warning} />
              <ColorSwatch name="Info" color={colors.status.info} />
            </div>
          </div>
          
          {/* Graph Colors */}
          {colors.graph && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Sequential Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.graph.sequential.map((color, index) => (
                    <ColorSwatch key={index} name={`Step ${index + 1}`} color={color} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Categorical Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.graph.categorical.map((color, index) => (
                    <ColorSwatch key={index} name={`Category ${index + 1}`} color={color} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Diverging Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.graph.diverging.map((color, index) => (
                    <ColorSwatch key={index} name={`Diverging ${index + 1}`} color={color} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Accent Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.graph.accent.map((color, index) => (
                    <ColorSwatch key={index} name={`Accent ${index + 1}`} color={color} />
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

const ColorSwatch: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  return (
    <div className="flex items-center space-x-3">
      <div
        className="w-12 h-12 rounded-md border border-gray-200"
        style={{ backgroundColor: color }}
      />
      <div>
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <div className="text-xs text-gray-500">{color}</div>
      </div>
    </div>
  );
};

export default ColorPaletteSlide; 