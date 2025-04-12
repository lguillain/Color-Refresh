export interface ExtendedColorPalette {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: {
      main: string;
      light: string;
      card: string;
      hover: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    status: {
      success: string;
      error: string;
      warning: string;
      info: string;
    };
    border: string;
    shadow: string;
    graph?: {
      sequential: string[];
      categorical: string[];
      diverging: string[];
      accent: string[];
    };
  };
}

export const palettes: ExtendedColorPalette[] = [
  {
    title: "Taskbase",
    colors: {
      primary: "#6265C9",
      secondary: "#A5F4D9",
      tertiary: "#8182D8",
      background: {
        main: "#F0F1FB",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#E6E7FA"
      },
      text: {
        primary: "#1A1A2E",
        secondary: "#4B4B66",
        muted: "#6E7191"
      },
      status: {
        success: "#43A047",
        error: "#C62828",
        warning: "#F59E0B",
        info: "#3B82F6"
      },
      border: "#E2E8F0",
      shadow: "rgba(98, 101, 201, 0.12)",
      graph: {
        sequential: [
          "#E6E7FF", "#C4C6FF", "#A3A6FF", "#8286FF", 
          "#6166FF", "#4046FF", "#1F26FF", "#0007FF"
        ],
        categorical: [
          "#0007FF", // Blue
          "#00DBA8", // Mint
          "#FF0A0A", // Red
          "#FFB800", // Gold
          "#00B828", // Green
          "#4B5CCC", // Slate blue
          "#71757A", // Gray
          "#000000"  // Black
        ],
        diverging: [
          "#FF0A0A", // Red 900
          "#FF4D4D", // Red 600
          "#FF9999", // Red 300
          "#FFFFFF", // White
          "#99B3FF", // Blue 300
          "#4D6FFF", // Blue 600
          "#0007FF"  // Blue 900
        ],
        accent: [
          "#0007FF", // Blue
          "#00DBA8", // Mint
          "#FF0A0A", // Red
          "#FFB800"  // Gold
        ]
      }
    }
  },
  {
    title: "Violet Venture",
    colors: {
      primary: "#5E4BD0", // Deeper, more accessible purple
      secondary: "#00B0C8", // More accessible teal with better contrast
      tertiary: "#8C5AD3", // Complementary violet with better distinction
      background: {
        main: "#F5F7FF",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EAEDFF"
      },
      text: {
        primary: "#1A1A2E", // Dark enough for high contrast
        secondary: "#3A3A56", // Slightly darker for better accessibility
        muted: "#5E617F" // Still muted but more readable
      },
      status: {
        success: "#36B37E", // Bright green that complements the violet palette
        error: "#E03E3E", // Vibrant red that stands out with violet scheme
        warning: "#F7B955", // Warm amber that pairs well with the palette
        info: "#4280FF" // Bright blue that complements the violet theme
      },
      border: "#D8DEF0", // Slightly stronger border
      shadow: "rgba(94, 75, 208, 0.12)",
      graph: {
        sequential: [
          "#FFF1F0", "#FFD4CC", "#FFB8AA", "#FF9C88", 
          "#FF8066", "#FF6344", "#FF4722", "#FF2B00"
        ],
        categorical: [
          "#5E4BD0", // Primary purple
          "#00B0C8", // Secondary teal
          "#F76D45", // Orange 
          "#FFBC3D", // Gold
          "#36B37E", // Green (matched to status.success)
          "#8C5AD3", // Tertiary violet
          "#647284", // Gray
          "#1A1A2E"  // Dark blue
        ],
        diverging: [
          "#E03E3E", // Red (matched to status.error)
          "#F76D45", // Light red/orange
          "#FFBCB8", // Very light red
          "#FFFFFF", // White
          "#B8DDFF", // Light blue
          "#5592E0", // Blue
          "#4280FF"  // Dark blue (matched to status.info)
        ],
        accent: [
          "#5E4BD0", // Primary purple
          "#00B0C8", // Teal
          "#F76D45", // Orange
          "#FFBC3D"  // Gold
        ]
      }
    }
  },
  {
    title: "Indigo Innovator",
    colors: {
      primary: "#4038C4", // Deeper indigo for better contrast
      secondary: "#0099B8", // More accessible teal
      tertiary: "#834AD7", // Complementary purple
      background: {
        main: "#F8FAFC",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EEF2FF"
      },
      text: {
        primary: "#0A1023", // Slightly darker for better contrast
        secondary: "#28334D", // Improved contrast
        muted: "#506078" // More readable muted text
      },
      status: {
        success: "#10B981", // Cool-toned green that fits the indigo palette
        error: "#EF4444", // Warm red that contrasts nicely with the cool indigo
        warning: "#F59E0B", // Rich amber that works with the palette
        info: "#3B82F6" // Vibrant blue that aligns with the indigo theme
      },
      border: "#D2DBE9", // Slightly stronger for better definition
      shadow: "rgba(64, 56, 196, 0.13)",
      graph: {
        sequential: [
          "#F0F7FF", "#D6E8FF", "#B3D4FF", "#8FC0FF", 
          "#6BACFF", "#4889F8", "#2556D7", "#0233B6"
        ],
        categorical: [
          "#4038C4", // Primary indigo
          "#0099B8", // Secondary teal
          "#F06A3F", // Orange
          "#FFAA22", // Gold
          "#10B981", // Green (matched to status.success)
          "#834AD7", // Tertiary purple
          "#506078", // Gray
          "#0A1023"  // Dark blue
        ],
        diverging: [
          "#EF4444", // Red (matched to status.error)
          "#F06A3F", // Orange
          "#FFB892", // Light peach
          "#FFFFFF", // White
          "#B3D4FF", // Light blue
          "#4889F8", // Blue
          "#3B82F6"  // Deep blue (matched to status.info)
        ],
        accent: [
          "#4038C4", // Primary indigo
          "#0099B8", // Teal
          "#F06A3F", // Orange
          "#FFAA22"  // Gold
        ]
      }
    }
  },
  {
    title: "Cobalt Disruptor",
    colors: {
      primary: "#3830B0", // Deeper cobalt for better contrast
      secondary: "#0595AF", // More accessible teal
      tertiary: "#7849D7", // Improved tertiary purple
      background: {
        main: "#F5F7FF",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#ECF0FF"
      },
      text: {
        primary: "#0C1220", // Darker for better contrast
        secondary: "#293548", // Better contrast
        muted: "#556070" // More readable
      },
      status: {
        success: "#059669", // Deep teal-green that complements the cobalt theme
        error: "#DC2626", // Strong red that stands out against the cobalt palette
        warning: "#D97706", // Deep amber that pairs with the cooler cobalt palette
        info: "#2563EB" // Rich blue that works with the cobalt theme
      },
      border: "#CCD4E5", // Slightly stronger for better definition
      shadow: "rgba(56, 48, 176, 0.14)",
      graph: {
        sequential: [
          "#EDF7FF", "#D0E6FF", "#A7D3FF", "#7DC0FF", 
          "#54ADFF", "#2A99FF", "#0081F1", "#0064C7"
        ],
        categorical: [
          "#3830B0", // Primary cobalt
          "#0595AF", // Secondary teal
          "#E15832", // Orange
          "#E8A716", // Gold
          "#059669", // Green (matched to status.success)
          "#7849D7", // Purple
          "#556070", // Gray
          "#0C1220"  // Near black
        ],
        diverging: [
          "#DC2626", // Red (matched to status.error)
          "#E15832", // Orange
          "#F9BCA9", // Light peach
          "#FFFFFF", // White
          "#A7D3FF", // Light blue
          "#2A99FF", // Mid blue
          "#2563EB"  // Dark blue (matched to status.info)
        ],
        accent: [
          "#3830B0", // Primary cobalt
          "#0595AF", // Teal
          "#E15832", // Orange
          "#E8A716"  // Gold
        ]
      }
    }
  },
  {
    title: "Blurple Bold",
    colors: {
      primary: "#5546E8", // Deeper blurple for better contrast
      secondary: "#0099BF", // More accessible teal
      tertiary: "#8E67D8", // Improved purple tertiary
      background: {
        main: "#F6F8FD",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EEF1FF"
      },
      text: {
        primary: "#151632", // Darker for better contrast
        secondary: "#35375C", // Better contrast
        muted: "#5C5D78" // More readable
      },
      status: {
        success: "#22C55E", // Vibrant green that pops against the blurple theme
        error: "#F43F5E", // Bright pink-red that complements the blurple palette
        warning: "#FBBF24", // Bright gold that works well with the blurple scheme
        info: "#38BDF8" // Sky blue that differentiates from the primary blurple
      },
      border: "#D8DEEF", // Slightly stronger for better definition
      shadow: "rgba(85, 70, 232, 0.12)",
      graph: {
        sequential: [
          "#EDF6FF", "#D1E4FF", "#B5D2FF", "#99C0FF", 
          "#7DADFF", "#619BFF", "#4589FF", "#2977FF"
        ],
        categorical: [
          "#5546E8", // Primary blurple
          "#0099BF", // Secondary teal
          "#E75542", // Orange/salmon
          "#F0A700", // Gold
          "#22C55E", // Green (matched to status.success)
          "#8E67D8", // Purple
          "#5C5D78", // Gray
          "#151632"  // Dark blue
        ],
        diverging: [
          "#F43F5E", // Red (matched to status.error)
          "#E75542", // Salmon
          "#F9B2A9", // Light salmon
          "#FFFFFF", // White
          "#B5D2FF", // Light blue
          "#619BFF", // Mid blue
          "#38BDF8"  // Deep blue (matched to status.info)
        ],
        accent: [
          "#5546E8", // Primary blurple
          "#0099BF", // Teal
          "#E75542", // Salmon
          "#F0A700"  // Gold
        ]
      }
    }
  }
];