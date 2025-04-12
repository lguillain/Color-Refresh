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
      primary: "#6B4BFF",
      secondary: "#00C2D7",
      tertiary: "#9C6AE3",
      background: {
        main: "#F5F7FF",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EAEDFF"
      },
      text: {
        primary: "#1A1A2E",
        secondary: "#4B4B66",
        muted: "#6E7191"
      },
      status: {
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6"
      },
      border: "#E2E8F0",
      shadow: "rgba(107, 75, 255, 0.12)",
      graph: {
        sequential: [
          "#FFF1F0", "#FFD4CC", "#FFB8AA", "#FF9C88", 
          "#FF8066", "#FF6344", "#FF4722", "#FF2B00"
        ],
        categorical: [
          "#FF6347", "#00C2A8", "#FFB72B", "#4CC2FF", 
          "#F670DD", "#2DCE98", "#FFCC5C", "#7C8CFF"
        ],
        diverging: [
          "#FF5252", "#FF8A8A", "#FFBDBD", "#FFFFFF", 
          "#A5F3FC", "#22D3EE", "#0891B2"
        ],
        accent: ["#FF6347", "#0AB68B", "#FDBE3B", "#4CC2FF"]
      }
    }
  },
  {
    title: "Indigo Innovator",
    colors: {
      primary: "#4F46E5",
      secondary: "#06B6D4",
      tertiary: "#A855F7",
      background: {
        main: "#F8FAFC",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EEF2FF"
      },
      text: {
        primary: "#0F172A",
        secondary: "#334155",
        muted: "#64748B"
      },
      status: {
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#0EA5E9"
      },
      border: "#E2E8F0",
      shadow: "rgba(79, 70, 229, 0.12)",
      graph: {
        sequential: [
          "#FFF4E0", "#FFE4B3", "#FFD586", "#FFC559", 
          "#FFB62D", "#FFA700", "#D68E00", "#AD7400"
        ],
        categorical: [
          "#FF7043", "#26C6DA", "#FFAB00", "#5C7CFA", 
          "#FF4081", "#2DCE89", "#FFCA28", "#42A5F5"
        ],
        diverging: [
          "#FF4D4D", "#FF8080", "#FFB2B2", "#F9FAFB", 
          "#CFFAFE", "#67E8F9", "#06B6D4"
        ],
        accent: ["#FF7043", "#26C6DA", "#FFAB00", "#5C7CFA"]
      }
    }
  },
  {
    title: "Cobalt Disruptor",
    colors: {
      primary: "#4338CA",
      secondary: "#06B6D4",
      tertiary: "#8B5CF6",
      background: {
        main: "#F5F7FF",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EEF2FF"
      },
      text: {
        primary: "#111827",
        secondary: "#374151",
        muted: "#6B7280"
      },
      status: {
        success: "#059669",
        error: "#DC2626",
        warning: "#D97706",
        info: "#2563EB"
      },
      border: "#DDD6FE",
      shadow: "rgba(67, 56, 202, 0.12)",
      graph: {
        sequential: [
          "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", 
          "#FFA726", "#FF9800", "#F57C00", "#EF6C00"
        ],
        categorical: [
          "#F87171", "#4DD0E1", "#FFC107", "#7083F7", 
          "#F875AA", "#0DCAF0", "#FF9800", "#38B6FF"
        ],
        diverging: [
          "#F87171", "#FECACA", "#FEE2E2", "#F8FAFC", 
          "#DBEAFE", "#93C5FD", "#3B82F6"
        ],
        accent: ["#F87171", "#4DD0E1", "#FFC107", "#7083F7"]
      }
    }
  },
  {
    title: "Blurple Bold",
    colors: {
      primary: "#635BFF",
      secondary: "#00B8D9",
      tertiary: "#9F7AEA",
      background: {
        main: "#F6F8FD",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EEF1FF"
      },
      text: {
        primary: "#1A1B3C",
        secondary: "#4A4B6A",
        muted: "#717190"
      },
      status: {
        success: "#36B37E",
        error: "#E5484D",
        warning: "#FFAB00",
        info: "#4C9AFF"
      },
      border: "#E6E8F0",
      shadow: "rgba(99, 91, 255, 0.12)",
      graph: {
        sequential: [
          "#FFF7EB", "#FFE9C4", "#FFDB9D", "#FFCD76", 
          "#FFBF4F", "#FFB129", "#FFA302", "#EB9400"
        ],
        categorical: [
          "#FF5A5A", "#2ECBD2", "#FF9F43", "#687EFF", 
          "#FF66AA", "#33D69F", "#FFD166", "#48B0FF"
        ],
        diverging: [
          "#FF5A5A", "#FF9C9C", "#FFCECE", "#F8FAFC", 
          "#B4E4FD", "#5BC0FA", "#00A0F7"
        ],
        accent: ["#FF5A5A", "#2ECBD2", "#FF9F43", "#687EFF"]
      }
    }
  }
]; 