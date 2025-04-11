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
  };
}

export const palettes: ExtendedColorPalette[] = [
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
      shadow: "rgba(107, 75, 255, 0.12)"
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
      shadow: "rgba(79, 70, 229, 0.12)"
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
      shadow: "rgba(67, 56, 202, 0.12)"
    }
  },
  {
    title: "Blurple Bold",
    colors: {
      primary: "#635BFF",
      secondary: "#38BDF8",
      tertiary: "#A78BFA",
      background: {
        main: "#F6F8FD",
        light: "#FFFFFF",
        card: "#FFFFFF",
        hover: "#EEEEFF"
      },
      text: {
        primary: "#18181B",
        secondary: "#3F3F46",
        muted: "#71717A"
      },
      status: {
        success: "#15803D",
        error: "#B91C1C",
        warning: "#B45309",
        info: "#1D4ED8"
      },
      border: "#E4E4E7",
      shadow: "rgba(99, 91, 255, 0.12)"
    }
  },
  {
    title: "Taskbase",
    colors: {
      primary: "#6265C9", // The darker purple used in ARR graph
      secondary: "#A5F4D9", // Mint green used in pipeline chart
      tertiary: "#8182D8", // Lighter purple color in the charts
      background: {
        main: "#F0F1FB", // Light lavender background 
        light: "#FFFFFF", // White background
        card: "#FFFFFF", // White card background
        hover: "#E6E7FA" // Slightly darker than main background
      },
      text: {
        primary: "#1A1A2E", // Dark text color
        secondary: "#4B4B66", // Medium text color
        muted: "#6E7191" // Light text color
      },
      status: {
        success: "#22C55E", // Standard green for success
        error: "#EF4444", // Standard red for error
        warning: "#F59E0B", // Standard amber for warning
        info: "#3B82F6" // Standard blue for info
      },
      border: "#E2E8F0", // Light gray border
      shadow: "rgba(98, 101, 201, 0.12)" // Shadow based on primary color
    }
  }
]; 