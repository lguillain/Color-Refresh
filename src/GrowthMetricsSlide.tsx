import React from 'react';
import { ExtendedColorPalette } from './palettes';

interface GrowthMetricsSlideProps {
  selectedPalette: ExtendedColorPalette;
}

const GrowthMetricsSlide = ({ selectedPalette }: GrowthMetricsSlideProps) => {
  const { primary, secondary, tertiary, background, text, status, border, shadow } = selectedPalette.colors;
  
  return (
    <div className="p-8 max-w-6xl mx-auto rounded-lg shadow-lg pattern-bg" 
      style={{ 
        backgroundColor: background.card,
        boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
      }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: text.primary }}>
          Momentum: Taskbase Growth Pattern
        </h1>
        <div className="text-xl font-semibold" style={{ color: text.secondary }}>Taskbase</div>
      </div>
      
      {/* YoY ARR Growth Section */}
      <div className="p-6 rounded-lg mb-8" style={{ backgroundColor: background.main }}>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: text.primary }}>YoY ARR Growth</h2>
        <div className="flex justify-between items-center space-x-4">
          {[
            { year: '2023', growth: '75%', color: primary },
            { year: '2024', growth: '90%', color: primary },
            { year: '2025', growth: '130%', color: secondary },
            { year: '2026', growth: '200%', color: secondary },
            { year: '2027', growth: '200%', color: secondary }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center mb-2 text-white font-bold text-xl growth-metric-circle"
                style={{ 
                  backgroundColor: item.color,
                  boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
                }}
              >
                {item.growth}
              </div>
              <div style={{ color: text.muted }}>{item.year}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Weighted Pipeline Section */}
        <div className="p-6 rounded-lg" style={{ 
          backgroundColor: background.light,
          border: `1px solid ${border}`
        }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: text.primary }}>Weighted Pipeline</h2>
          <div className="relative h-64">
            {[
              { quarter: 'Q4/23', label: '? for Q1/24', value: 0, color: secondary },
              { quarter: 'Q1/24', label: '? for Q2/24', value: 0, color: secondary },
              { quarter: 'Q2/24', label: '$220k for Q3/24', value: 220, color: secondary },
              { quarter: 'Q3/24', label: '$340k for Q4/24', value: 340, color: secondary },
              { quarter: 'Q4/24', label: '$500k for Q1/25', value: 500, color: secondary }
            ].map((item, index) => (
              <div key={index} className="absolute bottom-0" style={{ 
                left: `${index * 20}%`, 
                height: `${item.value > 0 ? (item.value / 500) * 100 : 15}%` 
              }}>
                <div 
                  className="w-16 rounded-t-lg flex items-end justify-center pb-2 chart-bar"
                  style={{ 
                    backgroundColor: item.color,
                    height: '100%',
                    opacity: item.value > 0 ? 1 : 0.7,
                    boxShadow: `0 4px 6px -1px ${shadow}`
                  }}
                >
                  {item.value > 0 && (
                    <span className="text-white font-medium text-sm">${item.value}k</span>
                  )}
                </div>
                <div className="text-center text-sm mt-2" style={{ color: text.muted }}>{item.quarter}</div>
                <div className="text-center text-xs" style={{ color: text.secondary }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* New ARR by Quarter Section */}
        <div className="p-6 rounded-lg" style={{ 
          backgroundColor: background.light,
          border: `1px solid ${border}`
        }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: text.primary }}>New ARR by Quarter</h2>
          <div className="relative h-64">
            {[
              { quarter: 'Q4/23', value: 40, status: 'success' },
              { quarter: 'Q1/24', value: 100, status: 'success' },
              { quarter: 'Q2/24', value: 200, status: 'info' },
              { quarter: 'Q3/24', value: 240, status: 'warning' },
              { quarter: 'Q4/24', value: 360, status: 'info' }
            ].map((item, index) => (
              <div key={index} className="absolute bottom-0" style={{ 
                left: `${index * 20}%`, 
                height: `${(item.value / 360) * 100}%` 
              }}>
                <div 
                  className="w-16 rounded-t-lg flex items-end justify-center pb-2 chart-bar"
                  style={{ 
                    backgroundColor: status[item.status],
                    height: '100%',
                    boxShadow: `0 4px 6px -1px ${shadow}`
                  }}
                >
                  <span className="text-white font-medium text-sm">${item.value}k</span>
                </div>
                <div className="text-center text-sm mt-2" style={{ color: text.muted }}>{item.quarter}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Text Section */}
      <div className="mt-8" style={{ color: text.secondary }}>
        <p className="mb-4">
          In Q2 2024, Taskbase welcomed Patrick Trümpi, a highly accomplished CRO, who has built a robust sales team and established a 
          <span className="font-medium" style={{ color: tertiary }}> predictable sales pipeline</span>.
        </p>
        <p>
          With a strong momentum in market, a ready to scale product, and a skilled team, Taskbase is positioned to accelerate growth in the emerging 
          <span className="font-medium" style={{ color: tertiary }}> $350 billion AI tutor market</span>.
        </p>
      </div>
    </div>
  );
};

export default GrowthMetricsSlide; 