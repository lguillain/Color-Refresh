import React from 'react';
import { ExtendedColorPalette } from './palettes';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface GrowthMetricsSlideProps {
  selectedPalette: ExtendedColorPalette;
}

const GrowthMetricsSlide = ({ selectedPalette }: GrowthMetricsSlideProps) => {
  const { primary, secondary, tertiary, background, text, status, border, shadow } = selectedPalette.colors;
  
  const yearlyGrowth = [
    { year: '2023', growth: 75, label: '75%' },
    { year: '2024', growth: 90, label: '90%' },
    { year: '2025', growth: 130, label: '130%' },
    { year: '2026', growth: 200, label: '200%' },
    { year: '2027', growth: 200, label: '200%' }
  ];

  const pipelineData = [
    { quarter: 'Q4/23', label: '? for Q1/24', value: 0 },
    { quarter: 'Q1/24', label: '? for Q2/24', value: 0 },
    { quarter: 'Q2/24', label: '$220k for Q3/24', value: 220 },
    { quarter: 'Q3/24', label: '$340k for Q4/24', value: 340 },
    { quarter: 'Q4/24', label: '$500k for Q1/25', value: 500 }
  ];

  const quarterlyArr = [
    { quarter: 'Q4/23', value: 40, status: 'success' },
    { quarter: 'Q1/24', value: 100, status: 'success' },
    { quarter: 'Q2/24', value: 200, status: 'info' },
    { quarter: 'Q3/24', value: 240, status: 'warning' },
    { quarter: 'Q4/24', value: 360, status: 'info' }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto" style={{ backgroundColor: background.card }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: text.primary }}>
            Momentum: Taskbase Growth Pattern
          </h1>
          <p className="text-sm" style={{ color: text.muted }}>
            Tracking our exponential growth journey
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-xl font-semibold px-4 py-2 rounded-lg" 
            style={{ 
              backgroundColor: background.hover,
              color: text.primary 
            }}>
            Taskbase
          </div>
        </div>
      </div>
      
      {/* YoY ARR Growth Section */}
      <div className="p-8 rounded-2xl mb-8" style={{ backgroundColor: background.main }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold" style={{ color: text.primary }}>YoY ARR Growth</h2>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-sm" 
              style={{ 
                backgroundColor: background.hover,
                color: text.secondary 
              }}>
              Projected Growth
            </span>
          </div>
        </div>
        <div className="flex justify-between items-end space-x-4">
          {yearlyGrowth.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="relative w-full mb-2">
                <div 
                  className="w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-transform hover:scale-105"
                  style={{ 
                    backgroundColor: index < 2 ? primary : secondary,
                    boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
                  }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{item.label}</div>
                  </div>
                </div>
              </div>
              <div style={{ color: text.muted }}>{item.year}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Weighted Pipeline Section */}
        <div className="p-8 rounded-2xl" style={{ 
          backgroundColor: background.main,
          boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
        }}>
          <h2 className="text-2xl font-semibold mb-8" style={{ color: text.primary }}>Weighted Pipeline</h2>
          <div className="relative h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke={border} vertical={false} />
                <XAxis 
                  dataKey="quarter" 
                  stroke={text.muted}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke={text.muted}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: background.card,
                    borderColor: border,
                    borderRadius: '8px',
                    boxShadow: `0 4px 6px -1px ${shadow}`
                  }}
                  cursor={{ fill: background.hover }}
                />
                <Bar 
                  dataKey="value" 
                  fill={secondary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {pipelineData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-xs" style={{ color: text.muted }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* New ARR by Quarter Section */}
        <div className="p-8 rounded-2xl" style={{ 
          backgroundColor: background.main,
          boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
        }}>
          <h2 className="text-2xl font-semibold mb-8" style={{ color: text.primary }}>New ARR by Quarter</h2>
          <div className="relative h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyArr} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke={border} vertical={false} />
                <XAxis 
                  dataKey="quarter" 
                  stroke={text.muted}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke={text.muted}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: background.card,
                    borderColor: border,
                    borderRadius: '8px',
                    boxShadow: `0 4px 6px -1px ${shadow}`
                  }}
                  cursor={{ fill: background.hover }}
                />
                <Bar 
                  dataKey="value" 
                  fill={tertiary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Bottom Text Section */}
      <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: background.hover }}>
        <p className="mb-4" style={{ color: text.secondary }}>
          In Q2 2024, Taskbase welcomed Patrick Trümpi, a highly accomplished CRO, who has built a robust sales team and established a{' '}
          <span className="font-medium" style={{ color: tertiary }}>predictable sales pipeline</span>.
        </p>
        <p style={{ color: text.secondary }}>
          With a strong momentum in market, a ready to scale product, and a skilled team, Taskbase is positioned to accelerate growth in the emerging{' '}
          <span className="font-medium" style={{ color: tertiary }}>$350 billion AI tutor market</span>.
        </p>
      </div>
    </div>
  );
};

export default GrowthMetricsSlide; 