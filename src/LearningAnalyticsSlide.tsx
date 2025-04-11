import React from 'react';
import { ExtendedColorPalette } from './palettes';
import { Progress } from "./components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
}

const LearningAnalyticsSlide = ({ selectedPalette }: LearningAnalyticsSlideProps) => {
  const { primary, secondary, tertiary, background, text, border, shadow, status } = selectedPalette.colors;

  const skillsData: SkillData[] = [
    { name: "Present Tense Conjugation", percentage: 90, color: primary },
    { name: "Basic Sentence Structure", percentage: 85, color: secondary },
    { name: "Definite and Indefinite Articles", percentage: 75, color: tertiary },
    { name: "Basic Adjective Endings", percentage: 70, color: primary },
  ];

  const timeData: TimeData[] = [
    { date: "Jan 1", minutes: 45 },
    { date: "Jan 2", minutes: 40 },
    { date: "Jan 3", minutes: 65 },
    { date: "Jan 4", minutes: 70 },
    { date: "Jan 5", minutes: 75 },
    { date: "Jan 6", minutes: 60 },
    { date: "Jan 7", minutes: 55 },
  ];

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
          <div className="text-center p-3 rounded-lg" style={{ backgroundColor: background.hover }}>
            <div className="text-xl font-semibold" style={{ color: primary }}>32/36</div>
            <div className="text-xs" style={{ color: text.muted }}>tasks completed</div>
          </div>
          <div className="text-center p-3 rounded-lg" style={{ backgroundColor: background.hover }}>
            <div className="text-xl font-semibold" style={{ color: secondary }}>56%</div>
            <div className="text-xs" style={{ color: text.muted }}>average correctness</div>
          </div>
          <div className="text-center p-3 rounded-lg" style={{ backgroundColor: background.hover }}>
            <div className="text-xl font-semibold" style={{ color: tertiary }}>40</div>
            <div className="text-xs" style={{ color: text.muted }}>hours spent</div>
          </div>
        </div>

        <div className="text-sm p-3 rounded-lg" style={{ 
          backgroundColor: background.hover,
          color: text.muted 
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
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: primary }}></div>
              <span className="text-sm" style={{ color: text.muted }}>Grammar 34%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: secondary }}></div>
              <span className="text-sm" style={{ color: text.muted }}>Vocabulary 28%</span>
            </div>
          </div>
        </div>

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
      </div>

      {/* Time Spent Card */}
      <div className="col-span-4 bg-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium" style={{ color: text.primary }}>Time Spent</h2>
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

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={timeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="minutes" fill={primary} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LearningAnalyticsSlide; 