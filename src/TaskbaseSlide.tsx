import React from 'react';
import { ExtendedColorPalette } from './palettes';
import { Progress } from './components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface TaskbaseSlideProps {
  selectedPalette: ExtendedColorPalette;
}

const TaskbaseSlide: React.FC<TaskbaseSlideProps> = ({ selectedPalette }) => {
  const { primary, secondary, tertiary, background, text, border, shadow, status } = selectedPalette.colors;

  // Mock data for the bar chart
  const performanceData = [
    { name: 'Entfall...', concept: 25, misconception: 75 },
    { name: 'Indikati...', concept: 45, misconception: 55 },
    { name: 'mein', concept: 60, misconception: 40 },
    { name: 'Konjugati...', concept: 35, misconception: 65 },
    { name: 'Lesen kön...', concept: 50, misconception: 50 },
  ];

  // Mock data for the pie chart
  const answerDistributionData = [
    { name: 'Correct', value: 35, color: status.success },
    { name: 'Partially Correct', value: 45, color: status.warning },
    { name: 'Incorrect', value: 20, color: status.error }
  ];

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: background.main }}>
      {/* Main container */}
      <div className="flex h-full gap-4">
        {/* Left sidebar */}
        <div 
          className="w-64 h-[calc(100vh-2rem)] rounded-lg flex flex-col"
          style={{ 
            backgroundColor: primary,
            color: 'white'
          }}
        >
          <div className="p-4 text-xl font-semibold tracking-wide">Taskbase</div>
          
          <div className="flex items-center gap-3 p-4 transition-colors hover:bg-white/10 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>⊞</div>
            <span className="text-white/90">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-3 p-4 font-medium bg-white/20">
            <div className="w-8 h-8 flex items-center justify-center rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>✎</div>
            <span>All Tasks</span>
          </div>

          {/* Settings and Active Tenant */}
          <div className="mt-auto">
            <div className="flex items-center gap-3 p-4 transition-colors hover:bg-white/10 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>⚙</div>
              <span className="text-white/90">Settings</span>
            </div>

            <div className="mx-4 mb-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <div className="text-sm text-white/80 mb-1">Active Tenant</div>
              <div className="font-medium">Cornelsen B1</div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-medium" style={{ color: primary }}>RO</div>
                <span className="text-sm text-white/80">root@taskbase.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1">
          {/* Header with Help Center */}
          <div className="flex justify-between items-center mb-6">
            <div>
              {/* Back button and breadcrumb */}
              <div className="flex items-center gap-3 mb-2">
                <button className="text-lg opacity-60 hover:opacity-100 transition-opacity" style={{ color: text.primary }}>←</button>
                <div className="flex items-center gap-2" style={{ color: text.secondary }}>
                  <span className="hover:underline cursor-pointer">All Tasks</span>
                  <span>/</span>
                  <span>Praet_regelm_L4_Ue02</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-semibold" style={{ color: text.primary }}>
                Praet_regelm_L4_Ue02
              </h1>
            </div>

            <button 
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
              style={{ 
                backgroundColor: background.hover,
                color: text.primary
              }}
            >
              <span className="text-lg">?</span>
              Help Center
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-8" style={{ borderColor: border }}>
            <button className="px-4 py-2.5 text-sm transition-colors" style={{ color: text.secondary }}>
              Evaluation Criteria
            </button>
            <button className="px-4 py-2.5 text-sm transition-colors" style={{ color: text.secondary }}>
              Feedback
            </button>
            <button 
              className="px-4 py-2.5 text-sm border-b-2 -mb-px font-medium transition-colors" 
              style={{ 
                borderColor: primary,
                color: primary
              }}
            >
              Insights
            </button>
          </div>

          {/* Content */}
          <div className="flex gap-8">
            {/* Left column */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold" style={{ color: text.primary }}>Aspects 13</h2>
                    <button className="w-5 h-5 rounded-full flex items-center justify-center text-sm transition-colors" 
                      style={{ 
                        backgroundColor: background.hover,
                        color: text.secondary
                      }}>ⓘ</button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: text.secondary }}>Expand Aspect sections</span>
                    <button 
                      className="w-12 h-6 rounded-full relative cursor-pointer transition-colors"
                      style={{ 
                        backgroundColor: primary,
                      }}
                    >
                      <div 
                        className="absolute right-1 top-1 w-4 h-4 rounded-full transition-transform"
                        style={{ backgroundColor: 'white' }}
                      />
                    </button>
                  </div>
                </div>

                {/* Evaluation sections */}
                <div 
                  className="p-5 rounded-lg mb-4"
                  style={{ 
                    backgroundColor: background.card,
                    boxShadow: `0 2px 8px ${shadow}`
                  }}
                >
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="text-sm font-medium" style={{ color: text.secondary }}>Evaluation Verb</div>
                        <div className="font-semibold" style={{ color: text.primary }}>% Answers</div>
                      </div>
                      <button className="w-5 h-5 rounded-full flex items-center justify-center text-sm transition-colors" 
                        style={{ 
                          backgroundColor: background.hover,
                          color: text.secondary
                        }}>ⓘ</button>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: text.muted }}>
                      <span>Updating*</span>
                      <button className="opacity-60 hover:opacity-100 transition-opacity">▼</button>
                    </div>
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: border }}>
                    <div className="text-sm font-medium mb-2" style={{ color: status.success }}>CONCEPT</div>
                    <div className="font-semibold mb-1" style={{ color: text.primary }}>Evaluation Verb</div>
                    <div style={{ color: text.secondary }}>Die Antwort enthält ein Verb.</div>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="h-40 mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <button className="opacity-40 hover:opacity-100 transition-opacity" style={{ color: text.primary }}>←</button>
                    <button className="opacity-40 hover:opacity-100 transition-opacity" style={{ color: text.primary }}>→</button>
                  </div>
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart
                      data={performanceData}
                      layout="vertical"
                      barSize={16}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <XAxis 
                        type="number" 
                        hide 
                        domain={[0, 100]}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        tick={{ fill: text.secondary, fontSize: 12 }}
                        width={96}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: background.card,
                          border: `1px solid ${border}`,
                          borderRadius: '8px',
                          boxShadow: `0 4px 6px -1px ${shadow}`,
                          padding: '8px 12px'
                        }}
                        labelStyle={{ 
                          color: text.primary,
                          fontWeight: 500,
                          marginBottom: '4px'
                        }}
                        itemStyle={{ 
                          color: text.primary,
                          padding: '2px 0'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Percentage']}
                      />
                      <Bar 
                        dataKey="concept" 
                        fill={status.success} 
                        radius={[0, 4, 4, 0]}
                        animationDuration={800}
                      />
                      <Bar 
                        dataKey="misconception" 
                        fill={status.error}
                        radius={[0, 4, 4, 0]}
                        animationDuration={800}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex justify-end gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.success }} />
                      <span className="text-sm font-medium" style={{ color: text.secondary }}>Concept</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.error }} />
                      <span className="text-sm font-medium" style={{ color: text.secondary }}>Misconception</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-96">
              <div 
                className="p-5 rounded-lg"
                style={{ 
                  backgroundColor: background.card,
                  boxShadow: `0 2px 8px ${shadow}`
                }}
              >
                <h3 className="font-semibold mb-5" style={{ color: text.primary }}>
                  Answer Overview · 3 answer attempts
                </h3>

                <div className="mb-4" style={{ color: text.primary }}>
                  Schreibe den Satz im Präteritum.
                </div>

                <div className="p-3 rounded" style={{ backgroundColor: background.hover }}>
                  Damals - sagen - du - nicht die Wahrheit - .
                </div>

                {/* Performance chart */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-5" style={{ color: text.primary }}>Performance Breakdown</h4>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Progress 
                          value={35} 
                          className="h-3 w-full rounded-full"
                          style={{ 
                            '--progress-background': status.success
                          }}
                        />
                        <div className="absolute top-0 right-0 text-xs" style={{ color: text.muted }}>35%</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.success }} />
                        <span className="text-sm font-medium" style={{ color: text.secondary }}>Correct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.warning }} />
                        <span className="text-sm font-medium" style={{ color: text.secondary }}>Partially Correct</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pie Chart for Answer Distribution */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-5" style={{ color: text.primary }}>Answer Distribution</h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={answerDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {answerDistributionData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color}
                              stroke={background.card}
                              strokeWidth={2}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: background.card,
                            border: `1px solid ${border}`,
                            borderRadius: '8px',
                            boxShadow: `0 4px 6px -1px ${shadow}`,
                            padding: '8px 12px'
                          }}
                          formatter={(value: number) => [`${value}%`, 'Percentage']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    {answerDistributionData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                        <span className="text-sm font-medium" style={{ color: text.secondary }}>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top 5 Most Common Answers */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold" style={{ color: text.primary }}>
                      Top 5 Most Common Answers
                    </h4>
                    <span className="text-sm" style={{ color: text.muted }}>100% of all answers</span>
                  </div>
                  <button 
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between hover:bg-white/5"
                    style={{ 
                      backgroundColor: background.hover,
                      color: text.primary,
                      border: `1px solid ${border}`
                    }}
                  >
                    <span>Expand answers</span>
                    <span className="text-xs opacity-60">▼</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskbaseSlide; 