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
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6"
      },
      border: "#E2E8F0",
      shadow: "rgba(98, 101, 201, 0.12)",
      graph: {
        sequential: [
          "#D8B4FE", "#C084FC", "#A855F7", "#9333EA", 
          "#7E22CE", "#6B21A8", "#581C87", "#4C1D95"
        ],
        categorical: [
          "#E879F9", "#2DD4BF", "#FB923C", "#818CF8", 
          "#F472B6", "#34D399", "#FBBF24", "#38BDF8"
        ],
        diverging: [
          "#C084FC", "#D8B4FE", "#E9D5FF", "#FFFFFF", 
          "#BAE6FD", "#7DD3FC", "#38BDF8"
        ],
        accent: ["#F0ABFC", "#2DD4BF", "#FB923C", "#818CF8"]
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
          "#FDB4D5", "#FC85BB", "#FA56A1", "#F72786", 
          "#D91170", "#B8005B", "#960047", "#740034"
        ],
        categorical: [
          "#F0ABFC", "#86EFAC", "#FDA4AF", "#93C5FD", 
          "#C4B5FD", "#6EE7B7", "#FDE68A", "#7DD3FC"
        ],
        diverging: [
          "#FDB4D5", "#FCBADE", "#FDC0E5", "#FFFFFF", 
          "#BFE9FF", "#7DD3FC", "#38BDF8"
        ],
        accent: ["#F0ABFC", "#86EFAC", "#FDA4AF", "#93C5FD"]
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
          "#FCD34D", "#FBBF24", "#F59E0B", "#D97706", 
          "#B45309", "#92400E", "#78350F", "#451A03"
        ],
        categorical: [
          "#D8B4FE", "#67E8F9", "#FDE68A", "#A5B4FC", 
          "#F9A8D4", "#6EE7B7", "#FCD34D", "#7DD3FC"
        ],
        diverging: [
          "#FCD34D", "#FDE68A", "#FEF3C7", "#FFFFFF", 
          "#DDD6FE", "#C4B5FD", "#A78BFA"
        ],
        accent: ["#D8B4FE", "#67E8F9", "#FDE68A", "#A5B4FC"]
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
          "#67E8F9", "#22D3EE", "#06B6D4", "#0891B2", 
          "#0E7490", "#155E75", "#164E63", "#083344"
        ],
        categorical: [
          "#F0ABFC", "#94A3B8", "#FDE68A", "#818CF8", 
          "#FDA4AF", "#67E8F9", "#D8B4FE", "#A5B4FC"
        ],
        diverging: [
          "#67E8F9", "#A5F3FC", "#CFFAFE", "#FFFFFF", 
          "#E9D5FF", "#D8B4FE", "#C084FC"
        ],
        accent: ["#F0ABFC", "#94A3B8", "#FDE68A", "#818CF8"]
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
          "#F472B6", "#EC4899", "#DB2777", "#BE185D", 
          "#9D174D", "#831843", "#6B1839", "#500724"
        ],
        categorical: [
          "#D8B4FE", "#94A3B8", "#FDE68A", "#A5B4FC", 
          "#F472B6", "#67E8F9", "#C4B5FD", "#7DD3FC"
        ],
        diverging: [
          "#F472B6", "#F9A8D4", "#FBCFE8", "#FFFFFF", 
          "#DDD6FE", "#C4B5FD", "#A78BFA"
        ],
        accent: ["#D8B4FE", "#94A3B8", "#FDE68A", "#A5B4FC"]
      }
    }
  }
]; 