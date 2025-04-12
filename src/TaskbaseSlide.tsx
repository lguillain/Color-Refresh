import React from 'react';
import { ExtendedColorPalette } from './palettes';
import { Progress } from './components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface TaskbaseSlideProps {
  selectedPalette: ExtendedColorPalette;
}

const TaskbaseSlide: React.FC<TaskbaseSlideProps> = ({ selectedPalette }) => {
  const { primary, secondary, tertiary, background, text, border, shadow, status } = selectedPalette.colors;

  // Improved data for the bar chart with more meaningful names and realistic values
  const performanceData = [
    { name: 'Entfallen', concept: 62, misconception: 38 },
    { name: 'Indikativ', concept: 45, misconception: 55 },
    { name: 'Konjugation', concept: 78, misconception: 22 },
    { name: 'Verbform', concept: 35, misconception: 65 },
    { name: 'Leseverständnis', concept: 50, misconception: 50 },
  ];

  // Improved pie chart data with more realistic distribution
  const answerDistributionData = [
    { name: 'Correct', value: 35, color: status.success },
    { name: 'Partially Correct', value: 45, color: status.warning },
    { name: 'Incorrect', value: 20, color: status.error }
  ];

  // Data for a new stacked bar chart showing answer attempts by aspect
  const aspectPerformanceData = [
    { name: 'Verb Form', correct: 22, partiallyCorrect: 45, incorrect: 33 },
    { name: 'Tense', correct: 42, partiallyCorrect: 30, incorrect: 28 },
    { name: 'Person', correct: 65, partiallyCorrect: 25, incorrect: 10 },
    { name: 'Spelling', correct: 48, partiallyCorrect: 32, incorrect: 20 },
  ];

  // Common answers data
  const commonAnswers = [
    { answer: "Damals sagtest du nicht die Wahrheit.", percentage: 45, status: "correct" },
    { answer: "Damals sagte du nicht die Wahrheit.", percentage: 20, status: "incorrect" },
    { answer: "Damals du sagtest nicht die Wahrheit.", percentage: 15, status: "incorrect" },
    { answer: "Damals sagtest du die Wahrheit nicht.", percentage: 12, status: "correct" },
    { answer: "Du sagtest damals nicht die Wahrheit.", percentage: 8, status: "partiallyCorrect" },
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

                {/* Improved: Showing aspect performance chart */}
                <div 
                  className="p-5 rounded-lg mb-6 mt-8"
                  style={{ 
                    backgroundColor: background.card,
                    boxShadow: `0 2px 8px ${shadow}`
                  }}
                >
                  <h3 className="font-semibold mb-4" style={{ color: text.primary }}>Performance by Aspect</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={aspectPerformanceData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={border} />
                        <XAxis 
                          dataKey="name"
                          tick={{ fill: text.secondary, fontSize: 12 }}
                          axisLine={{ stroke: border }}
                          tickLine={{ stroke: border }}
                        />
                        <YAxis 
                          tickFormatter={(value) => `${value}%`}
                          tick={{ fill: text.secondary, fontSize: 12 }}
                          axisLine={{ stroke: border }}
                          tickLine={{ stroke: border }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: background.card,
                            border: `1px solid ${border}`,
                            borderRadius: '8px',
                            boxShadow: `0 4px 6px -1px ${shadow}`,
                            padding: '8px 12px'
                          }}
                          formatter={(value: any) => [`${value}%`, '']}
                        />
                        <Legend 
                          verticalAlign="bottom"
                          height={36}
                          iconType="circle"
                          formatter={(value) => {
                            return <span style={{ color: text.secondary, fontSize: '12px' }}>{value}</span>;
                          }}
                        />
                        <Bar 
                          dataKey="correct" 
                          name="Correct"
                          stackId="a" 
                          fill={status.success} 
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar 
                          dataKey="partiallyCorrect" 
                          name="Partially Correct"
                          stackId="a" 
                          fill={status.warning}
                        />
                        <Bar 
                          dataKey="incorrect" 
                          name="Incorrect"
                          stackId="a" 
                          fill={status.error}
                          radius={[0, 0, 4, 4]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Improved: Concept vs. Misconception horizontal bar chart */}
                <div 
                  className="p-5 rounded-lg"
                  style={{ 
                    backgroundColor: background.card,
                    boxShadow: `0 2px 8px ${shadow}`
                  }}
                >
                  <h3 className="font-semibold mb-5" style={{ color: text.primary }}>Concept vs. Misconception</h3>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={performanceData}
                        layout="vertical"
                        barSize={20}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={border} />
                        <XAxis 
                          type="number" 
                          domain={[0, 100]}
                          tickFormatter={(value) => `${value}%`}
                          tick={{ fill: text.secondary, fontSize: 12 }}
                          axisLine={{ stroke: border }}
                          tickLine={{ stroke: border }}
                        />
                        <YAxis 
                          type="category" 
                          dataKey="name" 
                          tick={{ fill: text.secondary, fontSize: 12 }}
                          width={100}
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
                          formatter={(value: any) => [`${value}%`, '']}
                        />
                        <Legend 
                          verticalAlign="top"
                          height={36}
                          iconType="circle"
                          formatter={(value) => {
                            return <span style={{ color: text.secondary, fontSize: '12px' }}>{value}</span>;
                          }}
                        />
                        <Bar 
                          dataKey="concept" 
                          name="Concept"
                          fill={status.success} 
                          radius={[4, 0, 0, 4]}
                          animationDuration={800}
                        />
                        <Bar 
                          dataKey="misconception" 
                          name="Misconception"
                          fill={status.error}
                          radius={[0, 4, 4, 0]}
                          animationDuration={800}
                        />
                      </BarChart>
                    </ResponsiveContainer>
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

                {/* Improved Performance Breakdown with realistic data */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-5" style={{ color: text.primary }}>Performance Breakdown</h4>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <div className="flex mb-3">
                        <div className="relative w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: background.hover }}>
                          <div className="absolute top-0 left-0 h-full" style={{ width: '35%', backgroundColor: status.success }}></div>
                          <div className="absolute top-0 left-[35%] h-full" style={{ width: '45%', backgroundColor: status.warning }}></div>
                          <div className="absolute top-0 left-[80%] h-full" style={{ width: '20%', backgroundColor: status.error }}></div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs justify-between">
                        <span style={{ color: text.muted }}>0.0</span>
                        <span style={{ color: text.muted }}>Total: 100%</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.success }} />
                        <span className="text-sm font-medium" style={{ color: text.secondary }}>Correct (35%)</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.warning }} />
                        <span className="text-sm font-medium" style={{ color: text.secondary }}>Partially Correct (45%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: status.error }} />
                        <span className="text-sm font-medium" style={{ color: text.secondary }}>Incorrect (20%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Improved Pie Chart for Answer Distribution */}
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
                          labelLine={false}
                          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = outerRadius * 1.2;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                            
                            return (
                              <text
                                x={x}
                                y={y}
                                fill={text.secondary}
                                textAnchor={x > cx ? 'start' : 'end'}
                                dominantBaseline="central"
                                fontSize={12}
                              >
                                {`${(percent * 100).toFixed(0)}%`}
                              </text>
                            );
                          }}
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

                {/* Improved: Top 5 Most Common Answers with actual data */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold" style={{ color: text.primary }}>
                      Top 5 Most Common Answers
                    </h4>
                    <span className="text-sm" style={{ color: text.muted }}>100% of all answers</span>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden" style={{ borderColor: border }}>
                    {commonAnswers.map((answer, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 border-b last:border-b-0"
                        style={{ 
                          borderColor: border,
                          backgroundColor: index % 2 === 0 ? background.hover : 'transparent'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ 
                              backgroundColor: 
                                answer.status === "correct" ? status.success : 
                                answer.status === "partiallyCorrect" ? status.warning : status.error 
                            }}
                          />
                          <span className="text-sm" style={{ color: text.primary }}>{answer.answer}</span>
                        </div>
                        <span className="text-xs font-medium" style={{ color: text.muted }}>{answer.percentage}%</span>
                      </div>
                    ))}
                  </div>
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