import React from 'react';
import { ExtendedColorPalette } from './palettes';
import { Progress } from "./components/ui/progress";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/select";

interface LearningAnalyticsSlideProps {
  selectedPalette: ExtendedColorPalette;
}

interface SkillData {
  name: string;
  percentage: number;
  color: string;
}

interface TimeData {
  date: string;
  minutes: number;
  exercises: number;
}

const LearningAnalyticsSlide = ({ selectedPalette }: LearningAnalyticsSlideProps) => {
  const { primary, secondary, tertiary, background, text, border, shadow, status, graph } = selectedPalette.colors;

  // Helper function to get graph colors with fallback
  const getGraphColor = (type: 'categorical' | 'accent', index: number, fallback: string) => {
    return graph?.[type]?.[index] || fallback;
  };

  const skillsData: SkillData[] = [
    { name: "Present Tense", percentage: 90, color: getGraphColor('categorical', 0, status.success) },
    { name: "Basic Structure", percentage: 85, color: getGraphColor('categorical', 1, status.success) },
    { name: "Articles", percentage: 75, color: getGraphColor('categorical', 2, status.warning) },
    { name: "Adjectives", percentage: 70, color: getGraphColor('categorical', 3, status.warning) },
  ];

  const timeData: TimeData[] = [
    { date: "Jan 1", minutes: 45, exercises: 12 },
    { date: "Jan 2", minutes: 40, exercises: 10 },
    { date: "Jan 3", minutes: 65, exercises: 15 },
    { date: "Jan 4", minutes: 70, exercises: 18 },
    { date: "Jan 5", minutes: 75, exercises: 20 },
    { date: "Jan 6", minutes: 60, exercises: 16 },
    { date: "Jan 7", minutes: 55, exercises: 14 },
  ];

  const distributionData = [
    { name: "Grammar", value: 34, color: getGraphColor('categorical', 0, status.success) },
    { name: "Vocabulary", value: 28, color: getGraphColor('categorical', 1, status.info) },
    { name: "Listening", value: 22, color: getGraphColor('categorical', 2, status.warning) },
    { name: "Speaking", value: 16, color: getGraphColor('categorical', 3, status.error) }
  ];

  const correctnessStats = {
    total: 120,
    correct: 85,
    incorrect: 35,
    accuracy: 71
  };

  return (
    <div className="w-full h-full p-8 grid grid-cols-12 gap-6" style={{ backgroundColor: background.main }}>
      {/* User Progress Card */}
      <div className="col-span-3 rounded-xl p-6" style={{ 
        backgroundColor: background.card,
        boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
      }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium" style={{ color: text.primary }}>Annette L.</h2>
          <button style={{ color: text.muted }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
        
        <div className="text-4xl font-bold mb-2" style={{ color: primary }}>76%</div>
        <p className="text-sm mb-6" style={{ color: text.muted }}>Goethe German A1 readiness score</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 rounded-lg" style={{ 
            backgroundColor: status.success + '10',
            border: `1px solid ${status.success + '20'}`
          }}>
            <div className="text-xl font-semibold" style={{ color: status.success }}>{correctnessStats.correct}</div>
            <div className="text-xs" style={{ color: text.muted }}>correct answers</div>
          </div>
          <div className="text-center p-3 rounded-lg" style={{ 
            backgroundColor: status.error + '10',
            border: `1px solid ${status.error + '20'}`
          }}>
            <div className="text-xl font-semibold" style={{ color: status.error }}>{correctnessStats.incorrect}</div>
            <div className="text-xs" style={{ color: text.muted }}>incorrect answers</div>
          </div>
          <div className="text-center p-3 rounded-lg" style={{ 
            backgroundColor: status.info + '10',
            border: `1px solid ${status.info + '20'}`
          }}>
            <div className="text-xl font-semibold" style={{ color: status.info }}>{correctnessStats.accuracy}%</div>
            <div className="text-xs" style={{ color: text.muted }}>accuracy rate</div>
          </div>
        </div>

        <div className="text-sm p-3 rounded-lg" style={{ 
          backgroundColor: status.info + '10',
          border: `1px solid ${status.info + '20'}`,
          color: text.primary
        }}>
          Target completion date: June 21st, 2024
        </div>
      </div>

      {/* Proficiency Card */}
      <div className="col-span-5 rounded-xl p-6" style={{ 
        backgroundColor: background.card,
        boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
      }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium" style={{ color: text.primary }}>Proficiency</h2>
          <div className="flex space-x-4">
            {distributionData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm" style={{ color: text.muted }}>{item.name} {item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: text.primary }}>{skill.name}</span>
                  <span style={{ color: skill.color }}>{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} style={{ "--progress-background": skill.color }} />
              </div>
            ))}
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Time Spent Card */}
      <div className="col-span-4 rounded-xl p-6" style={{ 
        backgroundColor: background.card,
        boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
      }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium" style={{ color: text.primary }}>Time & Progress</h2>
          <Select defaultValue="last7">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7">Last 7 Days</SelectItem>
              <SelectItem value="last30">Last 30 Days</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" stroke={border} />
              <XAxis dataKey="date" stroke={text.muted} />
              <YAxis stroke={text.muted} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: background.card,
                  border: `1px solid ${border}`,
                  borderRadius: '8px'
                }}
                labelStyle={{ color: text.primary }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="minutes" 
                name="Minutes" 
                stroke={getGraphColor('accent', 0, primary)} 
                strokeWidth={2}
                dot={{ fill: getGraphColor('accent', 0, primary) }}
              />
              <Line 
                type="monotone" 
                dataKey="exercises" 
                name="Exercises" 
                stroke={getGraphColor('accent', 1, secondary)}
                strokeWidth={2}
                dot={{ fill: getGraphColor('accent', 1, secondary) }}
              />
            </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" stroke={border} />
              <XAxis dataKey="date" stroke={text.muted} />
              <YAxis stroke={text.muted} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: background.card,
                  border: `1px solid ${border}`,
                  borderRadius: '8px'
                }}
                labelStyle={{ color: text.primary }}
              />
              <Bar dataKey="exercises" fill={getGraphColor('accent', 2, tertiary)} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LearningAnalyticsSlide; 