import React, { useState } from 'react';
import { ExtendedColorPalette } from './palettes';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ComplexWebsiteSlideProps {
  selectedPalette: ExtendedColorPalette;
}

type NotificationType = 'success' | 'warning' | 'error' | 'info';

interface Notification {
  type: NotificationType;
  message: string;
}

const ComplexWebsiteSlide = ({ selectedPalette }: ComplexWebsiteSlideProps) => {
  const { primary, secondary, tertiary, background, text, status, border, shadow } = selectedPalette.colors;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activityData = [
    { time: '9:00', value: 30 },
    { time: '10:00', value: 45 },
    { time: '11:00', value: 65 },
    { time: '12:00', value: 40 },
    { time: '13:00', value: 55 },
    { time: '14:00', value: 75 },
    { time: '15:00', value: 60 }
  ];

  const notifications: Notification[] = [
    { type: 'success', message: 'Project successfully deployed' },
    { type: 'warning', message: 'CPU usage above 80%' },
    { type: 'error', message: 'Failed to connect to database' },
    { type: 'info', message: 'New update available' }
  ];

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
          {['Overview', 'Analytics', 'Projects', 'Team', 'Settings'].map((item, index) => (
            <button
              key={index}
              className="w-full p-3 rounded-lg text-left transition-colors"
              style={{ 
                backgroundColor: index === 0 ? background.hover : 'transparent',
                color: index === 0 ? primary : text.secondary
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-4" style={{ color: text.primary }}>Filters</h3>
          <div className="space-y-3">
            {['Status', 'Priority', 'Team', 'Date Range'].map((filter, index) => (
              <div key={index} className="flex items-center">
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
              onClick={() => setIsModalOpen(true)}
            >
              New Project
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Activity Chart */}
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: background.card,
              boxShadow: `0 2px 4px ${shadow}`
            }}
          >
            <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>
              Activity Overview
            </h2>
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
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: background.card,
              boxShadow: `0 2px 4px ${shadow}`
            }}
          >
            <h2 className="text-lg font-medium mb-4" style={{ color: text.primary }}>
              Notifications
            </h2>
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

      {/* Modal */}
      {isModalOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] p-6 rounded-xl"
            style={{ 
              backgroundColor: background.card,
              boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -2px ${shadow}`
            }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: text.primary }}>
              Create New Project
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: text.secondary }}>
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border"
                  style={{ 
                    backgroundColor: background.main,
                    borderColor: border,
                    color: text.primary
                  }}
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: text.secondary }}>
                  Description
                </label>
                <textarea
                  className="w-full p-2 rounded-lg border"
                  style={{ 
                    backgroundColor: background.main,
                    borderColor: border,
                    color: text.primary
                  }}
                  placeholder="Enter project description"
                  rows={3}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{ 
                    backgroundColor: background.hover,
                    color: text.primary
                  }}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-lg text-sm text-white"
                  style={{ backgroundColor: primary }}
                >
                  Create Project
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