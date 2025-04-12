import React, { useState } from 'react';
import { ExtendedColorPalette } from './palettes';
import { 
  ResponsiveContainer, 
  AreaChart, Area, 
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/select";

interface ComplexWebsiteSlideProps {
  selectedPalette: ExtendedColorPalette;
}

type ProjectStatus = 'active' | 'completed' | 'delayed' | 'planned';

interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  progress: number;
  team: number;
}

const ComplexWebsiteSlide = ({ selectedPalette }: ComplexWebsiteSlideProps) => {
  const { primary, secondary, tertiary, background, text, border, shadow, status, graph } = selectedPalette.colors;
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Mock data for the dashboard
  const projects: Project[] = [
    { id: '1', name: 'E-commerce Platform', status: 'active', progress: 75, team: 8 },
    { id: '2', name: 'Mobile App Redesign', status: 'completed', progress: 100, team: 5 },
    { id: '3', name: 'API Integration', status: 'delayed', progress: 30, team: 3 },
    { id: '4', name: 'Content Management System', status: 'active', progress: 45, team: 6 }
  ];

  const activityData = [
    { time: '9:00', value: 30 },
    { time: '10:00', value: 45 },
    { time: '11:00', value: 65 },
    { time: '12:00', value: 40 },
    { time: '13:00', value: 55 },
    { time: '14:00', value: 75 },
    { time: '15:00', value: 60 }
  ];

  const notifications = [
    { type: 'success' as const, message: 'Project successfully deployed' },
    { type: 'warning' as const, message: 'CPU usage above 80%' },
    { type: 'error' as const, message: 'Failed to connect to database' },
    { type: 'info' as const, message: 'New update available' }
  ];

  // Additional mock data for analytics
  const studentPerformanceData = [
    { name: 'Student A', assignments: 85, quizzes: 92, projects: 88, participation: 95 },
    { name: 'Student B', assignments: 78, quizzes: 85, projects: 82, participation: 90 },
    { name: 'Student C', assignments: 92, quizzes: 88, projects: 95, participation: 85 },
    { name: 'Student D', assignments: 80, quizzes: 75, projects: 78, participation: 82 },
    { name: 'Student E', assignments: 88, quizzes: 90, projects: 85, participation: 88 }
  ];

  const courseEngagementData = [
    { week: 'Week 1', videoViews: 120, forumPosts: 45, assignments: 30, quizzes: 25 },
    { week: 'Week 2', videoViews: 150, forumPosts: 60, assignments: 35, quizzes: 30 },
    { week: 'Week 3', videoViews: 180, forumPosts: 75, assignments: 40, quizzes: 35 },
    { week: 'Week 4', videoViews: 200, forumPosts: 90, assignments: 45, quizzes: 40 },
    { week: 'Week 5', videoViews: 220, forumPosts: 105, assignments: 50, quizzes: 45 }
  ];

  const learningOutcomesData = [
    { name: 'Understanding', value: 85 },
    { name: 'Application', value: 75 },
    { name: 'Analysis', value: 80 },
    { name: 'Evaluation', value: 70 },
    { name: 'Creation', value: 65 }
  ];

  const assessmentTypesData = [
    { name: 'Multiple Choice', value: 35 },
    { name: 'Short Answer', value: 25 },
    { name: 'Essay', value: 20 },
    { name: 'Project', value: 15 },
    { name: 'Presentation', value: 5 }
  ];

  // Helper function to get graph colors with fallback
  const getGraphColor = (type: 'categorical' | 'accent', index: number, fallback: string) => {
    return graph?.[type]?.[index] || fallback;
  };

  // Helper function to get status color
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'active':
        return getGraphColor('categorical', 0, primary);
      case 'completed':
        return getGraphColor('categorical', 1, secondary);
      case 'delayed':
        return getGraphColor('categorical', 2, tertiary);
      case 'planned':
        return getGraphColor('categorical', 3, primary);
      default:
        return primary;
    }
  };

  return (
    <div className="w-full h-full flex" style={{ backgroundColor: background.main }}>
      {/* Sidebar */}
      <div className="w-64 h-full p-4 flex flex-col" style={{ 
        backgroundColor: background.card,
        borderRight: `1px solid ${border}`
      }}>
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 rounded" style={{ backgroundColor: primary }}></div>
          <span className="font-semibold" style={{ color: text.primary }}>Dashboard</span>
        </div>

        <nav className="space-y-2">
          {['Dashboard', 'Projects', 'Analytics', 'Team', 'Settings'].map((item) => (
            <button
              key={item}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                activeTab === item.toLowerCase() ? 'font-semibold' : ''
              }`}
              style={{ 
                backgroundColor: activeTab === item.toLowerCase() ? background.hover : 'transparent',
                color: activeTab === item.toLowerCase() ? primary : text.secondary
              }}
              onClick={() => setActiveTab(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-4" style={{ color: text.primary }}>Quick Filters</h3>
          <div className="space-y-3">
            {['Active Projects', 'Completed', 'Delayed', 'High Priority'].map((filter) => (
              <div key={filter} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2"
                  style={{ accentColor: primary }}
                />
                <span style={{ color: text.secondary }}>{filter}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 rounded-lg" style={{ backgroundColor: background.hover }}>
          <div className="flex items-center justify-between mb-2">
            <span style={{ color: text.primary }}>Storage</span>
            <span style={{ color: text.muted }}>75%</span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ backgroundColor: background.main }}>
            <div 
              className="h-full rounded-full"
              style={{ 
                width: '75%',
                backgroundColor: tertiary
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold" style={{ color: text.primary }}>Project Overview</h1>
            <p style={{ color: text.muted }}>Track your team's progress and performance</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="px-4 py-2 rounded-lg text-sm"
              style={{ 
                backgroundColor: background.hover,
                color: text.primary
              }}
            >
              Export
            </button>
            <button 
              className="px-4 py-2 rounded-lg text-sm text-white"
              style={{ backgroundColor: primary }}
              onClick={() => setIsSettingsOpen(true)}
            >
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Active Projects', value: '12', color: primary },
            { label: 'Team Members', value: '24', color: secondary },
            { label: 'Tasks Complete', value: '89%', color: status.success },
            { label: 'Hours Logged', value: '284', color: tertiary }
          ].map((stat, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg"
              style={{ 
                backgroundColor: background.card,
                boxShadow: `0 2px 4px ${shadow}`
              }}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div style={{ color: text.muted }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Table */}
        <div className="mb-6">
          <div className="p-4 rounded-lg" style={{ 
            backgroundColor: background.card,
            boxShadow: `0 2px 4px ${shadow}`
          }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Active Projects</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${border}` }}>
                    <th className="text-left p-3" style={{ color: text.secondary }}>Project</th>
                    <th className="text-left p-3" style={{ color: text.secondary }}>Status</th>
                    <th className="text-left p-3" style={{ color: text.secondary }}>Progress</th>
                    <th className="text-left p-3" style={{ color: text.secondary }}>Team</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr 
                      key={project.id}
                      className={`cursor-pointer transition-colors ${
                        selectedProject === project.id ? 'font-semibold' : ''
                      }`}
                      style={{ 
                        borderBottom: `1px solid ${border}`,
                        backgroundColor: selectedProject === project.id ? background.hover : 'transparent'
                      }}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <td className="p-3" style={{ color: text.primary }}>{project.name}</td>
                      <td className="p-3">
                        <span className="px-2 py-1 rounded-full text-xs" style={{ 
                          backgroundColor: (project.status === 'active' || project.status === 'completed' ? status.success : status.error) + '20',
                          color: project.status === 'active' || project.status === 'completed' ? status.success : status.error
                        }}>
                          {project.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: background.main }}>
                          <div 
                            className="h-full rounded-full"
                            style={{ 
                              width: `${project.progress}%`,
                              backgroundColor: primary
                            }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-3" style={{ color: text.primary }}>{project.team} members</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Analytics Charts Section */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Student Performance Bar Chart */}
            <div className="p-4 rounded-lg" style={{ 
              backgroundColor: background.card,
              boxShadow: `0 2px 4px ${shadow}`
            }}>
              <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Student Performance</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={studentPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="name" stroke={text.muted} />
                    <YAxis stroke={text.muted} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: background.card,
                        borderColor: border,
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="assignments" fill={primary} />
                    <Bar dataKey="quizzes" fill={secondary} />
                    <Bar dataKey="projects" fill={tertiary} />
                    <Bar dataKey="participation" fill={status.success} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Course Engagement Line Chart */}
            <div className="p-4 rounded-lg" style={{ 
              backgroundColor: background.card,
              boxShadow: `0 2px 4px ${shadow}`
            }}>
              <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Course Engagement</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={courseEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="week" stroke={text.muted} />
                    <YAxis stroke={text.muted} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: background.card,
                        borderColor: border,
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="videoViews" stroke={primary} />
                    <Line type="monotone" dataKey="forumPosts" stroke={secondary} />
                    <Line type="monotone" dataKey="assignments" stroke={tertiary} />
                    <Line type="monotone" dataKey="quizzes" stroke={status.success} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Learning Outcomes Pie Chart */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ 
                backgroundColor: background.card,
                boxShadow: `0 2px 4px ${shadow}`
              }}>
                <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Learning Outcomes</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={learningOutcomesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill={primary}
                        dataKey="value"
                      >
                        {learningOutcomesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getGraphColor('categorical', index, primary)} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: background.card,
                          borderColor: border,
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Assessment Types Pie Chart */}
              <div className="p-4 rounded-lg" style={{ 
                backgroundColor: background.card,
                boxShadow: `0 2px 4px ${shadow}`
              }}>
                <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Assessment Types</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={assessmentTypesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill={primary}
                        dataKey="value"
                      >
                        {assessmentTypesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getGraphColor('categorical', index, primary)} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: background.card,
                          borderColor: border,
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity Chart */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 rounded-lg" style={{ 
            backgroundColor: background.card,
            boxShadow: `0 2px 4px ${shadow}`
          }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Activity Overview</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={border} />
                  <XAxis dataKey="time" stroke={text.muted} />
                  <YAxis stroke={text.muted} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: background.card,
                      borderColor: border,
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={primary}
                    fill={`${primary}20`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Notifications */}
          <div className="p-4 rounded-lg" style={{ 
            backgroundColor: background.card,
            boxShadow: `0 2px 4px ${shadow}`
          }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>Notifications</h2>
            <div className="space-y-3">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg flex items-center space-x-3"
                  style={{ backgroundColor: background.hover }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: status[notification.type] }}
                  ></div>
                  <span style={{ color: text.secondary }}>{notification.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsSettingsOpen(false)}
          ></div>
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] p-6 rounded-xl"
            style={{ 
              backgroundColor: background.card,
              boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
            }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: text.primary }}>
              Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: text.secondary }}>
                  Theme
                </label>
                <select
                  className="w-full p-2 rounded-lg border"
                  style={{ 
                    backgroundColor: background.main,
                    borderColor: border,
                    color: text.primary
                  }}
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: text.secondary }}>
                  Notifications
                </label>
                <div className="space-y-2">
                  {['Email', 'Push', 'SMS'].map((type) => (
                    <div key={type} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        style={{ accentColor: primary }}
                      />
                      <span style={{ color: text.secondary }}>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{ 
                    backgroundColor: background.hover,
                    color: text.primary
                  }}
                  onClick={() => setIsSettingsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-lg text-sm text-white"
                  style={{ backgroundColor: primary }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ComplexWebsiteSlide;