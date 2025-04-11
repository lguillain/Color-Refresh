import React from 'react';
import { ExtendedColorPalette } from './palettes';

interface QASlideProps {
  selectedPalette: ExtendedColorPalette;
}

interface QAItem {
  question: string;
  answer: string[];
  stats?: {
    correct: number;
    incorrect: number;
  };
}

const QASlide = ({ selectedPalette }: QASlideProps) => {
  const { background, text, border, shadow, primary } = selectedPalette.colors;

  const qaItems: QAItem[] = [
    {
      question: "wieviel geld?",
      answer: [
        "Während der Lehre als Informatiker/in EFZ kannst du mit folgenden Löhnen rechnen:",
        "1. Lehrjahr: etwa CHF 500-600 pro Monat",
        "2. Lehrjahr: etwa CHF 700-800 pro Monat",
        "3. Lehrjahr: etwa CHF 1'000 pro Monat",
        "4. Lehrjahr: etwa CHF 1'200 pro Monat",
        "Nach der Ausbildung sind die Verdienstmöglichkeiten sehr gut. Als ausgebildeter Informatiker hast du in der Schweiz gute Jobchancen in allen Branchen. Die genauen Gehälter nach der Ausbildung hängen von deiner Spezialisierung, dem Unternehmen und der Region ab."
      ],
      stats: {
        correct: 23,
        incorrect: 23
      }
    },
    {
      question: "heyy ich wollt fragen wie viel ich als informatik verdienen würde?",
      answer: [
        "Hallo! Als Informatiker/in EFZ kannst du mit folgenden Löhnen rechnen:",
        "Während der Lehre:",
        "- 1. Lehrjahr: etwa CHF 500-600",
        "- 2. Lehrjahr: etwa CHF 700-800",
        "- 3. Lehrjahr: etwa CHF 1'000",
        "- 4. Lehrjahr: etwa CHF 1'200",
        "",
        "Nach der Ausbildung hast du gute Verdienstmöglichkeiten! Als Einsteiger/in findest du viele spannende Jobs in verschiedenen Branchen. Mit Weiterbildungen kannst du später noch mehr verdienen."
      ]
    }
  ];

  const sidebarItems = [
    { icon: '⊞', label: 'Overview' },
    { icon: '✎', label: 'Edit' },
    { icon: '📄', label: 'Content' },
    { icon: '🖨', label: 'Print' },
    { icon: '↻', label: 'History' },
    { icon: '⚙', label: 'Settings' }
  ];

  return (
    <div className="w-full aspect-video relative flex" style={{ backgroundColor: background.main }}>
      {/* Sidebar */}
      <div className="w-20 h-full flex flex-col items-center py-6" 
        style={{ 
          backgroundColor: primary,
          borderRight: `1px solid ${border}`
        }}>
        {/* Logo */}
        <div className="w-12 h-12 rounded-lg mb-8 flex items-center justify-center"
          style={{ backgroundColor: 'white' }}>
          <span className="text-2xl" style={{ color: primary }}>T</span>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col items-center space-y-6">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className="w-full px-2 py-1 flex flex-col items-center justify-center transition-colors"
              style={{ 
                color: 'white',
                opacity: index === 2 ? 1 : 0.7
              }}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-light">{item.label}</span>
            </button>
          ))}
        </div>

        {/* User Profile */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center mt-4"
          style={{ backgroundColor: 'white' }}>
          <span className="text-sm font-medium" style={{ color: primary }}>
            LP
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="text-sm px-4 py-2" style={{ color: text.secondary }}>
              ← Return to topics
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span style={{ color: text.primary }}>Review Factual Accuracy</span>
            <button className="text-sm px-4 py-2 rounded" style={{ 
              backgroundColor: background.hover,
              color: text.primary 
            }}>
              Help Center
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold" style={{ color: text.primary }}>
            Informatiker-in Gehalt und Verdienstmöglichkeiten
          </h1>
          <div className="text-sm" style={{ color: text.muted }}>6 answers</div>
        </div>

        {/* Q&A Items */}
        <div className="space-y-6">
          {qaItems.map((item, index) => (
            <div key={index} className="rounded-lg p-6" style={{ 
              backgroundColor: background.card,
              border: `1px solid ${border}`
            }}>
              {/* Question */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: background.hover }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10H16M8 14H16M12 18H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke={text.secondary} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ color: text.primary }} className="font-medium">
                  {item.question}
                </div>
              </div>

              {/* Answer */}
              <div className="ml-10">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: background.hover }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                        stroke={text.secondary} strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="space-y-2 flex-1">
                    {item.answer.map((line, i) => (
                      <p key={i} style={{ color: text.secondary }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Stats and Actions */}
                {item.stats && (
                  <div className="mt-6 flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-3 py-1 rounded">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke={text.muted} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span style={{ color: text.muted }}>View conversation</span>
                    </button>
                    <button className="flex items-center space-x-2 px-3 py-1 rounded">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke={text.muted} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span style={{ color: text.muted }}>View content</span>
                    </button>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 px-3 py-1 rounded text-white" style={{ backgroundColor: '#22C55E' }}>
                        <span>{item.stats.correct}</span>
                      </button>
                      <button className="flex items-center space-x-2 px-3 py-1 rounded text-white" style={{ backgroundColor: '#EF4444' }}>
                        <span>{item.stats.incorrect}</span>
                      </button>
                    </div>
                    <button className="px-3 py-1 rounded text-white" style={{ backgroundColor: '#22C55E' }}>
                      Correct
                    </button>
                    <button className="px-3 py-1 rounded text-white" style={{ backgroundColor: '#EF4444' }}>
                      Incorrect
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QASlide; 